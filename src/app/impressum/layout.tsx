import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Ventro Cycling Coaching (Kostiantyn Garbar) gemäß § 5 DDG.",
  openGraph: {
    title: "Impressum | Ventro Cycling",
    description:
      "Impressum von Ventro Cycling Coaching (Kostiantyn Garbar) gemäß § 5 DDG.",
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: `https://www.ventrocycling.com/impressum/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
