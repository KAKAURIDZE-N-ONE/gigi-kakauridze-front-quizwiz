import useTimer from "@/hooks/useTimer";
import { useDispatch } from "react-redux";
import { HookProps } from "./types";
import { useParams } from "react-router-dom";
import useSubmitQuiz from "@/pages/QuizPage/components/QuizInProgress/hooks/useSubmitQuiz";
import { useSelector } from "react-redux";
import { getAllSelectedAnswers } from "@/store/slices/quizSlice";

export default function useMobileTimer({ duration, quizId }: HookProps) {
  const dispatch = useDispatch();
  const { timer } = useTimer({ duration, quizId });
  const { id } = useParams();
  const { mutate } = useSubmitQuiz();
  const selectedAnswers = useSelector(getAllSelectedAnswers);

  return { dispatch, timer, id, mutate, selectedAnswers };
}
