import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Contact & Free Consultation",
  description:
    "Get in touch with Ventro Cycling Coaching. Book a free consultation or message us about 1:1 coaching, training plans and INSCYD performance testing.",
  openGraph: {
    title: "Contact & Free Consultation | Ventro Cycling",
    description:
      "Get in touch with Ventro Cycling Coaching. Book a free consultation or message us about 1:1 coaching, training plans and INSCYD performance testing.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/contact/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
