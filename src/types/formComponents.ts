export type InputProps = {
  children: string;
  placeholder: string;
  type?: string;
  register?: any;
};

export type CheckBoxProps = {
  handleCheckBoxClick: () => void;
  checkboxIsChecked: boolean;
  text: string;
};
