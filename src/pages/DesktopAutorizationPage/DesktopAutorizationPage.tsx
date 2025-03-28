import React from "react";
import Cover from "./components/Cover";
import SignUpModalBody from "@/components/SignUpModalBody/SignUpModalBody";
import SignInModalBody from "@/components/SignInModalBody/SignInModalBody";
import useDesktopAutorizationPage from "./useDesktopAutorizationPage";
import ButtonBack from "@/components/ButtonBack";
import ForgotPasswordModalBody from "@/components/ForgotPasswordModalBody.tsx/ForgotPasswordModalBody";
import { ResetPasswordModalBody } from "@/components/ResetPasswordModalBody";

const DesktopAutorizationPage: React.FC = () => {
  const { pathname, navigate } = useDesktopAutorizationPage();
  return (
    <div
      className="h-[100vh] w-full 
      flex items-center"
    >
      <Cover />
      <div className="w-1/2  h-full relative">
        <div
          onClick={() => navigate(-1)}
          className="absolute left-[3.3125rem] 
  top-[2.75rem]"
        >
          <ButtonBack />
        </div>
        <div className="flex flex-col justify-center h-full">
          <div className="px-[5.125rem]">
            <div className="max-w-[26.625rem]">
              {pathname === "/sign-up" && <SignUpModalBody type="desktop" />}
              {pathname === "/log-in" && <SignInModalBody type="desktop" />}
              {pathname === "/forgot-password" && (
                <ForgotPasswordModalBody type="desktop" />
              )}
              {pathname.slice(0, 15) === "/reset-password" && (
                <ResetPasswordModalBody type="desktop" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAutorizationPage;
