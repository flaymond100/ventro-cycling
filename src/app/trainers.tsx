"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

const KOSTA = [
  "My coaching philosophy focuses on creating personalized training plans according to your specific needs and goals.",
  "With over a 8 years of coaching experience in professional sport, I apply the best practices to make the training process as enjoyable as it might be.",
  "Whether you're a beginner or an experienced athelte, I'm here to help you reach your potential in bike and run disciplines.",
  "Join our team and embark on your triathlon journey. Let's set and achieve your goals together!",
];
const KSU = [
  "I hold a Master's degree in Sports Science and completed specialized courses in nutrition and triathlon coaching.",
  "Multiple medalist of national swimming championships. Completed multiple triathlon courses, including Ironman 70.3 competitions.",
  "My philosophy centers around creating tailored training plans designed to meet your unique goals and adapt to your individual needs. My main disciplines are swimming, running and nutritioning.",
  "Don't hesitate to take the first step toward reaching your triathlon goals. I'm excited to help you along every leg of the race. Get started today!",
];
export function Trainers() {
  const scrollToStripeTable = () => {
    const element = document.getElementById("stripe-pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 py-20 md:px-12" style={{ background: T.ink, color: T.bone }}>
      <div className="mx-auto max-w-6xl">
        <p className="font-mono uppercase mb-4" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
          ◎ Coaching team
        </p>
        <h2
          className="font-extrabold uppercase mb-3"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Coaching
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em", marginLeft: 8 }}>
            team.
          </span>
        </h2>
        <p className="mb-12 max-w-2xl text-base leading-relaxed" style={{ color: T.mist }}>
          Meet the coaches behind your progress.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article style={{ background: T.char, border: `1px solid ${T.hair}` }}>
            <div className="p-8 text-center" style={{ borderBottom: `1px solid ${T.hair}` }}>
              <Image
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  objectPosition: "0 -33px",
                }}
                src={`${
                  process.env.NEXT_PUBLIC_BASE_URL ?? ""
                }/image/kosta-avatar.webp`}
                className="w-44 h-44 lg:w-56 lg:h-56 mb-4 mx-auto"
                alt="Konstantin"
              />
              <h3 className="font-bold text-2xl mb-1" style={{ color: T.bone }}>Konstantin</h3>
              <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>
                Founder, Head Coach
              </p>
              <button
                onClick={scrollToStripeTable}
                className="group mt-5 inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
                style={{ background: T.lime, color: T.ink }}
              >
                Get Started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
              {KOSTA.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed" style={{ color: T.mist }}>
                  {item}
                </li>
              ))}
            </ul>
            </div>
          </article>

          <article style={{ background: T.char, border: `1px solid ${T.hair}` }}>
            <div className="p-8 text-center" style={{ borderBottom: `1px solid ${T.hair}` }}>
              <Image
                width={500}
                height={600}
                style={{
                  objectFit: "cover",
                  objectPosition: "0 -33px",
                }}
                src={`${
                  process.env.NEXT_PUBLIC_BASE_URL ?? ""
                }/image/ksu-avatar.webp`}
                className="w-44 h-44 lg:w-56 lg:h-56 mb-4 mx-auto"
                alt="Oksana"
              />
              <h3 className="font-bold text-2xl mb-1" style={{ color: T.bone }}>Oksana</h3>
              <p className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>
                Co-Founder, Coach
              </p>
              <button
                onClick={scrollToStripeTable}
                className="group mt-5 inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
                style={{ background: T.lime, color: T.ink }}
              >
                Get Started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
              {KSU.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed" style={{ color: T.mist }}>
                  {item}
                </li>
              ))}
            </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
