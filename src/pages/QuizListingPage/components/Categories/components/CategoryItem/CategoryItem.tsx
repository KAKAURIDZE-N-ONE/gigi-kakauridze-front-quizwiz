import React from "react";
import { PropsType } from "./types";
import { resetQuizzes, updatePage } from "@/store/slices/quizSlice";
import useCategories from "./useCategories";

const CategoryItem: React.FC<PropsType> = ({ category, isActive }) => {
  const { customUpdateQueryParams, dispatch } = useCategories();

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

        if (!isActive) {
          dispatch(resetQuizzes());
          dispatch(updatePage(1));
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
