import useTimer from "@/hooks/useTimer";
import { Props } from "./types";
import { useDispatch } from "react-redux";

export default function useDesktopTimer({ duration }: Props) {
  const { timer } = useTimer({ duration });
  const dispatch = useDispatch();

  return { timer, dispatch };
}
