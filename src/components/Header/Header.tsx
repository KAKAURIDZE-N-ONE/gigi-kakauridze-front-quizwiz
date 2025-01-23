import React from "react";
import LogoIcon from "@/assets/svgs/LogoIcon";
import MenuIcon from "@/assets/svgs/MenuIcon";
import SearchIcon from "@/assets/svgs/SearchIcon";
import { Modal } from "@/components/Modal";
import AutorizationModalBody from "@/components/AutorizationModalBody/AutorizationModalBody";
import profileImage from "@/assets/images/profileImage.jpg";
import { updateModalIsOpen } from "@/store/slices/modalSlice";
import { Link } from "react-router-dom";
import useHeader from "./useHeader";
import { BigSearchInput } from "./components/BigSearchInput";
import LogOut from "@/assets/svgs/LogOut";
import HoverArrow from "@/assets/svgs/HoverArrow";

const Header: React.FC = () => {
  const {
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
  } = useHeader();

  return (
    <>
      {modalIsOpen && windowWidth < 1280 && (
        <Modal>
          <AutorizationModalBody />
        </Modal>
      )}
      <div
        className={`${
          quizIsStarted ? "hidden" : ""
        } flex justify-between items-center 
      px-4 lg:px-24 h-18 border-b-white1 border-b 
      transition-all duration-400 sticky top-0 left-0 z-[40] bg-white`}
      >
        {mobileSearchIsActive && (
          <div className="absolute z-[100] lg:hidden w-full pr-8 bg-white">
            <BigSearchInput
              headerInput={headerInput}
              setHeaderInput={setHeaderInput}
              setMobileSearchIsActive={setMobileSearchIsActive}
              type="mobile"
            />
          </div>
        )}
        <div className="flex items-center gap-6 lg:gap-14">
          <div onClick={() => navigate("/")}>
            <LogoIcon />
          </div>
          <div className="relative ml-4">
            {quizzesPageIsActive && (
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 bg-blue w-2 h-2 rounded-full"></div>
            )}
            <Link
              to="/quizzes"
              className=" hover:opacity-80 transition-all duration-300 text-gray2 text-sm font-semibold inline-block cursor-pointer"
            >
              Quizzes
            </Link>
          </div>
        </div>

        <div className="flex gap-2 items-center lg:hidden">
          <div
            className="flex items-center justify-center gap-2
          mr-6 hover:cursor-pointer"
            onClick={() => setMobileSearchIsActive(true)}
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
            <BigSearchInput
              headerInput={headerInput}
              setHeaderInput={setHeaderInput}
            />
            <div className="relative">
              <div
                onClick={() => dispatch(updateModalIsOpen(true))}
                className="bg-no-repeat bg-center bg-cover w-8 h-8 rounded-full
              cursor-pointer"
                style={{ backgroundImage: `url(${profileImage})` }}
              ></div>
              {modalIsOpen && windowWidth >= 1280 && (
                <div
                  ref={userInfoRef}
                  className="absolute -bottom-[8rem] bg-white -left-[17rem]
              border border-white3 shadow-md rounded-lg px-5 py-6 z-[200] 
              min-w-[22rem]"
                >
                  <div className="flex flex-col gap-3">
                    <div
                      className="bg-no-repeat bg-center bg-cover w-10 h-10 rounded-full
                  cursor-pointer"
                      style={{ backgroundImage: `url(${profileImage})` }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-black1">
                        {user?.name}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray2 text-sm">{user?.email}</p>
                        <div
                          onClick={() => logout()}
                          className="hover:cursor-pointer flex items-center justify-center hover:bg-[#D0D5DD4D]
                          rounded-full transition-colors duration-200"
                        >
                          <LogOut />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {!isAuthenticated && (
          <div className="hidden lg:flex items-center gap-12">
            <BigSearchInput
              headerInput={headerInput}
              setHeaderInput={setHeaderInput}
            />
            <div className="hidden lg:inline-block raleway">
              <button
                onClick={() => navigate("/sign-up")}
                className="bg-black w-[6.25rem] h-[2.875rem] 
              rounded-[0.25rem] font-bold text-white hover:opacity-80 transition-all duration-300 
              border border-white btn-hover"
              >
                Sign up
              </button>
              <button
                onClick={() => navigate("/log-in")}
                className="w-[6.25rem] h-[2.875rem] 
              font-bold text-blue  hover:opacity-80 transition-all duration-300
               relative group"
              >
                Log in
                <span
                  className="absolute left-1/2 transform translate-x-14 transition-all 
        duration-300 group-hover:translate-x-8 opacity-0 group-hover:opacity-100
        top-1/2 -translate-y-1/2"
                >
                  <HoverArrow fill="blue" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
