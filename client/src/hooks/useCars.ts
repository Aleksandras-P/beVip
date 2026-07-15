import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api/cars";

export const useCars = () => {
    return useQuery({
        queryKey: ["cars"],
        queryFn: getCars,
    })
}