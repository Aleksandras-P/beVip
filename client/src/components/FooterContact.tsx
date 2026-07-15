import { useAppData } from "../hooks/useAppData"
import { useTranslationContext } from "../hooks/useTranslationContext"

function FooterContacts () {

    const {translationData, loading:translationDataLoading, lang } = useTranslationContext()
    const {data: appData, isLoading: appDataLoading} = useAppData()


    return (
        <>
        { !(translationDataLoading || appDataLoading) && translationData && appData && (
            <div className="footerContacts">
                    
                        <div className="companyInfo">
                            <label>{translationData.footer.contacts.labels.companyName[lang]}</label>
                            <h4>{appData.footer.contacts.companyName}</h4>
                            <label>{translationData.footer.contacts.labels.companyAdress[lang]}</label>
                            <h5>{translationData.footer.contacts.adress[lang]}</h5>
                            <label>{translationData.footer.contacts.labels.registrationNumber[lang]}</label>
                            <h5>{appData.footer.contacts.registrationNumber}</h5>
                            <label>{translationData.footer.contacts.labels.VAT[lang]}</label>
                            <h5>{appData.footer.contacts.VAT}</h5>
                        </div>
                    
                        <div className="footerContacts__companyContacts">
                            <label>{translationData.footer.contacts.labels.contactPhone[lang]}</label>
                            <p>{appData.footer.contacts.contactPhone}</p>
                            <label>{translationData.footer.contacts.labels.email[lang]}</label>
                            <p>{appData.footer.contacts.email}</p>
                            <a className="companyInformation" href={appData.footer.contacts.companyInformation}>{translationData.footer.contacts.labels.companyInformation[lang]}</a>
                        </div>
                   </div>
        )
            }
        </>
    )
}

export default FooterContacts