import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { gradients, brandColors } from "@/constants/brand";

/**
 * MapPreview Component
 * Animated map with location pins based on selected vibe
 * 
 * @param {Object} props
 * @param {string} props.vibe - Selected vibe type (calm, creative, outdoors)
 */
export function MapPreview({ vibe }) {
  const pinSets = {
    calm: [
      { name: "Houndstooth Coffee (Downtown)", x: 52, y: 58 },
      { name: "Austin Central Library", x: 48, y: 55 },
      { name: "Zilker Botanical Garden", x: 40, y: 66 },
    ],
    creative: [
      { name: "Mozart's Coffee Roasters", x: 30, y: 50 },
      { name: "The Cathedral", x: 70, y: 52 },
      { name: "Meanwhile Brewing", x: 68, y: 72 },
    ],
    outdoors: [
      { name: "Lady Bird Lake Trail", x: 50, y: 62 },
      { name: "Pease Park", x: 48, y: 40 },
      { name: "Barton Springs Pool", x: 46, y: 66 },
    ],
  };

  const pins = pinSets[vibe] || [];

  return (
    <div className={`relative rounded-2xl overflow-hidden ${gradients.glass} aspect-[4/3]`}>
      {/* Stylized map backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(60% 80% at 50% -10%, ${brandColors.gradVia}22, transparent),
                          radial-gradient(40% 60% at 0% 100%, ${brandColors.gradFrom}18, transparent),
                          radial-gradient(40% 60% at 100% 0%, ${brandColors.gradTo}18, transparent)`,
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Pins */}
      {pins.map((p, idx) => (
        <motion.button
          key={idx}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: [-6, -2, -6], opacity: 1 }}
          transition={{
            duration: 2 + idx * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-full p-2 brand-gradient shadow-lg shadow-black/40">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="mt-2 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10 backdrop-blur opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            {p.name}
          </div>
        </motion.button>
      ))}
      <div className="absolute bottom-2 left-2 text-xs text-white/70">
        Austin, Texas
      </div>
    </div>
  );
}

