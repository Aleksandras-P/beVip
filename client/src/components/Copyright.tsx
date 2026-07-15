import { useTranslationContext } from "../hooks/useTranslationContext"

function Copyright () {

    const {translationData, loading, lang} = useTranslationContext()

    return (
        <>
        {!loading && translationData && lang && (
           <div className="copyright">{translationData.footer.copyright[lang]}</div> 
        )}
        
        </>
    )
}

export default Copyright