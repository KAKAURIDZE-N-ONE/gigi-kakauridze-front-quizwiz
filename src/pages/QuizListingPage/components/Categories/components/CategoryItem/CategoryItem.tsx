import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import { Category } from "@/types";
import React from "react";
import { PropsType } from "./types";

const CategoryItem: React.FC<PropsType> = ({ category, isActive }) => {
  const customUpdateQueryParams = useCustomUpdateQueryParams();

  return (
    <li
      onClick={() => {
        if (category.name !== "All Quizzes")
          customUpdateQueryParams(
            "categories",
            String(category.id),
            "add",
            true
          );
        else {
          customUpdateQueryParams("categories", "", "clear-field");
        }
      }}
      key={category.id}
      className={`${isActive ? "border-b-black" : "border-b-transparent"} 
    py-4  relative border-b-[3px] px-1  translate-y-[0.0625rem]`}
    >
      <p
        className={`text-${isActive ? "black" : "gray"}
  font-semibold text-sm cursor-pointer text-nowrap`}
      >
        {category.name}
      </p>
    </li>
  );
};

export default CategoryItem;
