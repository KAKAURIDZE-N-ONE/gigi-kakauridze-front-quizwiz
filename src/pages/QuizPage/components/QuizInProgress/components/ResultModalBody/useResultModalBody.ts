import { getUserResult, updateQuizIsStarted } from "@/store/slices/quizSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useResultModalBody() {
  const userResult = useSelector(getUserResult);
  const isLoading = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigateHome() {
    navigate("/");
    dispatch(updateQuizIsStarted(false));
  }

  return { isLoading, handleNavigateHome, userResult };
}
