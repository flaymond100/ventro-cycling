import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Cycling Team",
  description:
    "Join Ventro Cycling Coaching's international cycling team. Team coaching programs for competitive cyclists, triathletes, and endurance athletes worldwide.",
  alternates: {
    canonical: `https://www.ventrocycling.com/cycling-team`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
