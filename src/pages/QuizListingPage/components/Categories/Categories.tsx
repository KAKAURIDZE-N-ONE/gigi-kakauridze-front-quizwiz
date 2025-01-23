import React from "react";
import ArrowRightIcon from "@/pages/QuizListingPage/svgs/ArrowRightIcon";
import { Category } from "@/types";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import useCategories from "./useCategories";

const Categories: React.FC = () => {
  const {
    activeCategories,
    categories,
    scrollContainerRef,
    scrollToRight,
    scrollToLeft,
    isLeftArrowVisible,
    isRightArrowVisible,
  } = useCategories();

  return (
    <>
      <div
        onClick={scrollToLeft}
        className={`bg-white  absolute cursor-pointer hidden lg:inline-block rotate-180  left-0 top-1/2 -translate-y-1/2 ${
          !isLeftArrowVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-all duration-300 z-10 `}
      >
        <div className="min-w-10 h-20 flex items-center justify-end">
          <ArrowRightIcon />
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="relative pr-9 border-b-white1 border-b w-full
    overflow-x-auto overflow-y-hidden disableScrollbar transition-all duration-300"
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
      <div
        onClick={scrollToRight}
        className={`cursor-pointer mx-6 hidden lg:inline-block ${
          !isRightArrowVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-all duration-300`}
      >
        <ArrowRightIcon />
      </div>
    </>
  );
};

export default Categories;
