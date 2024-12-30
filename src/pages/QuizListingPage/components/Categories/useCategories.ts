import useGetQueryParams from "@/hooks/useGetQueryParams";
import { getCategories } from "@/services/apiQuiz";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const activeCategories = useGetQueryParams("categories");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return { activeCategories, categories };
}
