import React from "react";
import { Props } from "./props";
import SelectedMark from "@/pages/QuizPage/components/QuizInProgress/svgs/SelectedMark";
import UnselectedMark from "@/pages/QuizPage/components/QuizInProgress/svgs/UnselectedMark";
import { useDispatch } from "react-redux";
import { addSelectedAnswer } from "@/store/slices/quizSlice";

const Answer: React.FC<Props> = ({
  answer,
  questionId,
  isActive,
  hasMultipleAnswers,
}) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() =>
        dispatch(
          addSelectedAnswer({
            question_id: questionId,
            answer_id: answer.id,
            replace: hasMultipleAnswers ? false : true,
          })
        )
      }
      className={`${
        isActive ? "bg-[#F5F6FF] border-[#4B69FD66]" : "border-[#EAECF0]"
      } flex items-center justify-between py-4
       rounded-lg border px-4 gap-4 cursor-pointer 
       transition-all duration-200`}
    >
      <p
        className={`${isActive ? "text-blue" : "text-gray2"} 
      text-sm font-normal select-none`}
      >
        {answer.answer}
      </p>
      {isActive ? (
        <div className="opacityAnime">
          <SelectedMark />
        </div>
      ) : (
        <UnselectedMark />
      )}
    </li>
  );
};

export default Answer;
