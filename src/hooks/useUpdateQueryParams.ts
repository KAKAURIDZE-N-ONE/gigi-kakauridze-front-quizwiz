import { useSearchParams } from "react-router-dom";

type OperationType = "add" | "fill-multiple-fields" | "clear-field" | "remove";

const useCustomUpdateQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const customUpdateQueryParams = (
    field?: string,
    value?: string,
    operation: OperationType = "add",
    replace: Boolean = false,
    anyObject: { [key: string]: string[] } = {}
  ) => {
    const params = Object.fromEntries(searchParams);

    if (operation === "add" && field && value) {
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
    } else if (operation === "remove" && field && value) {
      const existingValues = searchParams.get(field);
      if (existingValues) {
        const valuesArray = existingValues.split(",");
        const filteredValues = valuesArray.filter((el) => el !== value);
        if (filteredValues.length > 0) params[field] = filteredValues.join(",");
        else delete params[field];
      }
    } else if (operation === "fill-multiple-fields") {
      for (let [field, values] of Object.entries(anyObject)) {
        if (values.length > 0) {
          params[field] = values.join(",");
        } else {
          delete params[field];
        }
      }
    } else if (operation === "clear-field" && field) {
      delete params[field];
    }
    setSearchParams(params);
  };

  return customUpdateQueryParams;
};

export default useCustomUpdateQueryParams;
