import React, { ReactNode } from "react";

type LayoutProps = {
  bgColor: string;
  children: ReactNode;
};

const IconLayout: React.FC<LayoutProps> = ({ bgColor, children }) => {
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
