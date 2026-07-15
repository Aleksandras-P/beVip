import { useState, useEffect } from "react";
import api from "../api/axios";
import type { DateRange } from "react-day-picker";

export function usePriceEstimate(carId: string | undefined, range: DateRange | undefined) {
  const [price, setPrice] = useState<{ days: number; totalPrice: number } | null>(null);

  useEffect(() => {
    if (!carId || !range?.from || !range?.to) {
      setPrice(null);
      return;
    }

    api.get(`/api/bookings/car/${carId}/price`, {
      params: {
        dateFrom: range.from.toISOString(),
        dateTo: range.to.toISOString()
      }
    }).then((res) => setPrice(res.data));
  }, [carId, range?.from, range?.to]);

  return price;
}