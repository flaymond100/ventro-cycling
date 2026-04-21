"use client";

import { Navbar, Footer } from "@/components";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

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

// ── Data ──────────────────────────────────────────────────────────────────
interface FitnessLevel {
  name: string;
  description: string;
  weeklyRides?: string;
  weeklyDistance?: string;
  oneDayDistance?: string;
  averageSpeed?: string;
  zwiftCategory?: string;
}

const FITNESS_LEVELS: { male: { [k: string]: FitnessLevel }; female: { [k: string]: FitnessLevel } } = {
  male: {
    worldClass: { name: "World Class", description: "The best of the best — potential to win Grand Tours like the Tour de France. Extraordinary physical and mental endurance." },
    exceptional: { name: "Exceptional", description: "Professional athletes who can win Pro-continental races. The best Under 23 category cyclists also belong here." },
    excellent: { name: "Excellent — A Grade / Cat 1", description: "Very competitive amateur who races Cat 1/2. Can win age group in regional triathlons and gran fondos. Front of the pack on weekly group rides.", weeklyRides: "5+", weeklyDistance: "260km+", oneDayDistance: "170km+", averageSpeed: "28–36 km/h" },
    veryGood: { name: "Very Good — B Grade / Cat 2", description: "Competitive amateurs who regularly podium in local triathlons or gran fondos.", weeklyRides: "4", weeklyDistance: "200km", oneDayDistance: "150km", averageSpeed: "25–29 km/h", zwiftCategory: "A" },
    good: { name: "Good — C Grade / Cat 3", description: "Competitive at amateur level, participating in Cat 2/3 races.", weeklyRides: "3-4", weeklyDistance: "180km", averageSpeed: "24–28 km/h", zwiftCategory: "B and A" },
    moderate: { name: "Moderate — D Grade / Cat 4", description: "Casual amateur athletes who participate in occasional bike races or triathlons.", weeklyRides: "3", weeklyDistance: "160km", oneDayDistance: "160km", averageSpeed: "23–27 km/h", zwiftCategory: "C" },
    fair: { name: "Fair", description: "Cyclists who ride primarily for fitness and enjoyment.", weeklyRides: "1", weeklyDistance: "35km", oneDayDistance: "70km", averageSpeed: "16–25 km/h", zwiftCategory: "D" },
    novice2: { name: "Novice 2", description: "Leisurely riders who enjoy sightseeing and are most comfortable on bike paths." },
    novice1: { name: "Novice 1", description: "Beginners who are new to cycling or ride occasionally. Early stages of developing cycling skills." },
  },
  female: {
    worldClass: { name: "World Class", description: "The best of the best — potential to win Grand Tours and Classics. Extraordinary physical and mental endurance." },
    exceptional: { name: "Exceptional", description: "Professional athletes who can win Pro-continental races." },
    excellent: { name: "Excellent — A Grade / Cat 1", description: "Very competitive amateur who races Cat 1/2 and can win age groups in regional triathlons.", weeklyRides: "5+", weeklyDistance: "260km+", oneDayDistance: "170km+", averageSpeed: "28–36 km/h" },
    veryGood: { name: "Very Good — B Grade / Cat 2", description: "Competitive amateurs who regularly podium in local events.", weeklyRides: "4", weeklyDistance: "200km", oneDayDistance: "150km", averageSpeed: "25–29 km/h", zwiftCategory: "A" },
    good: { name: "Good — C Grade / Cat 3", description: "Competitive at amateur level, riding 3-4 times per week.", weeklyRides: "3-4", weeklyDistance: "180km", averageSpeed: "24–28 km/h", zwiftCategory: "B and A" },
    moderate: { name: "Moderate — D Grade / Cat 4", description: "Casual amateur athletes who participate in occasional bike races.", weeklyRides: "3", weeklyDistance: "160km", oneDayDistance: "160km", averageSpeed: "23–27 km/h", zwiftCategory: "C" },
    fair: { name: "Fair", description: "Cyclists who ride primarily for fitness and enjoyment.", weeklyRides: "1", weeklyDistance: "35km", oneDayDistance: "70km", averageSpeed: "16–25 km/h", zwiftCategory: "D" },
    novice2: { name: "Novice 2", description: "Leisurely riders who enjoy sightseeing on bike paths." },
    novice1: { name: "Novice 1", description: "Beginners who are new to cycling or ride occasionally." },
  },
};

