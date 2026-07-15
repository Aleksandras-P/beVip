import { z } from "zod";

export const createBookingSchema = z.object({
  carId: z.string().min(1, "Car id is required"),
  dateFrom: z.string().min(1, "Start date is required"),
  dateTo: z.string().min(1, "End date is required"),
}).refine((data) => new Date(data.dateFrom) < new Date(data.dateTo), {
  message: "dateFrom must be earlier than dateTo",
  path: ["dateTo"]
});