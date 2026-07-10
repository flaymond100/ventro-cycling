"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

// Consent gate for non-essential tracking (Google Analytics).
// GA is NOT loaded until the visitor explicitly grants consent, satisfying
// GDPR Art. 6(1)(a) + § 25 TDDDG. The choice is stored in localStorage and can
// be revoked via the footer "Cookie settings" link (dispatches OPEN_EVENT).
const STORAGE_KEY = "ventro-consent";
export const OPEN_EVENT = "ventro-open-consent";
const GA_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

type Choice = "granted" | "denied" | null;

// ── Tokens ────────────────────────────────────────────────────────────────
const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

export function Consent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") setChoice(stored);

    const reopen = () => setChoice(null);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = (value: "granted" | "denied") => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  // Nothing renders during SSG/first paint, so GA is never in the static HTML
  // and never fires before an explicit choice.
  const loadGa = mounted && choice === "granted" && !!GA_ID;
  const showBanner = mounted && choice === null;

  return (
    <>
      {loadGa && <GoogleAnalytics gaId={GA_ID as string} />}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[60] px-6 py-5 md:px-12"
          style={{ background: T.char, borderTop: `1px solid ${T.hair}` }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p
              className="text-sm leading-relaxed"
              style={{ color: T.mist }}
            >
              We use analytics cookies (Google Analytics) to understand how the
              site is used. They load only if you accept. See our{" "}
              <Link
                href="/datenschutz"
                className="underline"
                style={{ color: T.lime }}
              >
                Datenschutz
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => decide("denied")}
                className="inline-flex items-center px-5 py-3 font-semibold text-[13px]"
                style={{
                  background: "transparent",
                  color: T.bone,
                  border: `1px solid ${T.hair}`,
                }}
              >
                Decline
              </button>
              <button
                onClick={() => decide("granted")}
                className="inline-flex items-center px-5 py-3 font-semibold text-[13px]"
                style={{ background: T.lime, color: T.ink }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Consent;
