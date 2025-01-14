import useTimer from "@/hooks/useTimer";
import { useDispatch } from "react-redux";
import { HookProps } from "./types";
import { useParams } from "react-router-dom";
import useSubmitQuiz from "../../hooks/useSubmitQuiz";
import { useSelector } from "react-redux";
import { getAllSelectedAnswers } from "@/store/slices/quizSlice";

export default function useMobileTimer({ duration }: HookProps) {
  const dispatch = useDispatch();
  const { timer } = useTimer({ duration });
  const { id } = useParams();
  const { mutate } = useSubmitQuiz();
  const selectedAnswers = useSelector(getAllSelectedAnswers);

  return { dispatch, timer, id, mutate, selectedAnswers };
}
