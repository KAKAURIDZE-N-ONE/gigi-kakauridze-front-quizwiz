import React, { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import {
  updateModalIsOpen,
  updateModalOpacity,
} from "@/state/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  children: ReactNode;
};

const InputsModal: React.FC<ModalProps> = ({ children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBgClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (modalRef.current) {
      modalRef.current.style.transform = "translateY(100%)";
      dispatch(updateModalOpacity(0));
      setTimeout(() => {
        dispatch(updateModalIsOpen(false));
        navigate("/");
      }, 400);
    }
  }

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
