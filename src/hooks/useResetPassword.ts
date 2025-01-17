import { resetPassword } from "@/services/apiAuth";
import { ResetPasswordApi } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: ({
      email,
      token,
      newPassword,
      confirmPassword,
    }: ResetPasswordApi) =>
      resetPassword({ email, token, newPassword, confirmPassword }),
    onSuccess: (data) => {
      console.log(data);
      navigate("/log-in");
    },
  });

  return { mutate };
}
