import useGetQueryParams from "@/hooks/useGetQueryParams";

export default function useFilterButton() {
  const activeLevels = useGetQueryParams("levels");
  const activeCategories = useGetQueryParams("categories");
  const activeCompleted = useGetQueryParams("completed");

  const filtersQuantity =
    activeLevels.length + activeCategories.length + activeCompleted.length;

  return { filtersQuantity };
}
