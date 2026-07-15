const API_URL = import.meta.env.VITE_API_URL

export const getAppData = async () => {
    const res = await fetch(`${API_URL}/api/pagedata/`)

    if (!res.ok) {
        throw new Error("fetch page data error")
    }

    return res.json()
}