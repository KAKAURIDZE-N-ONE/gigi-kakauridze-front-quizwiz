import FilterIcon from "../../svgs/FilterIcon";
import React from "react";
import useFilterButton from "./useFilterButton";
import { PropsType } from "./types";

const FilterButton: React.FC<PropsType> = ({ filled }) => {
  const { filtersQuantity } = useFilterButton();

  return (
    <div className="relative">
      <div
        className={`${
          filled
            ? "border-black bg-black"
            : filtersQuantity > 0
            ? "border-black border-2"
            : "border border-[#66708599]"
        } flex gap-2 items-center justify-center
    rounded-[0.625rem] w-[5.3125rem]
  lg:h-[2.375rem] cursor-pointer h-12
  `}
      >
        <FilterIcon
          color={filled ? "white" : filtersQuantity > 0 ? "black" : "#667085"}
        />
        <p
          className={` ${
            filled
              ? "text-white"
              : filtersQuantity > 0
              ? "text-black"
              : "text-gray"
          } text-sm`}
        >
          Filter
        </p>
      </div>
      {filtersQuantity > 0 && !filled && (
        <div
          className="absolute w-[1.5rem] h-[1.5rem] flex items-center rounded-full
          justify-center bg-white top-0 -translate-y-1/3
          right-0 translate-x-1/3"
        >
          <div
            className="bg-black w-5 h-5 rounded-full 
          flex items-center justify-center"
          >
            <p
              className="text-xs font-bold text-white
            "
            >
              {filtersQuantity}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
