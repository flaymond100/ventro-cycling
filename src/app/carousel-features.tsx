"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// ── Tokens ────────────────────────────────────────────────────────────────
const T = {
  ink: "#0B0D10",
  char: "#14181D",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

const LOGOS = [
  {
    alt: "Zwift logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5a5e0d75755dd4bf51_zwift-inc-logo-vector-2%402x.webp?alt=media&token=4af41770-98ee-4d9f-8f8d-95a119537883",
  },
  {
    alt: "Wahoo logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5addac87c670d4c904_Wahoo%402x.webp?alt=media&token=e1b7e6b7-ebd4-486a-bde2-f42e474f081e",
  },
  {
    alt: "Strava logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530cc1e8c20d4b3f24c4f0_Strava_Logo%402x.webp?alt=media&token=bb489393-06d7-4ae7-b131-d0c3156d2f32",
  },
  {
    alt: "Garmin logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65549b703d9a1a82ff6ceffc_garmin-logo.webp?alt=media&token=f6676ba3-2e0b-46bd-b377-d1f9cef4aff2",
  },
  {
    alt: "Polar logo",
    src: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65549b703d9a1a82ff6ceff6_polar-logo.webp?alt=media&token=fdaa2eb2-fa90-4d12-996d-0704813f4e82",
  },
];

export function CarouselFeatures() {
  return (
    <section
      className="py-6 overflow-hidden"
      style={{
        background: T.char,
        borderTop: `1px solid ${T.hair}`,
        borderBottom: `1px solid ${T.hair}`,
      }}
    >
      <Marquee speed={40} gradient={false} style={{ maxWidth: "100vw" }}>
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className="flex items-center justify-center mx-12 h-12">
            <Image
              width={120}
              height={40}
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default CarouselFeatures;
