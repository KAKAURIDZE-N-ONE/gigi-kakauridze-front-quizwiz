import useLogIn from "@/hooks/useLogIn";
import { ApiErrorSingle } from "@/types/errors";
import { FormValuesLogin } from "@/types/formFields";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignInModalBody() {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const { mutate, error } = useLogIn();

  const apiError = error as ApiErrorSingle;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesLogin>();

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    mutate({ ...data, remember: checkboxIsChecked });
  };

  return {
    checkboxIsChecked,
    register,
    handleSubmit,
    handleCheckBoxClick,
    onSubmit,
    errors,
    serverError: apiError?.response?.data?.message,
  };
}
