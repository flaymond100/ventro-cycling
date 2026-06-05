import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Layout } from "@/components";
import { Toaster } from "react-hot-toast";
import Scroll from "@/components/scroll";
import { GoogleAnalytics } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ventrocycling.com"),
  title: {
    default: "Personal Online Cycling Coach & Training Plans | Ventro",
    template: "%s | Ventro Cycling",
  },
  description:
    "Work 1:1 with an online cycling coach. Power-based plans for cyclists, triathletes and endurance athletes to raise FTP, build endurance and race faster.",
  openGraph: {
    url: "https://www.ventrocycling.com/",
    title: "Personal Online Cycling Coach & Training Plans | Ventro Cycling",
    description:
      "Work 1:1 with an online cycling coach. Power-based plans for cyclists, triathletes and endurance athletes to raise FTP, build endurance and race faster.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e",
        width: 800,
        height: 600,
        alt: "Ventro Cycling Coaching",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Ventro Cycling Coaching",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Online Cycling Coach & Training Plans | Ventro Cycling",
    description:
      "Work 1:1 with an online cycling coach. Power-based training plans to raise FTP, build endurance and race faster.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/`,
  },
};

const LOGO =
  "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e";

const ORG_ID = "https://www.ventrocycling.com/#organization";
const COACH_ID = "https://www.ventrocycling.com/#coach";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsOrganization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Ventro Cycling Coaching",
      email: "contact@ventrocycling.com",
      url: "https://www.ventrocycling.com/",
      logo: LOGO,
      image: LOGO,
      founder: { "@id": COACH_ID },
      sport: "Cycling",
      areaServed: "Worldwide",
      slogan:
        "Data-Driven Cycling Coaching to Increase FTP, Endurance, and Race Performance.",
      description:
        "Personal cycling coaching and power-based training plans for road cyclists, triathletes, and endurance athletes. Structured, data-driven workouts, training analysis, and regular feedback from an experienced online cycling coach.",
      sameAs: [
        "https://www.instagram.com/ventro.cycling.coaching/",
        "https://www.facebook.com/ventro.cycling.coaching",
      ],
    },
    {
      "@type": "Person",
      "@id": COACH_ID,
      name: "Kostiantyn Garbar",
      alternateName: "Kosta Garbar",
      jobTitle: "Founder & Head Cycling Coach",
      worksFor: { "@id": ORG_ID },
      url: "https://www.ventrocycling.com/about-us/",
      image: "https://www.ventrocycling.com/image/kosta-coach.webp",
      sameAs: ["https://www.instagram.com/ventro.cycling.coaching/"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="XlQzuEWVIkVb3fSpAeOXda1-nx3deFkxsnsuBAm5lec"
        />
        <meta name="robots" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-ventro-ink text-ventro-bone`}>
        <Layout>
          <Scroll />
          <Toaster position="top-right" />
          {children}
        </Layout>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!} />
    </html>
  );
}
