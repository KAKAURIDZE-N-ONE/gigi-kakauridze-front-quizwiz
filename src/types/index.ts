import { Props } from "@/pages/QuizPage/components/QuizInProgress/components/DesktopTimer./types";
import { useState, useEffect } from "react";

export default function useDesktopTimer({ duration }: Props) {
  const [timer, setTimer] = useState<number>(duration);

  useEffect(() => {
    const interval = setInterval(
      () => setTimer((currentTime) => currentTime - 1),
      1000
    );

    return () => clearInterval(interval);
  }, [timer]);

  return { timer };
}

export * from "./quiz";
