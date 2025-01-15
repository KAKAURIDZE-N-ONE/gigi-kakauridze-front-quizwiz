import { getCategoriesLength } from "@/services/apiCategories";
import { getQuizzesQuantity } from "@/services/apiQuiz";
import { useQuery } from "@tanstack/react-query";

export default function useHero() {
  const { data: categoriesData } = useQuery({
    queryKey: ["categories-count"],
    queryFn: getCategoriesLength,
  });

  const { data: quizzesData } = useQuery({
    queryKey: ["quizzes-count"],
    queryFn: getQuizzesQuantity,
  });

  return { categoriesData, quizzesData };
}
