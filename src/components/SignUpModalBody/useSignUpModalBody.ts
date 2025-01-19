import useSignUp from "@/hooks/useSignUp";
import { ApiError } from "@/types/errors";
import { FormValues } from "@/types/formFields";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignUpModalBody() {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>("");

  useEffect(() => {
    if (checkboxIsChecked) {
      setCheckboxError("");
    }
  }, [checkboxIsChecked]);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, error } = useSignUp();

  const apiError = error as ApiError;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!checkboxIsChecked) {
      setCheckboxError("Please check our policy");
      return;
    }
    mutate(data);
  };

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    handleCheckBoxClick,
    checkboxIsChecked,
    errors,
    serverErrors: apiError?.response?.data?.errors,
    watch,
    checkboxError,
  };
}
