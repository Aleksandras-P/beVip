import { useState } from "react";
import { useTranslationContext } from "../hooks/useTranslationContext";
import type { Car } from "../types/cars";
import CarAvailability from "./CarAvailability";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import ImgGallery from "./ImgGallery";
import CarTextContent from "./CarTextContent";
import { useAppData } from "../hooks/useAppData";
import iconMap from "../utils/iconMap";
import PriceDisplay from "./PriceDisplay";

type CarCardProps = {
    car: Car
}

function CarCard (props:CarCardProps) {
// 
    const {translationData, lang, loading} = useTranslationContext()
    const {data:appData, isLoading: appDataLoading} = useAppData()

    const IconBooking = iconMap[appData?.cars?.icons?.bookingIcon || ""]

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleCloseBtn = () => {
        setIsOpen(false)
    }
    return (
        <>
        { translationData && appData && !appDataLoading && !loading && (
        <div className="carCard" onClick={() => setIsOpen(true)} style={{ backgroundImage: `url(../../src/assets/cars/id_${props.car.id}/${props.car.images.postImgs.find((img) => img.key === "main")?.img})` }}>

            <CarAvailability className="carCard__availability" available={props.car.rent.available} text={props.car.rent.available ? translationData.carInfoDescriptions.available[lang] : translationData.carInfoDescriptions.unavailable[lang]} />
            
        </div>

        
        )
        }
        {isOpen && translationData && !loading && (
            <Modal isOpen={isOpen} onClose={handleCloseBtn}>

                <div className="carCard__content">

                    <div>

                        <ImgGallery car={props.car} />
                        <PriceDisplay pricelist={props.car.rent.pricelist} discount={props.car.rent.discount} />

                    </div>
                        

                    <div>

                        <CarTextContent car={props.car} />
  
                        <Link className="carCard__link" to={`/cars/${props.car.id}/booking`}>
                            {IconBooking && <IconBooking className="carCard__bookingIcon"/>} {translationData.global.buttons.rentBtn[lang]}
                        </Link>
                            
                    </div>
                        
                        
                        

                    </div>
                    
            </Modal>
                    

        )}
        </>
    )
}

export default CarCard

