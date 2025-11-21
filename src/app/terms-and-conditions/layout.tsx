import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Ventro Cycling Coaching services. Review our coaching agreement, training plan policies, and service terms before signing up.",
  alternates: {
    canonical: `https://www.ventrocycling.com/terms-and-conditions`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
