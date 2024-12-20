import React from "react";
import Cover from "./components/Cover";
import LeftArrow from "./components/svgs/LeftArrow";
import SignUpModalBody from "@/components/SignUpModalBody";
import SignInModalBody from "@/components/SignInModalBody";
import { useLocation } from "react-router-dom";

const DesktopAutorizationPage: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div
      className="h-[100vh] w-full 
      flex items-center"
    >
      <Cover />
      <div className="w-1/2  h-full relative">
        <div
          className="absolute left-[3.3125rem]
        top-[2.75rem] flex gap-[0.5625rem] items-center"
        >
          <LeftArrow />
          <p className="text-gray font-medium text-sm">Back</p>
        </div>
        {pathname === "/sign-up" && <SignUpModalBody type="desktop" />}
        {pathname === "/log-in" && <SignInModalBody type="desktop" />}
      </div>
    </div>
  );
};

export default DesktopAutorizationPage;
