import useGetElementWidth from "@/hooks/useGetElementWidth";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function useQuizMobileDescription() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderWidth = useGetElementWidth(sliderRef);
  const dispatch = useDispatch();

  return { sliderWidth, dispatch };
}
