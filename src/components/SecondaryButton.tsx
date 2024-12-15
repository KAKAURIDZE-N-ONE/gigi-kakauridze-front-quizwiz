import React from "react";

type ButtonProps = {
  children: string;
  clickFn: () => void;
};

const SecondaryButton: React.FC<ButtonProps> = ({ children, clickFn }) => {
  return (
    <button
      className="text-sm bg-gray3 h-[2.875rem] text-blue  
    rounded-[0.25rem] font-bold"
      onClick={clickFn}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