const classifyRider = (wkg: number, gender: "male" | "female"): { level: string; data: FitnessLevel } => {
  const t = {
    male: { worldClass: 5.8, exceptional: 5.3, excellent: 4.7, veryGood: 4.1, good: 3.5, moderate: 2.9, fair: 2.3, novice2: 1.7 },
    female: { worldClass: 5.1, exceptional: 4.6, excellent: 4.1, veryGood: 3.5, good: 3.0, moderate: 2.8, fair: 2.5, novice2: 1.9 },
  }[gender];
  const levels = FITNESS_LEVELS[gender];
  if (wkg >= t.worldClass) return { level: "worldClass", data: levels.worldClass };
  if (wkg >= t.exceptional) return { level: "exceptional", data: levels.exceptional };
  if (wkg >= t.excellent) return { level: "excellent", data: levels.excellent };
  if (wkg >= t.veryGood) return { level: "veryGood", data: levels.veryGood };
  if (wkg >= t.good) return { level: "good", data: levels.good };
  if (wkg >= t.moderate) return { level: "moderate", data: levels.moderate };
  if (wkg >= t.fair) return { level: "fair", data: levels.fair };
  if (wkg >= t.novice2) return { level: "novice2", data: levels.novice2 };
  return { level: "novice1", data: levels.novice1 };
};

// ── Shared styles ─────────────────────────────────────────────────────────
const inputStyle = {
  background: "transparent",
  color: T.bone,
  border: `1px solid ${T.hair}`,
  borderRadius: 0,
};
const inputClass = "w-full px-4 py-3 text-sm outline-none transition";

