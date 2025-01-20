import React from "react";
import CheckBoxMarked from "../assets/svgs/CheckBoxMarked";
import CheckBoxUnmarked from "../assets/svgs/CheckBoxUnmarked";
import { CheckBoxProps } from "types/formComponents";

const CheckBox: React.FC<CheckBoxProps> = ({ text, register, checked }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <label htmlFor="myCheckbox" className="cursor-pointer">
        <input
          {...register}
          type="checkbox"
          id="myCheckbox"
          className="hidden"
        />
        {checked ? <CheckBoxMarked /> : <CheckBoxUnmarked />}
      </label>
      <label htmlFor="myCheckbox" className="text-black2 text-sm">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
