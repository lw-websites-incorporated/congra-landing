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
          <p className="text-gray-500 mb-2">Last updated: January 28, 2025</p>
          <p className="text-gray-500 mb-8">Effective date: January 28, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Congra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and personal data.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                mobile application (&quot;App&quot;) available on iOS and Android platforms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using Congra, you agree to the collection and use of information in accordance with this policy.
                If you do not agree with this policy, please do not use our App.
              </p>
            </section>

            {/* Data Controller */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Data Controller</h2>
              <p className="text-gray-600 leading-relaxed">
                For the purposes of applicable data protection laws, the data controller is:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg text-gray-600">
                <p><strong>Congra</strong></p>
                <p>Email: privacy@congra.app</p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly and information collected automatically when you use our App.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
                <li><strong>Profile Information:</strong> Profile photo, display name, and any optional bio or profile details you choose to add.</li>
                <li><strong>User Content:</strong> Photos, images, messages, and other content you upload or share through the App.</li>
                <li><strong>Communications:</strong> Information you provide when you contact us for support or feedback.</li>
                <li><strong>Connections:</strong> Information about your friends and connections within the App when you choose to connect with other users.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.2 Location Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Precise Location:</strong> When you check in to a venue, we collect your precise location to identify and display the venue you are at. This is only collected when you actively perform a check-in.</li>
                <li><strong>Venue Information:</strong> The name and location of venues you check in to are stored as part of your check-in history.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Note:</strong> Location data is only collected when you initiate a check-in. We do not track your location in the background or when the app is not in use.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.3 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.</li>
                <li><strong>Usage Data:</strong> Features used, actions taken, time and date of use, and interaction patterns within the App.</li>
                <li><strong>Push Notification Tokens:</strong> If you enable push notifications, we collect device tokens to deliver notifications.</li>
                <li><strong>Log Data:</strong> IP address, access times, and app crash reports for troubleshooting purposes.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.4 Information We Do NOT Collect</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do <strong>not</strong> collect background location data (location is only collected during active check-ins)</li>
                <li>We do <strong>not</strong> collect financial or payment information</li>
                <li>We do <strong>not</strong> collect health or fitness data</li>
                <li>We do <strong>not</strong> collect contacts from your device address book without explicit permission</li>
                <li>We do <strong>not</strong> track you across other apps or websites for advertising purposes</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Contract Performance:</strong> Processing necessary to provide you with our services and fulfill our agreement with you.</li>
                <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities, such as push notifications.</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such as improving our services and ensuring security, where these interests are not overridden by your rights.</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements.</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Provide Services:</strong> Create and manage your account, enable core app functionality, and allow you to connect with other users.</li>
                <li><strong>Communications:</strong> Send you service-related notifications, updates, and respond to your inquiries.</li>
                <li><strong>Push Notifications:</strong> Send you notifications about activity relevant to you (with your consent).</li>
                <li><strong>Improvements:</strong> Analyze usage patterns to improve and optimize our App.</li>
                <li><strong>Security:</strong> Detect, prevent, and address technical issues, fraud, and security threats.</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations.</li>
              </ul>
            </section>

            {/* Tracking and Advertising */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Tracking and Advertising</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>We do not track you for advertising purposes.</strong> Specifically:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do <strong>not</strong> use advertising identifiers (IDFA/GAID) to track you</li>
                <li>We do <strong>not</strong> share your data with advertising networks</li>
                <li>We do <strong>not</strong> build profiles for targeted advertising</li>
                <li>We do <strong>not</strong> track your activity across other companies&apos; apps or websites</li>
                <li>We do <strong>not</strong> sell or share your personal information with data brokers</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                As required by Apple&apos;s App Tracking Transparency framework, we confirm that our App does not engage in tracking as defined by Apple.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. How We Share Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>We do not sell your personal information.</strong> We may share your information only in the following limited circumstances:
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">7.1 With Other Users</h3>
              <p className="text-gray-600 leading-relaxed">
                Your profile information and content you share may be visible to other users based on your privacy settings and connections within the App.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">7.2 Service Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                We use trusted third-party service providers to help us operate our App. These providers are contractually obligated to protect your data and use it only for the services they provide to us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Supabase:</strong> Database hosting and authentication services (data stored in secure cloud infrastructure)</li>
                <li><strong>Expo Push Notifications:</strong> Delivery of push notifications to your device</li>
                <li><strong>Cloud Hosting:</strong> Secure hosting infrastructure for our services</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">7.3 Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                We may disclose your information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">7.4 Business Transfers</h3>
              <p className="text-gray-600 leading-relaxed">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your personal data is transferred and becomes subject to a different privacy policy.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion to allow for account recovery.</li>
                <li><strong>User Content:</strong> Retained while your account is active. Deleted within 30 days of account deletion.</li>
                <li><strong>Usage Data:</strong> Retained for up to 12 months for analytics purposes, then anonymized or deleted.</li>
                <li><strong>Log Data:</strong> Retained for up to 90 days for troubleshooting and security purposes.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We may retain certain information longer if required by law or for legitimate business purposes such as resolving disputes.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit using TLS/SSL</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls limiting who can access personal data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                While we strive to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards, including standard contractual clauses approved by relevant authorities, to ensure your data remains protected.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (see &quot;Account Deletion&quot; below).</li>
                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> Object to processing of your personal data in certain circumstances.</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal data.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent to process your data.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us at <strong>privacy@congra.app</strong>. We will respond to your request within 30 days.
              </p>
            </section>

            {/* Account Deletion */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Account Deletion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can delete your account at any time. When you delete your account:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your profile and account information will be permanently deleted within 30 days</li>
                <li>Content you have shared will be removed</li>
                <li>Your connections and friend relationships will be removed</li>
                <li>Push notification tokens will be deleted immediately</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>How to delete your account:</strong>
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2 mt-2">
                <li>Open the Congra app</li>
                <li>Go to Settings</li>
                <li>Select &quot;Account&quot;</li>
                <li>Tap &quot;Delete Account&quot;</li>
                <li>Confirm deletion</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mt-4">
                Alternatively, you can request account deletion by emailing <strong>privacy@congra.app</strong> from the email address associated with your account.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">13. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
                <li><strong>Right to Opt-Out of Sale:</strong> We do not sell personal information, so this right does not apply.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise your California privacy rights, contact us at <strong>privacy@congra.app</strong>.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our App is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children under these ages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at <strong>privacy@congra.app</strong>. We will take steps to delete such information from our systems.
              </p>
            </section>

            {/* Push Notifications */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Push Notifications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With your permission, we may send push notifications to your device. You can manage or disable push notifications at any time:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>iOS:</strong> Go to Settings → Notifications → Congra</li>
                <li><strong>Android:</strong> Go to Settings → Apps → Congra → Notifications</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Disabling push notifications will not affect core app functionality.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">16. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. When we make material changes, we will notify you by updating the &quot;Last updated&quot; date at the top of this policy and, where appropriate, provide additional notice (such as an in-app notification or email). We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
                <p><strong>Email:</strong> privacy@congra.app</p>
                <p className="mt-2"><strong>Response Time:</strong> We aim to respond to all inquiries within 30 days.</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                If you are located in the EEA and believe we have not adequately addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority.
              </p>
            </section>

            {/* App Store Data Practices Summary */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Summary of Data Practices</h2>
              <p className="text-gray-500 text-sm mb-4">For App Store and Google Play transparency requirements</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Data Collected</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Contact info (name, email)</li>
                    <li>• Precise location (during check-ins only)</li>
                    <li>• User content (photos, messages)</li>
                    <li>• Identifiers (user ID, device ID)</li>
                    <li>• Usage data (app interactions)</li>
                    <li>• Diagnostics (crash logs)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Data NOT Collected</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Background location tracking</li>
                    <li>• Financial information</li>
                    <li>• Health data</li>
                    <li>• Browsing history</li>
                    <li>• Advertising identifiers for tracking</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Tracking:</strong> This app does not track you. We do not link your data with third-party data for advertising,
                  nor do we share your data with data brokers.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-12">
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
