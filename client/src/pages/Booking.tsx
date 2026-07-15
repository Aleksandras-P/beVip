import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useCars } from "../hooks/useCars";
import type { Car } from "../types/cars";
import ImgGallery from "../components/ImgGallery";
import CarTextContent from "../components/CarTextContent";
import { useTranslationContext } from "../hooks/useTranslationContext";
import BookingMenu from "../components/BookingMenu";

function Booking() {


  const { carId } = useParams();

  const {data: carsData, isLoading:carsDataLoading} = useCars()
  const {loading: translationDataLoading} = useTranslationContext()
  

  const car = carsData?.carList.find((c:Car) => c.id === carId)


  return (
    <>
    {(translationDataLoading || carsDataLoading) && (<Loader />)}

    {!translationDataLoading && !carsDataLoading && carsData && (
    <div className="bookingPage">

      <div className="container">

        <div className="bookingPage__content">

          <div className="bookingPage__gallery">
            <ImgGallery car={car}/>
          </div>

          <CarTextContent car={car} />

        </div>

        <BookingMenu pricelist={car.rent.pricelist}/>

      </div>


      
    </div>
  )
}
    </>
  );
}

export default Booking;