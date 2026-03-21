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
      pill: "Personalized picks",
      title: "Less deciding, more showing up",
      desc: "Share your mood, energy, timing, and context, and Thirdspace narrows the list to a few nearby places that actually fit.",
    },
    {
      icon: Map,
      pill: "Live map",
      title: "Discover third places nearby",
      desc: "Browse a live map of cafés, libraries, parks, and other third places with vibe tags, filters, and quick directions.",
    },
    {
      icon: Trophy,
      pill: "Check-ins",
      title: "Build momentum in real life",
      desc: "Check in when you go out, keep track of places you love, and get rewarded for building a richer offline routine.",
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

