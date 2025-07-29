import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ventro Cycling Coaching is a community of athletes from all corners of the globe, united by a shared love for endurance sports and become healthier people.",
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
