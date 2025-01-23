import React from "react";
import { BtnProps } from "@/types/buttons";
import HoverArrow from "@/assets/svgs/HoverArrow";

const PrimaryButton: React.FC<BtnProps> = ({
  children,
  clickFn,
  rounded,
  size,
  type,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={clickFn}
      className={`bg-black rounded-[0.25rem]
    text-white font-bold hover:opacity-80 transition-all duration-300
     ${rounded ? rounded : ""}
     ${size === "big" ? "h-[3.5rem] text-base" : "h-[2.875rem] text-sm "}
      relative group flex items-center justify-center`}
    >
      {children}
      <span
        className="absolute left-1/2 transform translate-x-16 transition-all 
        duration-300 group-hover:translate-x-10 opacity-0 group-hover:opacity-100"
      >
        <HoverArrow />
      </span>
    </button>
  );
};

export default PrimaryButton;
