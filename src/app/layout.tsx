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
  title:
    "Ventro Cycling Coaching | Personal Online Cycling Coach & Training Plans",
  description:
    "Personal cycling coaching and power-based training plans for road cyclists, triathletes, and endurance athletes. Work 1:1 with an online cycling coach to increase FTP, build endurance, and prepare for races with structured, data-driven workouts and regular feedback.",
  openGraph: {
    url: "https://www.ventrocycling.com",
    title:
      "Ventro Cycling Coaching | Personal Online Cycling Coach & Training Plans",
    description:
      "Personal cycling coaching and power-based training plans for road cyclists, triathletes, and endurance athletes. Work 1:1 with an online cycling coach to increase FTP, build endurance, and prepare for races with structured, data-driven workouts and regular feedback.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e",
        width: 800,
        height: 600,
        alt: "Ventro Cycling Coaching Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Ventro Cycling Coaching",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com`,
  },
};

const schema = {
  "@context": "http://schema.org",
  "@type": "SportsOrganization",
  name: "Ventro Cycling Coaching",
  email: "kostiantyn.garbar@gmail.com",
  coach: "Kostiantyn Garbar",
  founder: "Kostiantyn Garbar",
  url: "https://www.ventrocycling.com",
  logo: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e",
  keywords:
    "cycling coaching, cycling coach, personal cycling coach, online cycling coach, cycling training plan, endurance coaching, road cycling coach, cycling performance coach, FTP training, structured cycling workouts, power-based training, race preparation, Ironman cycling coach, Gran Fondo training, time trial training, TrainingPeaks coaching, Zwift coaching, Strava analysis, one-on-one cycling coaching, customized training plan, remote cycling coaching, cycling training for beginners, improve cycling performance, increase FTP, build endurance",
  sport: "cycling",
  slogan:
    "Data-Driven Cycling Coaching to Increase FTP, Endurance, and Race Performance.",
  description:
    "Personal cycling coaching and power-based training plans for road cyclists, triathletes, and endurance athletes. Structured, data-driven workouts, training analysis, and regular feedback from an experienced online cycling coach.",
  sameAs: ["https://www.instagram.com/ventrocoaching"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.ventrocycling.com" />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="title"
          content="Ventro Cycling Coaching | Personal Online Cycling Coach & Training Plans"
        />
        <meta
          name="description"
          content="Personal cycling coaching and power-based training plans for road cyclists, triathletes, and endurance athletes. Work 1:1 with an online cycling coach to increase FTP, build endurance, and prepare for races with structured, data-driven workouts and regular feedback."
        />
        <meta
          name="google-site-verification"
          content="XlQzuEWVIkVb3fSpAeOXda1-nx3deFkxsnsuBAm5lec"
        />
        <meta
          name="keywords"
          content="cycling coaching, cycling coach, personal cycling coach, online cycling coach, cycling training plan, endurance coaching, road cycling coach, cycling performance coach, FTP training, structured cycling workouts, power-based training, race preparation, Ironman cycling coach, Gran Fondo training, time trial training, TrainingPeaks coaching, Zwift coaching, Strava analysis, one-on-one cycling coaching, customized training plan, remote cycling coaching, cycling training for beginners, improve cycling performance, increase FTP, build endurance"
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
