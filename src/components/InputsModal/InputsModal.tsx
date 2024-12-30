import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import useInputsModal from "./useInputsModal";

type ModalProps = {
  children: ReactNode;
};

const InputsModal: React.FC<ModalProps> = ({ children }) => {
  const { handleBgClick, modalRef } = useInputsModal();
  return (
    <>
      {createPortal(
        <div
          onClick={handleBgClick}
          className="fixed w-full top-0 left-0 h-full z-[200] "
        >
          <div className="relative">
            <div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              className="fixed left-0 w-full z-[200] 
            slideUpModal bottom-0 rounded-t-[1.75rem]
            bg-white px-[1.1875rem] overflow-scroll
             transition-all duration-[400ms]"
            >
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default InputsModal;
