import React from "react";

const CheckBoxMarked: React.FC = () => {
  return (
    <svg
      className="opacityAnime"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="black" />
      <path d="M5.5 9.5L9 13L14.5 7.5" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};

export default CheckBoxMarked;
