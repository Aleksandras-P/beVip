import Booking from "../models/bookingModel.js";
import Car from "../models/carsModel.js";
import User from "../models/User.js"
import { calcTotalPrice } from "../utils/priceCalculator.js";
import { createBookingSchema } from "../validators/bookingSchema.js";

async function findCarById(carId) {
  const doc = await Car.findOne({ "carList.id": String(carId) });
  if (!doc) return null;
  return doc.carList?.find((car) => car.id === String(carId));
}

export async function createBooking(req, res) {
  const result = createBookingSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const { carId, dateFrom, dateTo } = result.data;
  const userId = req.user.id;

  const car = await findCarById(carId);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  const {totalPrice} = calcTotalPrice(dateFrom, dateTo, car.rent.pricelist);

  const user = await User.findById(userId);
  if (!user || user.balance < totalPrice) {
    return res.status(402).json({ message: "Insufficient balance" });
  }

  const overlapping = await Booking.findOne({
    carId,
    status: { $in: ["pending", "confirmed"] },
    dateFrom: { $lt: new Date(dateTo) },
    dateTo: { $gt: new Date(dateFrom) }
  });

  if (overlapping) {
    return res.status(409).json({ message: "Car is already booked for these dates" });
  }

  user.balance -= totalPrice;
  await user.save();

  const booking = await Booking.create({
    user: userId,
    carId,
    dateFrom,
    dateTo,
    totalPrice,
    status: "confirmed"
  });

  res.status(201).json(booking);
}

export async function getPriceEstimate(req, res) {
  const { carId } = req.params;
  const { dateFrom, dateTo } = req.query;

  const car = await findCarById(carId);
  if (!car) return res.status(404).json({ message: "Car not found" });

  const { days, totalPrice } = calcTotalPrice(dateFrom, dateTo, car.rent.pricelist);
  res.json({ days, totalPrice });
}

export async function getMyBookings(req, res) {
  const bookings = await Booking.find({ user: req.user.id }).sort({ createdAt: -1 });


  const doc = await Car.findOne(); 
  const enriched = bookings.map((booking) => {
    const car = doc?.carList.find((c) => c.id === booking.carId);
    return { ...booking.toObject(), car: car ?? null  };
  });

  res.json(enriched);
}

export async function cancelBooking(req, res) {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  if (booking.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not your booking" });
  }
  booking.status = "cancelled";
  await booking.save();

  const user = await User.findById(booking.user);
  if (user) {
    user.balance += booking.totalPrice;
    await user.save();
  }

  res.json(booking);
}

export async function getCarBookedDates(req, res) {
  const { carId } = req.params;
  const bookings = await Booking.find({
    carId,
    status: { $in: ["pending", "confirmed"] }
  }).select("dateFrom dateTo");

  res.json(bookings.map((booking) => ({ from: booking.dateFrom, to: booking.dateTo })));
}