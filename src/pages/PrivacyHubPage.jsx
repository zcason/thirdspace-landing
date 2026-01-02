import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield, FileText, ScrollText, Lock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingGlow } from "@/components/layout/FloatingGlow";
import { brandColors, getBrandGradientStyles } from "@/constants/brand";

/**
 * Privacy section cards data
 */
const privacySections = [
  {
    href: "/privacy/data-collection",
    title: "Data Collection",
    icon: FileText,
    description: "Learn exactly what data we collect, why we collect it, and how long we keep it. We believe in complete transparency.",
    highlights: ["Account & Activity Data", "Location Usage", "What We DON'T Collect"],
  },
  {
    href: "/privacy/policy",
    title: "Privacy Policy",
    icon: Shield,
    description: "Our comprehensive privacy policy covering your rights, how we process data, and our commitments to protecting your information.",
    highlights: ["Your Rights", "Data Sharing", "Third-Party Services"],
  },
  {
    href: "/privacy/terms",
    title: "Terms of Service",
    icon: ScrollText,
    description: "The terms and conditions for using thirdspace, including acceptable use, subscriptions, and our service commitments.",
    highlights: ["Acceptable Use", "Points & Rewards", "Subscriptions"],
  },
  {
    href: "/privacy/security",
    title: "Security",
    icon: Lock,
    description: "How we protect your data with enterprise-grade security, encryption, and industry best practices.",
    highlights: ["Encryption Standards", "Authentication", "Compliance"],
  },
];

/**
 * PrivacyHubPage Component
 * Landing page for all privacy and legal documentation
 */
export function PrivacyHubPage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: brandColors.bgHex }}>
      <style>{getBrandGradientStyles()}</style>
      <FloatingGlow />
      
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back to Home Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy & Legal
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We believe in transparency. Explore our policies to understand how we protect your data 
              and the terms of using thirdspace.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">0</div>
              <div className="text-sm text-white/50">Data Sold</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">AES-256</div>
              <div className="text-sm text-white/50">Encryption</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">GDPR</div>
              <div className="text-sm text-white/50">Compliant</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">72hr</div>
              <div className="text-sm text-white/50">Breach Notice</div>
            </div>
          </div>
          
          {/* Section Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacySections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.href}
                  to={section.href}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">{section.title}</h2>
                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {section.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 rounded-md bg-white/5 text-xs text-white/50"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Contact Section */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Have questions about our policies?</h3>
            <p className="text-white/60 mb-6">
              We're committed to transparency. Reach out anytime with privacy or legal questions.
            </p>
            <a
              href="mailto:hi@jointhirdspace.app"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium"
            >
              Contact Us at hi@jointhirdspace.app
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

