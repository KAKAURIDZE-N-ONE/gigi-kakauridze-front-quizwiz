import useForgotPassword from "@/hooks/useForgotPassword";
import { ForgotPassword } from "@/types/formFields";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useForgotPasswordModalBody() {
  const { register, handleSubmit } = useForm<ForgotPassword>();

  const { mutate } = useForgotPassword();

  const onSubmit: SubmitHandler<ForgotPassword> = async (data) => {
    mutate(data);
  };

  return { register, handleSubmit, onSubmit };
}
  