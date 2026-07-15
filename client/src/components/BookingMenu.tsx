import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { useCreateBooking, useBookedDates, usePriceEstimate} from "../hooks/useBookings";
import { useNavigate, useParams} from "react-router-dom";
import Loader from "./Loader";
import BookingCalendar from "./BookingCalendar";
import type { CarPricelist } from "../types/cars";
import { useAuth } from "../hooks/useAuth";
import { useTranslationContext } from "../hooks/useTranslationContext";
import { useAppData } from "../hooks/useAppData";
import { ApiError } from "../api/axios";

type BookingMenuProps = {
    pricelist: CarPricelist
}

function BookingMenu (props:BookingMenuProps) {

    const { carId } = useParams();
    const navigate = useNavigate();
    const {user} = useAuth()

    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

    const { data: bookedRanges = [], isLoading: datesLoading } = useBookedDates(carId);
    const { data: priceEstimate } = usePriceEstimate(carId, selectedRange);
    const { mutate: createBooking, isPending: bookingLoading, error } = useCreateBooking();

    const insufficientBalance = 
    !!priceEstimate && !!user && priceEstimate.totalPrice > user.balance;
    
    const {translationData, loading:translationDataLoading, lang} = useTranslationContext()
    const {data:appData, isLoading:appDataLoading} = useAppData()


    const handleSubmit = () => {

    if (!carId || !selectedRange?.from || !selectedRange?.to || insufficientBalance) return;

    createBooking(
      {
        carId,
        dateFrom: selectedRange.from.toISOString(),
        dateTo: selectedRange.to.toISOString()
      },
      {
        onSuccess: () => navigate("/profile/my-orders")
      }
    );
  };

  if (datesLoading) return <Loader />;

    return (
        <>
        { translationData && appData && !appDataLoading && !translationDataLoading && (
        <div className="bookingMenu">
          <div className="bookingMenu__calendar">
            <h2>{translationData.bookingPage.pickDates[lang]}</h2>
            <BookingCalendar
            bookedRanges={bookedRanges}
            selectedRange={selectedRange}
            onSelect={setSelectedRange}
           />
          </div>

          <div className="bookingMenu__priceCounter">

            <div className="bookingMenu__priceInfo">
              <h3>{translationData.bookingPage.dayPrice[lang]}</h3>
              <p className="bookingMenu__answer">{props.pricelist.day} {appData.global.currency}</p>
              <h3>{translationData.bookingPage.period[lang]}</h3>
              <p className="bookingMenu__answer">{priceEstimate?.days || 0} {translationData.bookingPage.days[lang]}</p>
              <h2>{translationData.bookingPage.totalPrice[lang]}</h2>
              <p className="bookingMenu__answer">{priceEstimate?.totalPrice || 0} {appData.global.currency}</p>
              {insufficientBalance && (
                <p className="error">{translationData.bookingPage.lowBalance[lang]}</p>
              )}
            </div>

            {error instanceof ApiError && <p className="errorText">{error.message}</p>}

            <button
              className="primaryBtn-filled"
              onClick={handleSubmit}
              disabled={bookingLoading || 
                !selectedRange?.from || 
                !selectedRange?.to ||
                insufficientBalance
              }
            >
              {bookingLoading ? "..." : translationData.global.buttons.confirmBooking[lang]}
            </button>
            
            </div>
            
        </div>
        )
}
    </>
    )
}

export default BookingMenu