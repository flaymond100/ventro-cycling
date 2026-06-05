import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "FTP Calculator — Power & W/kg",
  description:
    "Free FTP calculator for cyclists. Enter your best 20-minute power and weight to get your Functional Threshold Power, watts per kilogram and training zones.",
  openGraph: {
    title: "FTP Calculator — Power & W/kg | Ventro Cycling",
    description:
      "Free FTP calculator for cyclists. Enter your best 20-minute power and weight to get your Functional Threshold Power, watts per kilogram and training zones.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/ftp-calculator/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
