import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import ScrollReveal from "./components/ScrollReveal";

const MapBackground = dynamic(() => import("./components/MapBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-100" />,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══════════════════════════════════════════
          HERO — Editorial layout with dramatic typography
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col bg-[#FAFAFA] overflow-hidden">
        {/* Nav */}
        <header className="relative z-10 w-full">
          <div className="w-full px-8 lg:px-12 py-6 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/icon.png"
                alt="Congra"
                width={40}
                height={40}
                className="rounded-xl shadow-lg shadow-black/10 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">Congra</span>
            </Link>
            <nav className="hidden md:flex items-center gap-10">
              <Link
                href="/support"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy
              </Link>
            </nav>
            <a
              href="https://business.congra.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-5 py-2 rounded-full transition-all duration-200"
            >
              Congra for Business
            </a>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex">
          <div className="w-full px-8 lg:px-12 py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start lg:items-center">

            {/* Left Column — Typography & CTA Card */}
            <div className="flex flex-col justify-center lg:pr-8">
              {/* Dramatic Headline */}
              <div className="hero-entrance hero-entrance-1">
                <h1 className="text-[4rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-gray-900 leading-[0.9] tracking-tight">
                  YOUR CITY,
                </h1>
                <h1 className="text-[4rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-[#4A90E2] leading-[0.9] tracking-tight">
                  YOUR CREW.
                </h1>
              </div>

              {/* CTA Card */}
              <div className="hero-entrance hero-entrance-2 mt-8 lg:mt-12 bg-[#4A90E2]/[0.08] rounded-3xl p-8 lg:p-10 max-w-lg relative overflow-hidden">
                {/* Decorative swirl */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-[0.15]">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 100C40 60 70 40 100 40C130 40 160 60 160 100C160 140 130 160 100 160" stroke="#4A90E2" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M60 100C60 75 80 60 100 60C120 60 140 75 140 100" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                  Check in to venues, see where your friends are, and never miss a moment worth celebrating. Real-time location sharing made simple.
                </p>

                <a
                  href="#"
                  className="btn-lift inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-200 relative z-10"
                >
                  Get Started
                </a>
              </div>

              {/* App Store Links */}
              <div className="hero-entrance hero-entrance-3 mt-10 flex items-center gap-6">
                <span className="text-sm text-gray-500">The mobile app<br />is available now</span>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-11 h-11 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors duration-200 group">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors duration-200 group">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column — Phone Mockup (hidden) */}
            <div className="hidden hero-entrance hero-entrance-2 justify-center lg:justify-end items-center lg:items-end lg:self-stretch">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-[320px] sm:w-[360px] lg:w-[380px] aspect-[9/18]">
                  {/* Phone body */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl shadow-gray-900/30">
                    {/* Screen bezel */}
                    <div className="absolute inset-3 bg-gray-100 rounded-[2.25rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-white/80 backdrop-blur-sm z-30 flex items-center justify-between px-6">
                        <span className="text-xs font-medium text-gray-900">9:41</span>
                        <div className="flex items-center gap-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                            <path d="M12 3C7.46 3 3.34 5.78 1.18 10c2.16 4.22 6.28 7 10.82 7s8.66-2.78 10.82-7C20.66 5.78 16.54 3 12 3z"/>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                            <path d="M17 7H7v10h10V7z"/>
                          </svg>
                        </div>
                      </div>
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-40" />
                      {/* Map content */}
                      <div className="absolute inset-0 pt-8">
                        <MapBackground />
                      </div>
                    </div>
                  </div>
                  {/* Reflection highlight */}
                  <div className="absolute top-4 left-4 right-1/2 bottom-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-tl-[2.75rem] pointer-events-none" />
                </div>
                {/* Shadow underneath */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gray-900/20 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════ */}
      <section className="relative bg-white py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <p className="text-sm font-bold text-[#4A90E2] tracking-widest uppercase mb-4">
              Why Congra
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              The best moments<br />happen together
            </h2>
          </ScrollReveal>

          <ScrollReveal staggerChildren={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="stagger-child feature-card group relative bg-gray-50 rounded-3xl p-8 hover:bg-[#4A90E2]">
              <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A90E2] group-hover:text-white transition-colors duration-300">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                Check In Anywhere
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                Tap to check in at any venue. Your friends see where you are and can join the fun.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="stagger-child feature-card group relative bg-gray-50 rounded-3xl p-8 hover:bg-[#4A90E2]">
              <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A90E2] group-hover:text-white transition-colors duration-300">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                Share the Vibe
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                Let your crew know what&apos;s going on. Share the moment so they can be part of it.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="stagger-child feature-card group relative bg-gray-50 rounded-3xl p-8 hover:bg-[#4A90E2]">
              <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A90E2] group-hover:text-white transition-colors duration-300">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                Discover What&apos;s Hot
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                See trending spots and where your friends are heading. Never miss a great night out.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="stagger-child feature-card group relative bg-gray-50 rounded-3xl p-8 hover:bg-[#4A90E2]">
              <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A90E2] group-hover:text-white transition-colors duration-300">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                Your Crew, Your Map
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                A live map of your world. See check-ins from the people who matter most to you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-28 sm:py-36 overflow-hidden">
        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <p className="text-sm font-bold text-[#4A90E2] tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Three taps. That&apos;s it.
            </h2>
          </ScrollReveal>

          <ScrollReveal staggerChildren={150} className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Step 1 */}
            <div className="stagger-child text-center">
              <div className="step-circle inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A90E2] text-white text-2xl font-black mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Arrive somewhere great
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                Walk into your favourite bar, restaurant, park — anywhere worth being.
              </p>
            </div>

            {/* Step 2 */}
            <div className="stagger-child text-center">
              <div className="step-circle inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A90E2] text-white text-2xl font-black mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Check in with a tap
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                Open Congra, tap check in. We&apos;ll find the venue and let your crew know you&apos;re there.
              </p>
            </div>

            {/* Step 3 */}
            <div className="stagger-child text-center">
              <div className="step-circle inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A90E2] text-white text-2xl font-black mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Celebrate together
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                Friends see your check-in, head over, and the night gets even better.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA / DOWNLOAD
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#4A90E2] py-28 sm:py-36 overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <Image
            src="/images/icon.png"
            alt="Congra"
            width={72}
            height={72}
            className="cta-icon rounded-[18px] mx-auto mb-8 shadow-2xl shadow-black/20"
          />

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Ready to join<br />
            <span className="text-white/90">the crew?</span>
          </h2>

          <p className="text-lg text-white/70 max-w-md mx-auto mb-12 leading-relaxed">
            Download Congra and start sharing your favourite moments with the people who matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="btn-lift group inline-flex items-center gap-3 bg-white text-[#4A90E2] pl-5 pr-7 py-3.5 rounded-2xl font-bold text-[15px] hover:bg-white/95 shadow-xl shadow-black/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-80 group-hover:opacity-100 transition-opacity">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="#"
              className="btn-lift group inline-flex items-center gap-3 bg-white/[0.15] text-white border border-white/[0.25] pl-5 pr-7 py-3.5 rounded-2xl font-bold text-[15px] hover:bg-white/[0.25]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 group-hover:opacity-90 transition-opacity">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              Google Play
            </a>
          </div>

          <p className="text-xs text-white/50 mt-6 font-medium tracking-wide uppercase">
            Coming soon to iOS &amp; Android
          </p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/icon.png"
                alt="Congra"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-base font-bold text-gray-400">
                congra
              </span>
            </div>
            <div className="flex items-center gap-8">
              <Link
                href="/support"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 font-medium"
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 font-medium"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Congra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
