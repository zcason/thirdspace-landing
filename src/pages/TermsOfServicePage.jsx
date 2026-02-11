import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

/**
 * Sections for Table of Contents
 */
const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "description-of-service", title: "Description of Service" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "user-conduct", title: "User Conduct" },
  { id: "content", title: "Content" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "apple-app-store-terms", title: "Apple App Store Terms" },
  { id: "contact", title: "Contact Us" },
];

/**
 * TermsOfServicePage Component
 * Terms of Service for thirdspace
 */
export function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="February 11, 2026"
      currentPath="/privacy/terms"
      sections={sections}
    >
      <p>
        Welcome to Thirdspace. By downloading, installing, or using our application, you agree 
        to be bound by these Terms of Service ("Terms"). Please read them carefully.
      </p>

      <h2 id="acceptance-of-terms">1. Acceptance of Terms</h2>
      <p>
        By accessing or using Thirdspace ("the App"), you agree to be bound by these Terms and 
        our Privacy Policy. If you do not agree to these Terms, do not use the App.
      </p>

      <h2 id="description-of-service">2. Description of Service</h2>
      <p>
        Thirdspace is a mobile application that provides social discovery and location-based 
        services. We reserve the right to modify, suspend, or discontinue any aspect of the 
        service at any time.
      </p>

      <h2 id="user-accounts">3. User Accounts</h2>
      <ul>
        <li>You must be at least 18 years old to use this App</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
        <li>You are responsible for all activities that occur under your account</li>
        <li>You agree to provide accurate and complete information when creating your account</li>
      </ul>

      <h2 id="user-conduct">4. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Harass, abuse, or harm other users</li>
        <li>Impersonate any person or entity</li>
        <li>Interfere with or disrupt the App or servers</li>
        <li>Attempt to gain unauthorized access to any portion of the App</li>
        <li>Use the App to send spam or unsolicited messages</li>
      </ul>

      <h2 id="content">5. Content</h2>
      <ul>
        <li>You retain ownership of content you create and share through the App</li>
        <li>By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content within the App</li>
        <li>We reserve the right to remove any content that violates these Terms</li>
      </ul>

      <h2 id="intellectual-property">6. Intellectual Property</h2>
      <p>
        The App and its original content, features, and functionality are owned by Thirdspace 
        and are protected by international copyright, trademark, and other intellectual property laws.
      </p>

      <h2 id="third-party-services">7. Third-Party Services</h2>
      <p>
        The App may contain links to third-party websites or services. We are not responsible 
        for the content or practices of any third-party services.
      </p>

      <h2 id="disclaimers">8. Disclaimers</h2>
      <p>
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
        EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, SECURE, OR 
        ERROR-FREE.
      </p>

      <h2 id="limitation-of-liability">9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THIRDSPACE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE APP.
      </p>

      <h2 id="indemnification">10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Thirdspace and its officers, directors, employees, 
        and agents from any claims, damages, or expenses arising from your use of the App or 
        violation of these Terms.
      </p>

      <h2 id="changes-to-terms">11. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify users of any 
        material changes. Your continued use of the App after changes constitutes acceptance 
        of the new Terms.
      </p>

      <h2 id="termination">12. Termination</h2>
      <p>
        We may terminate or suspend your account and access to the App at our sole discretion, 
        without notice, for conduct that we believe violates these Terms or is harmful to other 
        users, us, or third parties.
      </p>

      <h2 id="governing-law">13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State 
        of California, without regard to its conflict of law provisions.
      </p>

      <h2 id="apple-app-store-terms">14. Apple App Store Terms</h2>
      <p>For users who download the App from the Apple App Store, the following additional terms apply:</p>
      <ul>
        <li>These Terms are between you and Thirdspace, not Apple</li>
        <li>Apple has no obligation to furnish any maintenance or support services with respect to the App</li>
        <li>Apple is not responsible for any product warranties or claims relating to the App</li>
        <li>Apple is not responsible for addressing any claims relating to the App or your possession and/or use of the App</li>
        <li>Apple is a third-party beneficiary of these Terms</li>
      </ul>

      <h3>Apple Licensed Application End User License Agreement</h3>
      <p>
        The App is licensed to you under Apple's standard Licensed Application End User License 
        Agreement (EULA). By using the App, you also agree to Apple's terms, which can be found here:
      </p>
      <p>
        <a 
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          Apple's Licensed Application End User License Agreement
        </a>
      </p>

      <h2 id="contact">15. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:hi@jointhirdspace.app" className="text-cyan-400 hover:text-cyan-300 underline">
          hi@jointhirdspace.app
        </a>.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-sm text-white/60">
          By using Thirdspace, you acknowledge that you have read, understood, and agree to be 
          bound by these Terms of Service.
        </p>
      </div>
    </LegalPageLayout>
  );
}


