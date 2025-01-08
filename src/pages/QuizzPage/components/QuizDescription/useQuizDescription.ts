import { getQuiz, getQuizzes } from "@/services/apiQuiz";
import { Quizz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useQuizDescription() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { id } = useParams();

  const { data: quizz } = useQuery<Quizz>({
    queryKey: ["quiz", id],
    queryFn: () => getQuiz(String(id)),
  });

  const { data: similarQuizzes } = useQuery({
    queryKey: ["similarQuizzes", quizz?.id],
    queryFn: () =>
      getQuizzes({
        page: 1,
        activeCategories: quizz?.categories?.map((el) => String(el.id)) || [],
        activeCompleted: ["2"],
        activeSortBy: "total_filled",
        activeSortDirection: "desc",
        limit: 12,
        except_id: quizz?.id,
      }),
    enabled: !!quizz,
  });

  const similarQuizzesData = similarQuizzes?.data;

  return { navigate, quizz, similarQuizzesData };
}
