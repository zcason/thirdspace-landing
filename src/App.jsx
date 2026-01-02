import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingGlow } from "@/components/layout/FloatingGlow";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { HeroSection } from "@/components/hero/HeroSection";
import { StatsGrid } from "@/components/stats/StatsGrid";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { VibePickerDemo } from "@/components/interactive-demo/VibePickerDemo";
import { useCounter } from "@/hooks/useCounter";
import { brandColors, getBrandGradientStyles } from "@/constants/brand";
import { APP_RATING, DEFAULT_MATCH_COUNT, COUNTER_ANIMATION_DURATION } from "@/constants/config";

/**
 * App Component
 * Main landing page composing all sections
 */
export default function App() {
  const matches = useCounter(DEFAULT_MATCH_COUNT, COUNTER_ANIMATION_DURATION);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: brandColors.bgHex }}>
      {/* Brand gradient utility */}
      <style>{getBrandGradientStyles()}</style>
      <FloatingGlow />

      {/* Sticky Mobile CTA */}
      <MobileCTA />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection rating={APP_RATING} matches={matches} />

      {/* Stats and Features */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <StatsGrid />
          <FeaturesSection />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Try it yourself
            </h2>
            <p className="text-white/80 mt-3 max-w-2xl mx-auto">
              See how our AI matches you with the perfect spot based on your vibe. 
              Select a mood and discover nearby places in seconds.
            </p>
          </div>
          <VibePickerDemo />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
