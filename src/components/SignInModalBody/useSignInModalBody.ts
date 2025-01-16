import useLogIn from "@/hooks/useLogIn";
import { FormValuesLogin } from "@/types/formFields";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSignInModalBody() {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const { mutate } = useLogIn();

  const { register, handleSubmit } = useForm<FormValuesLogin>();

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    mutate(data);
  };

  return {
    checkboxIsChecked,
    register,
    handleSubmit,
    handleCheckBoxClick,
    onSubmit,
  };
}
