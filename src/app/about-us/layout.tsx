import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ventro Cycling Coaching: Expert cycling coaches helping athletes worldwide improve performance through science-based training, power analysis, and personalized coaching plans.",
  alternates: {
    canonical: `https://www.ventrocycling.com/about-us`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
