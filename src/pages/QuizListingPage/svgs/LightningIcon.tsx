import React from "react";

type IconProps = {
  iconColor: string;
};

const LightningIcon: React.FC<IconProps> = ({ iconColor }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.83333 1.66669L1.5 11.6667H9L8.16667 18.3334L16.5 8.33335H9L9.83333 1.66669Z"
        stroke={`rgba(${iconColor})`}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightningIcon;
