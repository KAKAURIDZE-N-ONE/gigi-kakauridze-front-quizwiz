import React from "react";
import ArrowDownIcon from "@/pages/QuizListingPage/svgs/ArrowDownIcon";

const LoadMoreButton: React.FC = () => {
  return (
    <div
      className="rounded-lg h-12 bg-[#1018280D] px-5 flex items-center 
    justify-center gap-2 border border-[#4B69FD03]
    cursor-pointer hover:bg-[#fbfbfb] transition-all duration-300"
    >
      <ArrowDownIcon />
      <p className="text-blue font-semibold text-base">Load more</p>
    </div>
  );
};

export default LoadMoreButton;
