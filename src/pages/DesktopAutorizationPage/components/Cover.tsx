import AutorizationDesktopIcon from "@/pages/DesktopAutorizationPage/components/svgs/AutorizationDesktopIcon";
import Logo from "@/components/svgs/LogoIcon";
import React from "react";

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
        <div className="absolute top-[2.5rem] left-[2.5rem]">
          <Logo size="small" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
