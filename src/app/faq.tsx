"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const FAQS = [
  {
    title: "Are your training plans suitable for beginner cyclists?",
    desc: "Absolutely. Whether you're new to cycling or getting back into it, we create training plans that match your fitness level and goals. The focus is on gradual progression and sustainable performance gains.",
  },
  {
    title: "I want to race at a high level, can your coaching help me get there?",
    desc: "Definitely. We work with competitive cyclists targeting podiums, race wins, and category upgrades. You'll get structured periodisation, detailed data analysis, and racing-specific training blocks tailored to your peak events.",
  },
  {
    title: "How do you track performance progress for serious athletes?",
    desc: "We monitor key metrics like power curves, training load (CTL/ATL), fatigue management, and FTP. We use this data to fine-tune your workouts and ensure you're peaking at the right time without overtraining.",
  },
  {
    title: "How often are the training plans updated?",
    desc: "We update your plan on a weekly basis based on your progress, feedback, and data. This ensures the training remains effective, aligned with your goals, and adapts to changes in your performance or schedule.",
  },
  {
    title: "How long does it take to see improvements in cycling performance?",
    desc: "Many cyclists notice improvements in endurance, power, or speed within the first 3–4 weeks. More significant results typically come after consistent training over 2–3 months.",
  },
  {
    title: "What makes your cycling coaching different?",
    desc: "We focus on data-driven and personalized coaching. Your plan is built around your power or heart rate zones, goals, available time, and event schedule. It's not a one-size-fits-all program.",
  },
  {
    title: "How do I know if I'm ready for a more advanced plan?",
    desc: "If you've been riding regularly and want to target specific performance metrics or race goals, you're likely ready. Our coach can assess your data and tailor the plan to challenge you appropriately.",
  },
  {
    title: "Can I switch goals during the training period?",
    desc: "Yes. If your objectives change—like shifting focus from a gran fondo to criterium racing—we'll adjust your plan accordingly. Flexibility is part of our coaching philosophy.",
  },
  {
    title: "What equipment do I need for your cycling plans?",
    desc: "At minimum, you'll need a road bike and a cycling computer. A power meter or heart rate monitor is highly recommended for more precise training and analysis. We can help you choose the right setup for your goals and budget.",
  },
  {
    title: "What if I miss a ride or need to change my schedule?",
    desc: "No problem. Life happens. Your coach will adjust your plan based on changes in availability or missed sessions, so you stay on track without unnecessary stress.",
  },
  {
    title: "Do I need a specific fitness level to start?",
    desc: "Not at all. We coach cyclists of all backgrounds—from complete beginners to seasoned racers. Your current level just helps us set a realistic starting point for building fitness effectively.",
  },
];

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const rise = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="px-6 py-28 md:px-12"
      style={{ background: T.ink }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <p
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ FAQ
        </p>

        {/* Headline */}
        <h2
          className="font-extrabold uppercase mb-14"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            color: T.bone,
          }}
        >
          Common{" "}
          <span
            className="inline-block"
            style={{
              background: T.lime,
              color: T.ink,
              padding: "0 0.18em",
            }}
          >
            questions.
          </span>
        </h2>

        {/* Accordion list */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="flex flex-col"
          style={{ borderTop: `1px solid ${T.hair}` }}
        >
          {FAQS.map(({ title, desc }, idx) => {
            const isOpen = open === idx;
            const code = `Q·${String(idx + 1).padStart(2, "0")}`;
            return (
              <motion.div
                key={idx}
                variants={rise as any}
                style={{ borderBottom: `1px solid ${T.hair}` }}
              >
                <button
                  className="flex w-full items-start gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  {/* Mono Q code */}
                  <span
                    className="font-mono shrink-0 mt-0.5"
                    style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}
                  >
                    {code}
                  </span>
                  {/* Question */}
                  <span
                    className="flex-1 font-semibold text-base md:text-lg"
                    style={{ color: T.bone }}
                  >
                    {title}
                  </span>
                  {/* Chevron */}
                  <ChevronDown
                    size={18}
                    className="shrink-0 mt-1 transition-transform duration-300"
                    style={{
                      color: T.dim,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-5 pl-10 text-base leading-relaxed"
                        style={{ color: T.mist }}
                      >
                        {desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
