import React from "react";
import { Timer, Download } from "lucide-react";
import { APP_STORE_URL } from "@/constants/config";

/**
 * UrgencySection Component
 * Final call-to-action section with urgency messaging
 */
export function UrgencySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/5 border border-white/10">
          <Timer className="w-4 h-4" /> Limited early-access perks live now
        </div>
        <h3 className="mt-4 text-3xl md:text-4xl font-bold">
          Your perfect vibe is happening right now.
        </h3>
        <p className="text-white/80 mt-3">
          Don't miss tonight's energy. Join thousands finding their spot in
          seconds.
        </p>
        <div className="mt-6">
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-white/10 hover:bg-white/20 transition font-medium"
          >
            <Download className="w-4 h-4" /> Download on App Store
          </a>
        </div>
      </div>
    </section>
  );
}

