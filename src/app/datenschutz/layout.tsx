import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Ventro Cycling Coaching: Hosting, Kontaktformular, Zahlungen (Stripe), TrainingPeaks, Webanalyse und Cookies.",
  openGraph: {
    title: "Datenschutzerklärung | Ventro Cycling",
    description:
      "Datenschutzerklärung von Ventro Cycling Coaching: Hosting, Kontaktformular, Zahlungen (Stripe), TrainingPeaks, Webanalyse und Cookies.",
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: `https://www.ventrocycling.com/datenschutz/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
