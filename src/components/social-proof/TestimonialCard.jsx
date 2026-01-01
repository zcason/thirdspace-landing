import React from "react";
import { gradients } from "@/constants/brand";

/**
 * TestimonialCard Component
 * Individual customer testimonial card
 * 
 * @param {Object} props
 * @param {string} props.name - Customer name and location
 * @param {string} props.quote - Testimonial quote
 */
export function TestimonialCard({ name, quote }) {
  return (
    <div className={`rounded-2xl p-6 ${gradients.glass}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white/10" />
        <div className="text-sm">
          <div className="font-semibold">{name}</div>
          <div className="text-white/60">Verified vibe</div>
        </div>
      </div>
      <p className="mt-3 text-white/80 leading-relaxed">"{quote}"</p>
    </div>
  );
}

