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
import { TableOfContents } from "@/components/legal/TableOfContents";

const legalNavItems = [
  {
    href: "/privacy/data-collection",
    label: "Data Collection",
    icon: FileText,
    description: "What we collect",
  },
  {
    href: "/privacy/policy",
    label: "Privacy Policy",
    icon: Shield,
    description: "How we protect you",
  },
  {
    href: "/privacy/terms",
    label: "Terms of Service",
    icon: ScrollText,
    description: "Usage agreement",
  },
  {
    href: "/privacy/security",
    label: "Security",
    icon: Lock,
    description: "Data protection",
  },
];

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
  currentPath,
  sections = [],
}) {
  return (
    <div className="site-shell legal-shell">
      <Header />

      <main className="legal-document">
        <div className="page-frame">
          <Link to="/privacy" className="legal-back-link">
            <ArrowLeft aria-hidden="true" />
            Privacy &amp; legal
          </Link>

          <div className="legal-document__layout">
            <aside className="legal-index">
              <div className="legal-index__sticky">
                <p className="legal-index__eyebrow">Legal desk</p>
                <nav aria-label="Privacy and legal pages">
                  <ul>
                    {legalNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPath === item.href;

                      return (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            className="legal-index__link"
                            aria-current={isActive ? "page" : undefined}
                          >
                            <Icon aria-hidden="true" />
                            <span>
                              <strong>{item.label}</strong>
                              <small>{item.description}</small>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {sections.length > 0 && (
                  <div className="legal-index__contents">
                    <TableOfContents sections={sections} />
                  </div>
                )}
              </div>
            </aside>

            <article className="legal-paper">
              {sections.length > 0 && (
                <div className="legal-paper__mobile-contents">
                  <TableOfContents sections={sections} />
                </div>
              )}

              <header className="legal-paper__header">
                <p className="section-label">Thirdspace legal</p>
                <h1>{title}</h1>
                {lastUpdated && <p>Last updated {lastUpdated}</p>}
              </header>

              <div className="legal-prose">{children}</div>

              <footer className="legal-paper__contact">
                <div>
                  <h2>Have a question?</h2>
                  <p>We’re here to help with privacy or legal concerns.</p>
                </div>
                <a href="mailto:hi@jointhirdspace.app">
                  Email Thirdspace
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </footer>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
