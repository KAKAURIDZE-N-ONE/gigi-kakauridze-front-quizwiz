import { logOut } from "@/services/apiAuth";
import { updateModalIsOpen } from "@/store/slices/modalSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });

      dispatch(updateModalIsOpen(false));
      navigate("/");
    },
    onError: (error) => {
      console.error("Error logging out:", error);
    },
  });

  return { logout: mutate };
}
