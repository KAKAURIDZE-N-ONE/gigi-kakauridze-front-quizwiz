import React from "react";
import { QuizDescription } from "./components/QuizDescription";
import { QuizInProgress } from "./components/QuizInProgress";
import { useSelector } from "react-redux";
import { getQuizIsStarted } from "@/store/slices/quizSlice";

const QuizPage: React.FC = () => {
  const quizIsStarted = useSelector(getQuizIsStarted);

  return (
    <div className="relative">
      {quizIsStarted ? <QuizInProgress /> : <QuizDescription />}
    </div>
  );
};

export default QuizPage;
