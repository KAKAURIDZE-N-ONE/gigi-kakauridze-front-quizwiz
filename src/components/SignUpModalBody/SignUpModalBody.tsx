import React from "react";
import InputsModalBody from "../InputsModalBody/InputsModalBody";
import Input from "../Input";
import CheckBox from "../CheckBox";
import PrimaryButton from "../PrimaryButton";
import { PropsType } from "./types";
import useSignUpModalBody from "./useSignUpModalBody";

const SignUpModalBody: React.FC<PropsType> = ({ type }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleCheckBoxClick,
    checkboxIsChecked,
  } = useSignUpModalBody();

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
