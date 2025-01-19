import React from "react";
import InputsModalBody from "../InputsModalBody/InputsModalBody";
import Input from "../Input";
import CheckBox from "../CheckBox";
import PrimaryButton from "../PrimaryButton";
import { PropsType } from "./types";
import useSignInModalBody from "./useSignInModalBody";
import { Link } from "react-router-dom";

const SignInModalBody: React.FC<PropsType> = ({ type }) => {
  const {
    checkboxIsChecked,
    register,
    handleSubmit,
    handleCheckBoxClick,
    onSubmit,
    errors,
    serverError,
  } = useSignInModalBody();

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
        error={errors?.email?.message}
        type="email"
        serverError={serverError}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid email address",
          },
        })}
        placeholder="Your email"
      >
        Email address
      </Input>
      <Input
        type="password"
        error={errors?.password?.message}
        serverError={serverError}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
        })}
        placeholder="Your password"
      >
        Password
      </Input>
      <div className="flex items-center justify-between">
        <CheckBox
          handleCheckBoxClick={handleCheckBoxClick}
          checkboxIsChecked={checkboxIsChecked}
          text="Remember for 30 days"
        />
        <Link className="text-sm text-[#344054]" to="/forgot-password">
          Forgot password?
        </Link>
      </div>
    </InputsModalBody>
  );
};

export default SignInModalBody;
