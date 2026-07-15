import { useTranslationContext } from "../hooks/useTranslationContext";
import type { Car } from "../types/cars";

type CarTextContentProps = {
    car: Car
} 

function CarTextContent (props:CarTextContentProps) {

    const {translationData, loading, lang} = useTranslationContext()

    return (
        <>
        {translationData && !loading && (
        <div className="carTextContent">
            <h2>{translationData.carInfoDescriptions.brand[lang]}: <span className="carTextContent__span">{props.car.about.title}</span></h2>
            <h3>{translationData.carInfoDescriptions.model[lang]}: <span className="carTextContent__span">{props.car.about.model}</span></h3>
            <h3>{translationData.carInfoDescriptions.modification[lang]}: <span className={`carTextContent__span carTextContent--${props.car.about.modification.toLowerCase()}`}>{props.car.about.modification}</span></h3>
            <h3>{translationData.carInfoDescriptions.engine[lang]}: <span className="carTextContent__span">{props.car.about.engine}</span></h3>
            <p>{translationData.carInfoDescriptions.description[lang]}:<span className="carTextContent__span descriptionSpan">{translationData.cars.find((c) => c.id === props.car.id)?.description[lang]}</span></p>
         </div>
        )
    }
        </>
    
    )
}
export default CarTextContent