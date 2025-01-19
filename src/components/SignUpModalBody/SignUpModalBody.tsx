import React from "react";
import InputsModalBody from "../InputsModalBody/InputsModalBody";
import Input from "../Input";
import CheckBox from "../CheckBox";
import PrimaryButton from "../PrimaryButton";
import { Props } from "./types";
import useSignUpModalBody from "./useSignUpModalBody";

const SignUpModalBody: React.FC<Props> = ({ type }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleCheckBoxClick,
    checkboxIsChecked,
    errors,
    serverErrors,
    watch,
    checkboxError,
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
        error={errors?.name?.message}
        serverError={serverErrors?.name?.at(0)}
        placeholder="Your username"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long", // Custom error message
          },
        })}
      >
        Username
      </Input>
      <Input
        error={errors.email?.message}
        serverError={serverErrors?.email?.at(0)}
        placeholder="Example@gmail.com"
        type="email"
        {...register("email", { required: "Email is required" })}
      >
        Email
      </Input>
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.password?.at(0)}
        placeholder="must be 8 characters"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
        })}
      >
        Create a password
      </Input>
      <Input
        type="password"
        error={errors.passwordRepeat?.message}
        serverError={serverErrors?.passwordRepeat?.at(0)}
        placeholder="must be 8 characters"
        {...register("passwordRepeat", {
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      >
        Confirm password
      </Input>
      <div className="flex flex-col gap-2">
        <CheckBox
          text="I accept the terms and privacy policy"
          handleCheckBoxClick={handleCheckBoxClick}
          checkboxIsChecked={checkboxIsChecked}
        />
        {checkboxError && (
          <p className="-mb-2 text-sm text-[#F04438]">{checkboxError}</p>
        )}
      </div>
    </InputsModalBody>
  );
};

export default SignUpModalBody;
