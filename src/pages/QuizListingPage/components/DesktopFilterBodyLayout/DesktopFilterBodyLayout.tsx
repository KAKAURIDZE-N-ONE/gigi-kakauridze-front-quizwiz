import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import SearchIcon from "../../svgs/SearchIcon";
import XButton from "../../svgs/XButton";
import { PropsType } from "./types";

const DesktopFilterBodyLayout: React.FC<PropsType> = ({
  FilterBody,
  SortBody,
  setFilterSearch,
  handleConfirmClick,
  handleResetFilters,
  handleTurnOfModal,
  changeIsMade,
}) => {
  return (
    <div className="flex flex-col white z-20 max-w-[66.5625rem] border border-black rounded-xl overflow-hidden p-4">
      <div className="w-full bg-[#F6F6F6B2] p-4 rounded-xl flex items-center gap-4">
        <div onClick={handleTurnOfModal}>
          <FilterButton filled={true} />
        </div>
        <div className="w-full relative">
          <label
            className="absolute top-1/2 left-6
          -translate-y-1/2 "
            htmlFor="input"
          >
            <SearchIcon />
          </label>
          <input
            id="input"
            className="placeholder:text-gray text-sm outline-none ring-0 py-1 w-full
          rounded-full border border-[#66708566] h-[2.375rem] px-12
          "
            placeholder="Search"
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-center">
          {changeIsMade && (
            <button
              onClick={handleConfirmClick}
              className="bg-blue rounded-[0.625rem] h-[2.375rem]
          text-white px-6 text-sm"
            >
              Confirm
            </button>
          )}
          <div className="w-[0.0625rem] bg-gray h-[1rem]"></div>
          <p
            onClick={handleResetFilters}
            className="cursor-pointer text-gray text-sm text-nowrap"
          >
            Reset all filters
          </p>
          <div onClick={handleTurnOfModal} className="cursor-pointer">
            <XButton size="11" />
          </div>
        </div>
      </div>
      <div className="flex gap-[0.625rem]">
        <div
          className="rounded-xl border border-[#D0D5DD]
        w-[39.4375rem] p-4"
        >
          <h3 className="text-sm text-blue font-semibold">Filter by</h3>
          {FilterBody}
        </div>
        <div
          className="rounded-xl border border-[#D0D5DD] 
        w-[24.5rem] p-4"
        >
          <h3 className="text-sm text-blue font-semibold">Sort by</h3>
          {SortBody}
        </div>
      </div>
    </div>
  );
};

export default DesktopFilterBodyLayout;
