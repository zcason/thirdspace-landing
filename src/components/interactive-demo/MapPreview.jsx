import React from "react";
import { MapPin } from "lucide-react";

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
    <div className="map-preview" aria-label={`Austin map showing ${pins.length} nearby places`}>
      <div className="map-preview__road map-preview__road--one" aria-hidden="true" />
      <div className="map-preview__road map-preview__road--two" aria-hidden="true" />
      <div className="map-preview__road map-preview__road--three" aria-hidden="true" />
      {pins.map((p, idx) => (
        <div
          key={p.name}
          className="map-preview__pin"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <MapPin aria-hidden="true" />
          <span>{idx + 1}</span>
        </div>
      ))}
      <div className="map-preview__label">Austin · nearby</div>
    </div>
  );
}
