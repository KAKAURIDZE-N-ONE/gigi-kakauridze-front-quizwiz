import { FOOTER } from "@/config/queryKeys";
import { getFooterData } from "@/services/apiFooter";
import { getQuizIsStarted } from "@/store/slices/quizSlice";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useFooter() {
  const navigate = useNavigate();
  const quizzIsStarted = useSelector(getQuizIsStarted);

  const { data } = useQuery({
    queryFn: getFooterData,
    queryKey: [FOOTER],
  });

  return { navigate, quizzIsStarted, data };
}
