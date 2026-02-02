import React, { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

const CONTACT_EMAIL = "hi@jointhirdspace.app";

/**
 * ContactButton Component
 * Enhanced contact button with copy-to-clipboard functionality
 * Shows visual feedback when email is copied
 * 
 * @param {Object} props
 * @param {string} props.variant - Button style variant: "default" | "ghost" | "link"
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showIcon - Whether to show the mail icon
 */
export function ContactButton({ variant = "default", className = "", showIcon = true }) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback to opening email client if clipboard fails
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const handleEmailClick = (e) => {
    // Allow default mailto behavior on direct click
    // Copy functionality is on the copy button
  };

  const baseStyles = {
    default: "px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium",
    ghost: "hover:text-white transition",
    link: "text-cyan-400 hover:underline",
  };

  return (
    <div className="relative inline-flex items-center gap-2">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        onClick={handleEmailClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`inline-flex items-center gap-2 ${baseStyles[variant]} ${className}`}
      >
        {showIcon && <Mail className="w-4 h-4" />}
        <span>Contact</span>
      </a>
      
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        title="Copy email address"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-white/50 hover:text-white" />
        )}
      </button>

      {/* Tooltip */}
      {(showTooltip || copied) && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 text-xs text-white whitespace-nowrap z-50">
          {copied ? "Email copied!" : CONTACT_EMAIL}
        </div>
      )}
    </div>
  );
}

/**
 * ContactLink Component
 * Simple text link version with copy functionality
 */
export function ContactLink({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1 text-cyan-400 hover:underline transition ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <span>{CONTACT_EMAIL}</span>
          <Copy className="w-3 h-3 opacity-50" />
        </>
      )}
    </button>
  );
}


