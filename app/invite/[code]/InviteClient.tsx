"use client";

import { useEffect, useState } from "react";

interface InviteClientProps {
  code: string;
  validCode: boolean;
  referrerName: string | null;
  referrerAvatar: string | null;
  pendingReferralId: string | null;
}

const APP_STORE_URL = "https://apps.apple.com/gb/app/congra-the-social-map/id6757765815";

export default function InviteClient({
  code,
  validCode,
  referrerName,
  referrerAvatar,
  pendingReferralId,
}: InviteClientProps) {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Collect client-side fingerprint data and enrich the pending referral
    if (pendingReferralId) {
      const screenInfo = `${window.screen.width}x${window.screen.height}`;
      const language = navigator.language || "unknown";
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";

      fetch("/api/enrich-fingerprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pending_referral_id: pendingReferralId,
          screen_info: screenInfo,
          language,
          timezone,
        }),
      }).catch(() => {
        // Non-critical — fingerprint enrichment failure shouldn't block UX
      });
    }

    // Auto-redirect to App Store after 3 seconds
    const timer = setTimeout(() => {
      setRedirecting(true);
      window.location.href = APP_STORE_URL;
    }, 3000);

    return () => clearTimeout(timer);
  }, [pendingReferralId]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center gap-2">
          <img src="/images/icon.png" alt="Congra" className="w-8 h-8 rounded-lg" />
          <span
            className="text-lg font-black text-white"
            style={{ letterSpacing: "-0.13em" }}
          >
            Congra
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          {/* Referrer Avatar or Icon */}
          {validCode && referrerAvatar ? (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full overflow-hidden mb-6 ring-2 ring-white/20">
              <img
                src={referrerAvatar}
                alt={referrerName || "Referrer"}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(99,102,241)]/10 rounded-2xl mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(99,102,241)"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          )}

          {/* Heading */}
          {validCode && referrerName ? (
            <>
              <h1 className="text-2xl font-bold mb-2">
                {referrerName} invited you
              </h1>
              <p className="text-gray-400 mb-6">
                Join Congra to see where your friends are checking in
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">
                You&apos;ve been invited to Congra
              </h1>
              <p className="text-gray-400 mb-6">
                The social app for checking in at your favourite spots
              </p>
            </>
          )}

          {/* Referral Code Display */}
          {validCode && (
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Your invite code
              </p>
              <p className="text-2xl font-bold tracking-[0.2em] text-white font-mono">
                {code}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Enter this code when you sign up
              </p>
            </div>
          )}

          {/* App Store Button */}
          <a
            href={APP_STORE_URL}
            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
              <path d="M15.98 12.787c-.029-2.927 2.39-4.334 2.499-4.4-1.362-1.99-3.484-2.264-4.238-2.293-1.8-.184-3.524 1.063-4.44 1.063-.916 0-2.334-1.036-3.836-1.008-1.972.029-3.793 1.148-4.81 2.917-2.053 3.561-.526 8.837 1.473 11.727.978 1.416 2.145 3.006 3.676 2.949 1.476-.058 2.033-.955 3.817-.955 1.784 0 2.285.955 3.845.926 1.588-.029 2.601-1.443 3.568-2.864 1.125-1.642 1.588-3.228 1.616-3.312-.035-.015-3.098-1.189-3.127-4.714l-.044.036z" />
              <path d="M13.073 4.26c.812-.986 1.36-2.353 1.21-3.72-1.17.047-2.588.779-3.428 1.763-.753.872-1.412 2.264-1.235 3.601 1.306.101 2.64-.663 3.453-1.644z" />
            </svg>
            Download on the App Store
          </a>

          {/* Play Store - Coming Soon */}
          <div className="flex items-center justify-center gap-3 w-full py-4 mt-3 bg-white/10 text-gray-400 font-semibold rounded-xl cursor-not-allowed">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
              <path d="M1.175.422C.878.73.7 1.22.7 1.87v18.26c0 .65.178 1.14.475 1.448l.076.07L11.48 11.42v-.26L1.25.352l-.076.07z" />
              <path d="M14.89 14.84L11.48 11.42v-.26l3.41-3.42.077.044 4.04 2.295c1.154.655 1.154 1.727 0 2.382l-4.04 2.295-.077.044z" />
              <path d="M15.045 14.758L11.48 11.185 1.175 21.578c.38.403 1.01.452 1.72.05l12.15-6.87" />
              <path d="M15.045 7.612L2.895.742C2.185.34 1.555.39 1.175.792l10.305 10.393 3.565-3.573z" />
            </svg>
            Google Play — Coming Soon
          </div>

          {/* Redirect Notice */}
          {redirecting && (
            <p className="text-sm text-gray-500 mt-6 animate-pulse">
              Redirecting to App Store...
            </p>
          )}

          {/* Feature highlights */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl mb-1">📍</div>
                <div className="text-xs text-gray-400">Check in</div>
              </div>
              <div>
                <div className="text-2xl mb-1">👋</div>
                <div className="text-xs text-gray-400">See friends</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs text-gray-400">Earn badges</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Congra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
