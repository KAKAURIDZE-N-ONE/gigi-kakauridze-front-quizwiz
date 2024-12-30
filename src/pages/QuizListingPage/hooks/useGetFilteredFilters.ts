import { getCategories, getLevels } from "@/services/apiQuiz";
import { Category, Level } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useGetFilteredFilters(filterSearch: string) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);

  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: levelsData } = useQuery({
    queryKey: ["levels"],
    queryFn: getLevels,
  });

  useEffect(() => {
    if (levelsData) {
      setLevels(levelsData);
    }
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [levelsData, categoriesData]);

  useEffect(() => {
    if (filterSearch) {
      const filteredCategories = categoriesData.filter((category: Category) =>
        category.name.includes(filterSearch)
      );
      const filteredLevels = levelsData.filter((level: Level) =>
        level.level.includes(filterSearch)
      );
      setCategories(filteredCategories);
      setLevels(filteredLevels);
    } else {
      setCategories(categoriesData);
      setLevels(levelsData);
    }
  }, [filterSearch]);

  return { categories, levels };
}
