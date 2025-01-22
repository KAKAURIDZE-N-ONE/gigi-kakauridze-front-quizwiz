export type BtnProps = {
  children: string;
  clickFn: () => void;
  rounded?: string;
  size?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type ButtonProps = {
  children: string;
  clickFn: () => void;
};
