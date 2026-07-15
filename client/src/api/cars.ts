const API_URL = import.meta.env.VITE_API_URL

export const getCars = async () => {
    const res = await fetch(`${API_URL}/api/cars/`)

    if (!res.ok) {
        throw new Error("fetch cars error")
    }

    return res.json()
}

export const updateAvailability = async (
    id: number,
    available: boolean
) => {
    const response = await fetch(`${API_URL}/api/cars/`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            
                id,
                available
            
            })
        }
    )

    if(!response.ok) {
        throw new Error("Update error")
    }

    return response.json()
}