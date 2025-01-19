export type Props = {
  headerInput: string;
  setHeaderInput: React.Dispatch<React.SetStateAction<string>>;
  setMobileSearchIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "mobile";
};
