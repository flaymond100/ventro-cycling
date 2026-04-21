"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  Flame,
  HeartPulse,
  Mountain,
  Timer,
} from "lucide-react";

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

const STRIPE_URL = "https://buy.stripe.com/7sY6oGfGL5JN4Il0S76sw06";

const markers = [
  { label: "VO2max", icon: HeartPulse },
  { label: "VLamax", icon: Flame },
  { label: "Anaerobic Threshold / MLSS", icon: Mountain },
  { label: "FatMax", icon: Activity },
  { label: "Fat and carbohydrate utilization", icon: CircleGauge },
  { label: "Individual training zones", icon: Timer },
];

const whoItsFor = [
  "Ambitious cyclists and triathletes",
  "Athletes preparing for races or key training blocks",
  "Riders who want accurate training zones",
  "Athletes who feel stuck despite consistent training",
  "Anyone who wants more than just FTP",
];

const whatYouNeed = [
  "Bike with reliable power meter or smart trainer",
  "Heart rate monitor",
  "Device that records the session and allows export of workout files",
  "Ability to perform a short structured protocol indoors or outdoors",
];

const included = [
  "Full INSCYD remote test protocol",
  "Step-by-step instructions before testing",
  "Review of submitted files",
  "Full metabolic analysis",
  "Personalized PDF report",
  "Individual training zones",
  "Practical recommendations on what to improve next",
];

const howItWorks = [
  {
    title: "Buy the test",
    text: "Complete payment through Stripe.",
  },
  {
    title: "Receive your instructions",
    text: "After payment, you receive an email with the protocol, execution guidelines, and submission instructions.",
  },
  {
    title: "Perform the test",
    text: "Complete the protocol using your own equipment, ideally when rested and in good conditions.",
  },
  {
    title: "Send your files",
    text: "Submit exported .fit workout files, date of birth, height, weight, and body fat estimate if known.",
  },
  {
    title: "Get your analysis",
    text: "We review your data and send your report, training zones, key findings, and practical next steps.",
  },
];

const faq = [
  {
    question: "Is this accurate without going to a lab?",
    answer:
      "Yes. INSCYD is designed for remote and field-based testing when the protocol is followed correctly and the data quality is good.",
  },
  {
    question: "Do I need lactate testing equipment?",
    answer: "No, not for this service as presented here.",
  },
  {
    question: "How long does it take to get the results?",
    answer:
      "Results are delivered within 3-5 business days after all required files and athlete data have been received.",
  },
  {
    question: "Can I do the test indoors?",
    answer:
      "Yes. The protocol can be completed indoors on a smart trainer or outdoors with a power meter.",
  },
  {
    question: "Is this useful if I already know my FTP?",
    answer:
      "Yes. FTP is only one part of the picture. This test explains your physiology and gives more precise training guidance.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { y: 28, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] },
  },
};

function SectionHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <>
      <h2
        className="font-bold uppercase"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(24px, 3vw, 40px)",
          letterSpacing: "-0.03em",
          color: T.bone,
        }}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed" style={{ color: T.mist }}>
          {intro}
        </p>
      ) : null}
    </>
  );
}

export default function InscydRemotePerformanceTestPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main style={{ background: T.ink, color: T.bone }} className="px-6 pb-24 pt-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ Metabolic performance testing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          INSCYD remote{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            test.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl text-lg leading-relaxed"
          style={{ color: T.mist }}
        >
          Get a lab-level metabolic profile with your own bike and power data. Go beyond FTP and understand how your body produces energy across intensities so your training can match your physiology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              Buy INSCYD Remote Test
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <div className="px-5 py-4" style={{ border: `1px solid ${T.hair}`, color: T.bone }}>
            <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>
              Price
            </p>
            <p className="font-semibold mt-1">EUR 189</p>
          </div>
        </motion.div>

        <div className="mt-20 space-y-16">
          <section>
            <SectionHeader
              title="What this test shows"
              intro="With one structured protocol, you get key metabolic markers."
            />
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
              style={{ border: `1px solid ${T.hair}` }}
            >
              {markers.map((marker, i) => {
                const Icon = marker.icon;
                return (
                  <motion.div
                    key={marker.label}
                    variants={rise as any}
                    className="p-6"
                    style={{ background: T.char, border: `1px solid ${T.hair}` }}
                  >
                    <span className="font-mono block mb-3" style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={18} style={{ color: T.bone }} />
                    <p className="mt-3 text-sm font-semibold" style={{ color: T.bone }}>
                      {marker.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          <section>
            <SectionHeader title="Who it is for" />
            <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2" style={{ border: `1px solid ${T.hair}` }}>
              {whoItsFor.map((item) => (
                <div key={item} className="flex items-start gap-3 p-5" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
                  <CheckCircle2 size={16} style={{ color: T.lime, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: T.mist }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="What you need" />
            <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2" style={{ border: `1px solid ${T.hair}` }}>
              {whatYouNeed.map((item) => (
                <div key={item} className="flex items-start gap-3 p-5" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
                  <CheckCircle2 size={16} style={{ color: T.lime, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: T.mist }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="What is included" />
            <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2" style={{ border: `1px solid ${T.hair}` }}>
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-5" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
                  <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}>
                    -&gt;
                  </span>
                  <span className="text-sm" style={{ color: T.mist }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-works">
            <SectionHeader title="How it works" />
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="mt-8 grid grid-cols-1 gap-px md:grid-cols-5"
              style={{ border: `1px solid ${T.hair}` }}
            >
              {howItWorks.map((step, i) => (
                <motion.div key={step.title} variants={rise as any} className="p-5" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
                  <span className="font-mono block mb-3" style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: T.bone }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.mist }}>
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section>
            <SectionHeader title="FAQ" />
            <div className="mt-8" style={{ borderTop: `1px solid ${T.hair}` }}>
              {faq.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.question} style={{ borderBottom: `1px solid ${T.hair}` }}>
                    <button
                      className="flex w-full items-start gap-4 py-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}>
                        Q{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-semibold text-base" style={{ color: T.bone }}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 mt-1 transition-transform duration-300"
                        style={{ color: T.dim, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
                          <p className="pb-5 pl-12 text-base leading-relaxed" style={{ color: T.mist }}>
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="p-8" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
            <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
              ◎ Final step
            </p>
            <h2
              className="mt-3 font-bold uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 40px)",
                letterSpacing: "-0.03em",
                color: T.bone,
              }}
            >
              Ready for physiology-based training?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: T.mist }}>
              Stop relying on one number. Build your training around your real metabolic profile.
            </p>
            <Link href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
              <button
                className="group mt-6 inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
                style={{ background: T.lime, color: T.ink }}
              >
                Buy the INSCYD Remote Performance Test
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
