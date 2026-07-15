import { useTranslationContext } from "../hooks/useTranslationContext"
import CardList from "../components/CardList"
import Header from "../components/Header"
import Loader from "../components/Loader"
import { useCars } from "../hooks/useCars"
import type { Car } from "../types/cars"



function Home () {

    const {translationData, lang, loading:translationDataLoading} = useTranslationContext()
    const {data:carsData} = useCars()

    return (
        <>
        {translationDataLoading && (<Loader />)}

        {!translationDataLoading && carsData && translationData && (
        <div className="homepage">

            <Header />

            <div className="container">
                <CardList title={translationData.homepage.offersContainer.title[lang]}
                 undertext={translationData.homepage.offersContainer.description[lang]} 
                 carList={carsData.carList.filter((car:Car) => !car.onAd)}
                 />
            </div>
        </div>
        )}

        
    </>
    )
}

export default Home