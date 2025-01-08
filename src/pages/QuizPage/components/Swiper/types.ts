import { Quiz } from "@/types";

export type Props = {
  quizzes: Quiz[];
  sliderWidth?: number;
  direction: "vertical" | "horizontal";
};
