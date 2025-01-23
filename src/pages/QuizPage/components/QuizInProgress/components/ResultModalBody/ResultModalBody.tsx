import { Loader } from "@/components/Loader";
import XButton from "@/pages/QuizListingPage/svgs/XButton";
import React from "react";
import CompletedMark from "@/pages/QuizPage/components/QuizInProgress/svgs/CompletedMark";
import useResultModalBody from "./useResultModalBody";
import { Props } from "./types";
import { timeFormatter } from "@/utils/timeFormatter";

const ResultModalBody: React.FC<Props> = ({
  name,
  level,
  questionsQuantity,
}) => {
  const { isPending, handleNavigateHome, userResult } = useResultModalBody();

  return (
    <div className="bg-white w-full mx-4 rounded-xl pt-14 pb-6 relative max-w-[25rem]">
      {isPending && (
        <div
          className=" gap-5 w-full flex 
        flex-col"
        >
          <div
            className="flex items-center 
        justify-center gap-3"
          >
            <Loader />
            <h3 className="text-blue font-semibold">Analyzing results</h3>
          </div>
          <div className="flex flex-col gap-8 px-7">
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <div className="flex flex-col gap-2" key={i}>
                  <div
                    className={`${
                      i === 0 ? "h-7" : "h-5"
                    } bg-gray3 rounded-[0.25rem]`}
                  ></div>
                  <div className="h-5 bg-gray3 rounded-[0.25rem]"></div>
                </div>
              );
            })}
          </div>
          <div className="px-7 mt-3">
            <div className="h-11 w-1/2 ml-auto bg-gray3 rounded-[0.25rem]"></div>
          </div>
        </div>
      )}
      {!isPending && (
        <div className="flex flex-col gap-5">
          <div
            onClick={handleNavigateHome}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <XButton />
          </div>
          <div className="flex justify-center">
            <CompletedMark />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="text-black1 font-semibold text-lg">
                  Quiz finished
                </h2>
                <p className="text-sm text-gray2">your results</p>
              </div>
              <div className="flex flex-col gap-3 px-7">
                <div className="flex flex-col gap-2 pb-3 border-b border-white3">
                  <h3 className="font-medium text-sm text-black2">Quiz Name</h3>
                  <p className="font-medium text-sm">{name}</p>
                </div>
                <div className="flex flex-col gap-2 pb-3 border-b border-white3">
                  <h3 className="font-medium text-sm text-black2">
                    Quiz Level
                  </h3>
                  <p
                    style={{
                      color: `${level.background_color}`,
                    }}
                    className="font-medium text-sm"
                  >
                    {level.level}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pb-3 border-b border-white3">
                  <h3 className="font-medium text-sm text-black2">Time</h3>
                  <p className="font-medium text-sm">
                    {timeFormatter({
                      seconds: userResult?.total_time || 0,
                      type: "timer",
                    })}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pb-3 border-b border-white3">
                  <h3 className="font-medium text-sm text-black2">Mistakes</h3>
                  <p className="font-medium text-sm">
                    {userResult?.correct_quantity
                      ? questionsQuantity - userResult.correct_quantity
                      : questionsQuantity}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pb-3">
                  <h3 className="font-medium text-sm text-black2">
                    Right answers
                  </h3>
                  <p className="font-medium text-sm">
                    {userResult?.correct_quantity}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNavigateHome}
              className="bg-blue rounded-lg 
            font-semibold text-white h-11 mx-7"
            >
              Back to home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultModalBody;
