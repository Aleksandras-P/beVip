import { useQuery } from "@tanstack/react-query";
import { getAppData } from "../api/appData";

export const useAppData = () => {
    return useQuery({
        queryKey: ["appData"],
        queryFn: getAppData,
    })
}