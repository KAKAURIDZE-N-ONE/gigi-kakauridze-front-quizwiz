import { replace, useSearchParams } from "react-router-dom";

type OperationType = "add" | "remove" | "clear-field";

const useCustomUpdateQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const customUpdateQueryParams = (
    field: string,
    value: string,
    operation: OperationType,
    replace: Boolean = false
  ) => {
    const params = Object.fromEntries(searchParams);

    if (operation === "add") {
      if (!replace) {
        const existingValue = searchParams.get(field);
        if (existingValue) {
          const values = existingValue.split(",");
          if (!values.includes(value)) {
            params[field] = [...values, value].join(",");
          }
        } else {
          params[field] = value;
        }
      } else {
        params[field] = value;
      }
    } else if (operation === "remove") {
      delete params[field];
    } else if (operation === "clear-field") {
      delete params[field];
    }

    setSearchParams(params);
  };

  return customUpdateQueryParams;
};

export default useCustomUpdateQueryParams;
