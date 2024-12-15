import React, { useState } from "react";
import InputsModal from "./InputsModal";
import InputsModalBody from "./InputsModalBody";
import Input from "./Input";
import CheckBox from "./CheckBox";
import PrimaryButton from "./PrimaryButton";
import ModalTitleIcon from "./svgs/ModalTitleIcon";

const SignUpModalBody: React.FC = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);

  function handleCheckBoxClick() {
    setCheckboxIsChecked((status) => !status);
  }

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
      >
        <Input placeholder="Your email">Email address</Input>
        <Input placeholder="must be 8 characters">Password</Input>
        <Input placeholder="must be 8 characters">Confirm password</Input>
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
