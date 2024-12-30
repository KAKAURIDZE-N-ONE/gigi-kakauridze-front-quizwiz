import React from "react";
import InputsModal from "./InputsModal/InputsModal";
import InputsModalBody from "./InputsModalBody/InputsModalBody";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

const ForgorPasswordModalBody: React.FC = () => {
  return (
    <InputsModal>
      <InputsModalBody
        description="Don't worry! It happens. Please enter the email associated with your account."
        title="Forgot password?"
        actionBtn={
          <PrimaryButton
            type="submit"
            size="big"
            clickFn={() => {}}
            rounded="rounded-[0.625rem]"
          >
            Send
          </PrimaryButton>
        }
      >
        <Input placeholder="Your email">Email address</Input>
      </InputsModalBody>
    </InputsModal>
  );
};

export default ForgorPasswordModalBody;
