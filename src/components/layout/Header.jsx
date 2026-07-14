import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine } from "lucide-react";
import { APP_STORE_URL } from "@/constants/config";
import thirdspaceLogo from "@/assets/images/thirdspace-logo.png";

/**
 * Header Component
 * Sticky navigation bar with logo and download button
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="nav-slab page-frame">
        <Link to="/" className="nav-slab__brand" aria-label="Thirdspace home">
          <img src={thirdspaceLogo} alt="Thirdspace" />
        </Link>
        <nav className="nav-slab__links" aria-label="Primary navigation">
          <a href="#how">How it works</a>
          <a href="#demo">Try Austin</a>
        </nav>
        <a
          href={APP_STORE_URL}
          className="nav-slab__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowDownToLine aria-hidden="true" />
          <span>Get the app</span>
        </a>
      </div>
    </header>
  );
}
