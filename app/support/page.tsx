import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Congra",
  description: "Get help and support for the Congra mobile application.",
};

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/icon.png" alt="Congra" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-bold text-gray-900">congra</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
            <span aria-hidden="true">&larr;</span> Back to site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Support</h1>
          <p className="text-gray-500 mb-8">We&apos;re here to help you get the most out of Congra.</p>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you need help, have a question, or want to report an issue, the fastest way to reach us is by email.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
                <p><strong>Email:</strong> luke_vb1@outlook.com</p>
                <p className="mt-2"><strong>Response Time:</strong> We aim to respond within 24 hours.</p>
              </div>
            </section>

            {/* Common Questions */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">How do I create an account?</h3>
              <p className="text-gray-600 leading-relaxed">
                Download Congra from the App Store, open the app, and follow the sign-up prompts. You&apos;ll need to provide your name, email address, and create a password.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">How do I check in to a venue?</h3>
              <p className="text-gray-600 leading-relaxed">
                When you&apos;re at a venue, open the app and tap the check-in button. Congra uses your location to identify nearby venues. Select the correct venue and confirm your check-in.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">Why does Congra need my location?</h3>
              <p className="text-gray-600 leading-relaxed">
                Congra uses your precise location to identify the venue you&apos;re at when you check in. With your permission, background location allows the app to notify you when you arrive at a venue so you can check in without opening the app first. You can disable background location at any time in your device settings.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">How do I manage notifications?</h3>
              <p className="text-gray-600 leading-relaxed">
                You can manage push notifications in your device settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                <li><strong>iOS:</strong> Settings → Notifications → Congra</li>
                <li><strong>Android:</strong> Settings → Apps → Congra → Notifications</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">How do I delete my account?</h3>
              <p className="text-gray-600 leading-relaxed">
                You can delete your account directly in the app:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2 mt-2">
                <li>Open the Congra app</li>
                <li>Go to Settings</li>
                <li>Select &quot;Account&quot;</li>
                <li>Tap &quot;Delete Account&quot;</li>
                <li>Confirm deletion</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mt-3">
                Alternatively, you can request account deletion by emailing <strong>luke_vb1@outlook.com</strong>.
              </p>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Troubleshooting</h2>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">The app isn&apos;t detecting my location</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Make sure location services are enabled for Congra in your device settings.</li>
                <li>On iOS, set location access to &quot;While Using the App&quot; or &quot;Always&quot; for background detection.</li>
                <li>Ensure you have a stable internet connection.</li>
                <li>Try closing and reopening the app.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">I&apos;m not receiving notifications</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Check that notifications are enabled for Congra in your device settings.</li>
                <li>Make sure you haven&apos;t enabled Do Not Disturb or Focus mode.</li>
                <li>Try signing out and signing back in to refresh your notification token.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">The app is crashing or not loading</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Make sure you&apos;re running the latest version of Congra from the App Store.</li>
                <li>Restart the app by closing it completely and reopening it.</li>
                <li>Restart your device.</li>
                <li>If the issue persists, uninstall and reinstall the app.</li>
              </ul>
            </section>

            {/* Feedback */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Feedback</h2>
              <p className="text-gray-600 leading-relaxed">
                We&apos;d love to hear from you. If you have suggestions for how we can improve Congra, or if something isn&apos;t working the way you&apos;d expect, let us know at <strong>luke_vb1@outlook.com</strong>.
              </p>
            </section>

            {/* Privacy */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Privacy &amp; Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For information about how we collect, use, and protect your data, please see our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For data-related requests such as data access, correction, or deletion, contact us at <strong>privacy@congra.app</strong>.
              </p>
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
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
