import { NotFound } from "@/assets/svgs/NotFound";
import NotFoundArrow from "@/assets/svgs/NotFoundArrow";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-6 mb-10 lg: mb-24">
      <div className="flex flex-col gap-4">
        <h1 className="raleway font-black text-[2.5rem]">Oops!</h1>
        <h4 className="font-bold text-lg">Error 400</h4>
      </div>
      <div className="lg:hidden">
        <NotFound size="mobile" />
      </div>
      <div className="hidden lg:inline-block">
        <NotFound size="desktop" />
      </div>
      <Link to="/" className="flex items-center gap-2">
        <NotFoundArrow />
        <p className="text-blue text-lg">Go Home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
