import { submitQuiz } from "@/services/apiQuiz";
import { updateUserResult } from "@/store/slices/quizSlice";
import { SelectedAnswersCombination } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export default function useSubmitQuiz() {
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      quizId,
      selectedAnswers,
      timer,
    }: {
      quizId: number;
      selectedAnswers: SelectedAnswersCombination[];
      timer: number;
    }) => submitQuiz({ quizId, selectedAnswers, timer }),
    onSuccess: (response) => {
      const submitResult = {
        total_time: response?.data?.uploaded_quiz?.total_time,
        correct_quantity: response?.data?.uploaded_quiz?.correct_quantity,
      };
      dispatch(updateUserResult(submitResult));
    },
  });

  return { mutate, isPending };
}
