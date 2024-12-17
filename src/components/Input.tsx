import React from "react";

type InputProps = {
  children: string;
  placeholder: string;
  type?: string;
  register?: any;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-[0.375rem]">
        <label htmlFor={children} className="text-black2 text-sm">
          {children}
        </label>
        <input
          ref={ref} // Forward the ref to the input element
          className="placeholder:text-gray h-[3.5rem] rounded-[0.625rem]
          border border-white3 px-4 focus:ring-[0.1875rem] 
          focus:ring-[#BCC7FF] focus:outline-none"
          id={children}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input"; // Add a displayName for better debugging in React DevTools
export default Input;
