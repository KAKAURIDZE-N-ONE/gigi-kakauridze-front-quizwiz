import { resetPassword } from "@/services/apiAuth";
import { ResetPasswordApi } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";

export default function useResetPassword() {
  const navigate = useNavigate();
  const { showSuccessToast, showAlertToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: ({
      email,
      token,
      newPassword,
      confirmPassword,
    }: ResetPasswordApi) =>
      resetPassword({ email, token, newPassword, confirmPassword }),
    onSuccess: () => {
      showSuccessToast("Password successfully changed.");
      navigate("/log-in");
    },
    onError: () => {
      showAlertToast("The token has expired.");
    },
  });

  return { mutate };
}
