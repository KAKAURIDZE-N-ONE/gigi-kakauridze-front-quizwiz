import React from "react";
import Mark from "@/pages/QuizPage/components/svgs/Mark";
import Hash from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Hash";
import Points from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Points";
import Rocket from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Rocket";
import Time from "@/pages/QuizPage/components/QuizMobileDescription/svgs/Time";
import { Props } from "./types";
import { timeFormatter } from "@/utils/timeFormatter";
import useMobileTimer from "./useMobileTimer";
import {
  resetSelectedAnswers,
  updateQuizFinished,
} from "@/store/slices/quizSlice";

const MobileTimer: React.FC<Props> = ({ duration, quizId }) => {
  const { timer, dispatch, id, mutate, selectedAnswers } = useMobileTimer({
    duration,
    quizId,
  });

  return (
    <div
      className="w-full bg-white z-10 lg:hidden px-4 
      sticky top-0 left-0 py-[1.1875rem] shadow-md"
    >
      <div className="flex flex-col">
        <div className="h-px bg-white3"></div>
        <div className="mt-4 flex items-center gap-[0.625rem] h-[3.75rem]">
          <div
            className="py-[0.5875rem] flex flex-col px-4
            gap-[0.35rem] h-full border border-white3 bg-gray3 
            rounded-lg pr-24"
          >
            <p className="text-smaller font-bold raleway">
              Timeline of Discoveries
            </p>
            <div className="flex items-center gap-[0.8125rem]">
              <Mark size="small" />
              <div className="w-px h-3 bg-[#D0D5DD4D]"></div>
              <Hash size="small" />
              <div className="w-px h-3 bg-[#D0D5DD4D]"></div>
              <Points size="small" />
              <div className="w-px h-3 bg-[#D0D5DD4D]"></div>
              <Rocket size="small" />
              <div className="w-px h-3 bg-[#D0D5DD4D]"></div>
              <Time size="small" />
            </div>
          </div>
          <div
            className="py-[0.5875rem] flex flex-col px-4
          w-full h-full border border-white3 bg-gray3 
          rounded-lg"
          >
            <p className="text-smaller font-bold raleway">Timer</p>
            <h3
              className={`${
                timer ? (timer <= 10 ? "text-red" : "text-gray2") : "text-red"
              } -mt-[0.075rem] font-semibold text-xl`}
            >
              {timer
                ? timeFormatter({ seconds: timer, type: "timer" })
                : "0 : 00"}
            </h3>
          </div>
        </div>
        {id && (
          <button
            className="h-[3.75rem] text-white rounded-[0.625rem]
        bg-blue font-semibold  mt-4"
            onClick={() => {
              dispatch(updateQuizFinished(true));
              mutate({ quizId, selectedAnswers, timer: timer || duration });
              dispatch(resetSelectedAnswers());
            }}
          >
            Submit
          </button>
        )}
        <div className="h-px bg-white3 mt-4"></div>
      </div>
    </div>
  );
};

export default MobileTimer;
