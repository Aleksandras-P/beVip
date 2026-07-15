import { useTranslationContext } from "../hooks/useTranslationContext"
import { Link } from "react-router-dom"

type NavbarLinksProps = {
    className: string
    onLinkClick?: () => void
}

function NavbarLinks (props: NavbarLinksProps) {

    const {translationData, loading, lang} = useTranslationContext()

    const baseClassName = props.className.split(" ")[0]

    return (
        <>
        {!loading && translationData && (
        <div className={props.className}>
                {translationData.nav.navLinks.map((navLink) => (

                    <Link onClick={props.onLinkClick} key={navLink.key} to={navLink.key === "home" ? "/" : `${navLink.key}`} >
                        <div className={`${baseClassName}__link`}>
                            {navLink.langs[lang]}
                        </div>
                    </Link>
                ))}
        </div>
        )
        }
        </>
    )
}
export default NavbarLinks