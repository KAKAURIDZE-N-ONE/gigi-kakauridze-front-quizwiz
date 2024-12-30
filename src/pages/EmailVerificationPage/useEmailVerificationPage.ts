import { verifyUserEmail } from "@/services/apiAuth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PropsType } from "./types";

export default function useEmailVerificationPage() {
  const location = useLocation();
  const [isPending, setIsPending] = useState<Boolean>(false);
  const queryParams = new URLSearchParams(location.search);

  const { hash, id } = useParams<PropsType>();
  const expires = queryParams.get("expires");
  const signature = queryParams.get("signature");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !hash || !expires || !signature) {
      return;
    }
    const verifyEmail = async () => {
      setIsPending(true);
      await verifyUserEmail({ hash, id, expires, signature });
      setIsPending(false);
      navigate("/log-in");
    };

    verifyEmail();
  }, [hash, id, expires, signature, navigate]);

  return { isPending };
}
