import React from "react";
import { Zap, Map, Trophy } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

/**
 * FeaturesSection Component
 * Displays grid of product features
 */
export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      pill: "Vibe Match™",
      title: "AI that actually gets you",
      desc: "We analyze your mood, energy, time, and weather to instantly recommend 3 spots that feel made for you — happening within 30 minutes.",
    },
    {
      icon: Map,
      pill: "Live Heat Map",
      title: "See where the energy is",
      desc: "A real-time map of nearby third places with vibe tags like chill, creative, or social — plus smart filters and one-tap directions.",
    },
    {
      icon: Trophy,
      pill: "Vibe Rewards",
      title: "Show up, get rewarded",
      desc: "Earn points, unlock badges, and snag partner perks when you check in to your matches. Explore more, earn more.",
    },
  ];

  return (
    <div id="features" className="mt-10 grid lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          pill={feature.pill}
          title={feature.title}
          desc={feature.desc}
        />
      ))}
    </div>
  );
}

