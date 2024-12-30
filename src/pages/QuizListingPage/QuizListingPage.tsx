import React from "react";
import Categories from "./components/Categories/Categories";
import FilterButton from "./components/FilterButton/FilterButton";
import QuizzesList from "./components/QuizzesList/QuizzesList";
import LoadMoreButton from "./components/LoadMoreButton";
import Modal from "@/components/Modal/Modal";
import FilterBody from "./components/FilterBody/FilterBody";
import useQuizListing from "./useQuizListing";

const QuizListingPage: React.FC = () => {
  const {
    hasNextPage,
    setHasNextPage,
    filterIsActive,
    windowWidth,
    handleLoadMoreClick,
    handleFilterActiveChange,
    setFilterIsActive,
    desktopFilterRef,
    page,
  } = useQuizListing();

  return (
    <div className="lg:px-24 px-4 pb-4">
      {filterIsActive && windowWidth < 1280 && (
        <Modal>
          <FilterBody type="mobile" setFilterIsActive={setFilterIsActive} />
        </Modal>
      )}
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between
      mt-4 gap-y-4 relative"
      >
        <Categories />
        <div onClick={() => handleFilterActiveChange(true)}>
          <FilterButton />
        </div>
        {filterIsActive && windowWidth >= 1280 && (
          <div
            ref={desktopFilterRef}
            className="absolute bg-white bottom-0 z-30 right-0 translate-y-full opacityAnime"
          >
            <FilterBody type="desktop" setFilterIsActive={setFilterIsActive} />
          </div>
        )}
      </div>
      <QuizzesList setHasNextPage={setHasNextPage} page={page} />
      <div
        onClick={handleLoadMoreClick}
        className="flex justify-center mt-12 mb-8"
      >
        {hasNextPage && <LoadMoreButton />}
      </div>
    </div>
  );
};

export default QuizListingPage;
