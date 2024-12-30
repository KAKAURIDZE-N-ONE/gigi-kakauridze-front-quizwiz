import React, { ReactNode } from "react";
import MarkedCheckBox from "../../svgs/MarkedCheckBox";
import UnmarkedCheckBox from "../../svgs/UnmarkedCheckBox";
import { Category, Level } from "@/types";
import { PropsType } from "./types";
import useFilterFilterBody from "./useFilterFilterBody";

const FilterFilterBody: React.FC<PropsType> = ({
  filterSearch,
  filters,
  setFilters,
  type,
}) => {
  const { isAuthenticated, categories, levels, handleLevelOrCategoryClick } =
    useFilterFilterBody({ filterSearch, setFilters });

  return (
    <div
      className={`relative ${
        type === "desktop" ? "mt-4" : "px-[1.125rem] mt-6 "
      }`}
    >
      {isAuthenticated && (
        <div
          className={`flex flex-col ${
            type === "desktop" ? "gap-4" : "gap-10 "
          } gap-10 border-b border-b-white3 pb-[0.9rem]`}
        >
          <div className="flex gap-3">
            <h4 className="text-sm font-semibold text-black1">My quizzes</h4>
            <div
              className="cursor-pointer"
              onClick={() => handleLevelOrCategoryClick(1, "completed")}
            >
              {filters.completed?.includes("1") ? (
                <div className="opacityAnime">
                  <MarkedCheckBox />
                </div>
              ) : (
                <div>
                  <UnmarkedCheckBox />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <h4 className="text-sm font-semibold text-black1">Not completed</h4>
            <div
              className="cursor-pointer"
              onClick={() => handleLevelOrCategoryClick(2, "completed")}
            >
              {filters.completed?.includes("2") ? (
                <div className="opacityAnime">
                  <MarkedCheckBox />
                </div>
              ) : (
                <UnmarkedCheckBox />
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col gap-y-4 py-[0.9rem]  border-b border-b-white3 ${
          isAuthenticated ? "" : "pt-0"
        }`}
      >
        <h4 className="text-sm font-semibold text-black1">Levels</h4>
        <div className="-mx-1 -mt-2 ">
          {levels?.map((level: Level): ReactNode => {
            const isActiveLevel = filters.levels.includes(String(level.id));
            return (
              <div
                onClick={() => handleLevelOrCategoryClick(level.id, "levels")}
                key={level.id}
                className={`inline-block ${
                  type === "desktop" ? "pt-2 " : "py-2 "
                } px-1 cursor-pointer `}
              >
                <div
                  style={{
                    backgroundColor: `rgba(${
                      isActiveLevel
                        ? level.background_color
                        : level.active_background_color
                    })`,
                  }}
                  className={`${
                    type === "desktop" ? "h-7 rounded-full" : "h-10 rounded-2xl"
                  }
                  h-10 px-4 flex items-center justify-center transition-all duration-300`}
                >
                  <p
                    style={{
                      color: isActiveLevel
                        ? "white"
                        : `rgba(${level.icon_color})`,
                    }}
                    className="transition-all duration-300 text-sm text-white font-medium"
                  >
                    {level.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 py-[0.9rem]">
        <h4 className="text-sm font-semibold text-black1">Categories</h4>
        <div
          className={`-mx-1 -mt-2 ${type === "desktop" ? "-mb-4" : "-mb-2"}`}
        >
          {categories?.map((category: Category): ReactNode => {
            const isActiveCategory = filters.categories.includes(
              String(category.id)
            );

            return (
              <div
                onClick={() =>
                  handleLevelOrCategoryClick(category.id, "categories")
                }
                key={category.id}
                className="inline-block py-2 px-1"
              >
                <div
                  className={`h-9 px-4 ${
                    isActiveCategory ? "bg-black text-white" : "text-gray2"
                  }
              rounded-full flex items-center justify-center cursor-pointer
              transition-all duration-300`}
                >
                  <p className="text-sm  font-medium">{category.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterFilterBody;
