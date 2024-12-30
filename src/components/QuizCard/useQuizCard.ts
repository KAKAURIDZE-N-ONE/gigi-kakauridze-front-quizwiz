import { HookType } from "./types";

export default function useQuizCard({ questions, userDetails }: HookType) {
  const isFilledByUser = userDetails !== undefined;

  const totalAvailablePoints = isFilledByUser
    ? questions.reduce((sum, el) => sum + el.point, 0)
    : null;

  return { totalAvailablePoints, isFilledByUser };
}
