import { useTranslationContext } from "../hooks/useTranslationContext"
import Loader from "../components/Loader"
import FilteredCarlist from "../components/FilteredCarlist"
import PageTitle from "../components/PageTitle"

function Cars () {

const { loading, translationData, lang } = useTranslationContext()

    return (
        <>
        {loading && (<Loader />)}
        
        {!loading && translationData && (
        <div className="carsPage">
        <div className="container">
            <PageTitle title={translationData.global.pageTitles.carsPage.title[lang]} keyWord={translationData.global.pageTitles.carsPage.key[lang]} />
            <FilteredCarlist />
        </div>
        </div>
        
            
        )}
        
        </>
    )
}

export default Cars