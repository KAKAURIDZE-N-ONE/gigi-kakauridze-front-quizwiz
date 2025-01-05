import React from "react";
import useQuizDescription from "./useQuizDescription";
import { QuizMobileDescription } from "../QuizMobileDescription";
import { QuizDesktopDescription } from "../QuizDesktopDescription";

const QuizDescription: React.FC = () => {
  const { navigate, quizz, similarQuizzesData } = useQuizDescription();

  return (
    <div className="py-6">
      <QuizMobileDescription
        quizz={quizz}
        similarQuizzes={similarQuizzesData}
      />
      <QuizDesktopDescription
        quizz={quizz}
        navigate={navigate}
        similarQuizzes={similarQuizzesData}
      />
    </div>
  );
};

export default QuizDescription;
