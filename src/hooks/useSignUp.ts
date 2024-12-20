import { signUp } from "@/services/apiAuth";
import { FormValues } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default () => {
  return useMutation({
    mutationFn: (data: FormValues) => signUp(data),
    onError: (error) => {
      console.error("Sign up failed", error);
    },
  });
};
