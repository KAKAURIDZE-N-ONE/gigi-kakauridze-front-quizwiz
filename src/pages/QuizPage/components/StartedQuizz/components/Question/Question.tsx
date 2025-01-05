import React from "react";
import { Props } from "./types";
import Info from "../../svgs/Info";
import { Answer } from "../Answer";
import { useSelector } from "react-redux";
import { getSelectedAnswers } from "@/store/slices/quizSlice";
import { RootState } from "@/store/store";

const Question: React.FC<Props> = ({ question, index }) => {
  const correctAnswers = question?.answers?.reduce(
    (sum, answer) => (answer.is_correct ? sum + 1 : sum),
    0
  );
  const selectedAnswers = useSelector((store: RootState) =>
    getSelectedAnswers(store, question.id)
  );

  const hasMultipleAnswers = correctAnswers ? correctAnswers > 1 : false;

  return (
    <div className="flex flex-col gap-y-[1.3rem]">
      <div className="flex items-center gap-4">
        <h3 className="text-blue font-semibold text-sm">Question - {index}</h3>
        <div className="w-[1px] h-[10px] bg-[#D0D5DD]"></div>
        <h3 className="text-red font-semibold text-sm">
          Points - {question?.point}
        </h3>
      </div>
      <h2 className="text-lg font-bold leading-[2.3rem] -mt-2">
        {question?.question}
      </h2>
      {hasMultipleAnswers && (
        <div className="w-full -mt-2">
          <div className="bg-green-50 inline-block">
            <div
              className="flex items-center gap-[0.625rem] bg-[#F6FEF9] 
            border border-[#039855] rounded-[0.25rem] p-2 px-4 
            "
            >
              <Info />
              <p className="font-medium text-[#027A48] text-sm">
                You can select multiple options from questions
              </p>
            </div>
          </div>
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {question?.answers?.map((answer) => {
          const isActive = selectedAnswers?.answer_ids.includes(answer.id);
          return (
            <Answer
              isActive={isActive || false}
              questionId={question?.id}
              key={answer.id}
              answer={answer}
              hasMultipleAnswers={hasMultipleAnswers}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
