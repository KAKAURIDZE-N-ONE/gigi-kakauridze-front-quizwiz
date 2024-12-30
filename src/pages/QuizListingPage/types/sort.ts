import { ReactNode } from "react";

export type SortItem = {
  icon: ReactNode;
  name: string;
};

export type SortByItem = { name: string; tableName: string; direction: string };
