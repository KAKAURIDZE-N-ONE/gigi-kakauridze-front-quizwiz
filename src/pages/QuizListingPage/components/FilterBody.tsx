import { useEffect, useState } from "react";
import { Filters } from "../types";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import MobileFilterBodyLayout from "./MobileFilterBodyLayout";
import FilterFilterBody from "./FilterFilterBody";
import FilterSortBody from "./FilterSortBody";
import DesktopFilterBodyLayout from "./DesktopFilterBodyLayout";
import { useDispatch } from "react-redux";
import { resetQuizzes, updatePage } from "@/store/slices/quizSlice";

type BodyProps = {
  setFilterIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  type: "desktop" | "mobile";
};

const FilterBody: React.FC<BodyProps> = ({ setFilterIsActive, type }) => {
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
    setSortBy("");
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

  if (type === "mobile")
    return (
      <MobileFilterBodyLayout
        handleConfirmClick={handleConfirmClick}
        handleResetFilters={handleResetFilters}
        handleUpdateActiveFilter={handleUpdateActiveFilter}
        setFilterSearch={setFilterSearch}
        handleTurnOfModal={handleTurnOfModal}
        activeFilter={activeFilter}
        changeIsMade={changeIsMade}
      >
        {activeFilter === "filter" && (
          <FilterFilterBody
            setFilters={setFilters}
            handleTurnOfModal={handleTurnOfModal}
            filterSearch={filterSearch}
            filters={filters}
          />
        )}
        {activeFilter === "sort" && (
          <FilterSortBody sortBy={sortBy} setSortBy={setSortBy} />
        )}
      </MobileFilterBodyLayout>
    );
  else if (type === "desktop") {
    return (
      <DesktopFilterBodyLayout
        handleResetFilters={handleResetFilters}
        handleTurnOfModal={handleTurnOfModal}
        setFilterSearch={setFilterSearch}
        handleConfirmClick={handleConfirmClick}
        changeIsMade={changeIsMade}
        SortBody={
          <FilterSortBody
            type="desktop"
            key={1}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        }
        FilterBody={
          <FilterFilterBody
            type="desktop"
            key={2}
            setFilters={setFilters}
            handleTurnOfModal={handleTurnOfModal}
            filterSearch={filterSearch}
            filters={filters}
          />
        }
      />
    );
  }
};

export default FilterBody;
