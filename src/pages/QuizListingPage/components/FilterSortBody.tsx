import SortArrowUp from "../svgs/SortArrowUp";
import SortArrowDown from "../svgs/SortArrowDown";
import DiamondIcon from "../svgs/DiamondIcon";
import SortArrowTopRight from "../svgs/SortArrowTopRight";
import SortArrowBottomLeft from "../svgs/SortArrowBottomLeft";
import { SortItem } from "../types";
import MarkIcon from "../svgs/MarkIcon";

const sortItems: SortItem[] = [
  { icon: <SortArrowUp />, name: "A-Z" },
  { icon: <SortArrowDown />, name: "Z-A" },
  { icon: <DiamondIcon />, name: "Most popular" },
  { icon: <SortArrowTopRight />, name: "Newest" },
  { icon: <SortArrowBottomLeft />, name: "Oldest" },
];

type SortBodyProps = {
  setSortBy: React.Dispatch<React.SetStateAction<string | undefined>>;
  sortBy: string | undefined;
  type?: "desktop";
};

const FilterSortBody: React.FC<SortBodyProps> = ({
  setSortBy,
  sortBy,
  type,
}) => {
  return (
    <div
      className={`mt-6 flex flex-col gap-y-3 ${
        type === "desktop" ? "" : "px-[1.125rem]"
      }`}
    >
      {sortItems.map((sortItem) => {
        const isActive = sortItem.name === sortBy;

        return (
          <div
            onClick={() =>
              setSortBy((sortBy) =>
                sortBy === sortItem.name ? undefined : sortItem.name
              )
            }
            key={sortItem.name}
            className={`${
              isActive ? "bg-[#D9D9D933]" : ""
            } flex justify-between px-3 py-3 rounded-lg
            cursor-pointer`}
          >
            <div className="flex items-center gap-x-4 r">
              {sortItem.icon}
              <p className="text-sm font-semibold text-gray2">
                {sortItem.name}
              </p>
            </div>
            <div className="translate-y-[0.1rem] mr-2">
              {isActive && <MarkIcon width="1rem" height="0.95rem" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSortBody;
