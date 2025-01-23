import { MobileFilterBodyLayout } from "@/pages/QuizListingPage/components/MobileFilterBodyLayout";
import { FilterSortBody } from "@/pages/QuizListingPage/components/FilterSortBody";
import { DesktopFilterBodyLayout } from "@/pages/QuizListingPage/components/DesktopFilterBodyLayout";
import { PropsType } from "./types";
import useFilterBody from "./useFilterBody";
import FilterFilterBody from "../FilterFilterBody/FilterFilterBody";

const FilterBody: React.FC<PropsType> = ({ setFilterIsActive, type }) => {
  const {
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
  } = useFilterBody({ setFilterIsActive });

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
