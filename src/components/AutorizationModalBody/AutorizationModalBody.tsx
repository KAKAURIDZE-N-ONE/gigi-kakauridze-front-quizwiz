import React from "react";
import Logo from "@/assets/svgs/LogoIcon";
import XBtnIcon from "@/assets/svgs/XBtnIcon";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import SecondaryButton from "@/components/SecondaryButton";
import profileImage from "@/assets/images/profileImage.jpg";
import SignUpModalBody from "@/components/SignUpModalBody/SignUpModalBody";
import SignInModalBody from "@/components/SignInModalBody/SignInModalBody";
import InputsModal from "@/components/InputsModal/InputsModal";
import useAutorizationModalBody from "./useAutorizationModalBody";
import { ForgotPasswordModalBody } from "@/components/ForgotPasswordModalBody.tsx";
import ResetPasswordModalBody from "@/components/ResetPasswordModalBody/ResetPasswordModalBody.tsx";

const AutorizationModalBody: React.FC = () => {
  const {
    handleLogout,
    handleXClick,
    isAuthenticated,
    user,
    navigate,
    mobileSignInIsOpen,
    mobileSignUpIsOpen,
    mobileForgotPasswordIsOpen,
    mobileResetPasswordIsOpen,
  } = useAutorizationModalBody();

  return (
    <>
      {mobileSignUpIsOpen && (
        <InputsModal>
          <SignUpModalBody type="mobile" />
        </InputsModal>
      )}
      {mobileSignInIsOpen && (
        <InputsModal>
          <SignInModalBody type="mobile" />
        </InputsModal>
      )}
      {mobileForgotPasswordIsOpen && (
        <InputsModal>
          <ForgotPasswordModalBody type="mobile" />
        </InputsModal>
      )}
      {mobileResetPasswordIsOpen && (
        <InputsModal>
          <ResetPasswordModalBody type="mobile" />
        </InputsModal>
      )}
      <div
        className={`bg-white absolute top-0 left-0 px-6 pt-6 pb-8 transition-all duration-300 ${
          mobileSignUpIsOpen ||
          mobileSignInIsOpen ||
          mobileForgotPasswordIsOpen ||
          mobileResetPasswordIsOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-[17.6875rem]
        flex flex-col gap-[1.25rem]"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <div onClick={handleXClick} className="cursor-pointer">
              <XBtnIcon />
            </div>
          </div>
          <div className="border-t border-t-white3 bg-white3 w-full"></div>
          <h3
            className="text-black1 text-[1.125rem] 
          font-semibold"
          >
            Quizzes
          </h3>
          <div className="border-t border-t-white3"></div>
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-x-[1.25rem]">
                <div
                  style={{
                    backgroundImage: `url(${profileImage})`,
                  }}
                  className="w-[3.9375rem] h-[3.9375rem]
                bg-center bg-cover bg-no-repeat rounded-full"
                ></div>
                <div className="flex flex-col gap-y-[0.125rem]">
                  <h4 className="text-base font-semibold text-black1">
                    {user?.name}
                  </h4>
                  <p
                    className="font-normal text-gray2 
                  text-sm"
                  >
                    {user?.email}
                  </p>
                </div>
              </div>
              <SecondaryButton clickFn={() => handleLogout()}>
                Log out
              </SecondaryButton>
            </>
          ) : (
            <>
              <PrimaryButton clickFn={() => navigate("/sign-up")}>
                Sign up
              </PrimaryButton>
              <SecondaryButton clickFn={() => navigate("/log-in")}>
                Log in
              </SecondaryButton>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AutorizationModalBody;
