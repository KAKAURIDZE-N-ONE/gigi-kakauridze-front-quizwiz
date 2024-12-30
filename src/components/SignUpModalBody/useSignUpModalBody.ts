import useSignUp from "@/hooks/useSignUp";
import { FormValues } from "@/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignUpModalBody() {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormValues>();

  const { mutate } = useSignUp();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!checkboxIsChecked) return;
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
  };
}
