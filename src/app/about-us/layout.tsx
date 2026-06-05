import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "About & Head Coach Kostiantyn Garbar",
  description:
    "Meet Kostiantyn Garbar, founder and head coach at Ventro. Data-driven cycling coaching built on power, FTP and 10+ years of endurance-sport experience.",
  openGraph: {
    title: "About & Head Coach Kostiantyn Garbar | Ventro Cycling",
    description:
      "Meet Kostiantyn Garbar, founder and head coach at Ventro. Data-driven cycling coaching built on power, FTP and 10+ years of endurance-sport experience.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/about-us/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
