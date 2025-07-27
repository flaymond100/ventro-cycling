import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Layout } from "@/components";
import Modal from "@/components/modal";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Scroll from "@/components/scroll";
import { GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Ventro Coaching",
  description:
    "Ventro Coaching provides professional cycling coaching for amateur and competitive athletes. We offer personalized training plans, power-based analysis, and expert guidance to help you improve your endurance, speed, and race performance. Online and in-person coaching available for road cyclists, triathletes, and endurance enthusiasts.",
  openGraph: {
    url: "https://www.ventrocoaching.com",
    title: "Ventro Coaching - Cycling Trainings",
    description:
      "Ventro Coaching provides professional cycling coaching for amateur and competitive athletes. We offer personalized training plans, power-based analysis, and expert guidance to help you improve your endurance, speed, and race performance. Online and in-person coaching available for road cyclists, triathletes, and endurance enthusiasts.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e",
        width: 800,
        height: 600,
        alt: "Ventro Coaching Logo",
      },
    ],
    type: "website",
    locale: "en",
    siteName: "Ventro Coaching",
  },
  alternates: {
    canonical: `https://www.ventrocoaching.com`,
  },
};

const schema = {
  "@context": "http://schema.org",
  "@type": "SportsTeam",
  name: "Ventro Coaching",
  email: "kostiantyn.garbar@gmail.com",
  coach: "kostiantyn Garbar",
  start_url: "/",
  founder: "kostiantyn Garbar",
  url: "https://www.ventrocoaching.com",
  logo: "https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2F3.png?alt=media&token=bb7dcbb4-5fb5-4c8a-947d-4f8a7eda6f1e",
  keywords:
    "cycling coaching, cycling coach, personal cycling coach, endurance coaching, road cycling coach, professional cycling training, cycling training plan, cycling performance coach, bike training, FTP training, structured cycling workouts, online cycling coach, personalized cycling plan, power-based training, cycling improvement plan, FTP test, power zones, training zones, VO2 max cycling, lactate threshold, cycling base training, tempo training, threshold intervals, high-intensity interval training, recovery rides, long endurance rides, sweet spot training, off-season cycling plan, increase FTP, build endurance, improve cycling speed, race preparation, Ironman cycling coach, Gran Fondo training, time trial training, cycling race tactics, peak performance cycling, sportive training plan, climbing training, monthly coaching, weekly feedback, training analysis, power data review, coach consultation, one-on-one cycling coaching, customized training plan, remote cycling coaching, Zoom coaching calls, coaching for beginners, coaching for racers, group training sessions, TrainingPeaks, Zwift coaching, Strava analysis, WKO5, Garmin data, cycling analytics, online training log, cycling metrics, bike power meter, heart rate monitor training, amateur cyclists, competitive cyclists, triathletes, beginners in cycling, cycling teams, masters racers, juniors cycling training, women’s cycling coaching, endurance athletes, cycling clubs, hire a cycling coach, find a cycling coach, best cycling coaching plan, online cycling training, personal coach for cycling, start cycling training, improve cycling performance, train for a race, how to train for cycling, cycling training for beginners",
  sport: "cycling",
  slogan: "We're here to help you achieve your goals.",
  description:
    "Ventro Coaching provides professional cycling coaching for amateur and competitive athletes. We offer personalized training plans, power-based analysis, and expert guidance to help you improve your endurance, speed, and race performance. Online and in-person coaching available for road cyclists, triathletes, and endurance enthusiasts.",
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
        <link rel="canonical" href="https://www.ventrocoaching.com" />

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
          content="Ventro Coaching - Personal Cycling Trainings"
        />
        <meta
          property="description"
          content="Ventro Coaching helps cyclists and triathletes reach peak performance with custom training plans, expert feedback, and data-driven coaching."
        />
        <meta
          name="google-site-verification"
          content="XlQzuEWVIkVb3fSpAeOXda1-nx3deFkxsnsuBAm5lec"
        />
        <meta
          name="keywords"
          content="cycling coaching, cycling coach, personal cycling coach, endurance coaching, road cycling coach, professional cycling training, cycling training plan, cycling performance coach, bike training, FTP training, structured cycling workouts, online cycling coach, personalized cycling plan, power-based training, cycling improvement plan, FTP test, power zones, training zones, VO2 max cycling, lactate threshold, cycling base training, tempo training, threshold intervals, high-intensity interval training, recovery rides, long endurance rides, sweet spot training, off-season cycling plan, increase FTP, build endurance, improve cycling speed, race preparation, Ironman cycling coach, Gran Fondo training, time trial training, cycling race tactics, peak performance cycling, sportive training plan, climbing training, monthly coaching, weekly feedback, training analysis, power data review, coach consultation, one-on-one cycling coaching, customized training plan, remote cycling coaching, Zoom coaching calls, coaching for beginners, coaching for racers, group training sessions, TrainingPeaks, Zwift coaching, Strava analysis, WKO5, Garmin data, cycling analytics, online training log, cycling metrics, bike power meter, heart rate monitor training, amateur cyclists, competitive cyclists, triathletes, beginners in cycling, cycling teams, masters racers, juniors cycling training, women’s cycling coaching, endurance athletes, cycling clubs, hire a cycling coach, find a cycling coach, best cycling coaching plan, online cycling training, personal coach for cycling, start cycling training, improve cycling performance, train for a race, how to train for cycling, cycling training for beginners"
        />
        <meta name="robots" content="all" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${rubik.variable} font-rubik`}>
        <Layout>
          <Scroll />
          <Toaster position="top-right" />
          {children}
          <Suspense fallback={<>modal</>}>
            <Modal />
          </Suspense>
        </Layout>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!} />
    </html>
  );
}
