export type InputProps = {
  children: string;
  placeholder: string;
  type?: "password" | "email";
  register?: any;
  error: string | undefined;
  serverError?: string | undefined;
};

export type CheckBoxProps = {
  handleCheckBoxClick: () => void;
  checkboxIsChecked: boolean;
  text: string;
};
