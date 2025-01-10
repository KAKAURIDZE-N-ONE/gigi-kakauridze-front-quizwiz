import { Quiz } from "@/types";
import { NavigateFunction } from "react-router-dom";

export type Props = {
  navigate: NavigateFunction;
  quiz: Quiz | undefined;
  similarQuizzes: Quiz[];
};
