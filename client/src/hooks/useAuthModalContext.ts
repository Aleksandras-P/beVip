import { useContext } from "react";
import { AuthModalContext } from "../context/AuthModalContext";

export function useAuthModalContext() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModalContext must be used within AuthModalProvider");
  }
  return context;
}