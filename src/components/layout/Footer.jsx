import React from "react";
import { FOOTER_LINKS } from "@/constants/config";
import thirdspaceLogo from "@/assets/images/thirdspace-logo.png";

/**
 * Footer Component
 * Site footer with branding and navigation links
 */
export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <img src={thirdspaceLogo} alt="Thirdspace Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} thirdspace, All Rights Reserved</div>
      </div>
    </footer>
  );
}

