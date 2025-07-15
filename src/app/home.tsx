"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <section className="pt-24 px-8 pb-20 md:pb-0 list-item bg-[url('/ben-guernsey.jpeg')] bg-cover bg-center bg-no-repeat relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800/100 to-gray-100/90 mix-blend-multiply"></div>
      {/* Dotted grid overlay */}
      <div
        className="absolute inset-0 z-10"
        style={
          {
            "--dot-bg": "rgba(66, 66, 66, 0.1)",
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

      <div className="relative z-10 mt-24 md:ml-16 flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 md:px-12 text-left">
        <motion.h1
          className="text-6xl text-yellow-400 md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg"
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
          Our coaching is built on science. We analyze your power, heart rate,
          recovery, and fatigue to make sure you are getting the most out of the
          trainins. This is performance coaching for cyclists who are done
          wasting time.
        </motion.p>

        <motion.p
          className="mt-6 text-lg font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          This is Ventro. Built to make you faster.
        </motion.p>
        <Link href="/plans-and-pricing">
          <motion.button
            className="mt-10 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            See Plans <ArrowRight size={18} />
          </motion.button>{" "}
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:ml-16 pl-6 md:pl-12 gap-8 z-20 mb-18 relative mt-12 items-start justify-start max-w-2xl">
        <div className="flex flex-col justify-end items-center min-h-20">
          <Image
            width={150}
            height={150}
            src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65549b703d9a1a82ff6ceffc_garmin-logo.webp?alt=media&token=f6676ba3-2e0b-46bd-b377-d1f9cef4aff2`}
            alt="garmin logo"
          />
        </div>

        {/* <div className="flex flex-col justify-end items-center  min-h-20">
          <Image
            width={150}
            height={150}
            src="/image/download.svg"
            alt="logo"
          />
        </div> */}

        <div className="flex flex-col justify-end items-center  min-h-20">
          <Image
            width={150}
            height={150}
            src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5addac87c670d4c904_Wahoo%402x.webp?alt=media&token=e1b7e6b7-ebd4-486a-bde2-f42e474f081e`}
            alt="wahoo logo"
          />
        </div>

        <div className="flex flex-col justify-end items-center  min-h-20">
          <Image
            width={150}
            height={150}
            src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530cc1e8c20d4b3f24c4f0_Strava_Logo%402x.webp?alt=media&token=bb489393-06d7-4ae7-b131-d0c3156d2f32`}
            alt="strava logo"
          />
        </div>

        <div className="flex flex-col justify-end items-center  min-h-20">
          <Image
            width={150}
            height={150}
            src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5a5e0d75755dd4bf51_zwift-inc-logo-vector-2%402x.webp?alt=media&token=4af41770-98ee-4d9f-8f8d-95a119537883`}
            alt="zwift logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
