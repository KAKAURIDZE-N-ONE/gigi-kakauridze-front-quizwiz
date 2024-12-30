import useWindowWidth from "@/hooks/useWindowWidth";
import {
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useLoginPage() {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < 1280) {
      dispatch(updateModalIsOpen(true));
      dispatch(updateMobileSignInIsOpen(true));
      dispatch(updateMobileSignUpIsOpen(false));
    } else {
      dispatch(updateModalIsOpen(false));
    }
  }, [windowWidth]);

  return { windowWidth };
}
