import React from "react";
import useEmailVerificationPage from "./useEmailVerificationPage";

const EmailVerificationPage: React.FC = () => {
  const { isPending } = useEmailVerificationPage();

  return <div>{isPending && <h1>Is Loading...</h1>}</div>;
};

export default EmailVerificationPage;
