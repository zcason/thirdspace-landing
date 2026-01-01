import React from "react";
import { Star, Users, Shield } from "lucide-react";

/**
 * TrustRow Component
 * Displays trust indicators: rating, user count, and privacy badge
 * 
 * @param {Object} props
 * @param {number} props.rating - App store rating
 * @param {string} props.matches - Formatted match count
 */
export function TrustRow({ rating, matches }) {
  return (
    <div className="mt-8 flex items-center gap-6 flex-wrap text-sm text-white/70">
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-yellow-400" />
        {rating} App Store rating
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        {matches}+ perfect matches
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4" />
        Privacy-first by design
      </div>
    </div>
  );
}

