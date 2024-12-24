import React, { useState } from "react";
import Categories from "./components/Categories";
import FilterButton from "./components/FilterButton";
import QuizzesList from "./components/QuizzesList";
import LoadMoreButton from "./components/LoadMoreButton";
import Modal from "@/components/Modal";
import MobileFilterModalBody from "./components/MobileFilterModalBody";
import useWindowWidth from "@/hooks/useWindowWidth";

const QuizListingPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);

  const windowWidth = useWindowWidth();

  function handleLoadMoreClick() {
    setPage((page) => page + 1);
  }

  function handleFilterActiveChange(isActive: boolean) {
    setFilterIsActive(isActive);
  }

  return (
    <div className="lg:px-24 px-4 pb-4">
      {filterIsActive && windowWidth < 1280 && (
        <Modal>
          <MobileFilterModalBody setFilterIsActive={setFilterIsActive} />
        </Modal>
      )}
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between
      mt-4 gap-y-4"
      >
        <Categories />
        <div onClick={() => handleFilterActiveChange(true)}>
          <FilterButton />
        </div>
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
