import React from "react";
import { PropsType } from "./types";
import useCategories from "./useCategoryItem";

const CategoryItem: React.FC<PropsType> = ({ category, isActive }) => {
  const { handleCategoryItemClick } = useCategories();

  return (
    <li
      onClick={() =>
        handleCategoryItemClick({
          name: category.name,
          id: category.id,
          isActive,
        })
      }
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
