import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from our clients about their experience with our services.",
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
