import { getModalOpacity } from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function useModal() {
  const modalOpacity = useSelector(getModalOpacity);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return { modalOpacity, dispatch };
}
