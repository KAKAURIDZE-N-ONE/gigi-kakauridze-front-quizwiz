import React from "react";

const MarkedCheckBox: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#F9F5FF" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#7F56D9" />
      <path
        d="M14.6668 6.5L8.25016 12.9167L5.3335 10"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarkedCheckBox;
