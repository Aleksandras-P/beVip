export interface LoginData {
    email: string
    password: string
}

export interface RegisterData { 
    name: string
    email: string
    password: string
}

export interface User {
    _id: string
    name: string
    email: string
    balance: number
}

export interface AuthContextType {
    user: User | null
    loading: boolean

    login: (data: LoginData) => Promise<void>
    register: (data: RegisterData) => Promise<void>
    logout: () => Promise<void>
    checkAuth: () => Promise<void>
}