import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { MapPreview } from "./MapPreview";
import { gradients } from "@/constants/brand";

/**
 * VibePickerDemo Component
 * Interactive vibe selection with matching results and map
 */
export function VibePickerDemo() {
  const vibes = [
    { key: "calm", label: "Calm + Study", emoji: "📚" },
    { key: "creative", label: "Creative + Social", emoji: "🎵" },
    { key: "outdoors", label: "Outdoors + Recharge", emoji: "🌳" },
  ];

  const [selected, setSelected] = useState(null);

  const results = {
    calm: (
      <div className="space-y-2 text-sm">
        <div>Got it. Here are 3 nearby places with calm, focused energy.</div>
        <div>
          • <strong>Houndstooth Coffee (Downtown)</strong> — <strong>94%</strong>{" "}
          fit for the moment (sunny corner + great Wi-Fi) ☕️
        </div>
        <div>
          • <strong>Austin Central Library</strong> — <strong>92%</strong>{" "}
          (6th-floor nooks + rooftop garden) 📚
        </div>
        <div>
          • <strong>Zilker Botanical Garden</strong> — <strong>90%</strong>{" "}
          (quiet trails + nature soundscape) 🌿
        </div>
      </div>
    ),
    creative: (
      <div className="space-y-2 text-sm">
        <div>Dialed in. Here are 3 Austin spots with creative, social energy.</div>
        <div>
          • <strong>Mozart's Coffee Roasters</strong> — <strong>93%</strong>{" "}
          (live piano + lake views) 🎹☕️
        </div>
        <div>
          • <strong>The Cathedral</strong> — <strong>91%</strong> (local artist
          gallery + coworking) 🎨
        </div>
        <div>
          • <strong>Meanwhile Brewing</strong> — <strong>89%</strong> (artisanal
          vibes + community events) 🍻
        </div>
      </div>
    ),
    outdoors: (
      <div className="space-y-2 text-sm">
        <div>Locked. Here are 3 Austin spots for getting outside and recharging.</div>
        <div>
          • <strong>Lady Bird Lake Trail</strong> — <strong>95%</strong>{" "}
          (golden-hour loop + skyline view) 🚶‍♂️
        </div>
        <div>
          • <strong>Pease Park</strong> — <strong>92%</strong> (shaded hammocks +
          picnic spots) 🌳
        </div>
        <div>
          • <strong>Barton Springs Pool</strong> — <strong>90%</strong>{" "}
          (refreshing dip + sun lawn) 💦
        </div>
      </div>
    ),
  };

  return (
    <div className={`rounded-3xl p-5 ${gradients.glass}`}>
      <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
        <MapPin className="w-4 h-4" /> Austin, Texas
      </div>
      <div className="text-sm text-white/80 mb-3">
        Pick a vibe to preview nearby third places:
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {vibes.map((v) => (
          <button
            key={v.key}
            onClick={() => setSelected(v.key)}
            className={`rounded-xl px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-left ${
              selected === v.key ? "ring-2 ring-white/30" : ""
            }`}
          >
            <div className="font-medium">
              {v.emoji} {v.label}
            </div>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`rounded-2xl p-4 ${gradients.glass}`}>
          {!selected ? (
            <div className="text-white/70 text-sm">
              Select a vibe above to see 3 nearby places.
            </div>
          ) : (
            results[selected]
          )}
        </div>
        <MapPreview vibe={selected || "calm"} />
      </div>
    </div>
  );
}

