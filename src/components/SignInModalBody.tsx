import React, { useState } from "react";
import InputsModal from "./InputsModal";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";
import ModalTitleIcon from "./svgs/ModalTitleIcon";
import { SubmitHandler, useForm } from "react-hook-form";
import { logIn } from "../utils/apiAuth";
import { useLocation } from "react-router-dom";

export type FormValuesLogin = {
  email: string;
  password: string;
  token?: string | null;
};

const SignUpModalBody: React.FC = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const token = queryParams.get("token");

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValuesLogin>();

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    await logIn({ ...data, token });
  };

  return (
    <InputsModal>
      <InputsModalBody
        description="Don't have an account?"
        title="Hi, Welcome!"
        titleIcon={<ModalTitleIcon />}
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
    </InputsModal>
  );
};

export default SignUpModalBody;
