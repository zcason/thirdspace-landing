import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollToTop Hook
 * Scrolls to top of page on route change
 * Provides smooth scrolling for better UX
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

