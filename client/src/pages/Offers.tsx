import Loader from "../components/Loader"
import OffersCarlist from "../components/OffersCarlist"
import PageTitle from "../components/PageTitle"
import { useTranslationContext } from "../hooks/useTranslationContext"

function Offers () {

    const {translationData, lang, loading} = useTranslationContext()

    return (
        <>

        {loading && (<Loader />)}

        { translationData && !loading && (
        <div className="offersPage">
            <div className="container">
                <PageTitle title={translationData.global.pageTitles.offersPage.title[lang]} keyWord={translationData.global.pageTitles.offersPage.key[lang]} />
                <OffersCarlist />
            </div>
        </div>
        )
}
        </>
    )
}

export default Offers