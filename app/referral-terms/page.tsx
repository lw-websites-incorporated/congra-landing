import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Scheme Terms - Congra",
  description: "Terms and Conditions for the Congra Referral Scheme and Monthly Referral Competition.",
};

export default function ReferralTerms() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Congra Referral Scheme</h1>
          <p className="text-lg text-gray-700 mb-1">Terms and Conditions</p>
          <p className="text-gray-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) govern the Congra Referral Scheme and Monthly Referral
                Competition (&quot;Scheme&quot;), operated by Congra (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                By participating in the Scheme, you agree to be bound by these Terms.
              </p>
            </section>

            {/* 2. Eligibility */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You must hold a valid Congra account in good standing.</li>
                <li>You must be aged 18 or over at the time of participation.</li>
                <li>You must be a resident of the United Kingdom.</li>
                <li>
                  Employees and contractors of Congra are not eligible to win the monthly
                  competition prize, but may participate in the referral scheme for XP and badges.
                </li>
              </ul>
            </section>

            {/* 3. How the Referral Scheme Works */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How the Referral Scheme Works</h2>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.1 Referral Codes</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each eligible user is assigned a unique referral code linked to their account. You may share your
                referral code via the in-app share sheet, clipboard, WhatsApp, iMessage, or any other method. The
                referral link format is: <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">https://congra.app/invite/&#123;CODE&#125;</code>.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.2 Referral Matching</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                When a new user clicks your referral link, a device fingerprint (derived from IP address, screen size,
                language, and timezone) is recorded as a SHA-256 hash. On first app launch, the new user&apos;s device
                fingerprint is matched to your referral code via an automated process.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fingerprint matching runs once per install. Alternatively, the new user may enter your referral code
                manually during onboarding.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.3 Referral Completion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A referral is only considered &quot;completed&quot; when the referred user makes their first check-in
                within the Congra app. Registration alone does not constitute a completed referral. Referral statuses are:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Signed Up</strong> &ndash; the referred user has registered but has not yet checked in.
                </li>
                <li>
                  <strong>Completed</strong> &ndash; the referred user has made their first check-in and rewards have
                  been granted.
                </li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.4 Rewards</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon completion of a referral, both the referrer and the referred user will earn XP and may unlock
                badges within the Congra app. These in-app rewards hold no monetary value and cannot be exchanged for
                cash or any other consideration.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">3.5 Restrictions</h3>
              <p className="text-gray-600 leading-relaxed">
                You cannot use your own referral code. Each new user can only be referred once.
              </p>
            </section>

            {/* 4. Monthly Referral Competition */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Monthly Referral Competition</h2>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">4.1 Competition Period</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The current monthly referral competition runs until 18th March 2026 at 23:59 GMT (the &quot;Closing
                Date&quot;). Only completed referrals (as defined in Section 3.3) recorded before the Closing Date will
                count towards the competition.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">4.2 Minimum Qualifying Referrals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be eligible for the competition prize, you must have a minimum of four (4) completed referrals by the
                Closing Date. Users with fewer than four completed referrals will not be eligible for the prize,
                regardless of their leaderboard position.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">4.3 Leaderboard</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A live leaderboard ranks participants by their number of completed referrals during the competition
                period. The top 10 users are displayed. If you are outside the top 10, your own position will be shown
                separately. Users who are not your friends on the platform will appear anonymised as
                &quot;Someone&quot; on the leaderboard.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">4.4 Prize</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>The prize is a &pound;50 gift card voucher of the winner&apos;s choice.</li>
                <li>
                  The prize is a gift voucher only and cannot be exchanged for cash or any other alternative.
                </li>
                <li>No purchase is necessary to enter or win.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-6">4.5 Winner Selection and Notification</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  The winner will be the user with the highest number of completed referrals at the Closing Date,
                  subject to meeting the minimum qualifying threshold of four completed referrals.
                </li>
                <li>
                  In the event of a tie, the prize will be split equally between the tied participants (e.g. two winners
                  would each receive a &pound;25 gift card voucher).
                </li>
                <li>The winner will be contacted via the Congra app on Thursday 19th March 2026.</li>
                <li>
                  The winner must respond within fourteen (14) days of notification. If the winner fails to respond
                  within this period, the prize will be forfeited. No alternative winner will be selected.
                </li>
                <li>
                  The prize will be awarded no later than one week after the winner responds to the notification.
                </li>
              </ul>
            </section>

            {/* 5. Fraud and Disqualification */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Fraud and Disqualification</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to disqualify any user and void their referrals if we
                reasonably believe they have:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  Created or encouraged the creation of fake, duplicate, or fraudulent accounts for the purpose of
                  inflating referral counts.
                </li>
                <li>Used bots, scripts, or automated means to generate referrals.</li>
                <li>
                  Engaged in any form of manipulation, abuse, or conduct that undermines the integrity of the Scheme.
                </li>
                <li>Violated Congra&apos;s community guidelines or terms of service.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our decision on disqualification is final and no correspondence will be entered into.
              </p>
            </section>

            {/* 6. Data and Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data and Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Participation in the Scheme involves the collection and processing of certain data, including device
                fingerprints (stored as SHA-256 hashes), referral activity, and check-in data. This data is processed in
                accordance with our{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </Link>
                . Device fingerprints are used solely for the purpose of matching referrals and are not used for
                advertising or shared with third parties.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, we shall not be liable for any loss, damage, or disappointment
                suffered by any participant arising from their participation in the Scheme, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Any technical failure, server downtime, or issues with fingerprint matching.</li>
                <li>Any delay or failure in delivering the prize.</li>
                <li>Any tax liability arising from receipt of the prize.</li>
              </ul>
            </section>

            {/* 8. General */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. General</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  We reserve the right to amend, suspend, or cancel the Scheme or these Terms at any time, with
                  reasonable notice provided via the Congra app.
                </li>
                <li>
                  These Terms are governed by and construed in accordance with the laws of England and Wales.
                </li>
                <li>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                  shall continue in full force and effect.
                </li>
                <li>
                  Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that
                  right or provision.
                </li>
              </ul>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about the Scheme or these Terms, please contact us through the Congra app.
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
            <Link href="/support" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
