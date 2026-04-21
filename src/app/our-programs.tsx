"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, Check, MailCheck, Send } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

const PROGRAMS = [
  {
    id: "running",
    title: "Running Trainings",
    copy: "Elevate your running performance with personalized training plans tailored to your fitness level and goals.",
    image: "/image/8716_20230423_144655_274310037_original.webp",
    href: "/trainings/running-trainings",
  },
  {
    id: "cycling",
    title: "Cycling Trainings",
    copy: "Discover cycling with structured plans for beginners and experienced athletes focused on measurable progress.",
    image: "/image/France_Downhill_Kosta.webp",
    href: "/trainings/cycling-trainings",
  },
  {
    id: "triathlon",
    title: "Triathlon Trainings",
    copy: "Build confidence across swim, bike, and run with personalized triathlon plans and race-specific preparation.",
    image: "/image/tri_1.webp",
    href: "/trainings/triathlon-trainings",
  },
];

const STEPS = [
  {
    title: "Start Your Free Trial",
    text: "Secure your 7-day free trial with an easy online payment and begin immediately.",
    icon: Send,
  },
  {
    title: "Check Your Email",
    text: "Within 24 hours, you receive a TrainingPeaks link and athlete questionnaire.",
    icon: MailCheck,
  },
  {
    title: "Schedule a Call",
    text: "Optional call to align your goals, constraints, and training preferences.",
    icon: CalendarDays,
  },
  {
    title: "Begin Your Training",
    text: "Receive your personalized plan and start tracking structured progress.",
    icon: Check,
  },
];

export function OurPrograms() {
  const pathname = usePathname();
  const homePage = pathname === "/";

  return (
    <section
      className="px-6 py-20 md:px-12"
      style={{ background: T.ink, marginBottom: homePage ? 0 : 40 }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono uppercase mb-4" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
          ◎ Trainings
        </p>
        <h2
          className="font-extrabold uppercase mb-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Training
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em", marginLeft: 8 }}>
            tracks.
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden"
              style={{ border: `1px solid ${T.hair}` }}
            >
              <Image
                width={768}
                height={768}
                src={`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}${program.image}`}
                alt={program.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,13,16,0.9) 0%, rgba(11,13,16,0.45) 55%, rgba(11,13,16,0.2) 100%)" }} />
              <div className="relative z-10 min-h-[360px] p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-3" style={{ color: T.bone }}>
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: T.mist }}>
                  {program.copy}
                </p>
                <Link href={program.href}>
                  <button
                    className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
                    style={{ background: T.lime, color: T.ink }}
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const TimelineWithIcon = () => {
  const pathname = usePathname();
  const form = pathname === "/personal-coaching/";

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-20 md:px-0">
      <div className="mb-10 text-center">
        <h2 className="font-extrabold uppercase" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: T.bone }}>
          How it works
        </h2>
      </div>

      <div className="space-y-4" style={{ borderLeft: `1px solid ${T.hair}` }}>
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="relative pl-8 pb-6 last:pb-0">
              <div className="absolute -left-[7px] top-1 h-3 w-3" style={{ background: T.lime }} />
              <p className="font-mono uppercase mb-2" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>
                Step {idx + 1}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={16} style={{ color: T.lime }} />
                <h3 className="font-semibold" style={{ color: T.bone }}>{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: T.mist }}>
                {step.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <div className="mb-5 flex items-center justify-center gap-2" style={{ color: T.lime }}>
          <ArrowDown size={16} />
          <ArrowDown size={16} />
          <ArrowDown size={16} />
        </div>
        {!form && (
          <Link aria-label="sign-up-form" href="/personal-coaching">
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OurPrograms;
