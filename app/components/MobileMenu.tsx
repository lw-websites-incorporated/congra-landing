"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-700"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[998]"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed z-[999] bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[180px]"
            style={{ top: menuPos.top, right: menuPos.right }}
          >
            <Link
              href="/support"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/referral-terms"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Referral Terms
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
