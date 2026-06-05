import "../../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: { absolute: "Team Roster — Coached Athletes | Ventro Cycling" },
  description:
    "Meet the athletes and teams coached by Ventro Cycling — competitive cyclists and triathletes training with structured, power-based coaching programs.",
  openGraph: {
    title: "Team Roster — Coached Athletes | Ventro Cycling",
    description:
      "Meet the athletes and teams coached by Ventro Cycling — competitive cyclists and triathletes training with structured, power-based coaching programs.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/team-coaching/roster/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
