import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { VibePickerDemo } from "@/components/interactive-demo/VibePickerDemo";
import { UrgencySection } from "@/components/cta/UrgencySection";

/**
 * App Component
 * Main landing page composing all sections
 */
export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />

        <section id="demo" className="demo-section" aria-labelledby="demo-title">
          <div className="page-frame demo-section__heading">
            <div>
              <p className="section-label">Austin preview</p>
              <h2 id="demo-title">Try the feeling first.</h2>
            </div>
            <p>
              Pick the atmosphere you want. Thirdspace turns it into a short,
              useful list of real places to consider nearby.
            </p>
          </div>
          <div className="page-frame">
            <VibePickerDemo />
          </div>
        </section>

        <UrgencySection />
      </main>
      <Footer />
    </div>
  );
}
