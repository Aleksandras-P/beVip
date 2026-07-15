import { useCars } from "../hooks/useCars"
import type { Car } from "../types/cars"
import CarCard from "./CarCard"
import PriceDisplay from "./PriceDisplay"

function OffersCarlist () {

    const {data:carsData, isLoading: carsDataLoading} = useCars()


    return (
        <>
        { carsData && !carsDataLoading && (
            <div className="offersCarlist">
                {carsData.carList.filter((c:Car) => c.rent.discount.active).map((car:Car) => (

                    <div key={car.id} className="offersCarlist__card">
                        <CarCard car={car} />
                        <PriceDisplay pricelist={car.rent.pricelist} discount={car.rent.discount} />
                    </div>
                ))}
            </div>
        )}
        </>
    )
}

export default OffersCarlist