import React, { useState } from "react";
import { InputProps } from "@/types/formComponents";
import ClosedEye from "@/assets/svgs/ClosedEye";
import OpenEye from "@/assets/svgs/OpenEye";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, error, serverError, type, placeholder, ...rest }, ref) => {
    const [passwordIsOpen, setPasswordIsOpen] = useState<boolean>(false);

    const hasError = error || serverError;
    return (
      <div className="flex flex-col gap-[0.375rem]">
        <label htmlFor={children} className="text-black2 text-sm">
          {children}
        </label>
        <div className="w-full relative">
          <input
            ref={ref}
            type={
              type
                ? type === "password"
                  ? passwordIsOpen
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            className="placeholder:text-gray h-[3.5rem] rounded-[0.625rem]
          border border-white3 px-4 focus:ring-[0.1875rem] 
          focus:ring-[#BCC7FF] focus:outline-none w-full"
            id={children}
            placeholder={placeholder}
            {...rest}
          />
          {type === "password" && (
            <div
              className="absolute right-5 top-1/2
            -translate-y-1/2 cursor-pointer"
            >
              {passwordIsOpen ? (
                <div onClick={() => setPasswordIsOpen(false)}>
                  <ClosedEye />
                </div>
              ) : (
                <div onClick={() => setPasswordIsOpen(true)}>
                  <OpenEye />
                </div>
              )}
            </div>
          )}
        </div>
        {hasError && (
          <p className="-mb-2 text-sm text-[#F04438]">{error || serverError}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Add a displayName for better debugging in React DevTools
export default Input;
