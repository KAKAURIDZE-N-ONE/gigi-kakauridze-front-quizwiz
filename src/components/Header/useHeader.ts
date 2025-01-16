import { useAuthentication } from "@/hooks/useAuthentication";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import {
  getModalIsOpen,
  updateMobileForgotPasswordIsOpen,
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
  updateModalOpacity,
} from "@/store/slices/modalSlice";
import { getQuizIsStarted } from "@/store/slices/quizSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useHeader() {
  const modalIsOpen = useSelector(getModalIsOpen);
  const quizIsStarted = useSelector(getQuizIsStarted);
  const [headerInput, setHeaderInput] = useState<string>(
    useGetQueryParams("search")[0]
  );

  const { isAuthenticated } = useAuthentication();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customUpdateQueryParams = useCustomUpdateQueryParams();

  useEffect(() => {
    if (headerInput) {
      customUpdateQueryParams("search", headerInput, "add", true);
    } else {
      customUpdateQueryParams("search", "", "clear-field");
    }
  }, [headerInput]);

  function handleMenuClick() {
    dispatch(updateModalIsOpen(true));
    dispatch(updateMobileSignInIsOpen(false));
    dispatch(updateMobileSignUpIsOpen(false));
    dispatch(updateMobileForgotPasswordIsOpen(false));
    dispatch(updateModalOpacity(100));
  }

  return {
    handleMenuClick,
    navigate,
    isAuthenticated,
    setHeaderInput,
    modalIsOpen,
    headerInput,
    dispatch,
    quizIsStarted,
  };
}
