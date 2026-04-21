"use client";
import { Footer, Navbar } from "@/components";
import Faq from "../faq";
import { CalendlyWidget } from "@/components/widget";

const T = {
  ink: "#0B0D10",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
};

function TeamCoachingIntro() {
  return (
    <section className="px-6 pt-32 pb-8 md:px-12" style={{ background: T.ink, color: T.bone }}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono uppercase mb-4" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
          ◎ Team coaching
        </p>
        <h1
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Team{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            consultation.
          </span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed" style={{ color: T.mist }}>
          Book a consultation to discuss team structure, coaching workflow, race strategy, and custom support plans.
        </p>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <TeamCoachingIntro />
      <CalendlyWidget />
      <Faq />
      <Footer />
    </>
  );
}
