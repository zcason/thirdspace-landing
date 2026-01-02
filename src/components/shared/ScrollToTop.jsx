import { useScrollToTop } from "@/hooks/useScrollToTop";

/**
 * ScrollToTop Component
 * Wrapper component that scrolls to top on route changes
 * Place inside BrowserRouter to enable automatic scroll restoration
 */
export function ScrollToTop() {
  useScrollToTop();
  return null;
}

