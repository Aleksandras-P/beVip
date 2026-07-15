export type AuthMode = "login" | "register";

export interface AuthModalContextType  {
  isOpen: boolean;
  mode: AuthMode;
  openModal: (mode: AuthMode) => void;
  closeModal: () => void;
  switchMode: (mode: AuthMode) => void;
};
