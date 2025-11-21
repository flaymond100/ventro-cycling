import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "FTP Calculator",
  description:
    "Free cycling FTP calculator: Calculate your Functional Threshold Power (FTP) and watts per kilogram (W/kg). Enter your 20-minute average power and weight to determine your cycling fitness level and training zones.",
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
