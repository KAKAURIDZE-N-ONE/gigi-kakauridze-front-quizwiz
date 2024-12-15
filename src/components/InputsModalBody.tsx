import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type ModalBodyProps = {
  title: string;
  titleIcon?: ReactNode;
  description: string;
  link?: {
    name: string;
    href: string;
  };
  children: ReactNode;
  actionBtn: ReactNode;
};

const InputsModalBody: React.FC<ModalBodyProps> = ({
  title,
  description,
  link,
  children,
  actionBtn,
  titleIcon,
}) => {
  return (
    <div className="pb-16">
      <form className="flex flex-col gap-[2.5rem]">
        <div
          className="flex flex-col gap-y-6 text-center
        mt-10"
        >
          <div className="flex justify-center items-center gap-2">
            <h2
              className="raleway font-extrabold text-[1.875rem]
            "
            >
              {title}
            </h2>
            {titleIcon}
          </div>
          <div className="flex gap-x-2 justify-center">
            <p className="text-black2 ">{description}</p>
            {link?.name && (
              <Link
                className="text-blue font-semibold
            "
                to={link?.href}
              >
                {link?.name}
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[2.375rem]">
          <div className="flex flex-col gap-6">{children}</div>
          {actionBtn}
        </div>
      </form>
    </div>
  );
};

export default InputsModalBody;
