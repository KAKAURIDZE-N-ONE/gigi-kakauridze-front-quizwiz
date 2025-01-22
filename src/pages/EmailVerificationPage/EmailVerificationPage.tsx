import React from "react";
import useEmailVerificationPage from "./useEmailVerificationPage";

const EmailVerificationPage: React.FC = () => {
  const { isPending } = useEmailVerificationPage();

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isPending && (
        <div className="flex flex-col items-center gap-9">
          <h1 className="text-4xl raleway font-bold">
            Please wait, verifying.
          </h1>
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default EmailVerificationPage;
