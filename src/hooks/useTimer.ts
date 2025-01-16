import { HookProps } from "@/pages/QuizPage/components/QuizInProgress/components/DesktopTimer./types";
import useSubmitQuiz from "@/pages/QuizPage/components/QuizInProgress/hooks/useSubmitQuiz";
import {
  getAllSelectedAnswers,
  getQuizFinished,
  getTimer,
  resetSelectedAnswers,
  updateQuizFinished,
  updateTimer,
} from "@/store/slices/quizSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function useTimer({ duration, quizId }: HookProps) {
  const timer = useSelector(getTimer);
  const quizIsFinished = useSelector(getQuizFinished);
  const selectedAnswers = useSelector(getAllSelectedAnswers);
  const { mutate } = useSubmitQuiz();

  const dispatch = useDispatch();

  useEffect(() => {
    if (duration) {
      dispatch(updateQuizFinished(false));
      dispatch(updateTimer(duration));
    }
  }, [duration]);

  useEffect(() => {
    if (timer !== null && !quizIsFinished) {
      if (timer > 0) {
        const interval = setInterval(
          () => dispatch(updateTimer(timer - 1)),
          1000
        );

        return () => clearInterval(interval);
      } else {
        dispatch(updateQuizFinished(true));
        mutate({ quizId, selectedAnswers, timer });
        dispatch(resetSelectedAnswers());
      }
    }
  }, [timer]);

  return { timer };
}
