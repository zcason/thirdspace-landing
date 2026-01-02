import React from "react";
import { Download } from "lucide-react";
import { gradients } from "@/constants/brand";
import { APP_STORE_URL } from "@/constants/config";

/**
 * MobileCTA Component
 * Sticky bottom call-to-action bar for mobile devices
 */
export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-50">
      <div
        className={`rounded-2xl px-4 py-3 flex items-center justify-between ${gradients.glass} shadow-xl`}
      >
        <div className="text-sm">
          <div className="font-semibold">Find your perfect vibe</div>
          <div className="text-white/70 text-xs">Match in seconds</div>
        </div>
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 brand-gradient text-white font-medium shadow"
        >
          <Download className="w-4 h-4" /> Download
        </a>
      </div>
    </div>
  );
}

