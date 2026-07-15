import { useContext } from "react";
import { TranslationContext } from "../context/TranslationsContext";

export function useTranslationContext() 
{
    
    const context = useContext(TranslationContext)

    if (!context) {
        throw new Error("UseTranslation context error....")
    }

    return context 

}