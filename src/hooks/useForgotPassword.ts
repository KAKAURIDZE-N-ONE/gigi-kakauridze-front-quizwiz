import { forgotPassword } from "@/services/apiAuth";
import { ForgotPassword } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";
import useToast from "./useToast";

export default function useForgotPassword() {
  const { showSuccessToast, showErrorToast } = useToast();
  const { mutate } = useMutation({
    mutationFn: ({ email }: ForgotPassword) => forgotPassword({ email }),
    onSuccess: () => {
      showSuccessToast("Please check the reset link in your email.");
    },
    onError: () => {
      showErrorToast("Something went wrong.");
    },
  });

  return { mutate };
}
