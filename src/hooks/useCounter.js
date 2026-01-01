import { useEffect, useState } from "react";

/**
 * Custom hook for animated counter
 * Smoothly animates a number from 0 to target value
 * 
 * @param {number} to - Target value to count up to
 * @param {number} duration - Animation duration in milliseconds
 * @returns {string} Formatted counter value with locale formatting
 */
export function useCounter(to = 50000, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let raf;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min(1, (timestamp - start) / duration);
      setValue(Math.floor(progress * to));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return value.toLocaleString();
}

