import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Ventro Cycling Coaching: coaching agreement, training-plan policies, payments, health responsibility and privacy.",
  openGraph: {
    title: "Terms & Conditions | Ventro Cycling",
    description:
      "Terms and conditions for Ventro Cycling Coaching: coaching agreement, training-plan policies, payments, health responsibility and privacy.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/terms-and-conditions/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
