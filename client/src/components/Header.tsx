import { useAppData } from "../hooks/useAppData"
import { useTranslationContext } from "../hooks/useTranslationContext"
import AdsContainer from "./AdsContainer"

function Header () {

    const {translationData, loading: translationDataLoading, lang} = useTranslationContext()
    const {data: appData} = useAppData()

    return (
    <>
    {!translationDataLoading && translationData && appData && (
        <header className="header">
                <div className="header__content-box" style={{ backgroundImage: `url(../../src/assets/backgrounds/${appData.home.imgs.discountCardBg})` }}>
                    <h1>{translationData.homepage.header.heading[lang]}</h1>
                    <p>{translationData.homepage.header.subheading[lang]}</p>
                    <button className="secondaryBtn-filled header__discountBtn">{translationData.homepage.header.btnText[lang]}</button>
                </div>

                <div className="header__adsContainer">
                    <AdsContainer />
                </div>
                
    </header>
    )
    }
    </>
)
}
export default Header