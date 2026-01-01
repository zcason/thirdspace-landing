/**
 * Reusable Style Utilities
 * Common CSS classes and style helpers
 */

/**
 * Shimmer animation effect for loading states
 */
export const shimmer =
  "relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_2s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent @keyframes shimmer{100%{transform:translateX(100%)}}";

/**
 * Common transition classes
 */
export const transitions = {
  smooth: "transition-all duration-300 ease-in-out",
  fast: "transition-all duration-150 ease-in-out",
  slow: "transition-all duration-500 ease-in-out",
};

