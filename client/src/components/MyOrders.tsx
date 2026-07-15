import { useAppData } from "../hooks/useAppData";
import { useMyBookings } from "../hooks/useBookings";
import { useTranslationContext } from "../hooks/useTranslationContext";
import Loader from "./Loader";
import OrderCard from "./OrderCard";

function MyOrders() {
  const { data: bookings = [], isLoading:bookingsLoading } = useMyBookings();
  const {data:appData, isLoading:appDataLoading} = useAppData();
  const {translationData, loading:translationDataLoading} = useTranslationContext()

  const activeBookings = bookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed"
  );

  if (bookingsLoading) return <Loader />

  if (activeBookings.length === 0) return <p>You have no active bookings</p>;

  return (

    <>
    {appData  && translationData && !translationDataLoading && !appDataLoading && (
    <div className="myOrders">

      {activeBookings.map((booking) => (
        <OrderCard key={booking._id} booking={booking} />
      ))}
    </div>
    )}
    </>
    
  );
}

export default MyOrders;