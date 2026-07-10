"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  STRIPE_LINK_CORE,
  STRIPE_LINK_PERFORMANCE,
  PRO_APPLICATION_PATH,
  PAYMENT_FALLBACK_PATH,
} from "@/config/pricing";

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

// ── Tiers ─────────────────────────────────────────────────────────────────
// PRO intentionally has NO price anywhere (page, meta, schema, alt text).
type Tier = {
  id: "core" | "performance" | "pro";
  name: string;
  price: string | null; // null => "By application", never a number
  priceLabel?: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    id: "core",
    name: "Core",
    price: "€150",
    tagline: "You know how to execute. You need the plan.",
    features: [
      "Fully custom training plan in TrainingPeaks",
      "Plan adjustments twice weekly (structured review windows)",
      "Messaging via TrainingPeaks comments",
      "Power- and data-based progression",
      "14-day refund window",
    ],
    cta: "Start Core",
  },
  {
    id: "performance",
    name: "Performance",
    price: "€250",
    tagline:
      "You want testing, numbers that mean something, and a coach in your corner.",
    features: [
      "Everything in Core",
      "Quarterly remote INSCYD metabolic test included",
      "Monthly 1:1 video call",
      "Race-week priority line",
      "Fueling & pacing guidance built from your metabolic profile",
    ],
    cta: "Start Performance",
    featured: true,
    badge: "Most popular",
  },
  {
    id: "pro",
    name: "PRO",
    price: null,
    priceLabel: "By application",
    tagline: "Your season matters enough to engineer it.",
    features: [
      "Limited to 4 athletes",
      "Full season architecture & race-day execution plans",
      "Everything built from your INSCYD metabolic model",
      "Highest contact frequency, first priority always",
      "Pricing discussed after application",
    ],
    cta: "Apply for PRO",
  },
];

function tierHref(id: Tier["id"]): string {
  if (id === "pro") return PRO_APPLICATION_PATH;
  const link = id === "core" ? STRIPE_LINK_CORE : STRIPE_LINK_PERFORMANCE;
  // Fall back to the contact page until the Stripe Payment Link is configured,
  // so the CTA is never a dead link.
  return link || PAYMENT_FALLBACK_PATH;
}

// ── Copy ──────────────────────────────────────────────────────────────────
const STEPS = [
  {
    code: "01",
    title: "Pick Your Plan & Sign Up",
    body: "Choose the coaching tier that fits your goals. Once you subscribe, you'll receive a personal questionnaire to help us understand your goals, experience, and preferences.",
  },
  {
    code: "02",
    title: "Personal Kickoff Call",
    body: "We'll invite you to book a personal consultation with your coach. In this video call, we'll review your training history, current level, goals, and lifestyle. This ensures your training plan is 100% aligned with your real life.",
  },
  {
    code: "03",
    title: "Start Training",
    body: "You'll receive your customised plan directly in your TrainingPeaks account. We update it regularly based on your tier and performance data.",
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

// ── Tier card ───────────────────────────────────────────────────────────────
function TierCta({ id, featured, label }: { id: Tier["id"]; featured?: boolean; label: string }) {
  const href = tierHref(id);
  const external = href.startsWith("http");
  const className =
    "group mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-4 font-semibold text-sm";
  const style = featured
    ? { background: T.lime, color: T.ink }
    : { background: "transparent", color: T.bone, border: `1px solid ${T.hair}` };

  const inner = (
    <>
      {label}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style}>
      {inner}
    </Link>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const { name, price, priceLabel, tagline, features, cta, featured, badge } = tier;
  const cadence = "/month";

  return (
    <motion.div
      variants={rise as any}
      className={`relative flex flex-col p-8 ${featured ? "md:-translate-y-4" : ""}`}
      style={{
        background: T.char,
        border: `1px solid ${featured ? T.lime : T.hair}`,
        boxShadow: featured ? "0 24px 60px -28px rgba(217,255,0,0.35)" : "none",
      }}
    >
      {badge && (
        <span
          className="absolute -top-3 left-8 px-2 py-1 font-mono uppercase"
          style={{ fontSize: 10, letterSpacing: "0.14em", background: T.lime, color: T.ink }}
        >
          {badge}
        </span>
      )}

      <h3
        className="font-bold uppercase mb-3"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          letterSpacing: "-0.02em",
          color: T.bone,
        }}
      >
        {name}
      </h3>

      {/* Price — PRO never shows a number */}
      {price ? (
        <div className="flex items-baseline gap-1">
          <span
            style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em", color: T.bone, lineHeight: 1 }}
          >
            {price}
          </span>
          <span className="font-mono" style={{ fontSize: 12, color: T.dim }}>
            {cadence}
          </span>
        </div>
      ) : (
        <div style={{ fontSize: 24, fontWeight: 700, color: T.bone, lineHeight: 1.3 }}>
          {priceLabel}
        </div>
      )}

      <p className="mt-4 text-sm italic leading-relaxed" style={{ color: T.dim }}>
        {tagline}
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check size={16} className="mt-0.5 shrink-0" style={{ color: T.lime }} />
            <span className="text-sm leading-relaxed" style={{ color: T.mist }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* Push CTA to the bottom so cards align */}
      <div className="mt-auto">
        <TierCta id={tier.id} featured={featured} label={cta} />
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export function Prices() {
  return (
    <section
      className="pt-32 px-6 pb-24 md:px-12"
      style={{ background: T.ink, color: T.bone }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ Coaching tiers
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
          Cycling Coaching Plans &{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            Pricing.
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
          Power-based coaching for committed amateur racers, gran fondo and long-course athletes. Start with a completely free 4-Week FTP Builder Plan and upgrade when you&apos;re ready.
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

        {/* Tiers */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start"
        >
          {TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </motion.div>

        {/* Small print */}
        {/* TODO: Kosta confirm VAT/Kleinunternehmer wording */}
        <p className="mt-8 max-w-3xl text-xs leading-relaxed" style={{ color: T.dim }}>
          All prices incl. VAT. Monthly subscription, cancel per Terms &amp; Conditions. NRC International Team members: ask about your team discount.
        </p>

        {/* How it works */}
        <div className="mt-20 mb-4" style={{ borderTop: `1px solid ${T.hair}` }}>
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
                variants={rise as any}
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
      </div>
    </section>
  );
}
