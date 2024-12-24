import { logIn } from "@/services/apiAuth";
import { updateModalIsOpen } from "@/store/slices/modalSlice";
import { FormValuesLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: FormValuesLogin) => logIn(data),
    onError: (error) => {
      console.error("Log in failed", error);
    },
    onSuccess: () => {
      navigate("/quizzes");
      dispatch(updateModalIsOpen(false));
    },
  });
};
