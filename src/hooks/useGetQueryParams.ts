import { useSearchParams } from "react-router-dom";

const useGetQueryParams = (field: string) => {
  const [searchParams] = useSearchParams();

  const values = searchParams.get(field);
  return values ? values.split(",") : [];
};

export default useGetQueryParams;
