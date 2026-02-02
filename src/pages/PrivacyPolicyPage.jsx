import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

/**
 * Sections for Table of Contents
 */
const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "who-we-are", title: "Who We Are" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "legal-basis", title: "Legal Basis for Processing" },
  { id: "how-we-use-your-information", title: "How We Use Your Information" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "international-transfers", title: "International Transfers" },
  { id: "changes-to-this-policy", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

/**
 * PrivacyPolicyPage Component
 * Full privacy policy for thirdspace
 */
export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2025"
      currentPath="/privacy/policy"
      sections={sections}
    >
      <h2 id="introduction">Introduction</h2>
      <p>
        thirdspace ("we," "our," or "us") respects your privacy and is committed to protecting 
        your personal data. This privacy policy explains how we collect, use, and safeguard your 
        information when you use our mobile application.
      </p>

      <h2 id="who-we-are">Who We Are</h2>
      <p>
        thirdspace is a venue discovery app that helps you find places matching your current mood 
        and vibe. We are based in the United States and can be contacted at{" "}
        <a href="mailto:hi@jointhirdspace.app">hi@jointhirdspace.app</a>.
      </p>

      <h3>Data Controller</h3>
      <p>
        thirdspace is the data controller responsible for your personal data collected through the app.
      </p>

      <h2 id="information-we-collect">Information We Collect</h2>

      <h3>Personal Data</h3>
      <ul>
        <li>Email address</li>
        <li>Display name (optional)</li>
        <li>Venue preferences and settings</li>
      </ul>

      <h3>Usage Data</h3>
      <ul>
        <li>Check-in history</li>
        <li>Vibe match selections</li>
        <li>Achievement progress</li>
        <li>App interaction data</li>
      </ul>

      <h3>Location Data</h3>
      <ul>
        <li>Real-time location (only when actively using venue discovery)</li>
        <li>Check-in location verification</li>
      </ul>

      <h2 id="legal-basis">Legal Basis for Processing</h2>
      <p>We process your data based on:</p>
      <ul>
        <li><strong>Consent:</strong> You consent to data processing when creating an account</li>
        <li><strong>Contract:</strong> Processing necessary to provide our services</li>
        <li><strong>Legitimate Interest:</strong> Improving our services and user experience</li>
      </ul>

      <h2 id="how-we-use-your-information">How We Use Your Information</h2>
      <ul>
        <li>To provide personalized venue recommendations</li>
        <li>To verify check-ins and award points</li>
        <li>To track achievements and progress</li>
        <li>To communicate important updates</li>
        <li>To improve our services</li>
        <li>To respond to support requests</li>
      </ul>

      <h2 id="data-sharing">Data Sharing</h2>
      <p>
        We do <strong>NOT</strong> sell your personal data. We may share data only with:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> Cloud hosting (for app functionality)</li>
        <li><strong>Legal Requirements:</strong> If required by law or to protect rights</li>
        <li><strong>Business Transfers:</strong> In case of merger or acquisition (with notice)</li>
      </ul>

      <h2 id="third-party-services">Third-Party Services</h2>
      <p>Our app integrates with:</p>
      <ul>
        <li>Google Places API (for venue data)</li>
        <li>Apple/Google authentication (for sign-in)</li>
        <li>RevenueCat (for subscription management)</li>
      </ul>
      <p>These services have their own privacy policies.</p>

      <h2 id="data-retention">Data Retention</h2>
      <p>We retain your data until you delete your account. Upon deletion:</p>
      <ul>
        <li>All personal data is permanently removed</li>
        <li>Check-in history is deleted</li>
        <li>Achievement records are deleted</li>
        <li>This process is irreversible</li>
      </ul>

      <h2 id="your-rights">Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your data</li>
        <li><strong>Rectification:</strong> Correct inaccurate data</li>
        <li><strong>Erasure:</strong> Delete your account and data</li>
        <li><strong>Portability:</strong> Export your data</li>
        <li><strong>Objection:</strong> Object to certain processing</li>
        <li><strong>Withdraw Consent:</strong> Revoke consent at any time</li>
      </ul>

      <h2 id="childrens-privacy">Children's Privacy</h2>
      <p>
        thirdspace is intended for users 18 years of age and older. We do not knowingly collect 
        personal data from anyone under 18. If we learn that we have collected data from a user 
        under 18, we will promptly delete that information.
      </p>

      <h2 id="international-transfers">International Transfers</h2>
      <p>
        Your data may be processed in the United States. We ensure appropriate safeguards are 
        in place for international transfers.
      </p>

      <h2 id="changes-to-this-policy">Changes to This Policy</h2>
      <p>
        We may update this policy periodically. We will notify you of significant changes 
        through the app or email.
      </p>

      <h2 id="contact-us">Contact Us</h2>
      <p>For privacy questions or to exercise your rights:</p>
      <ul>
        <li>Email: <a href="mailto:hi@jointhirdspace.app">hi@jointhirdspace.app</a></li>
        <li>Website: <a href="https://jointhirdspace.app">jointhirdspace.app</a></li>
      </ul>
    </LegalPageLayout>
  );
}



