import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getMyBookingsRequest, 
  createBookingRequest, 
  cancelBookingRequest,
  getCarBookedDatesRequest,
  getPriceEstimateRequest
} from "../api/bookings";

import type { DateRange } from "react-day-picker";

export function useMyBookings() {
  return useQuery({
    queryKey: ["bookings", "my"],
    queryFn: getMyBookingsRequest
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBookingRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings", "my"] });
      queryClient.invalidateQueries({ queryKey: ["auth", "profile"] });
    }
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBookingRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings", "my"] });
      queryClient.invalidateQueries({ queryKey: ["auth", "profile"] });
    }
  });
}

export function useBookedDates(carId: string | undefined) {
  return useQuery({
    queryKey: ["bookings", "car", carId, "dates"],
    queryFn: () => getCarBookedDatesRequest(carId!),
    enabled: !!carId 
  });
}

export function usePriceEstimate(carId: string | undefined, range: DateRange | undefined) {
  return useQuery({
    queryKey: ["bookings", "car", carId, "price", range?.from, range?.to],
    queryFn: () => getPriceEstimateRequest(carId!, range!.from!, range!.to!),
    enabled: !!carId && !!range?.from && !!range?.to
  });
}