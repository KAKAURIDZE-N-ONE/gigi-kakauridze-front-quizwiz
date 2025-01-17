import React from "react";
import { InputsModalBody } from "../InputsModalBody";
import { Props } from "./types";
import PrimaryButton from "../PrimaryButton";
import useResetPasswordModalBody from "./useResetPasswordModalBody";
import Input from "../Input";

const ResetPasswordModalBody: React.FC<Props> = ({ type }) => {
  const { register, handleSubmit, onSubmit } = useResetPasswordModalBody();
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
        >
          Log in
        </PrimaryButton>
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("newPassword", {
          required: "Password is required",
          minLength: 8,
        })}
        placeholder="must be 8 characters"
      >
        New password
      </Input>
      <Input
        {...register("confirmPassword", {
          required: "Password is required",
          minLength: 8,
        })}
        placeholder="repeat password"
      >
        Confirm password
      </Input>
    </InputsModalBody>
  );
};

export default ResetPasswordModalBody;
