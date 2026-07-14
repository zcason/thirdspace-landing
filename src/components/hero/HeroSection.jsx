import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppStoreBadge } from "@/components/shared/AppStoreBadge";
import homePageScreenshot from "@/assets/screenshots/home-page.png";
import checkInPageScreenshot from "@/assets/screenshots/check-in-screen.png";
import explorePageScreenshot from "@/assets/screenshots/explore-page.png";

/**
 * HeroSection Component
 * Main hero section with headline, CTA, and phone mockup
 * 
 * @param {Object} props
 * @param {number} props.rating - App store rating
 * @param {string} props.matches - Formatted match count
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
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

  const reveal = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.1 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-frame hero__layout">
        <div className="hero__copy">
          <motion.h1 id="hero-title" {...reveal}>
            Stop planning. <span>Start vibing.</span>
          </motion.h1>
          <p>
            Tell Thirdspace how you want to feel. Get a few nearby places that
            fit, head out, and build an offline routine that actually sticks.
          </p>
          <div id="download" className="hero__cta">
            <AppStoreBadge />
            <a className="text-link" href="#how">See the three steps</a>
          </div>
        </div>
        <motion.figure className="hero__screens" {...reveal}>
          <div className="hero__screen-stack">
            {screenshots.map((screenshot, index) => (
              <div className={`hero__screen hero__screen--${index + 1}`} key={screenshot.alt}>
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          <figcaption>Personalized picks · live map · check-ins</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
