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
    isPending,
    onSubmit,
    errors,
    serverErrors,
    watch,
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
          disabled={isPending}
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
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        })}
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
          checked={watch("acceptTerms")}
          text="I accept the terms and privacy policy"
          register={register("acceptTerms", {
            required: "You must accept the terms and conditions",
          })}
        />
        {errors?.acceptTerms && (
          <p className="-mb-2 text-sm text-[#F04438]">
            {errors?.acceptTerms?.message}
          </p>
        )}
      </div>
    </InputsModalBody>
  );
};

export default SignUpModalBody;
