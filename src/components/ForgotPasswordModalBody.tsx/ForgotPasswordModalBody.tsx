import Input from "../Input";
import { InputsModalBody } from "../InputsModalBody";
import PrimaryButton from "../PrimaryButton";
import { Props } from "./types";
import useForgotPasswordModalBody from "./useForgotPasswordModalBody";

const ForgotPasswordModalBody: React.FC<Props> = ({ type }) => {
  const { register, handleSubmit, isPending, onSubmit, errors } =
    useForgotPasswordModalBody();

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
          disabled={isPending}
        >
          Send
        </PrimaryButton>
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="email"
        error={errors?.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid email address",
          },
        })}
        placeholder="Your email"
      >
        Email address
      </Input>
    </InputsModalBody>
  );
};

export default ForgotPasswordModalBody;
