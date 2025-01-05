import { getQuiz, getQuizzes } from "@/services/apiQuiz";
import { Quiz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useQuizDescription() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { id } = useParams();

  const { data: quizz } = useQuery<Quiz>({
    queryKey: ["quiz", id],
    queryFn: () => getQuiz(String(id)),
  });

  const { data: similarQuizzes } = useQuery({
    queryKey: ["similarQuizzes", quizz?.id],
    queryFn: () =>
      getQuizzes(
        1,
        {
          activeCategories: quizz?.categories?.map((el) => String(el.id)) || [],
          activeCompleted: ["2"],
        },
        "total_filled",
        "desc",
        12,
        quizz?.id
      ),
    enabled: !!quizz,
  });

  const similarQuizzesData = similarQuizzes?.data;

  return { navigate, quizz, similarQuizzesData };
}
