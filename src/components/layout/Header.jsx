import React from "react";
import { Download } from "lucide-react";
import { APP_STORE_URL } from "@/constants/config";
import thirdspaceLogo from "@/assets/images/thirdspace-logo.png";

/**
 * Header Component
 * Sticky navigation bar with logo and download button
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B1530]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={thirdspaceLogo} alt="Thirdspace Logo" className="h-10 w-auto" />
        </div>
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 transition"
        >
          <Download className="w-4 h-4" /> Download
        </a>
      </div>
    </header>
  );
}

