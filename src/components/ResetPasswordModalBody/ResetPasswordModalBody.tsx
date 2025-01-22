import React from "react";
import { InputsModalBody } from "../InputsModalBody";
import { Props } from "./types";
import PrimaryButton from "../PrimaryButton";
import useResetPasswordModalBody from "./useResetPasswordModalBody";
import Input from "../Input";

const ResetPasswordModalBody: React.FC<Props> = ({ type }) => {
  const { register, handleSubmit, onSubmit, watch, errors, isPending } =
    useResetPasswordModalBody();
  return (
    <InputsModalBody
      type={type}
      description="Please type something you'll remember"
      title="Reset password"
      titlePosition="up"
      link={{
        name: "Log in",
        href: "/log-in",
        text: "Already have an account?",
      }}
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
        type="password"
        error={errors?.newPassword?.message}
        {...register("newPassword", {
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long", // Custom error message
          },
        })}
        placeholder="must be 8 characters"
      >
        New password
      </Input>
      <Input
        type="password"
        error={errors?.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Password is required",
          validate: (value) =>
            value === watch("newPassword") || "Passwords do not match",
        })}
        placeholder="repeat password"
      >
        Confirm password
      </Input>
    </InputsModalBody>
  );
};

export default ResetPasswordModalBody;
