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
    <footer className="site-footer">
      <div className="page-frame site-footer__inner">
          <Link to="/" className="site-footer__brand" aria-label="Thirdspace home">
            <img src={thirdspaceLogo} alt="Thirdspace" />
          </Link>
          <nav className="site-footer__links" aria-label="Legal and contact">
            <Link to="/privacy">
              Privacy
            </Link>
            <Link to="/privacy/terms">
              Terms
            </Link>
            <Link to="/privacy/security">
              Security
            </Link>
            <button
              onClick={handleCopyEmail}
              className="site-footer__contact"
              title={`Email: ${CONTACT_EMAIL}`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Mail aria-hidden="true" />
                  <span>Contact</span>
                </>
              )}
            </button>
          </nav>
          <div className="site-footer__copyright">
            © {new Date().getFullYear()} thirdspace
          </div>
      </div>
    </footer>
  );
}
