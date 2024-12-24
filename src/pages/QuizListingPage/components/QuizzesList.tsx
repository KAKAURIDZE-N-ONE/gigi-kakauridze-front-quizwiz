import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { useQuery } from "@tanstack/react-query";
import { getQuizzes } from "@/services/apiQuiz";
import { Quiz } from "@/types";

type QuizzesListProps = {
  page: number;
  setHasNextPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuizzesList: React.FC<QuizzesListProps> = ({ page, setHasNextPage }) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const { data, isPending, error } = useQuery({
    queryKey: ["quizzes", page],
    queryFn: () => getQuizzes(page),
  });

  useEffect(() => {
    if (data) {
      if (data.next_page_url === null) setHasNextPage(false);
      else setHasNextPage(true);

      if (data?.data) {
        setQuizzes((prevQuizzes) => [...prevQuizzes, ...data?.data]);
      }
    }
  }, [data]);

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
            difficulty={quiz.difficulty}
            questions={quiz?.questions}
          />
        );
      })}
    </div>
  );
};

export default QuizzesList;
