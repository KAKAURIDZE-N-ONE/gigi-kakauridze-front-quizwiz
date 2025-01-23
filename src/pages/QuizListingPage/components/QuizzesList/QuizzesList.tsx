import QuizCard from "@/components/QuizCard/QuizCard";
import { Quiz } from "@/types";
import useQuizzesList from "./useQuizzesList";
import { PropsType } from "./types";
import { NotFound } from "@/assets/svgs/NotFound";

const QuizzesList: React.FC<PropsType> = ({ page, setHasNextPage }) => {
  const { quizzes, isPending } = useQuizzesList(page, setHasNextPage);

  return (
    <>
      {quizzes?.length === 0 && !isPending && (
        <div className="mt-10 lg:mt-20 gap-11 flex items-center justify-center flex-col">
          <h1 className="font-black raleway text-2xl">Sorry quiz not found!</h1>
          <div>
            <div className="lg:hidden">
              <NotFound size="mobile" />
            </div>
            <div className="hidden lg:inline-block">
              <NotFound size="desktop" />
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:mt-10 mt-5">
        {quizzes?.map((quiz: Quiz) => {
          return (
            <QuizCard
              type="listing"
              id={quiz.id}
              image={quiz.image}
              categories={quiz.categories}
              title={quiz.title}
              userDetails={quiz?.users?.at(0)}
              key={quiz.id}
              total_filled={quiz.total_filled}
              questions={quiz?.questions}
              level={quiz.level}
            />
          );
        })}
      </div>
      {isPending && page === 1 && (
        <div className={`h-[80vh] flex items-center justify-center`}>
          <div className="-translate-y-14">
            <div className="loader "></div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizzesList;
