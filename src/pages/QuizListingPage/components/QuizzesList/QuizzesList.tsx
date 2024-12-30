import QuizCard from "@/components/QuizCard/QuizCard";
import { Quiz } from "@/types";
import useQuizzesList from "./useQuizzesList";
import { PropsType } from "./types";

const QuizzesList: React.FC<PropsType> = ({ page, setHasNextPage }) => {
  const { quizzes } = useQuizzesList(page, setHasNextPage);

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:mt-10 mt-5">
      {quizzes?.map((quiz: Quiz) => {
        return (
          <QuizCard
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
  );
};

export default QuizzesList;
