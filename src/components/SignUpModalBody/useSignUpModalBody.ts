import useSignUp from "@/hooks/useSignUp";
import { ApiError } from "@/types/errors";
import { FormValues } from "@/types/formFields";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignUpModalBody() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      acceptTerms: false,
    },
  });

  const { mutate, error } = useSignUp();

  const apiError = error as ApiError;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    serverErrors: apiError?.response?.data?.errors,
    watch,
  };
}
