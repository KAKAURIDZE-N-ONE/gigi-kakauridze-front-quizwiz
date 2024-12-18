import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { getModalOpacity, updateModalIsOpen } from "@/state/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

type ModalProps = {
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalOpacity = useSelector(getModalOpacity);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {createPortal(
        <div
          className={`fixed top-0 left-0 w-full h-full
        z-50 opacityAnime opacity-${modalOpacity} transition-all 
        duration-[400ms]`}
          style={{
            backdropFilter: `blur(6px)`,
          }}
        >
          <div className="relative">
            <div
              className="fixed
              w-full h-full
              bg-[#1018284D]
              z-10 flex items-center
              justify-center
            "
              onClick={() => dispatch(updateModalIsOpen(false))}
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

export default Modal;
