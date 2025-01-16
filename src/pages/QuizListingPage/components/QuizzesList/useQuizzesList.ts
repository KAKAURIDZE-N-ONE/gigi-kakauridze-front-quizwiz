import useGetQueryParams from "@/hooks/useGetQueryParams";
import { getQuizzes } from "@/services/apiQuiz";
import {
  addQuizzes,
  getQuizzesState,
  resetQuizzes,
} from "@/store/slices/quizSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sortByItems } from "../../config";
import { QUIZZES_LIMIT } from "./config";
import { quizzes as quizzesKey } from "@/config/queryKeys";

export default function useQuizzesList(
  page: number,
  setHasNextPage: React.Dispatch<React.SetStateAction<boolean>>
) {
  const quizzes = useSelector(getQuizzesState);
  const dispatch = useDispatch();

  const activeLevels = useGetQueryParams("levels");
  const activeCategories = useGetQueryParams("categories");
  const activeCompleted = useGetQueryParams("completed");
  const activeSortByName = useGetQueryParams("sortBy")[0];
  const search = useGetQueryParams("search")?.at(0);

  const activeSortBy = sortByItems.find(
    (sortItem) => sortItem.name === activeSortByName
  );

  const { data, isPending, error } = useQuery({
    queryKey: [
      quizzesKey,
      page,
      activeLevels,
      activeCategories,
      activeCompleted,
      activeSortBy?.tableName,
      activeSortBy?.direction,
      search,
    ],
    queryFn: () => {
      return getQuizzes({
        activeSortDirection: activeSortBy?.direction,
        activeSortBy: activeSortBy?.tableName,
        page,
        activeLevels,
        activeCategories,
        activeCompleted,
        limit: QUIZZES_LIMIT,
        search,
      });
    },
  });

  useEffect(() => {
    if (data) {
      if (data.next_page_url === null) setHasNextPage(false);
      else setHasNextPage(true);

      if (data?.data && data?.data.length > 0) {
        if (page === 1) {
          dispatch(resetQuizzes());
        }
        dispatch(addQuizzes(data?.data));
      }
    }
  }, [data]);

  return { quizzes, isPending, error };
}
