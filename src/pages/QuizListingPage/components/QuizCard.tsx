import React from "react";
import IconLayout from "./IconLayout";
import MarkIcon from "../svgs/MarkIcon";
import LightningIcon from "../svgs/LightningIcon";
import PointsIcon from "../svgs/PointsIcon";
import { Category, Difficulties, PivotUser, Question } from "@/types";
import BulbIcon from "../svgs/BulbIcon";
import { timeFormatter } from "@/utils/timeFormatter";

const difficulties: Difficulties = {
  easy: {
    iconColor: "#175CD3",
    bgColor: "#EFF8FF",
  },
  medium: {
    iconColor: "#7F56D9",
    bgColor: "#F4EBFF",
  },
  hard: {
    iconColor: "#DC6803",
    bgColor: "#FEF0C7",
  },
};

type QuizCardProps = {
  title: string;
  categories: Category[];
  image: string;
  userDetails: PivotUser | undefined;
  total_filled: number;
  difficulty: string;
  questions: Question[];
};

const QuizCard: React.FC<QuizCardProps> = ({
  image,
  title,
  categories,
  userDetails,
  total_filled,
  difficulty,
  questions,
}) => {
  const isFilledByUser = userDetails !== undefined;

  const selectedDifficulty = difficulties[difficulty as keyof Difficulties];

  const totalAvailablePoints = isFilledByUser
    ? questions.reduce((sum, el) => sum + el.point, 0)
    : null;

  return (
    <div
      className="pt-6 px-6 pb-8 flex gap-8 flex-col 
    shadow-lg"
    >
      <div
        style={{ backgroundImage: `url(${image})`, aspectRatio: 1.4444 }}
        className="bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="flex flex-col gap-y-[1.25rem]">
        <div className="flex flex-col gap-y-3">
          <ul className="flex gap-9 items-center">
            {categories.map((category, i, categories) => {
              const needDot = i + 1 < categories.length;
              return (
                <li className="relative" key={i}>
                  <p className="text-blue text-sm font-semibold">
                    {category.name}
                  </p>
                  {needDot && (
                    <div
                      key={i + 0.5}
                      className="w-1 h-1 bg-[#D0D5DD] rounded-full
                      absolute top-1/2 -translate-y-1/2 -right-5"
                    ></div>
                  )}
                </li>
              );
            })}
          </ul>
          <h4 className="font-semibold text-2xl">{title}</h4>
        </div>
        <div className="flex gap-[1.375rem] items-center">
          <div className="flex gap-3 items-center">
            <IconLayout bgColor={isFilledByUser ? "#D1FADF" : "#F6F6F7"}>
              {isFilledByUser ? <MarkIcon /> : <BulbIcon />}
            </IconLayout>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm text-black1">
                {isFilledByUser ? "Completed" : "Not Completed"}
              </h4>
              <h5 className="text-sm text-gray2">
                {isFilledByUser ? "20 Jan, 2022" : "Date,Time"}
              </h5>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-sm text-black1">Total time</h4>
            <h5 className="text-sm text-gray2">
              {isFilledByUser
                ? `${timeFormatter(userDetails?.total_time)} Minute`
                : "N/A"}
            </h5>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-sm text-black1">Total users</h4>
            <h5 className="text-sm text-gray2">{total_filled}</h5>
          </div>
        </div>
        <div className="flex gap-[1.25rem] items-center">
          <div className="flex gap-3 items-center">
            <IconLayout bgColor={selectedDifficulty?.bgColor}>
              <LightningIcon iconColor={selectedDifficulty.iconColor} />
            </IconLayout>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm text-black1">
                Difficulty level
              </h4>
              <h5 className="text-sm text-gray2">{difficulty}</h5>
            </div>
          </div>
          {isFilledByUser && (
            <div className="flex gap-3 items-center">
              <IconLayout bgColor="#FCE7F6">
                <PointsIcon />
              </IconLayout>
              <div className="flex flex-col">
                <h4 className="font-semibold text-sm text-black1">Points</h4>
                <h5 className="text-sm text-gray2">
                  {userDetails.user_result}/{totalAvailablePoints}
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
