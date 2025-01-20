import useLogIn from "@/hooks/useLogIn";
import { ApiErrorSingle } from "@/types/errors";
import { FormValuesLogin } from "@/types/formFields";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignInModalBody() {
  const { mutate, error } = useLogIn();

  const apiError = error as ApiErrorSingle;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValuesLogin>();

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    mutate({ ...data });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    serverError: apiError?.response?.data?.message,
    watch,
  };
}
