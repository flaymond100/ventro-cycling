"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Ventro — Platforms strip
 *
 * Refactor notes:
 *  - Desktop: single column (1 logo per row), mobile: 2 columns.
 *  - Logos lifted into a `PLATFORMS` array so adding/removing a platform
 *    is a one-line change, not a copy-pasted <div>.
 *  - Each cell has a mono label underneath — ties into the Ventro system
 *    (JetBrains Mono, 10.5px, 0.14em tracking, uppercase).
 *  - Uses a `grayscale hover:grayscale-0` treatment so the monochrome hero
 *    doesn't fight with brand logos. Remove if you want full color.
 */

const tokens = {
  ink: "#0B0D10",
  bone: "#F4F4F2",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

const PLATFORMS = [
  {
    label: "Garmin",
    alt: "Garmin logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65549b703d9a1a82ff6ceffc_garmin-logo.webp?alt=media&token=f6676ba3-2e0b-46bd-b377-d1f9cef4aff2",
  },
  {
    label: "Wahoo",
    alt: "Wahoo logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5addac87c670d4c904_Wahoo%402x.webp?alt=media&token=e1b7e6b7-ebd4-486a-bde2-f42e474f081e",
  },
  {
    label: "Strava",
    alt: "Strava logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530cc1e8c20d4b3f24c4f0_Strava_Logo%402x.webp?alt=media&token=bb489393-06d7-4ae7-b131-d0c3156d2f32",
  },
  {
    label: "Zwift",
    alt: "Zwift logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5a5e0d75755dd4bf51_zwift-inc-logo-vector-2%402x.webp?alt=media&token=4af41770-98ee-4d9f-8f8d-95a119537883",
  },
  {
    label: "TrainingPeaks",
    alt: "TrainingPeaks logo",
    src: "/tp.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export function Platforms() {
  return (
    <div className="relative z-20 mt-12 md:ml-16 md:pl-12 pl-6 pr-6 mb-12">
      {/* Section eyebrow */}
      <div
        className=" font-mono uppercase"
        style={{
          fontSize: 10.5,
          letterSpacing: "0.18em",
          color: tokens.dim,
        }}
      >
        ◎ Integrates with
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="
          flex flex-wrap md:flex-nowrap
          items-stretch
          gap-px
          max-w-2xl md:max-w-none
          list-none p-0 m-0
        "
      >
        {PLATFORMS.map((p) => (
          <motion.li
            key={p.label}
            variants={item as any}
            className="
              flex items-center gap-4
              shrink-0
              pr-4 py-5 md:px-5 md:py-6
              transition-colors
            "
            style={{ background: 'transparent' }}
          >
            <div className="flex h-10 w-[120px] shrink-0 items-center justify-start">
              <Image
                width={120}
                height={40}
                src={p.src}
                alt={p.alt}
                className="
                  max-h-10 w-auto object-contain object-left
                  opacity-80 grayscale transition
                  hover:opacity-100 hover:grayscale-0
                "
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            {/* <div
              className="font-mono uppercase"
              style={{
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: tokens.dim,
              }}
            >
              {p.label}
            </div> */}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Platforms;
