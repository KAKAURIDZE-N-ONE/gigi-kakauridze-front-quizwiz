import { forgotPassword } from "@/services/apiAuth";
import { ForgotPassword } from "@/types/formFields";
import { useMutation } from "@tanstack/react-query";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateMobileForgotPasswordIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";

export default function useForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSuccessToast, showErrorToast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ email }: ForgotPassword) => forgotPassword({ email }),
    onSuccess: () => {
      showSuccessToast("Please check the reset link in your email.");
      dispatch(updateMobileForgotPasswordIsOpen(false));
      dispatch(updateModalIsOpen(false));
      navigate("/");
    },
    onError: () => {
      showErrorToast("Something went wrong.");
    },
  });

  return { mutate, isPending };
}
