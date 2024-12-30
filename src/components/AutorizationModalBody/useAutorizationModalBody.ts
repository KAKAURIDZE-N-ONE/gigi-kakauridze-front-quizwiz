import { useAuthentication } from "@/hooks/useAuthentication";
import useLogOut from "@/hooks/useLogOut";
import {
  getMobileSignInIsOpen,
  getMobileSignUpIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAutorizationModalBody() {
  const mobileSignInIsOpen = useSelector(getMobileSignInIsOpen);
  const mobileSignUpIsOpen = useSelector(getMobileSignUpIsOpen);

  const { isAuthenticated, user } = useAuthentication();

  const { logout } = useLogOut();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleXClick() {
    dispatch(updateModalIsOpen(false));
  }

  const handleLogout = async () => {
    logout();
  };

  return {
    handleLogout,
    handleXClick,
    isAuthenticated,
    user,
    navigate,
    mobileSignInIsOpen,
    mobileSignUpIsOpen,
  };
}
