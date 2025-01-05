import { Answer } from "@/types";

export type Props = {
  answer: Answer;
  questionId: number;
  isActive: boolean;
  hasMultipleAnswers: boolean;
};
