import { Category } from "@/types";

export type PropsType = {
  category: Category;
  isActive: boolean;
};

export type ClickFn = {
  name: string;
  id: number;
  isActive: boolean;
};
