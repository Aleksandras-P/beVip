import { useEffect, useState } from "react";
import { useTranslationContext } from "../hooks/useTranslationContext";
import { useCars } from "../hooks/useCars";
import type { Car } from "../types/cars";
import CarAvailability from "./CarAvailability";
import { Link } from "react-router-dom";

function AdsContainer () {

const {data: carsData, isLoading} = useCars()

const {translationData, lang} = useTranslationContext()


const [currentSlide, setCurrentSlide] = useState<number>(0)

useEffect(() => {
    if(!carsData?.carList.length) return

    const interval = setInterval(() => {
        setCurrentSlide((prev) => 
            prev === carsData.carList.filter((car:Car) => car.onAd ? car : "").length - 1 ? 0 : prev +1
        )
    }, 4000);
    return () => clearInterval(interval)
}, [carsData])

return (
    <>
    {isLoading && ( <p>Kraunama...</p> )}
    {carsData && translationData && !isLoading && (
        <div className="adsContainer">
            <div className="adsContainer__track"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                }}>
                {carsData.carList.map((car:Car) => {

                if (car.onAd) return (
                
                <div key={car.id} className="adsContainer__adCard">
                    <h1 className="adsContainer__adText">{translationData.cars.find((c) => c.id === car.id)?.adContent[lang]}</h1>
                    <div className="adsContainer__content-box">
                        <img className="adsContainer__img" src={`../../src/assets/cars/id_${car.id}/${car.images.adImg}`} alt="" />

                        <div className="adsContainer__content">
                            <h3><span className="descriptions-span">{translationData.carInfoDescriptions.brand[lang]}:</span> {car.about.title}</h3>
                            <h4><span className="descriptions-span">{translationData.carInfoDescriptions.model[lang]}:</span> {car.about.model}</h4>
                            <h4><span className="descriptions-span">{translationData.carInfoDescriptions.modification[lang]}:</span> {car.about.modification}</h4>
                            <h4><span className="descriptions-span">{translationData.carInfoDescriptions.engine[lang]}:</span> {car.about.engine}</h4>
                            <CarAvailability className="" available={car.rent.available} text={car.rent.available? translationData.carInfoDescriptions.available[lang] : translationData.carInfoDescriptions.unavailable[lang]} />
                         </div>
                    </div>
                    
                    <div className="adsContainer__btns">
                        <button className="secondaryBtn"><Link className="firstLink" to={`/cars/${car.id}/booking`} >{translationData?.global.buttons.rentNowBtn[lang]}</Link></button>
                        <button className="primaryBtn-filled"><Link className="secondLink" to={`/cars`} >{translationData?.global.buttons.allCarsBtn[lang]}</Link></button>
                    </div>
                </div>
                )
})}
            </div>
        </div>
    )}
    </>
)

}

export default AdsContainer