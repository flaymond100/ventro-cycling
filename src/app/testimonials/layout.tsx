import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Cyclist Reviews & Coaching Results",
  description:
    "Real results from coached cyclists and triathletes — FTP gains, race podiums and season goals achieved with 1:1 power-based coaching at Ventro Cycling.",
  openGraph: {
    title: "Cyclist Reviews & Coaching Results | Ventro Cycling",
    description:
      "Real results from coached cyclists and triathletes — FTP gains, race podiums and season goals achieved with 1:1 power-based coaching at Ventro Cycling.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/testimonials/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
