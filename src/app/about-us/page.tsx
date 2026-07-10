"use client";

import { Navbar, Footer } from "@/components";
import Faq from "../faq";
import { CalendlyWidget } from "@/components/widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

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
// First-person throughout. Bio verbatim per positioning brief.
const BIO = [
  "I'm not a retired pro selling nostalgia or AI coach. I'm a working engineer, a father, and a competitive cyclist — Gran Fondo World Championship participant, multiple Top-10 finisher of the biggest international races, founder of NRC International Team in Leipzig.",
  "I coach the way I train. Every athlete I work with gets a plan built on their actual data — power, metabolic profile (INSCYD), recovery, and the honest constraint most coaches ignore: you have a job and a life. My job is to make sure every hour you can give the bike returns the maximum.",
  "I keep my roster small on purpose. Fewer athletes, more attention, better results.",
];

// Placeholder slots for race photos — alt text is production-ready.
const PHOTOS = [
  { label: "Kosta racing", alt: "Kosta Garbar racing in an international road cycling event" },
  { label: "On the podium", alt: "Kosta Garbar on the podium at a Gran Fondo race" },
  { label: "NRC International Team", alt: "Kosta Garbar with the NRC International Team in Leipzig" },
];

const FOR = [
  "You're training for a gran fondo, a road race, or a long-course triathlon — and you have a job, a family, and maybe 6–12 hours a week.",
  "You own a power meter (or a smart trainer) and you want your numbers to actually mean something.",
  "You want a coach who adapts the plan when life happens, not a PDF that expires.",
];

const NOT_FOR = [
  "You're looking for the cheapest generic plan on the internet.",
  "You want motivation, not structure. I'll hold you accountable — I won't chase you.",
  "You're not willing to train with data.",
];

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const rise = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};

const AboutUs = () => (
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
        ◎ Who I am
      </motion.p>

      {/* Poster H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-extrabold uppercase mb-10"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(44px, 8vw, 104px)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: T.bone,
        }}
      >
        Coached by{" "}
        <br />
        <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
          Kosta Garbar.
        </span>
      </motion.h1>

      {/* Bio — first person */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="max-w-3xl mb-16"
      >
        {BIO.map((para, i) => (
          <motion.p
            key={i}
            variants={rise as any}
            className="text-lg leading-relaxed mb-5"
            style={{ color: T.mist }}
          >
            {para}
          </motion.p>
        ))}
        <motion.div variants={rise as any}>
          <Link href="/plans-and-pricing">
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              See Plans
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Race photos — placeholder slots */}
      <p
        className="font-mono uppercase mb-6"
        style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.dim }}
      >
        ◎ On the road
      </p>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-20"
      >
        {PHOTOS.map(({ label, alt }, i) => (
          // TODO: Kosta to supply photo — replace this placeholder with an
          // <Image src={...} alt={alt} /> using the alt text above.
          <motion.div
            key={i}
            variants={rise as any}
            role="img"
            aria-label={`Placeholder — ${alt}`}
            className="flex aspect-[4/5] items-end p-5"
            style={{ background: T.char, border: `1px solid ${T.hair}` }}
          >
            <div>
              <span
                className="font-mono block mb-1"
                style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.lime }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.12em", color: T.dim }}
              >
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="mb-16" style={{ height: 1, background: T.hair }} />

      {/* Who this is for / not for */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-px md:grid-cols-2"
        style={{ border: `1px solid ${T.hair}` }}
      >
        {/* For */}
        <motion.div
          variants={rise as any}
          className="p-8"
          style={{ background: T.char, borderRight: `1px solid ${T.hair}` }}
        >
          <h2
            className="font-bold uppercase mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 2.5vw, 30px)",
              letterSpacing: "-0.025em",
              color: T.bone,
            }}
          >
            Who this is for
          </h2>
          <ul className="flex flex-col gap-4">
            {FOR.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: T.lime }}
                />
                <span className="text-base leading-relaxed" style={{ color: T.mist }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not for */}
        <motion.div
          variants={rise as any}
          className="p-8"
          style={{ background: T.char }}
        >
          <h2
            className="font-bold uppercase mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 2.5vw, 30px)",
              letterSpacing: "-0.025em",
              color: T.bone,
            }}
          >
            Who this is NOT for
          </h2>
          <ul className="flex flex-col gap-4">
            {NOT_FOR.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: T.dim }}
                />
                <span className="text-base leading-relaxed" style={{ color: T.dim }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <CalendlyWidget />
      <Faq />
      <Footer />
    </>
  );
}
