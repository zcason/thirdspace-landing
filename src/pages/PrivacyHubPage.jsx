import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Lock,
  ScrollText,
  Shield,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const privacySections = [
  {
    href: "/privacy/data-collection",
    title: "Data Collection",
    icon: FileText,
    description:
      "Learn exactly what data we collect, why we collect it, and how long we keep it. We believe in complete transparency.",
    highlights: ["Account & Activity Data", "Location Usage", "What We DON'T Collect"],
    tone: "coral",
  },
  {
    href: "/privacy/policy",
    title: "Privacy Policy",
    icon: Shield,
    description:
      "Our comprehensive privacy policy covering your rights, how we process data, and our commitments to protecting your information.",
    highlights: ["Your Rights", "Data Sharing", "Third-Party Services"],
    tone: "indigo",
  },
  {
    href: "/privacy/terms",
    title: "Terms of Service",
    icon: ScrollText,
    description:
      "The terms and conditions for using thirdspace, including acceptable use, subscriptions, and our service commitments.",
    highlights: ["Acceptable Use", "Points & Rewards", "Subscriptions"],
    tone: "paper",
  },
  {
    href: "/privacy/security",
    title: "Security",
    icon: Lock,
    description:
      "How we protect your data with enterprise-grade security, encryption, and industry best practices.",
    highlights: ["Encryption Standards", "Authentication", "Compliance"],
    tone: "pear",
  },
];

export function PrivacyHubPage() {
  return (
    <div className="site-shell legal-shell">
      <Header />

      <main className="legal-hub">
        <div className="page-frame">
          <Link to="/" className="legal-back-link">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>

          <header className="legal-hub__intro">
            <div>
              <p className="section-label">The fine print, made clear</p>
              <h1>Privacy &amp; Legal</h1>
            </div>
            <p>
              We believe in transparency. Explore our policies to understand how
              we protect your data and the terms of using Thirdspace.
            </p>
          </header>

          <ol className="legal-route-list">
            {privacySections.map((section, index) => {
              const Icon = section.icon;

              return (
                <li
                  key={section.href}
                  className={`legal-route-item legal-route-item--${section.tone}`}
                >
                  <Link to={section.href} className="legal-route-card">
                    <div className="legal-route-card__topline">
                      <span className="legal-route-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon aria-hidden="true" />
                    </div>

                    <div className="legal-route-card__copy">
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>

                    <div className="legal-route-card__footer">
                      <ul aria-label={`${section.title} topics`}>
                        {section.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <span className="legal-route-card__action">
                        Read policy
                        <ArrowUpRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          <section className="legal-contact" aria-labelledby="legal-contact-title">
            <p className="section-label">Still curious?</p>
            <div className="legal-contact__body">
              <div>
                <h2 id="legal-contact-title">Ask us directly.</h2>
                <p>
                  We’re committed to transparency. Reach out anytime with privacy
                  or legal questions.
                </p>
              </div>
              <a href="mailto:hi@jointhirdspace.app">
                Email Thirdspace
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
