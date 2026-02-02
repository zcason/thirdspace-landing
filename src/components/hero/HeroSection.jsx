import React from "react";
import { motion } from "framer-motion";
import { AppStoreBadge } from "@/components/shared/AppStoreBadge";
import { shimmer } from "@/utils/styles";
import homePageScreenshot from "@/assets/screenshots/home-page.png";
import checkInPageScreenshot from "@/assets/screenshots/check-in-screen.png";
import explorePageScreenshot from "@/assets/screenshots/explore-page.png";
import { img } from "framer-motion/client";
// Add new screenshots here by importing them, then add to the screenshots array below
// Example: import secondScreenshot from "@/assets/screenshots/second-page.png";

/**
 * HeroSection Component
 * Main hero section with headline, CTA, and phone mockup
 * 
 * @param {Object} props
 * @param {number} props.rating - App store rating
 * @param {string} props.matches - Formatted match count
 */
export function HeroSection({ rating, matches }) {
  // Array of screenshots - add new images here as you import them
  // Each phone mock will use the corresponding screenshot in order
  const screenshots = [
    {
      image: homePageScreenshot,
      alt: "ThirdSpace app home page"
    },
    {
      image: checkInPageScreenshot,
      alt: "ThirdSpace app check-in page"
    },
    {
      image: explorePageScreenshot, 
      alt: "ThirdSpace app explore page"
    }
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Stop planning.{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              Start vibing.
            </span>
          </motion.h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Your AI companion that instantly connects you with the perfect third
            place experience happening within 30 minutes. No overthinking—just
            magical matches and real-world connection.
          </p>

          <div id="download" className="mt-8 flex items-center">
            <AppStoreBadge />
          </div>
        </div>

        {/* 3D-ish phone stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 blur-2xl opacity-70 rounded-full brand-gradient-135" />
          <div className="grid grid-cols-3 gap-4 rotate-[-6deg]">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`aspect-[9/19] rounded-[28px] border border-white/10 backdrop-blur-xl bg-white/5 ${shimmer} shadow-2xl overflow-hidden`}
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover rounded-[28px]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

