import useTimer from "@/hooks/useTimer";
import { useDispatch } from "react-redux";
import { Props } from "./types";

export default function useMobileTimer({ duration }: Props) {
  const dispatch = useDispatch();
  const { timer } = useTimer({ duration });

  return { dispatch, timer };
}
