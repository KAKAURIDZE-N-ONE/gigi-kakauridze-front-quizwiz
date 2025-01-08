import React from "react";
import { Props } from "./types";

const CategoryItems: React.FC<Props> = ({ categories, isInStarted }) => {
  return (
    <ul className={`${isInStarted ? "gap-7" : "gap-9"} flex  items-center`}>
      {categories?.map((category, i, categories) => {
        const needDot = i + 1 < categories.length;
        return (
          <li className="relative" key={i}>
            <p
              className={`${
                isInStarted ? "text-gray" : "text-blue"
              } text-sm font-semibold`}
            >
              {category.name}
            </p>
            {needDot && (
              <div
                key={i + 0.5}
                className={`${
                  isInStarted ? "-right-4" : "-right-5"
                } w-1 h-1 bg-[#D0D5DD] rounded-full
              absolute top-1/2 -translate-y-1/2 `}
              ></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryItems;
