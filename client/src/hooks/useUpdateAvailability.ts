import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAvailability } from "../api/cars";

export const useUpdateAvailability = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            id,
            available,
        } : {
            id:number ;
            available:boolean
        
        }) => updateAvailability(id, available),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cars"]
            })
        }
    })
}