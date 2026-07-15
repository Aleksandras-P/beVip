import { useEffect, useState } from "react";
import { getMyBookingsRequest, cancelBookingRequest } from "../api/bookings";
import type { Booking } from "../types/booking";

function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyBookingsRequest()
      .then(setBookings)
      .finally(() => setIsLoading(false));
  }, []);

  const handleCancel = async (id: string) => {
    const updated = await cancelBookingRequest(id);
    setBookings((prev) => prev.map((b) => (b._id === id ? updated : b)));
  };

  if (isLoading) return <p>Loading...</p>;

  if (bookings.length === 0) return <p>You have no bookings yet</p>;

  return (
    <div className="myBookings">
      {bookings.map((booking) => (
        <div key={booking._id} className="bookingCard">
          <p>From: {new Date(booking.dateFrom).toLocaleDateString()}</p>
          <p>To: {new Date(booking.dateTo).toLocaleDateString()}</p>
          <p>Total: €{booking.totalPrice}</p>
          <p>Status: {booking.status}</p>

          {(booking.status === "pending" || booking.status === "confirmed") && (
            <button className="secondaryBtn" onClick={() => handleCancel(booking._id)}>
              Cancel booking
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyBookings;