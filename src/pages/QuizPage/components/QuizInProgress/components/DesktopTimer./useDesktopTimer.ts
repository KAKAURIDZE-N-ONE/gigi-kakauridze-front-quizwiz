import useTimer from "@/hooks/useTimer";
import { HookProps } from "./types";
import { useDispatch } from "react-redux";
import useSubmitQuiz from "../../hooks/useSubmitQuiz";
import { useSelector } from "react-redux";
import { getAllSelectedAnswers } from "@/store/slices/quizSlice";

export default function useDesktopTimer({ duration, quizId }: HookProps) {
  const selectedAnswers = useSelector(getAllSelectedAnswers);
  const { timer } = useTimer({ duration, quizId });
  const dispatch = useDispatch();
  const { mutate } = useSubmitQuiz();

  return { timer, dispatch, mutate, selectedAnswers };
}
