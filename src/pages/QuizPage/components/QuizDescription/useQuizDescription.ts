import { QUIZ, SIMILAR_QUIZZES } from "@/config/queryKeys";
import useScrollTo from "@/hooks/useScrollTo";
import { getQuiz, getQuizzes } from "@/services/apiQuiz";
import { Quiz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export default function useQuizDescription() {
  const navigate = useNavigate();

  const { id } = useParams();

  useScrollTo({ dependency: [id] });

  const { data: quiz, isPending } = useQuery<Quiz>({
    queryKey: [QUIZ, id],
    queryFn: () => getQuiz(String(id)),
  });

  const { data: similarQuizzes } = useQuery({
    queryKey: [SIMILAR_QUIZZES, quiz?.id],
    queryFn: () =>
      getQuizzes({
        page: 1,
        activeCategories: quiz?.categories?.map((el) => String(el.id)) || [],
        activeCompleted: ["2"],
        activeSortBy: "total_filled",
        activeSortDirection: "desc",
        limit: 12,
        except_id: quiz?.id,
      }),
    enabled: !!quiz,
  });

  const similarQuizzesData = similarQuizzes?.data;

  return { navigate, quiz, similarQuizzesData, isPending };
}
