import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ventro Cycling Coaching for personalized cycling training plans, FTP improvement programs, and expert coaching. Get started with a free consultation today.",
  alternates: {
    canonical: `https://www.ventrocycling.com/contact-us`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
