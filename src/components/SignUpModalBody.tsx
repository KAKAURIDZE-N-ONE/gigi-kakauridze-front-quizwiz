import React, { useState } from "react";
import InputsModal from "./InputsModal";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";

const SignUpModalBody: React.FC = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

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
      >
        <Input placeholder="Your username">Username</Input>
        <Input placeholder="Email">Example@gmail.com</Input>
        <Input placeholder="must be 8 characters">Create a password</Input>
        <Input placeholder="must be 8 characters">Confirm password</Input>
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
