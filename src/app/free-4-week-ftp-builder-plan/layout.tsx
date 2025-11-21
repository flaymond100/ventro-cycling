import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Free 4-Week FTP Builder Plan",
  description:
    "Get your free 4-week FTP builder training plan from Ventro Cycling Coaching. Structured workouts to increase Functional Threshold Power, improve cycling fitness, and build endurance. Download now.",
  alternates: {
    canonical: `https://www.ventrocycling.com/free-4-week-ftp-builder-plan`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
