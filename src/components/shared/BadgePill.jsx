import React from "react";

/**
 * BadgePill Component
 * Reusable pill-shaped badge for labels and tags
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 */
export function BadgePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-white/10 border border-white/15">
      {children}
    </span>
  );
}

