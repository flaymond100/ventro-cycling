"use client";

import { Navbar, Footer } from "@/components";
import Faq from "../faq";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutMe } from "@/components/about-me";

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

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const rise = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};

// ── Data ──────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "John",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2Fjohn.jpg?alt=media&token=c19d91ec-3ce2-4a59-8f01-d01e8225ec6e",
    quotes: [
      "I started training with Kosta about a year ago, and it's been a game changer. I didn't have much cycling experience as I had just started training on Zwift, and wanted to get better at Zwift racing. With Kosta's training, my Zwift racing score went from 145 to almost 300 in 6 months and was getting on the podium in C division.",
      "My cycling journey has transformed, with my FTP increasing from 160 to 255 watts. Kosta's dedication to my progress, weekly check-ins, and personalized plans have made a world of difference. I would highly recommend to anyone who is looking for a coach. He's the man!",
    ],
  },
  {
    name: "Olly",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2Folly.jpeg?alt=media&token=b49589fd-d0d4-4f9d-b196-1258da30d361",
    quotes: [
      "Working with Kosta has been a game-changer for my cycling. His structured training plans gave me the focus and consistency I needed—not only did I increase my FTP, but I also achieved one of my biggest goals: winning a Zwift Racing League race.",
      "Kosta guided me to become the best version of myself on the bike. He delivered everything he promised and often went above and beyond. I can't recommend him highly enough—if you're serious about improving, Kosta is the coach you want in your corner.",
    ],
  },
  {
    name: "Amy",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2FWhatsApp%20Image%202025-08-13%20at%2011.00.27_compressed.webp?alt=media&token=04369684-fe48-40b8-9823-c9ca19a27398",
    quotes: [
      "Going into my first season of racing in the women's Bundesliga this year, I was looking for support not just for developing my power, but also for racing strategies, positioning and tactics, nutrition, and recovery.",
      "I have really appreciated the high level of personalised support that Kostiantyn provides. I am super excited for the next season!",
    ],
  },
  {
    name: "Mark",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2Fphoto_2023-05-03_11-34-01%20(2).jpg?alt=media&token=7c22585c-89a5-4fe9-b7a4-8a2e4a6e49fd",
    quotes: [
      "When I started working with Kosta, my main goal was to build the strength and endurance to take on long, challenging races like a Gran Fondo. Kosta changed everything. His structured plans gave me clarity and purpose.",
      "Over time, my FTP jumped by more than 40 watts, and I became smarter with how I train, race, and recover. One of my proudest moments was riding the Gran Fondo in Austria in 2025. I feel fitter, faster, and more confident than ever on the bike.",
    ],
  },
];

const SCRIM = `linear-gradient(to top, rgba(11,13,16,0.92) 0%, rgba(11,13,16,0.55) 55%, rgba(11,13,16,0.2) 100%)`;

function TestimonialCard({
  name,
  photo,
  quotes,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <motion.article
      variants={rise as any}
      className="relative overflow-hidden"
      style={{ border: `1px solid ${T.hair}` }}
    >
      {/* Background photo + scrim */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${photo}")` }}
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: SCRIM }} aria-hidden />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end min-h-[480px]">
        <blockquote className="mb-6">
          {quotes.map((q, i) => (
            <p
              key={i}
              className="mb-3 text-sm leading-relaxed md:text-base"
              style={{ color: T.mist }}
            >
              {q}
            </p>
          ))}
        </blockquote>
        <div className="flex items-center gap-3" style={{ borderTop: `1px solid ${T.hair}`, paddingTop: "1rem" }}>
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
          >
            ◉
          </span>
          <span className="font-bold text-lg" style={{ color: T.bone }}>
            {name}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

const Testimonials = () => (
  <section
    className="pt-32 px-6 pb-24 md:px-12"
    style={{ background: T.ink, color: T.bone }}
  >
    <div className="mx-auto max-w-6xl">
      {/* Eyebrow */}
      <p
        className="font-mono uppercase mb-4"
        style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
      >
        ◎ Athlete stories
      </p>

      {/* Headline */}
      <h1
        className="font-extrabold uppercase mb-14"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(40px, 6vw, 80px)",
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          color: T.bone,
        }}
      >
        Real riders.{" "}
        <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
          Real results.
        </span>
      </h1>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <div className="mt-16 flex flex-col items-start gap-4" style={{ borderTop: `1px solid ${T.hair}`, paddingTop: "2.5rem" }}>
        <p className="text-base" style={{ color: T.mist }}>
          Ready to start your own journey?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/plans-and-pricing">
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              See Plans
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="/free-4-week-ftp-builder-plan">
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-medium text-sm"
              style={{ background: "transparent", color: T.bone, border: `1px solid ${T.hair}` }}
            >
              Free 4-Week Plan →
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <AboutMe />
      <Faq />
      <Footer />
    </>
  );
}
