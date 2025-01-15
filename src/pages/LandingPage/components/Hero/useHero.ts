import queryKeys from "@/config/queryKeys";
import { getCategoriesLength } from "@/services/apiCategories";
import { getQuizzesQuantity } from "@/services/apiQuiz";
import { useQuery } from "@tanstack/react-query";

export default function useHero() {
  const { data: categoriesData } = useQuery({
    queryKey: [queryKeys.categoriesCount],
    queryFn: getCategoriesLength,
  });

  const { data: quizzesData } = useQuery({
    queryKey: [queryKeys.quizzesCount],
    queryFn: getQuizzesQuantity,
  });

  return { categoriesData, quizzesData };
}
