import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Congra",
  description: "Privacy Policy for the Congra mobile application.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Congra</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Congra. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> Your name, email address, and profile picture when you create an account.</li>
                <li><strong>User Content:</strong> Photos, messages, and other content you share through the app.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with the app, including features used and time spent.</li>
                <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
                <li><strong>Push Notification Tokens:</strong> If you enable notifications, we store tokens to send you updates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Connect you with friends and family on the platform</li>
                <li>Send you notifications about activity relevant to you</li>
                <li>Respond to your requests and support needs</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information.</li>
                <li><strong>With Other Users:</strong> Your profile and content may be visible to other users based on your privacy settings.</li>
                <li><strong>Service Providers:</strong> We work with third-party services to help operate our app (e.g., hosting, analytics).</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                policy, unless a longer retention period is required by law. When you delete your account, we will
                delete or anonymize your personal data within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Email:</strong> privacy@congra.app
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Congra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
