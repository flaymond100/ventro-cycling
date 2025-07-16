import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "FTP Calculator",
  description:
    "Calculate your FTP and watts per kilogram to get a better understanding of your performance.",
  alternates: {
    canonical: `https://www.ventrocoaching.com/ftp-calculator`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
