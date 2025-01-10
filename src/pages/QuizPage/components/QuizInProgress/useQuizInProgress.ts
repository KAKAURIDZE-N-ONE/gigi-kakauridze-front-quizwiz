import useScrollTo from "@/hooks/useScrollTo";
import { getQuiz } from "@/services/apiQuiz";
import { getQuizFinished, updateQuizIsStarted } from "@/store/slices/quizSlice";
import { Quiz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useQuizInProgress() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizFinished = useSelector(getQuizFinished);

  useScrollTo({ dependency: [] });

  const handleNavigation = useCallback(() => {
    const userConfirmed = window.confirm(
      "Are you sure you want to leave? Your progress will be lost."
    );

    if (userConfirmed) {
      dispatch(updateQuizIsStarted(false));
    } else {
      navigate(window.location.pathname, { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [handleNavigation]);

  const { data: quiz } = useQuery<Quiz>({
    queryKey: ["quiz", id],
    queryFn: () => getQuiz(String(id)),
  });

  return { quiz, quizFinished };
}
