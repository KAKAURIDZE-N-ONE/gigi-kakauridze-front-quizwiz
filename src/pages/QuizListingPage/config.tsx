import SortArrowUp from "./svgs/SortArrowUp";
import SortArrowDown from "./svgs/SortArrowDown";
import DiamondIcon from "./svgs/DiamondIcon";
import SortArrowTopRight from "./svgs/SortArrowTopRight";
import SortArrowBottomLeft from "./svgs/SortArrowBottomLeft";
import { SortByItem, SortItem } from "./types";

export const sortItems: SortItem[] = [
  { icon: <SortArrowUp />, name: "A-Z" },
  { icon: <SortArrowDown />, name: "Z-A" },
  { icon: <DiamondIcon />, name: "Most popular" },
  { icon: <SortArrowTopRight />, name: "Newest" },
  { icon: <SortArrowBottomLeft />, name: "Oldest" },
];

export const sortByItems: SortByItem[] = [
  { name: "A-Z", tableName: "title", direction: "asc" },
  { name: "Z-A", tableName: "title", direction: "desc" },
  { name: "Most popular", tableName: "total_filled", direction: "desc" },
  { name: "Newest", tableName: "created_at", direction: "desc" },
  { name: "Oldest", tableName: "created_at", direction: "asc" },
];
