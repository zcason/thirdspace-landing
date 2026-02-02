import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

/**
 * Sections for Table of Contents
 */
const sections = [
  { id: "information-you-provide", title: "Information You Provide" },
  { id: "information-we-collect-automatically", title: "Information We Collect Automatically" },
  { id: "information-we-do-not-collect", title: "Information We Do NOT Collect" },
  { id: "how-long-we-keep-your-data", title: "How Long We Keep Your Data" },
  { id: "your-control", title: "Your Control" },
];

/**
 * DataCollectionPage Component
 * Explains what data thirdspace collects and why
 */
export function DataCollectionPage() {
  return (
    <LegalPageLayout
      title="What Data We Collect"
      lastUpdated="January 2025"
      currentPath="/privacy/data-collection"
      sections={sections}
    >
      <p className="text-xl text-white/80 mb-8">
        At thirdspace, we believe in transparency. Here's exactly what data we collect and why.
      </p>

      <h2 id="information-you-provide">Information You Provide</h2>

      <h3>Account Information</h3>
      <ul>
        <li>Email address (for authentication and communication)</li>
        <li>Display name (optional, for personalization)</li>
        <li>Profile preferences (favorite venue types, vibe preferences)</li>
      </ul>

      <h3>Activity Data</h3>
      <ul>
        <li>Vibe match selections (to improve recommendations)</li>
        <li>Check-in history (to track your exploration journey)</li>
        <li>Achievement progress (to award your milestones)</li>
      </ul>

      <h2 id="information-we-collect-automatically">Information We Collect Automatically</h2>

      <h3>Location Data</h3>
      <ul>
        <li>We collect your location <strong>ONLY</strong> when you actively use the app to find venues</li>
        <li>Location is used solely to find nearby venues that match your vibe</li>
        <li>We do <strong>NOT</strong> track your location in the background</li>
        <li>We do <strong>NOT</strong> store historical location data beyond the check-in venue</li>
      </ul>

      <h3>Device Information</h3>
      <ul>
        <li>Device type and operating system (for app compatibility)</li>
        <li>App version (for support and updates)</li>
      </ul>

      <h3>Usage Analytics</h3>
      <ul>
        <li>Feature usage patterns (to improve the app experience)</li>
        <li>Crash reports (to fix bugs and improve stability)</li>
      </ul>

      <h2 id="information-we-do-not-collect">Information We Do NOT Collect</h2>
      <ul>
        <li>Contacts or address book</li>
        <li>Photos or camera roll</li>
        <li>Microphone or audio data</li>
        <li>Health or fitness data</li>
        <li>Financial or payment information (handled securely by Apple/Google)</li>
        <li>Social media accounts or connections</li>
        <li>Browsing history outside the app</li>
      </ul>

      <h2 id="how-long-we-keep-your-data">How Long We Keep Your Data</h2>
      <ul>
        <li><strong>Account data:</strong> Until you delete your account</li>
        <li><strong>Check-in history:</strong> Until you delete your account</li>
        <li><strong>Location data:</strong> Only processed in real-time, not stored</li>
        <li><strong>Analytics:</strong> Aggregated and anonymized after 90 days</li>
      </ul>

      <h2 id="your-control">Your Control</h2>
      <p>You can:</p>
      <ul>
        <li>Export all your data at any time</li>
        <li>Delete your account and all associated data</li>
        <li>Adjust location permissions in your device settings</li>
        <li>Contact us with any privacy questions</li>
      </ul>
    </LegalPageLayout>
  );
}


