import useResetPassword from "@/hooks/useResetPassword";
import { ResetPasswordForm } from "@/types/formFields";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function useResetPasswordModalBody() {
  const queryParams = new URLSearchParams(location.search);
  const { token } = useParams();
  const email = queryParams.get("email");

  const { mutate: resetPassword } = useResetPassword();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordForm>();

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    if (!token || !email) return;

    resetPassword({
      email,
      token,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    });
  };

  return { watch, register, handleSubmit, onSubmit, errors };
}
