import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, ScrollText, Lock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingGlow } from "@/components/layout/FloatingGlow";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { brandColors, getBrandGradientStyles } from "@/constants/brand";

/**
 * Navigation items for the legal pages sidebar
 */
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

/**
 * LegalPageLayout Component
 * Shared layout for all legal/privacy pages with consistent styling and navigation
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.lastUpdated - Last updated date string
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.currentPath - Current page path for nav highlighting
 * @param {Array<{id: string, title: string}>} props.sections - Optional sections for table of contents
 */
export function LegalPageLayout({ title, lastUpdated, children, currentPath, sections = [] }) {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: brandColors.bgHex }}>
      <style>{getBrandGradientStyles()}</style>
      <FloatingGlow />
      
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back to Privacy Hub Link */}
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Privacy Hub
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <nav className="sticky top-24 space-y-6">
                {/* Page Navigation */}
                <div>
                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                    Legal & Privacy
                  </h3>
                  <div className="space-y-2">
                    {legalNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPath === item.href;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-white/10 border border-white/20 text-white"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : ""}`} />
                          <div>
                            <div className="font-medium text-sm">{item.label}</div>
                            <div className="text-xs text-white/40">{item.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Table of Contents (Desktop) */}
                {sections.length > 0 && (
                  <div className="hidden lg:block">
                    <TableOfContents sections={sections} />
                  </div>
                )}
              </nav>
            </aside>
            
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Table of Contents (Mobile) */}
              {sections.length > 0 && (
                <div className="lg:hidden mb-6">
                  <TableOfContents sections={sections} />
                </div>
              )}

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
                {/* Page Header */}
                <header className="mb-8 pb-6 border-b border-white/10">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    {title}
                  </h1>
                  {lastUpdated && (
                    <p className="text-white/50 text-sm">
                      Last Updated: {lastUpdated}
                    </p>
                  )}
                </header>
                
                {/* Content with Typography Styling */}
                <div className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-white
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white/90
                  prose-p:text-white/70 prose-p:leading-relaxed
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-white/70 prose-li:marker:text-cyan-400
                  prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                ">
                  {children}
                </div>
                
                {/* Contact Footer */}
                <footer className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-1">Have questions?</h4>
                      <p className="text-white/50 text-sm">
                        We're here to help with any privacy or legal concerns.
                      </p>
                    </div>
                    <a
                      href="mailto:hi@jointhirdspace.app"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
                    >
                      hi@jointhirdspace.app
                    </a>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

