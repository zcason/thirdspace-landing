import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gradients } from "@/constants/brand";

/**
 * FloatingGlow Component
 * Parallax background glow effect that responds to scroll
 */
export function FloatingGlow() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <motion.div
      style={{ y }}
      aria-hidden
      className="pointer-events-none fixed -z-10 inset-0"
    >
      <div className={`absolute -inset-40 ${gradients.bg} blur-3xl`} />
    </motion.div>
  );
}

