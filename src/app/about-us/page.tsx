"use client";

import { Navbar, Footer } from "@/components";
import Faq from "../faq";
import { CalendlyWidget } from "@/components/widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
const BELIEFS = [
  {
    title: "Inclusivity",
    body: "No matter your background or experience level, Ventro is your inclusive fitness community where everyone is welcome.",
  },
  {
    title: "Health Awareness",
    body: "Our core value is to raise awareness about the importance of health and overall well-being, guiding you toward a healthier and more balanced lifestyle.",
  },
  {
    title: "Expert Guidance",
    body: "Our coaches are here to support and encourage you every step of the way. We prioritise your well-being and individual goals.",
  },
  {
    title: "Data Driven",
    body: "Every plan is built around power, heart rate, and real performance data. No guesswork—just structured progress you can measure.",
  },
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
        ◎ Who we are
      </motion.p>

      {/* Poster H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-extrabold uppercase mb-10"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(48px, 8vw, 112px)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: T.bone,
        }}
      >
        Ventro
        <br />
        Cycling{" "}
        <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
          Coaching.
        </span>
      </motion.h1>

      {/* Intro copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-16 max-w-2xl text-lg leading-relaxed"
        style={{ color: T.mist }}
      >
        A community of athletes united by a passion for endurance sports and a
        commitment to living a healthy life. We believe everyone—regardless of
        experience—has a place here.
      </motion.p>

      {/* Divider */}
      <div className="mb-16" style={{ height: 1, background: T.hair }} />

      {/* Two-col: mission copy + CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-12 md:grid-cols-2 mb-20"
      >
        <motion.div variants={rise}>
          <h2
            className="font-bold uppercase mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(22px, 3vw, 36px)",
              letterSpacing: "-0.025em",
              color: T.bone,
            }}
          >
            Our mission
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: T.mist }}>
            At the heart of Ventro Cycling Coaching is the mission to empower
            individuals—regardless of their sporting background—to lead healthier
            lives, one ride at a time. We inspire, support, and empower athletes
            to achieve their goals, no matter how big or small.
          </p>
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

        <motion.div variants={rise}>
          <h2
            className="font-bold uppercase mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(22px, 3vw, 36px)",
              letterSpacing: "-0.025em",
              color: T.bone,
            }}
          >
            The coach
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: T.mist }}>
            Kostiantyn (Kosta) Garbar is the founder and head coach. With over a
            decade of experience in high-performance endurance sports, he helps
            cyclists unlock their full potential through structured, data-driven,
            and fully personalised coaching.
          </p>
          <p className="text-base leading-relaxed" style={{ color: T.mist }}>
            At Ventro we understand your needs, set realistic goals, adapt
            training to your life, and build a partnership based on trust,
            communication, and real progress.
          </p>
        </motion.div>
      </motion.div>

      {/* Belief grid */}
      <p
        className="font-mono uppercase mb-8"
        style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.dim }}
      >
        ◎ What we stand for
      </p>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-px sm:grid-cols-2"
        style={{ border: `1px solid ${T.hair}` }}
      >
        {BELIEFS.map(({ title, body }, i) => (
          <motion.div
            key={i}
            variants={rise}
            className="p-8"
            style={{
              background: T.char,
              borderRight: i % 2 === 0 ? `1px solid ${T.hair}` : "none",
              borderBottom: i < 2 ? `1px solid ${T.hair}` : "none",
            }}
          >
            <span
              className="font-mono block mb-3"
              style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="font-semibold mb-2 text-base"
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
