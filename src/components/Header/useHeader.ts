import { useAuthentication } from "@/hooks/useAuthentication";
import useDebounce from "@/hooks/useDebounce";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import useLogOut from "@/hooks/useLogOut";
import useOutsideClick from "@/hooks/useOutsideClick";
import useScrollTo from "@/hooks/useScrollTo";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import useWindowWidth from "@/hooks/useWindowWidth";
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
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function useHeader() {
  const userInfoRef = useRef<HTMLDivElement | null>(null);
  const [mobileSearchIsActive, setMobileSearchIsActive] =
    useState<boolean>(false);
  const windowWidth = useWindowWidth();

  const modalIsOpen = useSelector(getModalIsOpen);
  const quizIsStarted = useSelector(getQuizIsStarted);
  const [headerInput, setHeaderInput] = useState<string>(
    useGetQueryParams("search")?.at(0) || ""
  );

  useOutsideClick(userInfoRef, () => dispatch(updateModalIsOpen(false)));

  const debouncedSearch = useDebounce({ value: headerInput, delay: 500 });

  const { isAuthenticated, user } = useAuthentication();

  const { logout } = useLogOut();

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizzesPageIsActive = pathname.slice(0, 8) === "/quizzes";

  const customUpdateQueryParams = useCustomUpdateQueryParams();

  useScrollTo({ dependency: [customUpdateQueryParams], behavior: "smooth" });

  useEffect(() => {
    dispatch(resetQuizzes());
    dispatch(updatePage(1));
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
    quizzesPageIsActive,
    mobileSearchIsActive,
    setMobileSearchIsActive,
    windowWidth,
    user,
    logout,
    userInfoRef,
  };
}
