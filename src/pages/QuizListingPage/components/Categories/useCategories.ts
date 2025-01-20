import useGetQueryParams from "@/hooks/useGetQueryParams";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getCategories } from "@/services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

export default function useCategories() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const activeCategories = useGetQueryParams("categories");
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState<boolean>(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState<boolean>(true);

  const windowWidth = useWindowWidth();

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setIsLeftArrowVisible(scrollLeft > 0);
      setIsRightArrowVisible(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScrollPosition();
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("resize", checkScrollPosition);

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + windowWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - windowWidth / 3,
        behavior: "smooth",
      });
    }
  };
  return {
    activeCategories,
    categories,
    scrollContainerRef,
    scrollToRight,
    scrollToLeft,
    isLeftArrowVisible,
    isRightArrowVisible,
  };
}
