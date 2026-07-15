import { Modal } from "../Modal";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useAuthModalContext } from "../../hooks/useAuthModalContext";

export function AuthModal() {
  const { isOpen, mode, closeModal, switchMode } = useAuthModalContext();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {mode === "login" ? (
        <LoginForm onSwitch={() => switchMode("register")} onSuccess={closeModal} />
      ) : (
        <RegisterForm onSwitch={() => switchMode("login")} onSuccess={closeModal} />
      )}
    </Modal>
  );
}