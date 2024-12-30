import React from "react";
import CheckBoxMarked from "../assets/svgs/CheckBoxMarked";
import CheckBoxUnmarked from "../assets/svgs/CheckBoxUnmarked";
import { CheckBoxProps } from "types/formComponents";

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
