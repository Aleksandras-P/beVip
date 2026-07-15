import { useMyBookings } from "../hooks/useBookings";
import HistoryCard from "./HistoryCard";
import Loader from "./Loader";

function OrdersHistory() {
  const { data: bookings = [], isLoading } = useMyBookings();

  const pastBookings = bookings.filter(
    (booking) => booking.status === "completed" || booking.status === "cancelled"
  );

  if (isLoading) return <Loader />

  if (pastBookings.length === 0) return <p>No past orders yet</p>;

  return (
    <div className="ordersHistory">

      {pastBookings.map((booking) => (
        <HistoryCard booking={booking} />
      ))}

    </div>
  );
}

export default OrdersHistory;