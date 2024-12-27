import React, { useRef, useState } from "react";
import Categories from "./components/Categories";
import FilterButton from "./components/FilterButton";
import QuizzesList from "./components/QuizzesList";
import LoadMoreButton from "./components/LoadMoreButton";
import Modal from "@/components/Modal";
import useWindowWidth from "@/hooks/useWindowWidth";
import FilterBody from "./components/FilterBody";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useSelector } from "react-redux";
import { getPage, updatePage } from "@/store/slices/quizSlice";
import { useDispatch } from "react-redux";

const QuizListingPage: React.FC = () => {
  const desktopFilterRef = useRef<HTMLDivElement | null>(null);
  const page = useSelector(getPage);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();

  useOutsideClick(desktopFilterRef, () => setFilterIsActive(false));

  function handleLoadMoreClick() {
    dispatch(updatePage(page + 1));
  }

  function handleFilterActiveChange(isActive: boolean) {
    setFilterIsActive(isActive);
  }

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
