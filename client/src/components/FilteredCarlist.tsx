import { useState } from "react";
import { useCars } from "../hooks/useCars";
import type { FiltersState } from "../types/types";
import type { Car } from "../types/cars";
import SearchFilters from "./SearchFilters";
import CardList from "./CardList";
import { useAppData } from "../hooks/useAppData";
import iconMap from "../utils/iconMap";
import { useTranslationContext } from "../hooks/useTranslationContext";

const initialFilters: FiltersState = {
  text: "",
  brand: "",
  modification: "",
  pricePeriod: "day",
  minPrice: "",
  maxPrice: "",
}

function FilteredCarlist () {
    
    const {data: carsData, isLoading:carsDataLoading} = useCars()
    const {data: appData, isLoading: appDataLoading} = useAppData()
    const {translationData, lang, loading:translationDataLoading} = useTranslationContext()

    const IconLoadMore = iconMap[appData?.cars?.icons?.loadMoreIcon || ""]

    const [filters,setFilters] = useState<FiltersState>(initialFilters)
    const [visibleCount, setVisibleCount] = useState(6)

    const filteredCars = (carsData?.carList ?? []).filter((car:Car) => {
        
        const matchesKeyWord =
        filters.text.trim() === "" || 
        car.about.title.toLowerCase().includes(filters.text.toLowerCase()) ||
        car.about.model.toLowerCase().includes(filters.text.toLowerCase()) ||
        car.about.modification.toLowerCase().includes(filters.text.toLowerCase());

        const matchesBrand = filters.brand === "" || car.about.title === filters.brand;

        const matchesModification =
        filters.modification === "" || car.about.modification === filters.modification;

        const rentPrice = car.rent?.pricelist?.[filters.pricePeriod] ?? 0;
        const min = filters.minPrice ? Number(filters.minPrice) : 0;
        const max = filters.maxPrice ? Number(filters.maxPrice) : Infinity;
        const matchesPrice = rentPrice >= min && rentPrice <= max;

        return matchesKeyWord && matchesBrand && matchesModification && matchesPrice;


    })

    const visibleCars = filteredCars.slice(0, visibleCount)
    const hasMore = visibleCount < filteredCars.length

    const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 3)
    } 
        return (
    <>
      
      { !carsDataLoading && !appDataLoading && !translationDataLoading && translationData && carsData && appData && (
        <div className="filteredCarlist">
          <SearchFilters initialFilters={initialFilters} filters={filters} setFilters={setFilters} />
          <div>
            <CardList title="" undertext="" carList={visibleCars} />

            {hasMore && (
              <div className="filteredCarlist__loadBtn" onClick={handleLoadMore}>
                <div>{translationData.global.loadMore[lang]}</div>
                <div>{IconLoadMore && <IconLoadMore />}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FilteredCarlist;