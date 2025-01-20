import AutorizationDesktopIcon from "@/pages/DesktopAutorizationPage/svgs/AutorizationDesktopIcon";
import Logo from "@/assets/svgs/LogoIcon";
import React from "react";
import { Link } from "react-router-dom";

const Cover: React.FC = () => {
  return (
    <div
      className="h-[100vh] w-1/2 flex 
      items-center relative"
    >
      <div
        className="bg-[#EAFAFE80] w-full h-full
        flex items-center relative"
      >
        <AutorizationDesktopIcon />
        <Link to="/" className="absolute top-[2.5rem] left-[2.5rem]">
          <Logo size="small" />
        </Link>
      </div>
    </div>
  );
};

export default Cover;
