import { useAppData } from "../hooks/useAppData"
import { useTranslationContext } from "../hooks/useTranslationContext"

function AboutUsContent () {

    const {translationData, lang, loading:translationDataLoading} = useTranslationContext()
    const {data:appData, isLoading:appDataLoading} = useAppData()

    return (
        <>
        {translationData && appData && !appDataLoading && !translationDataLoading && (
            <div className="aboutUsContent">

                <div className="aboutUsContent__container">

                    <div className="aboutUsContent__img">
                        <img src={`../../src/assets/aboutUs/${appData.aboutUs.imgs.aboutCompanyImg}`} alt="aobutImg" />
                    </div>

                    <div className="aboutUsContent__text">
                        <h4>{translationData.aboutUsPage.aboutCompany[lang]}</h4>
                    </div>

                </div>

                <div className="aboutUsContent__container">

                    <div className="aboutUsContent__text">
                        <h4>{translationData.aboutUsPage.aboutCars[lang]}</h4>
                    </div>

                    <div className="aboutUsContent__img">
                        <img src={`../../src/assets/aboutUs/${appData.aboutUs.imgs.carsImg}`} alt="carsImg" />
                    </div>

                </div>

                <div className="aboutUsContent__container">

                    <div className="aboutUsContent__img">
                        <img src={`../../src/assets/aboutUs/${appData.aboutUs.imgs.modificationsImg}`} alt="brabus mansory img" />
                    </div>

                    <div className="aboutUsContent__text">
                        <h4>{translationData.aboutUsPage.aboutModifications[lang]}</h4>
                    </div>

                </div>
                        

            </div>
        )
        }
        </>
    )
}

export default AboutUsContent