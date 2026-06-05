import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Cycling Coaching Plans & Pricing",
  description:
    "Cycling coaching plans and pricing for every level. 1:1 power-based coaching, training-plan options and consultations to raise your FTP and race performance.",
  openGraph: {
    title: "Cycling Coaching Plans & Pricing | Ventro Cycling",
    description:
      "Cycling coaching plans and pricing for every level. 1:1 power-based coaching, training-plan options and consultations to raise your FTP and race performance.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/plans-and-pricing/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
