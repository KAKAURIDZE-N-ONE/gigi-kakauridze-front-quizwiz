import useWindowWidth from "@/hooks/useWindowWidth";
import {
  updateMobileResetPasswordIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useResetPasswordPage() {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateModalIsOpen(true));
    dispatch(updateMobileResetPasswordIsOpen(true));

    return () => {
      dispatch(updateMobileResetPasswordIsOpen(false));
    };
  }, []);

  return { windowWidth };
}
