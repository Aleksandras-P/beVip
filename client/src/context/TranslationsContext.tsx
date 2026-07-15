import useFetch from "../hooks/useFetch";
import { createContext, useState, useEffect } from "react";
import type { TranslationData } from "../types/translations";


export interface TranslationContextType {
  lang: 'GB' | 'LT'
  loading: boolean
  translationData: TranslationData | null
  toggleLang: () => void
}

export const TranslationContext = createContext<TranslationContextType | null>(null);


export function TranslationProvider({ children }: {children: React.ReactNode}) {

  const API_URL = import.meta.env.VITE_API_URL;

  const [lang, setLang] = useState(() => {
    return (localStorage.getItem("lang") as "GB" | "LT") || "GB";
  });

  const [translationData, setTranslationData] = useState<TranslationData | null>(null)

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const {data, loading ,makeApiCall} = useFetch()

  useEffect(() => {
    makeApiCall(`${API_URL}/api/translations`)
  },[])

  useEffect(() => {
    if (data) {
      setTranslationData(data)
    }
  }, [data])


  const toggleLang = () => {
    setLang((prev) => (prev === "GB" ? "LT" : "GB"));
  };

  return (
    <TranslationContext.Provider value={{ lang, loading, translationData, toggleLang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export default TranslationProvider