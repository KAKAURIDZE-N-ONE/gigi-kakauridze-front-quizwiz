import { Hook } from "./types";

export default function useQuizCard({ questions, userDetails }: Hook) {
  const isFilledByUser = userDetails !== undefined;

  const totalAvailablePoints = isFilledByUser
    ? questions.reduce((sum, el) => sum + el.point, 0)
    : null;

  return { totalAvailablePoints, isFilledByUser };
}
