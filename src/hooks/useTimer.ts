import { Props } from "@/pages/QuizPage/components/QuizInProgress/components/DesktopTimer./types";
import {
  getQuizFinished,
  getTimer,
  updateQuizFinished,
  updateTimer,
} from "@/store/slices/quizSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function useTimer({ duration }: Props) {
  const timer = useSelector(getTimer);
  const quizIsFinished = useSelector(getQuizFinished);

  const dispatch = useDispatch();

  useEffect(() => {
    if (duration) {
      dispatch(updateQuizFinished(false));
      dispatch(updateTimer(duration));
    }
  }, [duration]);

  useEffect(() => {
    if (timer && !quizIsFinished) {
      if (timer > 0) {
        const interval = setInterval(
          () => dispatch(updateTimer(timer - 1)),
          1000
        );

        return () => clearInterval(interval);
      }
    } else {
      dispatch(updateQuizFinished(true));
    }
  }, [timer]);

  return { timer };
}
