import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read success stories from cyclists and triathletes who improved their FTP, race performance, and endurance with Ventro Cycling Coaching. Real results from real athletes.",
  alternates: {
    canonical: `https://www.ventrocycling.com/testimonials`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
