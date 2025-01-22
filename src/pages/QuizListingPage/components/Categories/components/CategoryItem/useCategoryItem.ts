import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import { resetQuizzes, updatePage } from "@/store/slices/quizSlice";
import { useDispatch } from "react-redux";
import { ClickFn } from "./types";

export default function useCategoryItem() {
  const customUpdateQueryParams = useCustomUpdateQueryParams();

  function handleCategoryItemClick({ name, id, isActive }: ClickFn) {
    if (name !== "All Quizzes") {
      if (!isActive) customUpdateQueryParams("categories", String(id), "add");
      else customUpdateQueryParams("categories", String(id), "remove");
    } else {
      customUpdateQueryParams("categories", "", "clear-field");
    }

    if (!isActive) {
      dispatch(resetQuizzes());
      dispatch(updatePage(1));
    }
  }

  const dispatch = useDispatch();

  return { handleCategoryItemClick };
}
