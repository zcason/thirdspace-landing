/**
 * Brand Colors and Style Constants
 * Centralized brand identity configuration
 */

export const brandColors = {
  bgHex: "#0B1530", // deep space navy
  gradFrom: "#00D1FF", // cyan/teal edge
  gradVia: "#5B6CFF", // electric indigo
  gradTo: "#C839FF", // magenta/purple
};

export const gradients = {
  bg: `bg-[radial-gradient(60%_80%_at_50%_-20%,${brandColors.gradVia}33,transparent),radial-gradient(40%_60%_at_100%_0%,${brandColors.gradFrom}26,transparent),radial-gradient(40%_60%_at_0%_0%,${brandColors.gradTo}26,transparent)]`,
  glass: "backdrop-blur-xl bg-white/5 border border-white/10",
};

/**
 * Generate brand gradient CSS classes
 * @returns {string} CSS style string for injection
 */
export const getBrandGradientStyles = () => {
  return `.brand-gradient{background-image: linear-gradient(90deg, ${brandColors.gradFrom}, ${brandColors.gradVia}, ${brandColors.gradTo});}.brand-gradient-135{background-image: linear-gradient(135deg, ${brandColors.gradFrom}, ${brandColors.gradVia}, ${brandColors.gradTo});}`;
};