// ── Component ─────────────────────────────────────────────────────────────
const FTPCalculator = () => {
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [power20min, setPower20min] = useState("");
  const [weight, setWeight] = useState("");
  const [ftp, setFtp] = useState<number | null>(null);
  const [wkg, setWkg] = useState<number | null>(null);
  const [category, setCategory] = useState<{ level: string; data: FitnessLevel } | null>(null);

  const handleCalculate = () => {
    const p20 = parseFloat(power20min);
    const w = parseFloat(weight);
    if (p20 > 0 && w > 0 && gender) {
      const ftpCalc = p20 * 0.95;
      const ftpWkg = ftpCalc / w;
      setFtp(ftpCalc);
      setWkg(ftpWkg);
      setCategory(classifyRider(ftpWkg, gender));
    } else {
      setFtp(null);
      setWkg(null);
      setCategory(null);
    }
  };

  return (
    <section
      className="pt-32 px-6 pb-24 md:px-12"
      style={{ background: T.ink, color: T.bone }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ Free tool
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          FTP{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            Calculator.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-14 max-w-xl text-lg leading-relaxed"
          style={{ color: T.mist }}
        >
          Enter your best 20-minute average power and weight. Get your estimated
          FTP, W/kg, and cycling fitness level.
        </motion.p>

        {/* Grid: calculator + explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Calculator card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
            className="p-8 space-y-6"
            style={{ background: T.char, border: `1px solid ${T.hair}` }}
          >
            {/* Gender */}
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
              >
                Gender
              </p>
              <div className="flex gap-3">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className="flex-1 px-4 py-3 font-mono uppercase text-[11px] tracking-[0.14em] transition"
                    style={{
                      background: gender === g ? T.lime : "transparent",
                      color: gender === g ? T.ink : T.dim,
                      border: `1px solid ${gender === g ? T.lime : T.hair}`,
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight */}
            <div>
              <label
                className="block font-mono uppercase mb-2"
                style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
              >
                Weight (kg)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="e.g. 70"
                  min="0"
                  step="0.1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[11px]" style={{ color: T.dim }}>kg</span>
              </div>
            </div>

            {/* 20-min power */}
            <div>
              <label
                className="block font-mono uppercase mb-2"
                style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
              >
                Best 20-min Average Power
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={power20min}
                  onChange={(e) => setPower20min(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="e.g. 250"
                  min="0"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[11px]" style={{ color: T.dim }}>W</span>
              </div>
            </div>

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              disabled={!gender || !weight || !power20min}
              className="group w-full inline-flex items-center justify-center gap-2 px-5 py-4 font-semibold text-sm disabled:opacity-40"
              style={{ background: T.lime, color: T.ink }}
            >
              Calculate
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Result */}
            <AnimatePresence>
              {ftp !== null && wkg !== null && category && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="pt-6 space-y-4"
                  style={{ borderTop: `1px solid ${T.hair}` }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-mono uppercase mb-1" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>Estimated FTP</p>
                      <p className="font-bold" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em", color: T.bone }}>{ftp.toFixed(0)} W</p>
                    </div>
                    <div>
                      <p className="font-mono uppercase mb-1" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>FTP / kg</p>
                      <p className="font-bold" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em", color: T.bone }}>{wkg.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono uppercase mb-1" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>Fitness Level</p>
                    <p className="font-semibold text-base" style={{ color: T.lime }}>{category.data.name}</p>
                  </div>

                  {/* Free plan CTA */}
                  <div className="pt-4" style={{ borderTop: `1px solid ${T.hair}` }}>
                    <Link href="/free-4-week-ftp-builder-plan">
                      <button
                        className="group w-full inline-flex items-center justify-center gap-2 px-5 py-4 font-semibold text-sm"
                        style={{ border: `1px solid ${T.hair}`, color: T.bone, background: "transparent" }}
                      >
                        Get Free 4-Week Plan
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right panel: explanation or how-to */}
          <AnimatePresence mode="wait">
            {category ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
                style={{ background: T.char, border: `1px solid ${T.hair}` }}
              >
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
                >
                  ◎ Your level
                </p>
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "-0.025em",
                    color: T.bone,
                  }}
                >
                  {category.data.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: T.mist }}>
                  {category.data.description}
                </p>

                {(category.data.weeklyRides || category.data.weeklyDistance || category.data.oneDayDistance || category.data.averageSpeed || category.data.zwiftCategory) && (
                  <div className="space-y-3 pt-4" style={{ borderTop: `1px solid ${T.hair}` }}>
                    {[
                      { label: "Weekly rides", val: category.data.weeklyRides },
                      { label: "Weekly distance", val: category.data.weeklyDistance },
                      { label: "Max one-day distance", val: category.data.oneDayDistance },
                      { label: "Average speed", val: category.data.averageSpeed },
                      { label: "Zwift category", val: category.data.zwiftCategory },
                    ].filter((r) => r.val).map(({ label, val }) => (
                      <div key={label} className="flex justify-between items-baseline">
                        <span className="font-mono uppercase text-[10.5px] tracking-[0.12em]" style={{ color: T.dim }}>{label}</span>
                        <span className="font-semibold text-sm" style={{ color: T.bone }}>{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upsell */}
                <div className="pt-6 space-y-3" style={{ borderTop: `1px solid ${T.hair}` }}>
                  <p className="font-semibold text-sm" style={{ color: T.bone }}>Ready to improve?</p>
                  {["Structured workouts", "TrainingPeaks compatible", "100% free"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} style={{ color: T.lime }} />
                      <span className="text-sm" style={{ color: T.mist }}>{item}</span>
                    </div>
                  ))}
                  <Link href="/free-4-week-ftp-builder-plan">
                    <button
                      className="group mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-4 font-semibold text-sm"
                      style={{ background: T.lime, color: T.ink }}
                    >
                      Get Free 4-Week FTP Builder
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="instructions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
                style={{ background: T.char, border: `1px solid ${T.hair}` }}
              >
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
                >
                  ◎ How to test
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "-0.025em",
                    color: T.bone,
                  }}
                >
                  The 20-min FTP Protocol
                </h3>
                <div className="space-y-5">
                  {[
                    { code: "01", title: "Warm-Up (15–20 min)", body: "Easy riding with a few 1-minute high-cadence efforts to prime your legs." },
                    { code: "02", title: "20-minute Test", body: "Ride at your absolute best sustainable effort. Don't start too hard — aim for even pacing. Record your average power for the full 20 minutes." },
                    { code: "03", title: "Cool-Down (10–15 min)", body: "Easy riding to bring heart rate down and aid recovery." },
                  ].map(({ code, title, body }) => (
                    <div key={code} className="flex gap-4">
                      <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: 11, color: T.lime, letterSpacing: "0.14em" }}>{code}</span>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: T.bone }}>{title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: T.mist }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs italic" style={{ color: T.dim }}>
                  Your FTP is typically 95% of your 20-minute average power. Enter your number into the calculator to get your full result.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default function FTPCalculatorPage() {
  return (
    <>
      <Navbar />
      <FTPCalculator />
      <Footer />
    </>
  );
}
