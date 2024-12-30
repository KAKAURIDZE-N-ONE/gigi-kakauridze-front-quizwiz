import React from "react";
import Logo from "../assets/svgs/LogoIcon";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:h-[16.25rem]">
      <div
        className="h-30  relative z-10 bg-white lg:flex
      border-b border-b-white1 border-t  border-t-white1 lg:gap-[4.5rem] lg:px-24"
      >
        <div className="px-10 lg:px-0">
          <div className="h-18 flex items-center lg:border-b-white border-b border-b-white1">
            <div onClick={() => navigate("/")}>
              <Logo />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col lg:flex-row gap-10 px-10 py-6
          lg:gap-24"
          >
            <div className="flex flex-col gap-4 lg:gap-8">
              <h3 className="text-black1 font-semibold">Content</h3>
              <p className="text-gray2 text-sm">Quizzes</p>
            </div>

            <div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <h3 className="text-black1 font-semibold">Contact us</h3>
                <p className="text-gray2 text-sm">Email: quizwiz@gmail.com</p>
              </div>
              <p className="mt-8 text-gray2 text-sm">Tel: +995 328989</p>
            </div>

            <div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <h3 className="text-black1 font-semibold">Social media</h3>
                <p className="text-gray2 text-sm">Facebook</p>
              </div>
              <p className="mt-8 text-gray2 text-sm">LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="h-18 px-10 flex items-center lg:hidden">
          <p className="text-gray text-smaller font-medium">
            © 2024 QW. All rights reserved
          </p>
        </div>
      </div>
      <div
        className="h-[4.2rem] pr-28 items-center hidden 
      lg:flex justify-end"
      >
        <p className="text-gray text-smaller font-medium translate-y-[0.375rem]">
          © 2024 QW. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
