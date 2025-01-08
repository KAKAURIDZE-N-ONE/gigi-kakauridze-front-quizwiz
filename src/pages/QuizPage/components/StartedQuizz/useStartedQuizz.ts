import { getQuiz } from "@/services/apiQuiz";
import { updateQuizIsStarted } from "@/store/slices/quizSlice";
import { Quizz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useStartedQuizz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const { data: quizz } = useQuery<Quizz>({
    queryKey: ["quiz", id],
    queryFn: () => getQuiz(String(id)),
  });

  return { quizz };
}
