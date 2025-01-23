import { useDispatch } from "react-redux";
import { Filters } from "@/pages/QuizListingPage/types";
import { useEffect, useState } from "react";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import { resetQuizzes, updatePage } from "@/store/slices/quizSlice";
import { HookProps } from "./types";

export default function useFilterBody({ setFilterIsActive }: HookProps) {
  const [activeFilter, setActiveFilter] = useState<"filter" | "sort">("filter");
  const [changeIsMade, setChangeIsMade] = useState<boolean>(false);
  const [filterSearch, setFilterSearch] = useState<string>("");

  const activeLevels = useGetQueryParams("levels");
  const activeCategories = useGetQueryParams("categories");
  const activeCompleted = useGetQueryParams("completed");
  const activeSortBy = useGetQueryParams("sortBy")[0];

  const [sortBy, setSortBy] = useState<string | undefined>(activeSortBy);
  const [filters, setFilters] = useState<Filters>({
    levels: activeLevels,
    categories: activeCategories,
    completed: activeCompleted,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      filters.levels.sort().join(",") !== activeLevels.sort().join(",") ||
      filters.categories.sort().join(",") !==
        activeCategories.sort().join(",") ||
      filters.completed.sort().join(",") !== activeCompleted.sort().join(",") ||
      sortBy !== activeSortBy
    ) {
      setChangeIsMade(true);
    } else {
      setChangeIsMade(false);
    }
  }, [filters.levels, filters.categories, filters.completed, sortBy]);

  const updateQueryParams = useCustomUpdateQueryParams();

  function handleTurnOfModal() {
    setFilterIsActive(false);
  }

  function handleUpdateActiveFilter(filter: "filter" | "sort") {
    setActiveFilter(filter);
  }

  function handleResetFilters() {
    setFilters({
      levels: [],
      categories: [],
      completed: [],
    });
    setSortBy(undefined);
  }

  function handleConfirmClick() {
    dispatch(resetQuizzes());
    dispatch(updatePage(1));
    updateQueryParams("", "", "fill-multiple-fields", false, {
      ...filters,
      sortBy: sortBy ? [sortBy] : [],
    });
    handleTurnOfModal();
  }
  return {
    handleConfirmClick,
    handleResetFilters,
    handleUpdateActiveFilter,
    changeIsMade,
    filterSearch,
    setFilterSearch,
    activeFilter,
    handleTurnOfModal,
    setFilters,
    filters,
    sortBy,
    setSortBy,
  };
}
