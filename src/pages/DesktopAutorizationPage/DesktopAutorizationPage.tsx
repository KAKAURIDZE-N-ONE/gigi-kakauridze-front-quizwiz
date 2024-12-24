import React from "react";
import Cover from "./components/Cover";
import LeftArrow from "./components/svgs/LeftArrow";
import SignUpModalBody from "@/components/SignUpModalBody";
import SignInModalBody from "@/components/SignInModalBody";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopAutorizationPage: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className="h-[100vh] w-full 
      flex items-center"
    >
      <Cover />
      <div className="w-1/2  h-full relative">
        <div
          onClick={() => navigate(-1)}
          className="absolute left-[3.3125rem] cursor-pointer
        top-[2.75rem] flex gap-[0.5625rem] items-center"
        >
          <LeftArrow />
          <p className="text-gray font-medium text-sm">Back</p>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div className="px-[5.125rem]">
            <div className="max-w-[26.625rem]">
              {pathname === "/sign-up" && <SignUpModalBody type="desktop" />}
              {pathname === "/log-in" && <SignInModalBody type="desktop" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAutorizationPage;
