import React from "react";
import useQuizInProgress from "./useQuizInProgress";
import Mark from "@/pages/QuizPage/components/svgs/Mark";
import { CategoryItems } from "@/components/CategoryItems";
import Hash from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Hash";
import Rocket from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Rocket";
import Time from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Time";
import { timeFormatter } from "@/utils/timeFormatter";
import Points from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Points";
import { Question } from "./components/Question";
import { MobileTimer } from "./components/MobileTimer";
import DesktopTimer from "./components/DesktopTimer./DesktopTimer";
import { Modal } from "@/components/Modal";
import { ResultModalBody } from "./components/ResultModalBody";

const QuizInProgress: React.FC = () => {
  const { quiz, quizFinished } = useQuizInProgress();

  return (
    <>
      {quiz?.duration && (
        <MobileTimer quizId={quiz?.id} duration={quiz.duration} />
      )}
      <div className="px-4 lg:px-[5.875rem] mt-4 lg:mt-8 pb-14">
        {quizFinished && quiz && (
          <Modal>
            <ResultModalBody
              questionsQuantity={quiz.questions.length}
              name={quiz.title}
              level={quiz.level}
            />
          </Modal>
        )}
        <h1
          className="raleway text-[2.5rem]
        font-bold text-center"
        >
          {quiz?.title}
        </h1>
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Mark />
              <CategoryItems
                isInStarted={true}
                categories={quiz?.categories || []}
              />
            </div>
            <div className="w-px h-3 bg-[#D0D5DD]"></div>
            <div className="flex items-center gap-2">
              <Hash />
              <p className="text-gray font-semibold text-sm">
                {quiz?.questions.length} Questions
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket />
              <p className="text-gray font-semibold text-sm">
                {quiz?.total_filled} Plays
              </p>
            </div>
            <div className="w-px h-3 bg-[#D0D5DD]"></div>
            <div className="flex items-center gap-2">
              <Time />
              <p className="text-gray font-semibold text-sm">
                {quiz?.duration && timeFormatter({ seconds: quiz.duration })}m
              </p>
            </div>
            <div className="w-px h-3 bg-[#D0D5DD]"></div>
            <div className="flex items-center gap-2">
              <Points />
              <p className="text-gray font-semibold text-sm">
                {quiz?.questions.reduce(
                  (sum, question) => sum + question.point,
                  0
                )}{" "}
                Points
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-x-12 relative overflow-visible">
          <div className="mt-12 flex flex-col gap-12 w-full">
            {quiz?.questions.map((question, index) => {
              return (
                <Question index={index} key={question.id} question={question} />
              );
            })}
          </div>
          {quiz?.duration && (
            <div className="mt-12 hidden lg:inline-block">
              <div className="sticky top-12 left-0">
                <DesktopTimer quizId={quiz?.id} duration={quiz.duration} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizInProgress;
