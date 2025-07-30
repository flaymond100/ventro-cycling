import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Free 4 Week FTP Builder Plan",
  description:
    "Free 4 Week FTP Builder Plan from Ventro Cycling Coaching. Choose the plan that suits your goals and embark on your journey to a healthier, more active you with Ventro Coaching.",
  alternates: {
    canonical: `https://www.ventrocycling.com/free-4-week-ftp-builder-plan`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
