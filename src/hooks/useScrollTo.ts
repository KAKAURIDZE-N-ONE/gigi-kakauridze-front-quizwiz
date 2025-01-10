import { useLayoutEffect } from "react";

export default function useScrollTo({
  dependency = [],
}: {
  dependency?: any[];
}) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [...dependency]);
}
