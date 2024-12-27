import React, { useEffect, useState } from "react";
import LogoIcon from "./svgs/LogoIcon";
import MenuIcon from "./svgs/MenuIcon";
import SearchIcon from "./svgs/SearchIcon";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import AutorizationModalBody from "./AutorizationModalBody";
import profileImage from "@/assets/images/profileImage.jpg";
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
import { useAuthentication } from "@/hooks/useAuthentication";
import XButton from "@/pages/QuizListingPage/svgs/XButton";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import useGetQueryParams from "@/hooks/useGetQueryParams";

const Header: React.FC = () => {
  const modalIsOpen = useSelector(getModalIsOpen);
  const [headerInput, setHeaderInput] = useState<string>(
    useGetQueryParams("search")[0]
  );

  const { isAuthenticated } = useAuthentication();

  console.log(isAuthenticated);

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
      transition-all duration-400 sticky top-0 left-0 z-[40] bg-white"
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
          <div className="cursor-pointer" onClick={handleMenuClick}>
            <MenuIcon />
          </div>
        </div>
        {isAuthenticated && (
          <div className="items-center gap-10 hidden lg:flex">
            <div className="h-[2.875rem] flex rounded-[0.625rem] overflow-hidden  border border-[#D0D5DD] relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                value={headerInput}
                onChange={(e) => setHeaderInput(e.target.value)}
                className="h-full bg-[#F9FAFB] placeholder:text-gray text-sm outline-none ring-0 py-1 w-[20rem]
                pl-10 "
                placeholder="Search"
              />
              <div
                onClick={() => setHeaderInput("")}
                className={`${
                  headerInput ? "w-[3.2rem]" : "w-0"
                } h-full flex items-center justify-center cursor-pointer transition-all duration-500`}
              >
                <XButton size="0.7rem" />
              </div>
            </div>
            <div
              onClick={() => dispatch(updateModalIsOpen(true))}
              className="bg-no-repeat bg-center bg-cover w-8 h-8 rounded-full
              cursor-pointer"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
          </div>
        )}
        {!isAuthenticated && (
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
        )}
      </div>
    </>
  );
};

export default Header;
