import React, { useState } from "react";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "@/utils/apiAuth";
import { FormValues } from "@/types";

type ModalBodyProps = {
  type: "desktop" | "mobile";
};

const SignUpModalBody: React.FC<ModalBodyProps> = ({ type }) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!checkboxIsChecked) return;
    await signUp(data);
    // console.log(response);
  };

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  return (
    <InputsModalBody
      type={type}
      description="Already have an account?"
      title="Create account"
      link={{ name: "Log in", href: "/log-in" }}
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
        placeholder="Your username"
        {...register("name", { required: "Name is required" })}
      >
        Username
      </Input>
      <Input
        placeholder="Example@gmail.com"
        type="email"
        {...register("email", { required: "Email is required" })}
      >
        Email
      </Input>
      <Input
        placeholder="must be 8 characters"
        {...register("password", {
          required: "Password is required",
          minLength: 8,
        })}
      >
        Create a password
      </Input>
      <Input
        placeholder="must be 8 characters"
        {...register("passwordRepeat", {
          required: "Password is required",
          minLength: 8,
        })}
      >
        Confirm password
      </Input>
      <CheckBox
        text="I accept the terms and privacy policy"
        handleCheckBoxClick={handleCheckBoxClick}
        checkboxIsChecked={checkboxIsChecked}
      />
    </InputsModalBody>
  );
};

export default SignUpModalBody;
