import { Quizz } from "@/types";
import { NavigateFunction } from "react-router-dom";

export type Props = {
  navigate: NavigateFunction;
  quizz: Quizz | undefined;
  similarQuizzes: Quizz[];
};
