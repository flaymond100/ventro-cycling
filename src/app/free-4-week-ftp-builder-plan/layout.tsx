import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Free 4-Week FTP Builder Plan",
  description:
    "Download a free 4-week FTP builder training plan. Structured, power-based cycling workouts to raise your Functional Threshold Power and build endurance.",
  openGraph: {
    title: "Free 4-Week FTP Builder Plan | Ventro Cycling",
    description:
      "Download a free 4-week FTP builder training plan. Structured, power-based cycling workouts to raise your Functional Threshold Power and build endurance.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/free-4-week-ftp-builder-plan/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
