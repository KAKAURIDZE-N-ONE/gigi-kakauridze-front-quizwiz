import React, { useState } from "react";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValuesLogin } from "@/types";
import useLogIn from "@/hooks/useLogIn";

type ModalBodyProps = {
  type: "desktop" | "mobile";
};

const SignUpModalBody: React.FC<ModalBodyProps> = ({ type }) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const { mutate, isPending, isError } = useLogIn();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValuesLogin>();

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    mutate(data);
  };

  return (
    <InputsModalBody
      type={type}
      description="Don't have an account?"
      title="Hi, Welcome!"
      titleIcon={"handImage"}
      link={{ name: "Sign up", href: "/sign-up" }}
      actionBtn={
        <PrimaryButton
          type="submit"
          size="big"
          clickFn={() => {}}
          rounded="rounded-[0.625rem]"
        >
          Log in
        </PrimaryButton>
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("email", { required: "Email is required" })}
        placeholder="Your email"
      >
        Email address
      </Input>
      <Input
        {...register("password", {
          required: "Password is required",
          minLength: 8,
        })}
        placeholder="must be 8 characters"
      >
        Password
      </Input>
      {/* <Input placeholder="must be 8 characters">Confirm password</Input> */}
      <CheckBox
        handleCheckBoxClick={handleCheckBoxClick}
        checkboxIsChecked={checkboxIsChecked}
        text="Remember for 30 days"
      />
    </InputsModalBody>
  );
};

export default SignUpModalBody;
