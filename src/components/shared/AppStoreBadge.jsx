import React from "react";
import { APP_STORE_URL } from "@/constants/config";
import { gradients } from "@/constants/brand";

/**
 * AppStoreBadge Component
 * iOS App Store download button for iOS-only release
 */
export function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      aria-label="Download on the App Store"
      className="group inline-block"
    >
      <div
        className={`flex items-center gap-3 rounded-xl px-5 py-3 ${gradients.glass} hover:bg-white/10 transition`}
      >
        <div className="leading-tight">
          <div className="text-[11px] uppercase text-white/70 tracking-wide">
            Download on the
          </div>
          <div className="text-white font-semibold text-lg -mt-0.5">
            App Store
          </div>
        </div>
      </div>
    </a>
  );
}

