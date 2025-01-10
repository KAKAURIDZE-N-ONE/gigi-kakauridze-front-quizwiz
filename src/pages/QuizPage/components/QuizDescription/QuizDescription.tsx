import React from "react";
import useQuizDescription from "./useQuizDescription";
import { QuizMobileDescription } from "../QuizMobileDescription";
import { QuizDesktopDescription } from "../QuizDesktopDescription";

const QuizDescription: React.FC = () => {
  const { navigate, quiz, similarQuizzesData } = useQuizDescription();

  return (
    <div className="py-6">
      <QuizMobileDescription quiz={quiz} similarQuizzes={similarQuizzesData} />
      <QuizDesktopDescription
        quiz={quiz}
        navigate={navigate}
        similarQuizzes={similarQuizzesData}
      />
    </div>
  );
};

export default QuizDescription;
