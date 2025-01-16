import { forgotPassword } from "@/services/apiAuth";
import { ForgotPassword } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";

export default function useForgotPassword() {
  const { mutate } = useMutation({
    mutationFn: ({ email }: ForgotPassword) => forgotPassword({ email }),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { mutate };
}
