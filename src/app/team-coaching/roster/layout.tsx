import "../../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Cycling Team Roster",
  description:
    "Meet the Ventro Cycling Coaching team roster: Competitive cyclists and triathletes from around the world training with our expert coaching programs.",
  alternates: {
    canonical: `https://www.ventrocycling.com/cycling-team/roster`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
