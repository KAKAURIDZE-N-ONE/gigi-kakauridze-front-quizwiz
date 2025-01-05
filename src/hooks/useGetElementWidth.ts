import { useState, useEffect } from "react";

export default function useGetElementWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return width;
}
