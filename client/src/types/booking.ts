import type { Car } from "./cars";

export type Booking = {
  _id: string;
  user: string;
  car: Car | null 
  dateFrom: string;
  dateTo: string;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
};

export type BookedRange = {
  from: string;
  to: string;
};

export type CreateBookingData = {
  carId: string;
  dateFrom: string;
  dateTo: string;
};