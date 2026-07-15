import { createContext, useState } from "react";
import type { AuthModalContextType, AuthMode } from "../types/authModal";

export const AuthModalContext = createContext<AuthModalContextType | null> (null);

export function AuthModalProvider({children}: {children: React.ReactNode}) {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState<AuthMode>("login");

    const openModal = (m: AuthMode) => {
        setIsOpen(true)
        setMode(m)
    };
    const closeModal = () => setIsOpen(false);
    const switchMode = (m:AuthMode) => setMode(m); 

    return (
        <AuthModalContext.Provider value={{
            isOpen, mode, openModal, closeModal, switchMode
        }}>
            {children}
        </AuthModalContext.Provider>
    )
}