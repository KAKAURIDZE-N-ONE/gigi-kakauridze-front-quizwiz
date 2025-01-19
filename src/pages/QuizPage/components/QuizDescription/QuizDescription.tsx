import React from "react";
import useQuizDescription from "./useQuizDescription";
import { QuizMobileDescription } from "../QuizMobileDescription";
import { QuizDesktopDescription } from "../QuizDesktopDescription";

const QuizDescription: React.FC = () => {
  const { navigate, quiz, similarQuizzesData, isPending } =
    useQuizDescription();
  return (
    <>
      {isPending && (
        <div
          className="w-full h-[80vh] 
      flex items-center justify-center"
        >
          <div className="-translate-y-10">
            <div className="loader "></div>
          </div>
        </div>
      )}
      {!isPending && (
        <div className="py-6">
          <QuizMobileDescription
            quiz={quiz}
            similarQuizzes={similarQuizzesData}
          />
          <QuizDesktopDescription
            quiz={quiz}
            navigate={navigate}
            similarQuizzes={similarQuizzesData}
          />
        </div>
      )}
    </>
  );
};

export default QuizDescription;
