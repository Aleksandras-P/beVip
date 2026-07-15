import api from "./axios";
import type { Booking, CreateBookingData, BookedRange } from "../types/booking";

export const createBookingRequest = async (data: CreateBookingData): Promise<Booking> => {
  const response = await api.post("/api/bookings", data);
  return response.data;
};

export const getMyBookingsRequest = async (): Promise<Booking[]> => {
  const response = await api.get("/api/bookings/my");
  return response.data;
};

export const cancelBookingRequest = async (id: string): Promise<Booking> => {
  const response = await api.patch(`/api/bookings/${id}/cancel`);
  return response.data;
};

export const getCarBookedDatesRequest = async (carId: string): Promise<BookedRange[]> => {
  const response = await api.get(`/api/bookings/car/${carId}/dates`);
  return response.data;
};

export const getPriceEstimateRequest = async (
  carId: string, 
  dateFrom: Date, 
  dateTo: Date
): Promise<{ days: number; totalPrice: number }> => {
  const response = await api.get(`/api/bookings/car/${carId}/price`, {
    params: {
      dateFrom: dateFrom.toISOString(),
      dateTo: dateTo.toISOString()
    }
  });
  return response.data;
};