import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Check } from "lucide-react";
import thirdspaceLogo from "@/assets/images/thirdspace-logo.png";

const CONTACT_EMAIL = "hi@jointhirdspace.app";

/**
 * Footer Component
 * Consolidated site footer with branding, navigation, and contact
 */
export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback: open mailto
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={thirdspaceLogo} alt="Thirdspace Logo" className="h-8 w-auto" />
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 text-sm text-white/60">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/privacy/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/privacy/security" className="hover:text-white transition">
              Security
            </Link>
            <span className="text-white/20">|</span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 hover:text-white transition"
              title={`Email: ${CONTACT_EMAIL}`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </>
              )}
            </button>
          </nav>
          
          {/* Copyright */}
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} thirdspace
          </div>
        </div>
      </div>
    </footer>
  );
}
