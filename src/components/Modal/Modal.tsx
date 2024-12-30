import React from "react";
import { createPortal } from "react-dom";
import { PropsType } from "./types";
import useModal from "./useModal";
import { updateModalIsOpen } from "@/store/slices/modalSlice";

const Modal: React.FC<PropsType> = ({ children }) => {
  const { modalOpacity, dispatch } = useModal();
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
