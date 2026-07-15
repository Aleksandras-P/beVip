import { createContext, useEffect, useState } from "react";
import { loginRequest,
         logoutRequest,
         profileRequest,
         registerRequest
 } from "../api/auth";

 import type { AuthContextType,
          LoginData,
          RegisterData,
          User
  } from "../types/auth";
import { ApiError } from "../api/axios";

  export const AuthContext = createContext<AuthContextType | null>(null)

  export function AuthProvider ({ children }:{children:React.ReactNode}) {
    
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const login = async (data:LoginData) => {
        const user = await loginRequest(data)

        setUser(user)
    }

    const register = async (data:RegisterData) => {
        const user = await registerRequest(data)

        setUser(user)
    }

    const logout = async () => {
        await logoutRequest()

        setUser(null)
    }

    const checkAuth = async () => {
        try {
            const user = await profileRequest();

            setUser(user)
        } catch (error) {
            if (!(error instanceof ApiError && error.status === 401)) {
            console.error("Authorization error", error);
    }
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkAuth()
    },[])

    return (
        <AuthContext.Provider

        value={{

            user,
            loading,
            login,
            register,
            logout,
            checkAuth

        }} 
        >

            {children}

        </AuthContext.Provider>
    )
  }