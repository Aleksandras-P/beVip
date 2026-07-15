import api from "./axios";
import type { LoginData, RegisterData, User } from "../types/auth";

export const loginRequest = async (
    data:LoginData
) : Promise<User> => {
    const response = await api.post("api/auth/login", data)
    return response.data
}

export const registerRequest = async (
    data:RegisterData
) : Promise<User> => {
    const response = await api.post("api/auth/register", data)
    return response.data
}

export const logoutRequest = async () => {
    await api.post("/api/auth/logout")
}

export const profileRequest = async ():Promise<User> => {
    const response = await api.get("api/auth/profile")
    return response.data
}