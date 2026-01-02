import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

/**
 * Sections for Table of Contents
 */
const sections = [
  { id: "infrastructure-security", title: "Infrastructure Security" },
  { id: "authentication-security", title: "Authentication Security" },
  { id: "data-protection", title: "Data Protection" },
  { id: "what-we-dont-do", title: "What We Don't Do" },
  { id: "incident-response", title: "Incident Response" },
  { id: "your-security-practices", title: "Your Security Practices" },
  { id: "security-contact", title: "Security Contact" },
  { id: "compliance", title: "Compliance" },
];

/**
 * SecurityPage Component
 * Details how thirdspace protects user data
 */
export function SecurityPage() {
  return (
    <LegalPageLayout
      title="How We Protect Your Data"
      lastUpdated="January 2025"
      currentPath="/privacy/security"
      sections={sections}
    >
      <p className="text-xl text-white/80 mb-8">
        Your security is our priority. Here's how we keep your data safe.
      </p>

      <h2 id="infrastructure-security">Infrastructure Security</h2>

      <h3>Cloud Security</h3>
      <ul>
        <li>All data is hosted on secure, enterprise-grade cloud infrastructure</li>
        <li>We use industry-standard encryption for data at rest</li>
        <li>Regular security audits and penetration testing</li>
      </ul>

      <h3>Network Security</h3>
      <ul>
        <li>All data transmission uses TLS 1.3 encryption (HTTPS)</li>
        <li>API endpoints are protected against common attacks</li>
        <li>DDoS protection and rate limiting</li>
      </ul>

      <h2 id="authentication-security">Authentication Security</h2>

      <h3>Secure Sign-In</h3>
      <ul>
        <li>Passwordless authentication via email OTP</li>
        <li>No passwords to steal or leak</li>
        <li>Session tokens with automatic expiration</li>
        <li>Secure token storage on your device</li>
      </ul>

      <h3>Account Protection</h3>
      <ul>
        <li>Automatic session invalidation on suspicious activity</li>
        <li>One active session per device</li>
        <li>Secure account deletion process</li>
      </ul>

      <h2 id="data-protection">Data Protection</h2>

      <h3>Encryption</h3>
      <ul>
        <li>All personal data encrypted at rest (AES-256)</li>
        <li>All data encrypted in transit (TLS 1.3)</li>
        <li>Database-level encryption</li>
      </ul>

      <h3>Access Control</h3>
      <ul>
        <li>Strict employee access controls</li>
        <li>Principle of least privilege</li>
        <li>Access logging and monitoring</li>
      </ul>

      <h3>Location Privacy</h3>
      <ul>
        <li>Location data processed in real-time only</li>
        <li>No persistent location storage</li>
        <li>Location used solely for venue discovery</li>
      </ul>

      <h2 id="what-we-dont-do">What We Don't Do</h2>
      <ul>
        <li>We <strong>NEVER</strong> store your location history</li>
        <li>We <strong>NEVER</strong> sell your data to third parties</li>
        <li>We <strong>NEVER</strong> share data with advertisers</li>
        <li>We <strong>NEVER</strong> use dark patterns to collect data</li>
      </ul>

      <h2 id="incident-response">Incident Response</h2>
      <p>In the unlikely event of a security incident:</p>
      <ul>
        <li>We will notify affected users within 72 hours</li>
        <li>We will provide details on what data was affected</li>
        <li>We will take immediate remediation steps</li>
        <li>We will report to relevant authorities as required</li>
      </ul>

      <h2 id="your-security-practices">Your Security Practices</h2>
      <p>We recommend:</p>
      <ul>
        <li>Keep your device operating system updated</li>
        <li>Use device passcode or biometric lock</li>
        <li>Review app permissions periodically</li>
        <li>Log out if you lose your device (via account settings)</li>
      </ul>

      <h2 id="security-contact">Security Contact</h2>
      <p>To report security vulnerabilities:</p>
      <ul>
        <li>Email: <a href="mailto:hi@jointhirdspace.app">hi@jointhirdspace.app</a></li>
        <li>Subject: "Security Report"</li>
        <li>We appreciate responsible disclosure</li>
      </ul>

      <h2 id="compliance">Compliance</h2>
      <p>We follow industry best practices and comply with:</p>
      <ul>
        <li>GDPR (General Data Protection Regulation)</li>
        <li>CCPA (California Consumer Privacy Act)</li>
        <li>Apple App Store Guidelines</li>
        <li>Google Play Policies</li>
      </ul>
    </LegalPageLayout>
  );
}

