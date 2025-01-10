import useOutsideClick from "@/hooks/useOutsideClick";
import useScrollTo from "@/hooks/useScrollTo";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getPage, updatePage } from "@/store/slices/quizSlice";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function useQuizListing() {
  const desktopFilterRef = useRef<HTMLDivElement | null>(null);
  const page = useSelector(getPage);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();

  useOutsideClick(desktopFilterRef, () => setFilterIsActive(false));

  useScrollTo({});

  function handleLoadMoreClick() {
    dispatch(updatePage(page + 1));
  }

  function handleFilterActiveChange(isActive: boolean) {
    setFilterIsActive(isActive);
  }

  return {
    hasNextPage,
    setHasNextPage,
    filterIsActive,
    windowWidth,
    handleLoadMoreClick,
    handleFilterActiveChange,
    setFilterIsActive,
    desktopFilterRef,
    page,
  };
}
