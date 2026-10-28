import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls to the top on page change, or to an in-page section when the URL has a #hash. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ block: "start" });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    return undefined;
  }, [pathname, hash]);

  return null;
}