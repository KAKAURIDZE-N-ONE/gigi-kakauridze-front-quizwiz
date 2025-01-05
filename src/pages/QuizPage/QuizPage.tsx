import React from "react";
import { QuizDescription } from "./components/QuizDescription";
import { StartedQuizz } from "./components/StartedQuizz";
import { useSelector } from "react-redux";
import { getQuizIsStarted } from "@/store/slices/quizSlice";

const QuizPage: React.FC = () => {
  const quizIsStarted = useSelector(getQuizIsStarted);

  return (
    <div className="overflow-hidden">
      {quizIsStarted ? <StartedQuizz /> : <QuizDescription />}
    </div>
  );
};

export default QuizPage;
