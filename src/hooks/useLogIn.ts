import { logIn } from "@/services/apiAuth";
import { FormValuesLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default () => {
  return useMutation({
    mutationFn: (data: FormValuesLogin) => logIn(data),
    onError: (error) => {
      console.error("Log in failed", error);
    },
  });
};
