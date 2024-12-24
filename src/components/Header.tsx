import React from "react";
import LogoIcon from "./svgs/LogoIcon";
import MenuIcon from "./svgs/MenuIcon";
import SearchIcon from "./svgs/SearchIcon";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import AutorizationModalBody from "./AutorizationModalBody";
import {
  getModalIsOpen,
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
  updateModalOpacity,
} from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const modalIsOpen = useSelector(getModalIsOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleMenuClick() {
    dispatch(updateModalIsOpen(true));
    dispatch(updateMobileSignInIsOpen(false));
    dispatch(updateMobileSignUpIsOpen(false));
    dispatch(updateModalOpacity(100));
  }

  return (
    <>
      {modalIsOpen && (
        <Modal>
          <AutorizationModalBody />
        </Modal>
      )}
      <div
        className="flex justify-between items-center 
      px-4 lg:px-24 h-18 border-b-white1 border-b 
      transition-all duration-400 sticky top-0 left-0 z-[30] bg-white"
      >
        <div className="flex items-center gap-14">
          <div onClick={() => navigate("/")}>
            <LogoIcon />
          </div>
          <Link
            to="/quizzes"
            className="text-gray2 text-sm font-semibold hidden lg:inline-block cursor-pointer"
          >
            Quizzes
          </Link>
        </div>

        <div className="flex gap-2 items-center lg:hidden">
          <div
            className="flex items-center justify-center gap-2
          mr-6"
          >
            <SearchIcon />
            <h3 className="text-gray text-sm">Search</h3>
          </div>
          <div></div>
          <div className="cursor-pointer" onClick={handleMenuClick}>
            <MenuIcon />
          </div>
        </div>

        <div className="hidden lg:inline-block raleway">
          <button
            onClick={() => navigate("/sign-up")}
            className="bg-black w-[6.25rem] h-[2.875rem] 
          rounded-[0.25rem] font-bold text-white"
          >
            Sign up
          </button>
          <button
            onClick={() => navigate("/log-in")}
            className="w-[6.25rem] h-[2.875rem] 
          font-bold text-blue"
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
