"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

// ── Tokens ────────────────────────────────────────────────────────────────
const T = {
  ink: "#0B0D10",
  char: "#14181D",
  steel: "#2A3039",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

// ── Copy ──────────────────────────────────────────────────────────────────
const STEPS = [
  {
    code: "01",
    title: "Pick Your Plan & Sign Up",
    body: "Choose the coaching package that fits your goals. Once you subscribe, you'll receive a personal questionnaire to help us understand your goals, experience, and preferences.",
  },
  {
    code: "02",
    title: "Personal Kickoff Call",
    body: "We'll invite you to book a personal consultation with your coach. In this video call, we'll review your training history, current level, goals, and lifestyle. This ensures your training plan is 100% aligned with your real life.",
  },
  {
    code: "03",
    title: "Start Training",
    body: "You'll receive your customised plan directly in your TrainingPeaks account. We update it regularly based on your package and performance data.",
  },
];

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const rise = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Prices() {
  return (
    <section
      className="pt-32 px-6 pb-24 md:px-12"
      style={{ background: T.ink, color: T.bone }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ Coaching packages
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Plans &{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            pricing.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-8 max-w-2xl text-lg leading-relaxed"
          style={{ color: T.mist }}
        >
          Different types of training plans for cyclists of all levels. Start with a completely free 4-Week FTP Builder Plan and upgrade when you're ready.
        </motion.p>

        {/* Free plan CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <Link href="/free-4-week-ftp-builder-plan">
            <button
              className="group inline-flex items-center gap-3 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              Get Free 4-Week Plan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

        {/* How it works */}
        <div className="mb-16" style={{ borderTop: `1px solid ${T.hair}` }}>
          <p
            className="font-mono uppercase mt-8 mb-10"
            style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.dim }}
          >
            ◎ How it works
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ border: `1px solid ${T.hair}` }}
          >
            {STEPS.map(({ code, title, body }) => (
              <motion.div
                key={code}
                variants={rise}
                className="p-6 md:p-8"
                style={{ background: T.char, borderRight: `1px solid ${T.hair}` }}
              >
                <span
                  className="font-mono block mb-4"
                  style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}
                >
                  {code}
                </span>
                <h3
                  className="font-semibold mb-3 text-base"
                  style={{ color: T.bone }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: T.mist }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stripe pricing table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <StripePricingTable />
        </motion.div>
      </div>
    </section>
  );
}

export const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID,
    "publishable-key": process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
};

// Keep Stepper export for backward compat (no longer used in main flow)
export const Stepper = () => null;
