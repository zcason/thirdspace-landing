import React, { useState } from "react";
import { BookOpen, Coffee, MapPin, Palette, Trees } from "lucide-react";
import { MapPreview } from "./MapPreview";

/**
 * VibePickerDemo Component
 * Interactive vibe selection with matching results and map
 */
export function VibePickerDemo() {
  const vibes = [
    { key: "calm", label: "Calm + study", icon: BookOpen },
    { key: "creative", label: "Creative + social", icon: Palette },
    { key: "outdoors", label: "Outdoors + recharge", icon: Trees },
  ];

  const [selected, setSelected] = useState("calm");

  const results = {
    calm: [
      { name: "Houndstooth Coffee", note: "Bright corners and room to settle in", icon: Coffee },
      { name: "Austin Central Library", note: "Quiet nooks with a rooftop break", icon: BookOpen },
      { name: "Zilker Botanical Garden", note: "A slower walk with space to read", icon: Trees },
    ],
    creative: [
      { name: "Mozart’s Coffee Roasters", note: "Lake views with a lively soundtrack", icon: Coffee },
      { name: "The Cathedral", note: "Local art in a social workspace", icon: Palette },
      { name: "Meanwhile Brewing", note: "Community events and room to wander", icon: MapPin },
    ],
    outdoors: [
      { name: "Lady Bird Lake Trail", note: "An easy loop with skyline views", icon: Trees },
      { name: "Pease Park", note: "Shade, lawns, and a slower pace", icon: Trees },
      { name: "Barton Springs Pool", note: "Cold water and a sunny lawn", icon: MapPin },
    ],
  };

  const selectedVibe = vibes.find((vibe) => vibe.key === selected);

  return (
    <div className="vibe-demo">
      <div className="vibe-demo__toolbar">
        <div className="vibe-demo__location">
          <MapPin aria-hidden="true" />
          <span>Austin, Texas</span>
        </div>
        <p>Choose a feeling</p>
      </div>
      <div className="vibe-demo__controls" aria-label="Choose a vibe">
        {vibes.map((v) => (
          <button
            key={v.key}
            onClick={() => setSelected(v.key)}
            className="vibe-control"
            aria-pressed={selected === v.key}
          >
            <v.icon aria-hidden="true" />
            <span>{v.label}</span>
          </button>
        ))}
      </div>
      <div className="vibe-demo__results">
        <div className="place-list" aria-live="polite">
          <p className="place-list__summary">Nearby ideas for {selectedVibe.label.toLowerCase()}</p>
          <ul>
            {results[selected].map((place) => (
              <li key={place.name}>
                <place.icon aria-hidden="true" />
                <div>
                  <strong>{place.name}</strong>
                  <span>{place.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <MapPreview vibe={selected} />
      </div>
    </div>
  );
}
