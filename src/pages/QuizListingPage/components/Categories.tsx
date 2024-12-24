import React from "react";
import ArrowRightIcon from "../svgs/ArrowRightIcon";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/apiQuiz";
import { Category } from "@/types";
import CategoryItem from "./CategoryItem";

const Categories: React.FC = () => {
  const activeCategory = useGetQueryParams("categories")[0];

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <>
      <div
        className="relative pr-9 border-b-white1 border-b w-full
    overflow-x-auto overflow-y-hidden disableScrollbar"
      >
        <div className="relative">
          <ul className="flex gap-4">
            {categories?.map((category: Category) => {
              const isActive = category.name === activeCategory;

              return (
                <CategoryItem
                  key={category.id}
                  category={category}
                  isActive={isActive}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="cursor-pointer mx-6 hidden lg:inline-block">
        <ArrowRightIcon />
      </div>
    </>
  );
};

export default Categories;
