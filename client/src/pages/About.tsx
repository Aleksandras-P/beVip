import AboutUsContent from "../components/AboutUsContent"
import Loader from "../components/Loader"
import PageTitle from "../components/PageTitle"
import { useTranslationContext } from "../hooks/useTranslationContext"

function About () {

    const {translationData, lang, loading} = useTranslationContext()


    return (
        <>
        {loading && (<Loader />)}

        {translationData && !loading && (
            <div className="aboutUsPage">
                <div className="container">
                    <PageTitle title={translationData.global.pageTitles.aboutUsPage.title[lang]} keyWord={translationData.global.pageTitles.aboutUsPage.key[lang]} />

                    <AboutUsContent />
                </div>
            </div>
        )

        }
        </>
    )
}

export default About