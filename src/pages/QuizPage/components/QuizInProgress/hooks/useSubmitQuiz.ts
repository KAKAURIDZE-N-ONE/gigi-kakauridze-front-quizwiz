import { submitQuiz } from "@/services/apiQuiz";
import {
  getAllSelectedAnswers,
  updateUserResult,
} from "@/store/slices/quizSlice";
import { SelectedAnswersCombination } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function useSubmitQuiz() {
  const dispatch = useDispatch();

  const selectedAnswers = useSelector(getAllSelectedAnswers);

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      quizId,
      selectedAnswers,
    }: {
      quizId: number;
      selectedAnswers: SelectedAnswersCombination[];
    }) => submitQuiz({ quizId, selectedAnswers }),
    onSuccess: (response) => {
      console.log(selectedAnswers);
      const submitResult = {
        total_time: response?.data?.uploaded_quiz?.total_time,
        user_result: response?.data?.uploaded_quiz?.user_result,
      };
      dispatch(updateUserResult(submitResult));
    },
  });

  return { mutate, isPending };
}
