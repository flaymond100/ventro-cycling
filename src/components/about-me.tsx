"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const rise = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const AboutMe = () => (
  <section
    className="px-6 py-20 md:px-12"
    style={{ background: T.char, borderTop: `1px solid ${T.hair}` }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="mx-auto max-w-5xl grid grid-cols-1 gap-12 md:grid-cols-2 items-center"
    >
      {/* Photo */}
      <motion.div
        variants={rise}
        className="overflow-hidden"
        style={{ border: `1px solid ${T.hair}` }}
      >
        <Image
          width={480}
          height={600}
          src={`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/image/kosta-coach.webp`}
          alt="Kosta — Ventro head coach"
          className="w-full object-cover"
          style={{ filter: "grayscale(20%)" }}
        />
      </motion.div>

      {/* Copy */}
      <motion.div variants={rise}>
        <p
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ The coach
        </p>
        <h2
          className="font-extrabold uppercase mb-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            color: T.bone,
          }}
        >
          Kosta
        </h2>
        <p
          className="font-mono uppercase mb-6"
          style={{ fontSize: 11, letterSpacing: "0.14em", color: T.dim }}
        >
          Founder &amp; Head Coach
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: T.mist }}>
          With over a decade of experience in high-performance endurance sports,
          I help cyclists unlock their full potential through structured,
          data-driven, and fully personalised coaching.
        </p>
        <p className="text-base leading-relaxed" style={{ color: T.mist }}>
          At Ventro we aim to understand the needs of the athlete, set your
          goals, adapt training to your life, and build a partnership based on
          trust, communication, and real progress.
        </p>
      </motion.div>
    </motion.div>
  </section>
);
