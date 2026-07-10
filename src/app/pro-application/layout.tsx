import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "PRO Coaching Application",
  description:
    "Apply for Ventro PRO — 1:1 cycling coaching with full-season architecture built from your INSCYD metabolic model. Limited to 4 athletes, by application.",
  openGraph: {
    title: "PRO Coaching Application | Ventro Cycling",
    description:
      "Apply for Ventro PRO — 1:1 cycling coaching with full-season architecture built from your INSCYD metabolic model. Limited to 4 athletes, by application.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/pro-application/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
