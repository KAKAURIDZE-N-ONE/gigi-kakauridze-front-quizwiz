import { useEffect, useRef } from "react";

export default function useBigSearchInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return { inputRef };
}
