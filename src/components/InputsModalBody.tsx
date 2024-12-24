import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import handImage from "@/assets/images/handImage.png";

const images: { [key: string]: string } = {
  handImage,
};

type ModalBodyProps = {
  type: "desktop" | "mobile";
  title: string;
  titleIcon?: string | undefined;
  description: string;
  link?: {
    name: string;
    href: string;
  };
  children: ReactNode;
  actionBtn: ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Keep this generic
};

const InputsModalBody: React.FC<ModalBodyProps> = ({
  title,
  type,
  description,
  link,
  children,
  actionBtn,
  titleIcon = "empty",
  onSubmit,
}) => {
  const image = images[titleIcon];

  return (
    <div className=" max-h-[80dvh] relative">
      {type === "mobile" && (
        <div
          className="fixed rounded-t-[1.75rem] left-1/2 
                -translate-x-1/2 bg-white w-full h-[2rem]
                flex items-center justify-center"
        >
          <div
            className="w-8 h-1 rounded-full
                bg-gray4 mx-auto  opacity-40"
          ></div>
        </div>
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-[2.5rem]">
        <div className="flex flex-col gap-y-6 text-center mt-10">
          <div
            className={`flex items-center  gap-2
            ${type === "desktop" ? "justify-start" : "justify-center"}`}
          >
            <h2 className="raleway font-extrabold text-[1.875rem]">{title}</h2>
            {image && <img src={image} alt="Hand icon" />}
          </div>
          {type === "mobile" && (
            <div className="flex gap-x-2 justify-center">
              <p className="text-black2 ">{description}</p>
              {link?.name && (
                <Link className="text-blue font-semibold" to={link?.href}>
                  {link?.name}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[2.375rem]">
          <div className="flex flex-col gap-6">{children}</div>
          {actionBtn}
        </div>
      </form>
      {type === "desktop" && (
        <div className="mt-[2.375rem] flex gap-x-2 justify-start">
          <p className="text-black2 ">{description}</p>
          {link?.name && (
            <Link className="text-blue font-semibold" to={link?.href}>
              {link?.name}
            </Link>
          )}
        </div>
      )}
      {type === "mobile" && <div className="pb-12"></div>}
    </div>
  );
};

export default InputsModalBody;
