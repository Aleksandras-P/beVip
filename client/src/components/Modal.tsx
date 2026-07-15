import { useTranslationContext } from "../hooks/useTranslationContext";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {

    const {translationData, lang , loading} = useTranslationContext()

  return (
    <>
    {isOpen && translationData && !loading && (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="primaryBtn-filled" onClick={onClose}>{translationData.global.buttons.closeBtn[lang]}</button>
        {children}
      </div>
    </div>
    )
}
    </>
    

  );
}