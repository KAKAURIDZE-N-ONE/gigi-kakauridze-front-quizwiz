import useCustomUpdateQueryParams from "@/hooks/useUpdateQueryParams";
import { useDispatch } from "react-redux";

export default function useCategories() {
  const customUpdateQueryParams = useCustomUpdateQueryParams();
  const dispatch = useDispatch();

  return { customUpdateQueryParams, dispatch };
}
