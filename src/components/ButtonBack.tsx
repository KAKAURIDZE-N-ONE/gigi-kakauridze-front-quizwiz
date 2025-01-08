import LeftArrow from "@/pages/DesktopAutorizationPage/svgs/LeftArrow";
import React from "react";

const ButtonBack: React.FC = () => {
  return (
    <div className="flex gap-[0.5625rem] items-center cursor-pointer">
      <LeftArrow />
      <p className="text-gray font-medium text-sm">Back</p>
    </div>
  );
};

export default ButtonBack;
