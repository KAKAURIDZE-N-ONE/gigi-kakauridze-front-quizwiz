import ButtonBack from "@/components/ButtonBack";
import React from "react";
import { Props } from "./types";
import { CategoryItems } from "@/components/CategoryItems";
import Hash from "../QuizMobileDescription/svgs/Hash";
import Points from "../QuizMobileDescription/svgs/Points";
import Rocket from "../QuizMobileDescription/svgs/Rocket";
import Time from "../QuizMobileDescription/svgs/Time";
import { timeFormatter } from "@/utils/timeFormatter";
import { Swiper } from "../Swiper";
import { updateQuizIsStarted } from "@/store/slices/quizSlice";
import { useDispatch } from "react-redux";

const QuizDesktopDescription: React.FC<Props> = ({
  navigate,
  quiz,
  similarQuizzes,
}) => {
  const dispatch = useDispatch();

  const isSubmitted = !quiz?.users?.at(0)?.id;
  return (
    <div className="hidden px-24 lg:flex flex-col gap-6 h-[100rem]">
      <div onClick={() => navigate(-1)}>
        <ButtonBack />
      </div>
      <div className="flex gap-10 relative h-full justify-between">
        <div className="w-full">
          <div className="w-full sticky top-24 left-0">
            <div className="w-full flex gap-14   ">
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold raleway text-[2.5rem]">
                    {quiz?.title}
                  </h1>
                  <CategoryItems categories={quiz?.categories || []} />
                  <p className="text-gray text-sm font-semibold">
                    {quiz?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-10">
                  <ul className="flex items-center gap-3 text-nowrap">
                    <li className="flex items-center gap-2">
                      <Hash />
                      <p className="text-gray text-sm font-semibold">
                        {quiz?.questions.length} Questions
                      </p>
                    </li>
                    <li className="w-[1px] h-3 bg-[#D0D5DD]"></li>
                    <li className="flex items-center gap-2">
                      <Points />
                      <p className="text-gray text-sm font-semibold">
                        {quiz?.questions?.reduce(
                          (sum, question) => sum + question.point,
                          0
                        )}{" "}
                        Points
                      </p>
                    </li>
                    <li className="w-[1px] h-3 bg-[#D0D5DD]"></li>
                    <li className="flex items-center gap-2">
                      <Rocket />
                      <p className="text-gray text-sm font-semibold">
                        {quiz?.total_filled} Plays
                      </p>
                    </li>
                    <li className="w-[1px] h-3 bg-[#D0D5DD]"></li>
                    <li className="flex items-center gap-2">
                      <Time />
                      <p className="text-gray text-sm font-semibold">
                        {quiz?.duration &&
                          timeFormatter({ seconds: quiz.duration })}
                        m
                      </p>
                    </li>
                  </ul>
                  {isSubmitted ? (
                    <button
                      onClick={() => dispatch(updateQuizIsStarted(true))}
                      className="bg-blue h-12 rounded-[0.625rem]
                  font-semibold text-white max-w-[20.875rem]"
                    >
                      Start quizz
                    </button>
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
              </div>
              <div className="relative w-full max-w-[21rem]">
                <div
                  style={{
                    backgroundImage: `url(${quiz?.image})`,
                    aspectRatio: 1.1,
                  }}
                  className="bg-no-repeat bg-cover bg-center rounded-[1.25rem] 
                w-full  mx-auto absolute top-0 left-0"
                ></div>
              </div>
            </div>
            <div
              className="pt-8 border-t border-[#0000001A] flex flex-col 
            gap-4 mt-16"
            >
              <h3 className="font-bold text-lg">Instructions</h3>
              <p>{quiz?.instructions}</p>
            </div>
          </div>
        </div>
        {similarQuizzes && (
          <div className="min-w-[24rem] ">
            <Swiper
              direction="vertical"
              quizzes={similarQuizzes}
              sliderWidth={100}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDesktopDescription;
