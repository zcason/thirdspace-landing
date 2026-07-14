import React from "react";
import { FeatureCard } from "./FeatureCard";
import homePageScreenshot from "@/assets/screenshots/home-page.png";
import explorePageScreenshot from "@/assets/screenshots/explore-page.png";
import checkInScreenshot from "@/assets/screenshots/check-in-screen.png";

/**
 * FeaturesSection Component
 * Displays grid of product features
 */
export function FeaturesSection() {
  const features = [
    {
      step: "1",
      title: "Choose the feeling.",
      desc: "Tell us how you feel, what kind of energy you want, and how far you want to go. Thirdspace narrows the list to a few nearby places that actually fit.",
      screenshot: homePageScreenshot,
      alt: "Thirdspace personalized picks screen",
      className: "workflow-card--feeling",
    },
    {
      step: "2",
      title: "See what’s nearby.",
      desc: "See cafés, libraries, parks, and other third places on a live map with vibe tags, useful context, and quick directions.",
      screenshot: explorePageScreenshot,
      alt: "Thirdspace live map screen",
      className: "workflow-card--nearby",
    },
    {
      step: "3",
      title: "Check in. Come back.",
      desc: "Check in when you go, remember the places you love, and build a richer offline routine over time.",
      screenshot: checkInScreenshot,
      alt: "Thirdspace check-in screen",
      className: "workflow-card--routine",
    },
  ];

  return (
    <section id="how" className="workflow" aria-labelledby="workflow-title">
      <div className="page-frame workflow__intro">
        <p className="section-label">Leave home in three steps</p>
        <h2 id="workflow-title">A small path from “maybe” to out the door.</h2>
        <p>Each step removes a little friction, without turning your free time into a project.</p>
      </div>
      <ol className="page-frame workflow__stages">
        {features.map((feature) => (
          <FeatureCard key={feature.step} {...feature} />
        ))}
      </ol>
    </section>
  );
}
