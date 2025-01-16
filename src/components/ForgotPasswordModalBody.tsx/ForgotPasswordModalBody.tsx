import Input from "../Input";
import { InputsModalBody } from "../InputsModalBody";
import PrimaryButton from "../PrimaryButton";
import { Props } from "./types";
import useForgotPasswordModalBody from "./useForgotPasswordModalBody";

const ForgotPasswordModalBody: React.FC<Props> = ({ type }) => {
  const { register, handleSubmit, onSubmit } = useForgotPasswordModalBody();

  return (
    <InputsModalBody
      type={type}
      description="Don't worry! It happens. Please enter the email associated with your account."
      title="Forgot password?"
      titlePosition="up"
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("email", { required: "Email is required" })}
        placeholder="Your email"
      >
        Email address
      </Input>
    </InputsModalBody>
  );
};

export default ForgotPasswordModalBody;
