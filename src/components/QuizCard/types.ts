import { Category, Level, PivotUser, Question } from "@/types";

export type Hook = {
  questions: Question[];
  userDetails?: PivotUser;
};

export type Props = Hook & {
  title: string;
  categories: Category[];
  image: string;
  total_filled: number;
  level: Level;
};
