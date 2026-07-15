import { useState, useEffect } from "react";
import { getCarBookedDatesRequest } from "../api/bookings";
import type { BookedRange } from "../types/booking";

export function useBookedDates(carId: string | undefined) {
  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!carId) return;

    setIsLoading(true);
    getCarBookedDatesRequest(carId)
      .then(setBookedRanges)
      .finally(() => setIsLoading(false));
  }, [carId]);

  return { bookedRanges, isLoading };
}