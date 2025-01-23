import { useAuthentication } from "@/hooks/useAuthentication";
import useGetFilteredFilters from "@/pages/QuizListingPage/hooks/useGetFilteredFilters";
import { Filters } from "@/pages/QuizListingPage/types";
import { HookType } from "./types";

export default function useFilterFilterBody({
  filterSearch,
  setFilters,
}: HookType) {
  const { isAuthenticated } = useAuthentication();

  const { categories, levels } = useGetFilteredFilters(filterSearch);

  function handleLevelOrCategoryClick(
    levelOrCategoryId: number,
    levelOrCategory: "levels" | "categories" | "completed"
  ) {
    setFilters((oldFilters: Filters) => {
      const updatedFilters = { ...oldFilters };
      if (updatedFilters[levelOrCategory].includes(String(levelOrCategoryId))) {
        updatedFilters[levelOrCategory] = oldFilters[levelOrCategory].filter(
          (el) => el !== String(levelOrCategoryId)
        );
      } else {
        updatedFilters[levelOrCategory] = [
          ...oldFilters[levelOrCategory],
          String(levelOrCategoryId),
        ];
      }
      return updatedFilters;
    });
  }

  return { isAuthenticated, categories, levels, handleLevelOrCategoryClick };
}
