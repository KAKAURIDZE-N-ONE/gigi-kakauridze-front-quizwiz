import { verifyUserEmail } from "@/services/apiAuth";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type VerificationParams = {
  id: string;
  hash: string;
};

const EmailVerificationPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { hash, id } = useParams<VerificationParams>();
  const expires = queryParams.get("expires");
  const signature = queryParams.get("signature");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !hash || !expires || !signature) {
      return;
    }
    const verifyEmail = async () => {
      await verifyUserEmail({ hash, id, expires, signature });
      navigate("/log-in");
    };

    verifyEmail();
  }, [hash, id, expires, signature, navigate]);

  return <div></div>;
};

export default EmailVerificationPage;
