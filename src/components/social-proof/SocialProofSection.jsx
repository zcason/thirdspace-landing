import React from "react";
import { Check } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

/**
 * SocialProofSection Component
 * Displays social proof with benefits list and testimonials
 */
export function SocialProofSection() {
  const benefits = [
    "92% of users find a spot they love on day one",
    "From bored to there in under 30 minutes",
    "Designed with privacy-first principles",
    "Loved by remote workers, creators, and explorers",
  ];

  const testimonials = [
    {
      name: "Sarah • Austin",
      quote:
        "Went from doomscrolling to latte-in-hand at my new favorite café — in 10 minutes.",
    },
    {
      name: "Marcus • NYC",
      quote:
        "It nailed my creative vibe. Found a studio jam session I never knew existed.",
    },
    {
      name: "Elena • SF",
      quote:
        "My productivity paradise. The heat map is scary accurate for work energy.",
    },
  ];

  return (
    <section id="socialproof" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">
              Built for real connection — not endless scrolling
            </h3>
            <ul className="mt-6 space-y-3 text-white/80">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-emerald-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

