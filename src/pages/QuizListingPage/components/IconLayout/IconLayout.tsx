import React from "react";
import { PropsType } from "./types";

const IconLayout: React.FC<PropsType> = ({ bgColor, children }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[2.5rem] h-[2.5rem]
    flex items-center justify-center rounded-full`}
    >
      {children}
    </div>
  );
};

export default IconLayout;
