import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

/**
 * Sections for Table of Contents
 */
const sections = [
  { id: "agreement-to-terms", title: "Agreement to Terms" },
  { id: "description-of-service", title: "Description of Service" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "points-and-rewards", title: "Points and Rewards" },
  { id: "subscription-and-purchases", title: "Subscription and Purchases" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "contact", title: "Contact" },
];

/**
 * TermsOfServicePage Component
 * Terms of Service for thirdspace
 */
export function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 2025"
      currentPath="/privacy/terms"
      sections={sections}
    >
      <h2 id="agreement-to-terms">Agreement to Terms</h2>
      <p>
        By downloading or using thirdspace, you agree to these Terms of Service. If you 
        disagree with any part, please do not use the app.
      </p>

      <h2 id="description-of-service">Description of Service</h2>
      <p>thirdspace is a mobile application that:</p>
      <ul>
        <li>Recommends nearby venues based on your mood and preferences</li>
        <li>Allows you to check in at venues and earn points</li>
        <li>Tracks achievements and exploration progress</li>
        <li>Provides a gamified venue discovery experience</li>
      </ul>

      <h2 id="user-accounts">User Accounts</h2>

      <h3>Account Creation</h3>
      <ul>
        <li>You must provide accurate information</li>
        <li>You are responsible for maintaining account security</li>
        <li>You must be at least 13 years old to use the app</li>
      </ul>

      <h3>Account Termination</h3>
      <ul>
        <li>You may delete your account at any time</li>
        <li>We may suspend accounts that violate these terms</li>
        <li>Upon termination, all data is permanently deleted</li>
      </ul>

      <h2 id="acceptable-use">Acceptable Use</h2>
      <p>You agree <strong>NOT</strong> to:</p>
      <ul>
        <li>Use the app for illegal purposes</li>
        <li>Attempt to manipulate check-ins or points</li>
        <li>Interfere with app functionality</li>
        <li>Create multiple accounts to abuse features</li>
        <li>Harass other users or venues</li>
        <li>Post false or misleading venue information</li>
      </ul>

      <h2 id="points-and-rewards">Points and Rewards</h2>

      <h3>Vibe Points</h3>
      <ul>
        <li>Points are earned through legitimate check-ins and achievements</li>
        <li>Points have no monetary value</li>
        <li>Points may be redeemable for rewards at partner venues (future feature)</li>
        <li>We reserve the right to adjust point values</li>
      </ul>

      <h3>Achievements</h3>
      <ul>
        <li>Achievements are awarded based on activity milestones</li>
        <li>Achievement criteria may be updated periodically</li>
      </ul>

      <h2 id="subscription-and-purchases">Subscription and Purchases</h2>

      <h3>Premium Subscription</h3>
      <ul>
        <li>Premium features are available via subscription</li>
        <li>Subscriptions are billed through Apple App Store or Google Play</li>
        <li>Refunds are handled by Apple/Google per their policies</li>
      </ul>

      <h3>Match Packs</h3>
      <ul>
        <li>Additional matches can be purchased</li>
        <li>Purchased matches do not expire</li>
        <li>No refunds for unused matches</li>
      </ul>

      <h2 id="intellectual-property">Intellectual Property</h2>
      <ul>
        <li>thirdspace and its content are protected by copyright</li>
        <li>You may not copy, modify, or distribute app content</li>
        <li>User-generated content remains yours, but you grant us license to use it</li>
      </ul>

      <h2 id="disclaimers">Disclaimers</h2>

      <h3>Venue Information</h3>
      <ul>
        <li>We do not own or operate venues shown in the app</li>
        <li>Venue information comes from third-party sources</li>
        <li>We are not responsible for venue accuracy, availability, or quality</li>
      </ul>

      <h3>Location Services</h3>
      <ul>
        <li>Location accuracy depends on your device</li>
        <li>Check-in verification requires location access</li>
      </ul>

      <h3>Service Availability</h3>
      <ul>
        <li>We strive for 99% uptime but cannot guarantee availability</li>
        <li>We may modify or discontinue features with notice</li>
      </ul>

      <h2 id="limitation-of-liability">Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>We are not liable for indirect, incidental, or consequential damages</li>
        <li>Our total liability is limited to amounts you paid us in the past 12 months</li>
        <li>Some jurisdictions do not allow these limitations</li>
      </ul>

      <h2 id="indemnification">Indemnification</h2>
      <p>You agree to indemnify thirdspace from claims arising from:</p>
      <ul>
        <li>Your use of the app</li>
        <li>Your violation of these terms</li>
        <li>Your violation of third-party rights</li>
      </ul>

      <h2 id="changes-to-terms">Changes to Terms</h2>
      <p>
        We may update these terms. Continued use after changes constitutes acceptance. 
        Material changes will be communicated via the app.
      </p>

      <h2 id="governing-law">Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Delaware, United States.
      </p>

      <h2 id="dispute-resolution">Dispute Resolution</h2>
      <p>
        Disputes will be resolved through binding arbitration, except where prohibited by law. 
        You waive the right to participate in class actions.
      </p>

      <h2 id="contact">Contact</h2>
      <p>For questions about these terms:</p>
      <ul>
        <li>Email: <a href="mailto:hi@jointhirdspace.app">hi@jointhirdspace.app</a></li>
        <li>Website: <a href="https://jointhirdspace.app">jointhirdspace.app</a></li>
      </ul>
    </LegalPageLayout>
  );
}


