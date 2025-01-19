import { verifyUserEmail } from "@/services/apiAuth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PropsType } from "./types";
import useToast from "@/hooks/useToast";

export default function useEmailVerificationPage() {
  const location = useLocation();
  const [isPending, setIsPending] = useState<Boolean>(false);
  const queryParams = new URLSearchParams(location.search);

  const { hash, id } = useParams<PropsType>();
  const expires = queryParams.get("expires");
  const signature = queryParams.get("signature");
  const navigate = useNavigate();
  const { showAlertToast, showSuccessToast } = useToast();

  useEffect(() => {
    if (!id || !hash || !expires || !signature) {
      return;
    }
    const verifyEmail = async () => {
      try {
        setIsPending(true);
        const data = await verifyUserEmail({ hash, id, expires, signature });
        console.log(data);
        setIsPending(false);
        showSuccessToast("User successfully authenticated.");
        navigate("/log-in");
      } catch {
        showAlertToast("Sorry Token expired");
        navigate("/");
      }
    };

    verifyEmail();
  }, [hash, id, expires, signature, navigate]);

  return { isPending };
}
