"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

type PageState = "loading" | "ready" | "submitting" | "success" | "error" | "invalid";

export default function ResetPassword() {
  const [state, setState] = useState<PageState>("loading");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleRecovery = async () => {
      try {
        // Case 1: Implicit flow — tokens in hash fragment (#access_token=...)
        const hash = window.location.hash;
        if (hash && hash.includes("access_token")) {
          const params = new URLSearchParams(hash.substring(1));
          const accessToken = params.get("access_token");
          const refreshToken = params.get("refresh_token");
          const type = params.get("type");

          if (!accessToken || !refreshToken || type !== "recovery") {
            setState("invalid");
            setErrorMessage("Invalid reset link. Please request a new password reset.");
            return;
          }

          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            setState("error");
            setErrorMessage("This reset link has expired. Please request a new password reset.");
            return;
          }

          setState("ready");
          return;
        }

        // Case 2: Code flow — auth code in query string (?code=...)
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);

          if (error) {
            setState("error");
            setErrorMessage("This reset link has expired or has already been used. Please request a new password reset.");
            return;
          }

          setState("ready");
          return;
        }

        // No tokens or code found
        setState("invalid");
        setErrorMessage("Invalid or missing reset link. Please request a new password reset.");
      } catch (err) {
        console.error("Reset password error:", err);
        setState("error");
        setErrorMessage("Something went wrong. Please request a new password reset.");
      }
    };

    handleRecovery();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setState("submitting");

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      setState("ready");
      setErrorMessage(error.message || "Failed to update password. Please try again.");
      return;
    }

    setState("success");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/icon.png"
              alt="Congra"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Congra</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Loading State */}
          {state === "loading" && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                <svg
                  className="animate-spin text-[rgb(99,102,241)]"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <p className="text-gray-400">Verifying your reset link...</p>
            </div>
          )}

          {/* Invalid Link State */}
          {state === "invalid" && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">Invalid Link</h1>
              <p className="text-gray-400 mb-8">{errorMessage}</p>
              <p className="text-sm text-gray-500">
                Open the Congra app and request a new password reset from the login screen.
              </p>
            </div>
          )}

          {/* Error State (expired link) */}
          {state === "error" && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">Link Expired</h1>
              <p className="text-gray-400 mb-8">{errorMessage}</p>
              <p className="text-sm text-gray-500">
                Open the Congra app and request a new password reset from the login screen.
              </p>
            </div>
          )}

          {/* Ready State - Show Form */}
          {(state === "ready" || state === "submitting") && (
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(99,102,241)]/10 rounded-full mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[rgb(99,102,241)]"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
                <p className="text-gray-400">Enter your new password below.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      disabled={state === "submitting"}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[rgb(99,102,241)] focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">Must be at least 8 characters</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                    disabled={state === "submitting"}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[rgb(99,102,241)] focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Confirm new password"
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-3.5 bg-[rgb(99,102,241)] hover:bg-[rgb(79,82,221)] text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Updating...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Success State */}
          {state === "success" && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">Password Updated</h1>
              <p className="text-gray-400 mb-8">
                Your password has been successfully reset. You can now sign in with your new password.
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-gray-300">
                  Open the <span className="font-semibold text-white">Congra app</span> to sign in with your new password.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="max-w-lg mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Congra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
