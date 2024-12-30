import { Category, Level, PivotUser, Question } from "@/types";

export interface HookType {
  questions: Question[];
  userDetails: PivotUser | undefined;
}

export interface PropsType extends HookType {
  title: string;
  categories: Category[];
  image: string;
  total_filled: number;
  level: Level;
}
