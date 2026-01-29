import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapBackground = dynamic(() => import("./components/MapBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#050210]" />
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-md bg-black/40 relative z-20">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-fuchsia-500/25">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="text-xl font-black text-white" style={{ letterSpacing: "-0.13em" }}>Congra</span>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-2xl text-center backdrop-blur-xl bg-black/50 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/50">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
              <span className="text-sm text-fuchsia-300 font-medium">Live check-ins happening now</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Share Where You Are,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Celebrate Together
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-lg mx-auto">
              Check in to your favorite venues, share the vibe with friends, and discover where everyone is heading tonight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg shadow-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download for iOS
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/15 px-8 py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all hover:scale-105 backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                Download for Android
              </a>
            </div>

            <p className="text-sm text-white/30 mt-8">Coming soon to iOS and Android</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-md bg-black/40 py-6 relative z-20">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Congra. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
