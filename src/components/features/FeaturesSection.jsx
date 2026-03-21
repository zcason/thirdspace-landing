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
      desc: "Tell us how you feel, what kind of energy you want, and how far you want to go. Thirdspace narrows the list to a few nearby places that actually fit.",
    },
    {
      icon: Map,
      pill: "Live map",
      title: "Discover third places nearby",
      desc: "See cafés, libraries, parks, and other third places on a live map with vibe tags, filters, and quick directions.",
    },
    {
      icon: Trophy,
      pill: "Check-ins",
      title: "Build momentum in real life",
      desc: "Check in when you go, remember the places you love, and build a richer offline routine over time.",
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

