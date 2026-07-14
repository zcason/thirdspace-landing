import React from "react";
import { StatCard } from "./StatCard";

/**
 * StatsGrid Component
 * Grid container displaying key statistics
 */
export function StatsGrid() {
  const stats = [
    { value: "10 sec", label: "Time to your next spot", sub: "Open → choose a vibe → go" },
    { value: ">85%", label: "Strong place fit", sub: "Recommendations tuned to the moment" },
    { value: ">60%", label: "Show-up rate", sub: "From planning less to going out more" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          sub={stat.sub}
        />
      ))}
    </div>
  );
}

