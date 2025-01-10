import React from "react";
import { Props } from "./types";
import { timeFormatter } from "@/utils/timeFormatter";
import useDesktopTimer from "./useDesktopTimer";
import { updateQuizFinished } from "@/store/slices/quizSlice";

const DesktopTimer: React.FC<Props> = ({ duration }) => {
  const { timer, dispatch } = useDesktopTimer({ duration });

  return (
    <div
      className="min-w-[24.6875rem] pb-10
  border border-white3 rounded-lg relative px-[2rem] shadow-md"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2
      bg-white -translate-y-1/2 w-32 h-12 border 
      border-white3 rounded-lg flex items-center 
      justify-center  shadow-md"
      >
        <p className="font-semibold text-gray">Timer</p>
      </div>
      <div className="flex flex-col items-center mt-12">
        {timer && (
          <h2 className="text-6xl text-gray2">
            {timeFormatter({ seconds: timer, type: "timer" })}
          </h2>
        )}
        <div className="h-px bg-white3 w-full mt-4"></div>
      </div>
      <button
        className="font-semibold rounded-[0.625rem] w-full h-12 
      bg-blue text-white mt-10"
        onClick={() => dispatch(updateQuizFinished(true))}
      >
        Submit
      </button>
    </div>
  );
};

export default DesktopTimer;
