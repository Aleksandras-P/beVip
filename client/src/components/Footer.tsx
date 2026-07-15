import { useTranslationContext } from "../hooks/useTranslationContext"
import Copyright from "./Copyright"
import FooterContacts from "./FooterContact"
import FooterNav from "./FooterNav"
import Logo from "./Logo"

function Footer () {

    const {loading: translationDataLoading} = useTranslationContext()


    return (
        <>
        { !translationDataLoading && (
            <footer className="footer">

                <Logo />

                <div className="footer__content">
                    
                    <FooterContacts />
                    <FooterNav />

                </div>

                <Copyright />

            </footer>
            )
        }
        </>
    )
}

export default Footer