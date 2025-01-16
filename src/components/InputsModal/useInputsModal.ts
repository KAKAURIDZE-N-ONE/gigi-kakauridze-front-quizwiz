import {
  updateModalIsOpen,
  updateModalOpacity,
} from "@/store/slices/modalSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useInputsModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBgClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (modalRef.current) {
      console.log("click");
      modalRef.current.style.transform = "translateY(100%)";
      dispatch(updateModalOpacity(0));
      setTimeout(() => {
        dispatch(updateModalIsOpen(false));
        navigate("/");
      }, 400);
    }
  }

  return { handleBgClick, modalRef };
}
