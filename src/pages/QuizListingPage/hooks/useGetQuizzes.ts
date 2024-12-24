import { getQuizzes } from "@/services/apiQuiz";
import { Quiz } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useGetQuizzes(
  page: number,
  setHasNextPage: React.Dispatch<React.SetStateAction<boolean>>
) {
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

  return { quizzes, isPending, error };
}
