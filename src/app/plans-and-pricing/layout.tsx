import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Plans and Pricing",
  description:
    "Cycling coaching plans and pricing for all levels. Choose from monthly coaching, training plans, or consultations. Personalized coaching to improve FTP, endurance, and race performance.",
  alternates: {
    canonical: `https://www.ventrocycling.com/plans-and-pricing/plans-and-pricing`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
