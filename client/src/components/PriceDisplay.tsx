import { useAppData } from "../hooks/useAppData"
import { useTranslationContext } from "../hooks/useTranslationContext"
import type { CarPricelist, CarDiscount } from "../types/cars"
import iconMap from "../utils/iconMap"

type PriceDisplayProps = {
    pricelist: CarPricelist
    discount: CarDiscount
}

function PriceDisplay (props:PriceDisplayProps) {

    const {translationData, lang, loading: translationDataLoading} = useTranslationContext()
    const {data: appData, isLoading: appDataLoading} = useAppData()

    const IconDiscount = iconMap[appData.global.discountIcon]

    const pricelist = props.pricelist
    const discount = props.discount

    const calcDiscountPrice = (price:number, discount:number) => {

        return price - (price * discount / 100)

    }

    return (
        <>

        { translationData && appData && !appDataLoading && !translationDataLoading && (
            <div className="priceDisplay">
                <h3 className="priceDisplay__title">{translationData.carInfoDescriptions.price[lang]}</h3>
                <div className={`priceDisplay__pricelist ${discount.active ? "priceDisplay__pricelist-discount" : ""}`}>
                    <div className="priceDisplay__priceContainer">
                        <h4 className="priceDisplay__description">{translationData.carInfoDescriptions.day[lang]}</h4>
                        <div className="priceDisplay__priceBox">
                            <p className={discount.active? "priceDisplay__discountPrice" : "priceDisplay__price"}>
                                {discount.active? calcDiscountPrice(pricelist.day, discount.ammount) : pricelist.day} {appData.global.currency}
                            </p>
                            {discount.active && (
                                <p className="priceDisplay__priceBefore">
                                    {pricelist.day} {appData.global.currency}
                                </p>
                            )}
                        </div>
                        
                    </div>

                    <div className="priceDisplay__priceContainer">
                        <h4 className="priceDisplay__description">{translationData.carInfoDescriptions.week[lang]}</h4>
                        <div className="priceDisplay__priceBox">
                            <p className={discount.active? "priceDisplay__discountPrice" : "priceDisplay__price"}>
                                {discount.active? calcDiscountPrice(pricelist.week, discount.ammount) : pricelist.week} {appData.global.currency}
                            </p>
                            {discount.active && (
                                <p className="priceDisplay__priceBefore">
                                    {pricelist.week} {appData.global.currency}
                                </p>
                            )}
                        </div>
                        
                    </div>
                </div>

                {discount.active && (
                    <div className="priceDisplay__discountContainer">
                        
                        <h1>- {discount.ammount} {IconDiscount && <IconDiscount />}</h1>
                        
                    </div>
                )}

            </div>
        )
        

    }
        </>
    )
}

export default PriceDisplay