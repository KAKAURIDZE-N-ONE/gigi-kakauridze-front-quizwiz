import { Quiz } from "@/types";
import { NavigateFunction } from "react-router-dom";

export type Props = {
  navigate: NavigateFunction;
  quizz: Quiz | undefined;
  similarQuizzes: Quiz[];
};
