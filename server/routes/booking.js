import express from "express";
import { createBooking, getMyBookings, cancelBooking , getCarBookedDates, getPriceEstimate} from "../controllers/bookingController.js";
import { requireAuth } from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", requireAuth, createBooking);
router.get("/my", requireAuth, getMyBookings);
router.patch("/:id/cancel", requireAuth, cancelBooking);
router.get("/car/:carId/dates", getCarBookedDates);
router.get("/car/:carId/price", getPriceEstimate);


export default router;