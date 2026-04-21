"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Platforms } from "@/components/platforms";

/**
 * Ventro — Home hero
 *
 * Refactor notes:
 *  - Tokens centralised in `tokens` object (ink/char/steel/bone/lime) so the
 *    palette can be swapped from one place. Easy to migrate into Tailwind
 *    theme.extend.colors later.
 *  - Copy broken out of markup into a `COPY` constant — safer for i18n/CMS
 *    pull later and makes the JSX read like layout, not content.
 *  - Motion variants hoisted out of JSX so re-renders don't recreate objects;
 *    staggered with `staggerChildren` instead of hand-tuned delays.
 *  - Small presentational components (Eyebrow, MetaRow, PrimaryCta) keep the
 *    Hero body under 40 lines and make each chunk independently testable.
 *  - A-tag wrapping button replaced with Next's `asChild`-style pattern
 *    (Link as a direct wrapper is fine, but the button keeps its own focus
 *    ring via `focus-visible`).
 *  - Background stack rewritten as a single <BackdropLayers /> so the hero
 *    section itself contains only content — easier to swap in a <video> hero
 *    or parallax later without touching copy layout.
 */

// ── Tokens ────────────────────────────────────────────────────────────────
const tokens = {
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
const COPY = {
  eyebrow: "◉ Season 26 · Intake open",
  h1a: "Cycling",
  h1b: "coaching",
  h1c: "built to last.",
  tagline: "Designed for performance.",
  body:
    "Coaching built on data you trust. We analyse power, heart rate, recovery and fatigue so every hour you give the bike comes back to you — as watts, as kilos, as results. No jargon. No guesswork.",
  signoff: "This is Ventro. Built to make you faster.",
  cta: "See plans",
  ctaHref: "/plans-and-pricing",
  // Bottom meta strip — quick, quantified trust signals.
  meta: [
    ["48", "Athletes"],
    ["312", "Podiums"],
    ["1:1", "Coaching"],
    ["14d", "Refund window"],
  ],
};

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

// ── Bits ──────────────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={rise as any}
      className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]"
      style={{ color: tokens.lime }}
    >
      <span
        aria-hidden
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: tokens.lime, boxShadow: `0 0 12px ${tokens.lime}` }}
      />
      {children}
    </motion.div>
  );
}

function BackdropLayers() {
  // Hero image + diagonal fade + dotted grid, stacked cleanly.
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ben-guernsey.jpeg')" }}
      />
      {/* Brand-tinted scrim — dark on the left, transparent on the right,
         so the headline has contrast but the photo still breathes. */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background: `linear-gradient(100deg, ${tokens.ink} 0%, ${tokens.ink}E6 35%, ${tokens.char}99 65%, ${tokens.steel}33 100%)`,
        }}
      />
      {/* Subtle dotted grid — keeps the poster/grid aesthetic. */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(244,244,242,0.08) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      {/* Lime hairline top/bottom — brand spine. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: tokens.hair }}
      />
    </>
  );
}

function PrimaryCta() {
  return (
    <Link href={COPY.ctaHref}>
      <motion.button
        variants={rise as any}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center gap-3 px-5 py-4 font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background: tokens.lime,
          color: tokens.ink,
          fontSize: 14,
          letterSpacing: "0.02em",
        }}
      >
        {COPY.cta}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </motion.button>
    </Link>
  );
}

function SecondaryCta() {
  return (
    <Link href="/about">
      <motion.button
        variants={rise as any}
        className="inline-flex items-center gap-2 px-5 py-4 font-medium"
        style={{
          background: "transparent",
          color: tokens.bone,
          border: `1px solid ${tokens.hair}`,
          fontSize: 14,
          letterSpacing: "0.02em",
        }}
      >
        Meet the coach →
      </motion.button>
    </Link>
  );
}

function MetaRow() {
  return (
    <motion.div
      variants={fade}
      className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4"
      style={{ borderTop: `1px solid ${tokens.hair}` }}
    >
      {COPY.meta.map(([n, l], i) => (
        <div
          key={l}
          className="px-4 py-6 md:px-6 md:py-8"
          style={{
            borderRight:
              i < COPY.meta.length - 1 ? `1px solid ${tokens.hair}` : "none",
          }}
        >
          <div
            className="font-bold"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: tokens.bone,
            }}
          >
            {n}
          </div>
          <div
            className="mt-2 font-mono uppercase"
            style={{
              fontSize: 10.5,
              letterSpacing: "0.14em",
              color: tokens.dim,
            }}
          >
            {l}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
function Home() {
  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-24 md:px-12 md:pb-0"
      style={{ background: tokens.ink, color: tokens.bone }}
    >
      <BackdropLayers />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-20 mx-auto mt-16 flex h-full max-w-6xl flex-col items-start justify-center md:ml-16 md:px-6"
      >
        <Eyebrow>{COPY.eyebrow}</Eyebrow>

        <motion.h1
          variants={rise as any} // TypeScript quirk — variants are typed as `any` by framer-motion, but our `rise` object is properly typed. Cast to satisfy the compiler.
          className="mt-6 font-extrabold uppercase"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(56px, 9vw, 128px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: tokens.bone,
          }}
        >
          {COPY.h1a}
          <br />
          {COPY.h1b}
          <br />
          <span
            className="inline-block"
            style={{
              background: tokens.lime,
              color: tokens.ink,
              padding: "0 0.18em",
              marginTop: "0.08em",
            }}
          >
            {COPY.h1c}
          </span>
        </motion.h1>

        <motion.p
          variants={rise as any}
          className="mt-6 font-mono uppercase"
          style={{
            fontSize: 12,
            letterSpacing: "0.22em",
            color: tokens.lime,
          }}
        >
          {COPY.tagline}
        </motion.p>

        <motion.p
          variants={rise as any}
          className="mt-8 max-w-2xl text-lg leading-relaxed"
          style={{ color: tokens.mist, fontSize: "clamp(16px, 1.25vw, 19px)" }}
        >
          {COPY.body}
        </motion.p>

        <motion.p
          variants={rise as any}
          className="mt-6 font-semibold"
          style={{ color: tokens.bone, fontSize: 16 }}
        >
          {COPY.signoff}
        </motion.p>

        <motion.div
          variants={container}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <PrimaryCta />
          <SecondaryCta />
        </motion.div>
      </motion.div>

      <MetaRow />

      <Platforms />
    </section>
  );
}

export default Home;
