import React from "react";
import InputsModalBody from "@/components/InputsModalBody/InputsModalBody";
import Input from "@/components/Input";
import CheckBox from "@/components/CheckBox";
import PrimaryButton from "@/components/PrimaryButton";
import { PropsType } from "./types";
import useSignInModalBody from "./useSignInModalBody";
import { Link } from "react-router-dom";

const SignInModalBody: React.FC<PropsType> = ({ type }) => {
  const {
    register,
    isPending,
    handleSubmit,
    onSubmit,
    errors,
    serverError,
    watch,
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
          disabled={isPending}
        >
          Log in
        </PrimaryButton>
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        error={errors?.email?.message}
        serverError={serverError}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
          checked={watch("remember")}
          register={register("remember")}
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
