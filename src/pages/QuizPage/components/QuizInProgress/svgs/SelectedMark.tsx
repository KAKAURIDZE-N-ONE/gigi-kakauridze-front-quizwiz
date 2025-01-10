import React from "react";

const SelectedMark: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#4B69FD" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#4B69FD" />
      <path
        d="M11.3334 5.5L6.75008 10.0833L4.66675 8"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelectedMark;
