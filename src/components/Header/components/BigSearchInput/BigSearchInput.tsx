import SearchIcon from "@/pages/QuizListingPage/svgs/SearchIcon";
import XButton from "@/pages/QuizListingPage/svgs/XButton";
import React from "react";
import { Props } from "./types";
import useBigSearchInput from "./useBigSearchInput";

const BigSearchInput: React.FC<Props> = ({
  headerInput,
  setHeaderInput,
  type,
  setMobileSearchIsActive,
}) => {
  const { inputRef } = useBigSearchInput();

  return (
    <div className="opacityAnime h-[2.875rem] flex rounded-[0.625rem] overflow-hidden  border border-[#D0D5DD] relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        value={headerInput}
        onChange={(e) => setHeaderInput(e.target.value)}
        className={`h-full bg-[#F9FAFB] placeholder:text-gray text-sm outline-none ring-0 py-1 ${
          type === "mobile" ? "w-full" : "w-[20rem]"
        } pl-10`}
        placeholder="Search"
      />
      <div
        onClick={() => {
          setHeaderInput("");
          if (type === "mobile" && setMobileSearchIsActive)
            setMobileSearchIsActive(false);
        }}
        className={`${
          headerInput || type === "mobile" ? "w-[3.2rem]" : "w-0"
        } h-full bg-white z-[200] flex items-center justify-center cursor-pointer transition-all duration-500`}
      >
        <XButton size="0.7rem" />
      </div>
    </div>
  );
};

export default BigSearchInput;
