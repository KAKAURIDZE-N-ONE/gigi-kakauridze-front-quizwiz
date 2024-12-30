import React from "react";
import XButton from "../../svgs/XButton";
import SearchIcon from "../../svgs/SearchIcon";
import { createPortal } from "react-dom";
import { PropsType } from "./props";

const MobileFilterBodyLayout: React.FC<PropsType> = ({
  handleResetFilters,
  handleTurnOfModal,
  setFilterSearch,
  handleUpdateActiveFilter,
  activeFilter,
  handleConfirmClick,
  children,
  changeIsMade,
}) => {
  return (
    <div className="bg-white w-full h-full relative overflow-auto">
      <div
        className="h-18  px-[1.125rem] flex items-center 
    justify-between bg-white4 border-b border-b-white3"
      >
        <h4
          onClick={handleResetFilters}
          className="text-sm text-gray font-semibold cursor-pointer"
        >
          Reset
        </h4>
        <h3 className="text-gray font-semibold text-sm">FILTERS</h3>
        <div onClick={handleTurnOfModal} className="cursor-pointer p-[0.2rem]">
          <XButton />
        </div>
      </div>
      <div
        className="h-18 px-[1.125rem] flex items-center
     border-b border-b-white3"
      >
        <div className="flex gap-2 items-center  w-full">
          <label htmlFor="input">
            <SearchIcon />
          </label>
          <input
            onChange={(e) => setFilterSearch(e.target.value)}
            id="input"
            placeholder="Search"
            className="placeholder:text-gray text-sm outline-none ring-0 py-1 w-full"
          />
        </div>
      </div>
      <div className="px-[1.125rem]">
        <div className="py-[1.3125rem]">
          <div className="h-12 flex bg-[#D0D5DD4D] rounded-full relative">
            <div
              onClick={() => handleUpdateActiveFilter("filter")}
              className="flex items-center justify-center w-1/2 relative z-10"
            >
              <p
                className={`text-sm font-semibold ${
                  activeFilter === "filter" ? "text-blue" : "text-[#66708580]"
                }`}
              >
                Filter
              </p>
            </div>
            <div
              onClick={() => handleUpdateActiveFilter("sort")}
              className="flex items-center justify-center w-1/2 relative z-10"
            >
              <p
                className={`text-sm font-semibold ${
                  activeFilter === "sort" ? "text-blue" : "text-[#66708580]"
                }`}
              >
                Sorting
              </p>
            </div>
            <div
              className={`absolute ${
                activeFilter === "filter" ? "left-0" : "right-0"
              } w-1/2 h-full bg-white
          rounded-full border border-white3`}
            ></div>
          </div>
        </div>
      </div>
      {children}
      <div className="h-32"></div>
      {changeIsMade &&
        createPortal(
          <div
            className="sticky bottom-0 left-0 right-0 h-[6.3rem] flex items-center 
  gap-x-[0.625rem] p-4 shadow-lg shadow-black bg-white z-[100] opacityAnime
  "
          >
            <button
              onClick={handleConfirmClick}
              className="w-2/3 text-white bg-blue rounded-[0.625rem] text-[1.125rem] font-semibold h-[3.75rem]"
            >
              Confirm
            </button>
            <button
              onClick={() => handleTurnOfModal()}
              className="w-1/3 text-black2 rounded-lg text-[1.125rem] font-semibold h-[3.75rem] border border-white3"
            >
              Cancel
            </button>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MobileFilterBodyLayout;
