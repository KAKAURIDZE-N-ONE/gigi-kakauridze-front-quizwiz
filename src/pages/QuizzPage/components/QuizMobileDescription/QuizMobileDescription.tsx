import React, { useRef } from "react";
import { Props } from "./props";
import { CategoryItems } from "@/components/CategoryItems";
import Hash from "./svgs/Hash";
import Points from "./svgs/Points";
import Rocket from "./svgs/Rocket";
import Time from "./svgs/Time";
import { timeFormatter } from "@/utils/timeFormatter";
import useGetElementWidth from "@/hooks/useGetElementWidth";
import { Swiper } from "../Swiper";
import { useDispatch } from "react-redux";
import { updateQuizIsStarted } from "@/store/slices/quizSlice";

const QuizMobileDescription: React.FC<Props> = ({ quizz, similarQuizzes }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderWidth = useGetElementWidth(sliderRef);
  const dispatch = useDispatch();

  return (
    <div className="inline-block lg:hidden w-full">
      <div className="flex flex-col gap-8 px-4 lg:px-24">
        <div className="flex flex-col gap-y-4">
          <CategoryItems categories={quizz?.categories || []} />
          <div className="flex flex-col gap-y-4">
            <h1
              className="font-bold text-[2.5rem] raleway
            leading-[2.8rem]"
            >
              {quizz?.title}
            </h1>
            <p className="text-sm text-gray font-semibold">
              {quizz?.description}
            </p>
            <div
              style={{
                backgroundImage: `url(${quizz?.image})`,
                aspectRatio: 1.4379,
              }}
              className="bg-cover bg-no-repeat bg-center
            w-full rounded-[1.25rem]"
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <ul className="las">
            <li className="flex gap-2 items-center pb-3 border-b border-b-white1">
              <Hash />
              <p className="text-gray font-semibold text-sm">
                {quizz?.questions.length} Questions
              </p>
            </li>
            <li className="flex gap-2 items-center py-3 border-b border-b-white1">
              <Points />
              <p className="text-gray font-semibold text-sm">
                {quizz?.questions?.reduce(
                  (sum, question) => sum + question.point,
                  0
                )}{" "}
                Points
              </p>
            </li>
            <li className="flex gap-2 items-center py-3 border-b border-b-white1">
              <Rocket />
              <p className="text-gray font-semibold text-sm">
                {quizz?.total_filled} Plays
              </p>
            </li>
            <li className="flex gap-2 items-center pt-3">
              <Time />
              <p className="text-gray font-semibold text-sm">
                {timeFormatter(Number(quizz?.duration))}m
              </p>
            </li>
          </ul>
          {!quizz?.users?.at(0)?.id && (
            <button
              onClick={() => dispatch(updateQuizIsStarted(true))}
              className="h-[3.5rem] bg-blue text-white
            font-semibold text-lg rounded-[0.625rem]
          "
            >
              Start quizz
            </button>
          )}
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-4 mb-10">
        <h3 className="px-4 lg:px-24 font-semibold text-gray">
          Similar quizzes
        </h3>
        <div>
          <Swiper
            direction="horizontal"
            sliderWidth={sliderWidth}
            quizzes={similarQuizzes}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizMobileDescription;
