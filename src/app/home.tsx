"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <section className="pt-24 px-8 pb-20 md:pb-0 list-item bg-[url('/ben-guernsey.jpeg')] bg-cover bg-center bg-no-repeat relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/55 to-gray-900/50 mix-blend-multiply"></div>
      {/* Dotted grid overlay */}
      <div
        className="absolute inset-0 z-10"
        style={
          {
            "--dot-bg": "rgba(66 66 66 / 10%))",
            "--dot-color": "transparent",
            "--dot-size": "1px",
            "--dot-space": "22px",
            background: `
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color)
          `,
          } as React.CSSProperties
        }
      ></div>

      <div className="relative z-10 mt-24 flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 md:px-12 text-left">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          CYCLING COACHING.
        </motion.h1>

        <motion.p
          className="mt-4 text-xl italic text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          DESIGNED FOR PERFORMANCE.
        </motion.p>

        <motion.p
          className="mt-6 text-lg text-gray-100 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our coaching is built on science, not guesswork. We analyze your
          power, heart rate, recovery, and fatigue to turn your training into
          real-world speed. This is performance coaching for cyclists who are
          done wasting time.
        </motion.p>

        <motion.p
          className="mt-6 text-lg font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          This is Ventro. Built to make you faster.
        </motion.p>

        <motion.button
          className="mt-10 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Book a Free Call <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}

export default Home;
