import { useState } from "react"
import { useTranslationContext } from "../hooks/useTranslationContext"
import { useAppData } from "../hooks/useAppData"
import CustomSelect from "./CustomSelect"
import iconMap from "../utils/iconMap"
import type { FiltersState, SearchFiltersProps } from "../types/types"

function SearchFilters ({ filters, setFilters, initialFilters }: SearchFiltersProps) {
    const {translationData, loading: translationDataLoading, lang} = useTranslationContext()
    const {data: appData, isLoading: appDataLoading} = useAppData()

    const IconSearchFilters = iconMap[appData?.searchFilters?.icons?.searchFilters || ""]
  

    
    const [filtersOpen, setFiltersOpen] = useState<boolean>(false)
    const [byPriceOpen, setByPriceOpen] = useState<boolean>(false)

    const updateFilter = (key: keyof FiltersState, value: string) => {
        setFilters((prev) => ({...prev, [key]: value }))
    }

    const handleClearFilters = () => {
        setFilters(initialFilters)
    }

    return (
        <>
        {translationData&& appData && (!translationDataLoading && !appDataLoading) && (
            <div className="searchFilters">
                {!filtersOpen && (
                    <div className="searchFilters__openCloseBtn" onClick={() => setFiltersOpen(true)}>{IconSearchFilters && <IconSearchFilters />} {translationData.searchFilters.openFilters[lang]}</div>
                )}
                {filtersOpen && (
                <div className="searchFilters__container">
                <form className="searchFilters__menu">
                    <input
                    className="searchFilters__input" 
                    type="text" 
                    placeholder={translationData.searchFilters.filters.byInput[lang]} 
                    value={filters.text} 
                    onChange={(event) =>  updateFilter("text", event.target.value)}
                    />
                    <CustomSelect
                    className="searchFilters__select"
                    value={filters.brand}
                    onChange={(event) =>  updateFilter("brand", event.target.value)}
                    >
                        <option value="" hidden>{translationData.searchFilters.filters.byBrand[lang]}</option>
                        {appData.searchFilters.categories.brandCategories.map((category:string) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </CustomSelect>
                    <CustomSelect
                    className="searchFilters__select"
                    value={filters.modification}
                    onChange={(event) =>  updateFilter("modification", event.target.value)}
                    >
                        <option value="" hidden>{translationData.searchFilters.filters.byModification[lang]}</option>
                        {appData.searchFilters.categories.modificationCategories.map((category:string) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </CustomSelect>
                    <div className="searchFilters__byPrice-container">
                        <span onClick={() => setByPriceOpen((prev) => !prev)}>{!byPriceOpen ? translationData.searchFilters.filters.byPrice.title[lang] : translationData.global.buttons.closeBtn[lang]}</span>
                        { byPriceOpen && (

                        <div  className="searchFilters__byPrice">
                        <CustomSelect
                        className="searchFilters__select"
                        value={filters.pricePeriod}
                        onChange={(event) =>  updateFilter("pricePeriod", event.target.value)}
                        >
                            <option value="day">{translationData.searchFilters.filters.byPrice.options.day[lang]}</option>
                            <option value="week">{translationData.searchFilters.filters.byPrice.options.week[lang]}</option>
                        </CustomSelect>
                        <input
                        className="searchFilters__input" 
                        type="number"
                        placeholder={translationData.searchFilters.filters.byPrice.options.minPrice[lang]}
                        value={filters.minPrice}
                        onChange={(event) =>  updateFilter("minPrice", event.target.value)}
                        />
                        <input
                        className="searchFilters__input"
                        type="number" 
                        placeholder={translationData.searchFilters.filters.byPrice.options.maxPrice[lang]}
                        value={filters.maxPrice}
                        onChange={(event) =>  updateFilter("maxPrice", event.target.value)}
                        />
                        </div>

                        )    
                    }
                    </div>
                    
                    

                    <button className="secondaryBtn" type="button" onClick={() => handleClearFilters()}>{translationData.searchFilters.cleanFilters[lang]}</button>
                </form>
                <div className="searchFilters__openCloseBtn" onClick={() => setFiltersOpen(false)}>{translationData.searchFilters.closeFilters[lang]}</div>
                </div>
                )
                }
            </div>
        )
        }
        </>
    )
}

export default SearchFilters