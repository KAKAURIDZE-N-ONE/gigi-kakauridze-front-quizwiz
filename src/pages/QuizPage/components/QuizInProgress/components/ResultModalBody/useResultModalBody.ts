import { getUserResult, updateQuizIsStarted } from "@/store/slices/quizSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSubmitQuiz from "../../hooks/useSubmitQuiz";

export default function useResultModalBody() {
  const userResult = useSelector(getUserResult);
  const { isPending } = useSubmitQuiz();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigateHome() {
    navigate("/");
    dispatch(updateQuizIsStarted(false));
  }

  return { isPending, handleNavigateHome, userResult };
}
