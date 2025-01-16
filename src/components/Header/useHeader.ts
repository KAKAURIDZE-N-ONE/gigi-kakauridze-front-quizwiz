import { useAuthentication } from "@/hooks/useAuthentication";
import useDebounce from "@/hooks/useDebounce";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import useScrollTo from "@/hooks/useScrollTo";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import {
  getModalIsOpen,
  updateMobileForgotPasswordIsOpen,
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
  updateModalOpacity,
} from "@/store/slices/modalSlice";
import {
  getQuizIsStarted,
  resetQuizzes,
  updatePage,
} from "@/store/slices/quizSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function useHeader() {
  const modalIsOpen = useSelector(getModalIsOpen);
  const quizIsStarted = useSelector(getQuizIsStarted);
  const [headerInput, setHeaderInput] = useState<string>(
    useGetQueryParams("search")?.at(0) || ""
  );

  const debouncedSearch = useDebounce({ value: headerInput, delay: 500 });

  const { isAuthenticated } = useAuthentication();

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customUpdateQueryParams = useCustomUpdateQueryParams();

  useScrollTo({ dependency: [customUpdateQueryParams], behavior: "smooth" });

  useEffect(() => {
    dispatch(resetQuizzes());
    dispatch(updatePage(1));
    console.log(pathname.slice(0, 8));
    if (debouncedSearch) {
      customUpdateQueryParams("search", debouncedSearch, "add", true);
    } else {
      customUpdateQueryParams("search", "", "clear-field");
    }
    if (
      (debouncedSearch && pathname.slice(0, 8) !== "/quizzes") ||
      pathname.slice(0, 9) === "/quizzes/"
    )
      navigate("/quizzes" + `?search=${debouncedSearch}`);
  }, [debouncedSearch]);

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
