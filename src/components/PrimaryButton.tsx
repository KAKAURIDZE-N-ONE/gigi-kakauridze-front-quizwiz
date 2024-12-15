import React from "react";

type BtnProps = {
  children: string;
  clickFn: () => void;
  rounded?: string;
  size?: string;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton: React.FC<BtnProps> = ({
  children,
  clickFn,
  rounded,
  size,
  type,
}) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={clickFn}
      className={`bg-black rounded-[0.25rem]
    text-white font-bold 
     ${rounded ? rounded : ""}
     ${size === "big" ? "h-[3.5rem] text-base" : "h-[2.875rem] text-sm "}
      
    `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
