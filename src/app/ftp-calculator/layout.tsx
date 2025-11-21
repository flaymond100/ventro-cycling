import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "FTP Calculator",
  description:
    "Use this simple, free cycling FTP calculator to estimate your current fitness level. Enter your FTP or best 20-minute average power plus your weight, and get your estimated threshold power, watts per kilo, and a clear explanation of your cycling level.",
  alternates: {
    canonical: `https://www.ventrocycling.com/ftp-calculator`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
