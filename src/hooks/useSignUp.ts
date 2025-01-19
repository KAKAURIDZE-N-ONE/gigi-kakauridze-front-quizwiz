import { signUp } from "@/services/apiAuth";
import { FormValues } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";

export default () => {
  const { showSuccessToast, showErrorToast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormValues) => signUp(data),
    onSuccess: () => {
      showSuccessToast("We sent a confirmation email.");
      navigate("/log-in");
    },
    onError: (error) => {
      showErrorToast("Sign up failed");
      console.error("Sign up failed", error);
    },
  });
};
