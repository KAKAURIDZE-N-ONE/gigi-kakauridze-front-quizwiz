import React from "react";
import CheckBoxMarked from "./svgs/CheckBoxMarked";
import CheckBoxUnmarked from "./svgs/CheckBoxUnmarked";

type CheckBoxProps = {
  handleCheckBoxClick: () => void;
  checkboxIsChecked: boolean;
  text: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  handleCheckBoxClick,
  checkboxIsChecked,
  text,
}) => {
  return (
    <div className="flex gap-x-3 items-center">
      <div onClick={handleCheckBoxClick} className="cursor-pointer">
        {checkboxIsChecked ? <CheckBoxMarked /> : <CheckBoxUnmarked />}
      </div>
      <p className="text-black2 text-[0.8125rem]">{text}</p>
    </div>
  );
};

export default CheckBox;
