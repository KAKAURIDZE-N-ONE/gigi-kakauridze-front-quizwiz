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

export default function useGetQuizzes(
  page: number,
  setHasNextPage: React.Dispatch<React.SetStateAction<boolean>>
) {
  const quizzes = useSelector(getQuizzesState);
  const dispatch = useDispatch();

  const activeLevels = useGetQueryParams("levels");
  const activeCategories = useGetQueryParams("categories");
  const activeCompleted = useGetQueryParams("completed");
  const activeSortBy = useGetQueryParams("sortBy")[0];

  const { data, isPending, error } = useQuery({
    queryKey: [
      "quizzes",
      page,
      JSON.stringify(activeLevels),
      JSON.stringify(activeCategories),
      JSON.stringify(activeCompleted),
      activeSortBy,
    ],
    queryFn: () => {
      return getQuizzes(
        page,
        { activeLevels, activeCategories, activeCompleted },
        activeSortBy
      );
    },
    refetchOnWindowFocus: false,
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
