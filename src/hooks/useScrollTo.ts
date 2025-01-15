import { useLayoutEffect } from "react";

export default function useScrollTo({
  dependency = [],
  behavior = "auto",
}: {
  dependency?: any[];
  behavior?: ScrollBehavior;
}) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: behavior });
  }, [...dependency]);
}
