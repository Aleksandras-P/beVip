import * as Flags from "country-flag-icons/react/3x2"
import { useTranslationContext } from "../hooks/useTranslationContext"


export const LanguageToggle = () => {
    const {lang, toggleLang} = useTranslationContext()
    const FlagIcon = Flags[lang as keyof typeof Flags]

    return (
        <button className="languageToggleBtn" onClick={toggleLang}>
            {FlagIcon && <FlagIcon className="languageToggleBtn__flag"/>}
        </button>
    )
}