import { CATEGORIES_COUNT, QUIZZES_COUNT } from "@/config/queryKeys";
import { getCategoriesLength } from "@/services/apiCategories";
import { getQuizzesQuantity } from "@/services/apiQuiz";
import { useQuery } from "@tanstack/react-query";

export default function useHero() {
  const { data: categoriesData } = useQuery({
    queryKey: [CATEGORIES_COUNT],
    queryFn: getCategoriesLength,
  });

  const { data: quizzesData } = useQuery({
    queryKey: [QUIZZES_COUNT],
    queryFn: getQuizzesQuantity,
  });

  return { categoriesData, quizzesData };
}
