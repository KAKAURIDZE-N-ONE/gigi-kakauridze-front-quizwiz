import React from "react";
import { IconLayout } from "../../pages/QuizListingPage/components/IconLayout";
import MarkIcon from "../../pages/QuizListingPage/svgs/MarkIcon";
import LightningIcon from "../../pages/QuizListingPage/svgs/LightningIcon";
import PointsIcon from "../../pages/QuizListingPage/svgs/PointsIcon";
import BulbIcon from "../../pages/QuizListingPage/svgs/BulbIcon";
import { timeFormatter } from "@/utils/timeFormatter";
import useQuizCard from "./useQuizCard";
import { Props } from "./types";

const QuizCard: React.FC<Props> = ({
  image,
  title,
  categories,
  userDetails,
  total_filled,
  questions,
  level,
}) => {
  const { totalAvailablePoints, isFilledByUser } = useQuizCard({
    questions,
    userDetails,
  });

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
              {isFilledByUser && userDetails
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
            <IconLayout isLevel={true} bgColor={level?.background_color}>
              <LightningIcon iconColor={level?.icon_color} />
            </IconLayout>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm text-black1">
                Difficulty level
              </h4>
              <h5 className="text-sm text-gray2">{level?.level}</h5>
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
                  {userDetails && userDetails.user_result}/
                  {totalAvailablePoints}
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
