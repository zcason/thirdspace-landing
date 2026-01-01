import React from "react";
import { StatCard } from "./StatCard";

/**
 * StatsGrid Component
 * Grid container displaying key statistics
 */
export function StatsGrid() {
  const stats = [
    { value: "10 sec", label: "Time to perfect match", sub: "Open → Vibe → Go" },
    { value: ">85%", label: "Vibe compatibility", sub: "Feel seen by AI" },
    { value: ">60%", label: "Show-up rate", sub: "From match to real life" },
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

