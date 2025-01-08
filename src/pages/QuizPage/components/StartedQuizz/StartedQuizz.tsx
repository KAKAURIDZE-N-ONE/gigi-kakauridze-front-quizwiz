import React from "react";
import useStartedQuizz from "./useStartedQuizz";
import Mark from "../svgs/Mark";
import { CategoryItems } from "@/components/CategoryItems";
import Hash from "../QuizMobileDescription/svgs/Hash";
import Rocket from "../QuizMobileDescription/svgs/Rocket";
import Time from "../QuizMobileDescription/svgs/Time";
import { timeFormatter } from "@/utils/timeFormatter";
import Points from "../QuizMobileDescription/svgs/Points";
import { Question } from "./components/Question";

const StartedQuizz: React.FC = () => {
  const { quizz } = useStartedQuizz();

  return (
    <div className="px-4 mt-8 pb-14">
      <h1
        className="raleway text-[2.5rem]
      font-bold text-center"
      >
        {quizz?.title}
      </h1>
      <div className="mt-4 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Mark />
            <CategoryItems
              isInStarted={true}
              categories={quizz?.categories || []}
            />
          </div>
          <div className="w-[1px] h-3 bg-[#D0D5DD]"></div>
          <div className="flex items-center gap-2">
            <Hash />
            <p className="text-gray font-semibold text-sm">
              {quizz?.questions.length} Questions
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Rocket />
            <p className="text-gray font-semibold text-sm">
              {quizz?.total_filled} Plays
            </p>
          </div>
          <div className="w-[1px] h-3 bg-[#D0D5DD]"></div>
          <div className="flex items-center gap-2">
            <Time />
            <p className="text-gray font-semibold text-sm">
              {timeFormatter(Number(quizz?.duration))}m
            </p>
          </div>
          <div className="w-[1px] h-3 bg-[#D0D5DD]"></div>
          <div className="flex items-center gap-2">
            <Points />
            <p className="text-gray font-semibold text-sm">
              {quizz?.questions.reduce(
                (sum, question) => sum + question.point,
                0
              )}{" "}
              Points
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex relative overflow-visible">
        <div className="mt-12 flex flex-col gap-12 w-full">
          {quizz?.questions.map((question, index) => {
            return (
              <Question index={index} key={question.id} question={question} />
            );
          })}
        </div>
        <div className="w-20 h-10 bg-red sticky top-0"></div>
      </div>
    </div>
  );
};

export default StartedQuizz;
