import React from "react";
import { APP_STORE_URL } from "@/constants/config";
import appStoreBadge from "@/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

/**
 * AppStoreBadge Component
 * iOS App Store download button for iOS-only release
 * Uses official Apple App Store badge asset
 */
export function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <img
        src={appStoreBadge}
        alt="Download on the App Store"
        className="h-[40px] w-auto"
      />
    </a>
  );
}

