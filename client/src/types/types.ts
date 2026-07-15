export type FiltersState = {
  text: string;
  brand: string;
  modification: string;
  pricePeriod: "day" | "week";
  minPrice: string;
  maxPrice: string;
};

export type SearchFiltersProps = {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  initialFilters: FiltersState;
};

export type ProfilePageState = "profile" | "myOrders"| "ordersHistory"

