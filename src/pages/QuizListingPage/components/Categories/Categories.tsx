import React from "react";
import ArrowRightIcon from "../../svgs/ArrowRightIcon";
import { Category } from "@/types";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import useCategories from "./useCategories";

const Categories: React.FC = () => {
  const { activeCategories, categories } = useCategories();

  return (
    <>
      <div
        className="relative pr-9 border-b-white1 border-b w-full
    overflow-x-auto overflow-y-hidden disableScrollbar"
      >
        <div className="relative">
          <ul className="flex gap-4">
            <CategoryItem
              key={"All Quizzes"}
              category={{
                id: 99999999931313,
                name: "All Quizzes",
              }}
              isActive={activeCategories.length === 0}
            />
            {categories?.map((category: Category) => {
              const isActive = activeCategories.includes(String(category.id));

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
