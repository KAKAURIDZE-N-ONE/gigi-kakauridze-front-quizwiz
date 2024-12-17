import React, { useState } from "react";
import InputsModal from "./InputsModal";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "../utils/apiAuth";

export type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const SignUpModalBody: React.FC = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await signUp(data);
    // console.log(response);
  };

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  return (
    <InputsModal>
      <InputsModalBody
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
          placeholder="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
        >
          Example@gmail.com
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
    </InputsModal>
  );
};

export default SignUpModalBody;
