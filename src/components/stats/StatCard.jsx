import React from "react";
import { gradients } from "@/constants/brand";

/**
 * StatCard Component
 * Individual statistic display card
 * 
 * @param {Object} props
 * @param {string} props.label - Stat description
 * @param {string} props.value - Main stat value
 * @param {string} [props.sub] - Optional subtitle
 */
export function StatCard({ label, value, sub }) {
  return (
    <div className={`rounded-2xl p-4 ${gradients.glass}`}>
      <div className="text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
      {sub && <div className="text-xs text-white/60 mt-1">{sub}</div>}
    </div>
  );
}

