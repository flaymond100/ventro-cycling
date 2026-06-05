import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Cycling Coaching Plans & Pricing",
  description:
    "Cycling coaching plans and pricing for every level. 1:1 power-based coaching, training-plan options and consultations to raise your FTP and race performance.",
  openGraph: {
    title: "Cycling Coaching Plans & Pricing | Ventro Cycling",
    description:
      "Cycling coaching plans and pricing for every level. 1:1 power-based coaching, training-plan options and consultations to raise your FTP and race performance.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/plans-and-pricing/`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ventrocycling.com/plans-and-pricing/#service",
  name: "Personal Cycling Coaching",
  serviceType: "Cycling coaching",
  description:
    "1:1 power-based cycling coaching with personalized training plans, weekly plan updates and performance analysis for road cyclists, triathletes and endurance athletes.",
  provider: { "@id": "https://www.ventrocycling.com/#organization" },
  areaServed: "Worldwide",
  url: "https://www.ventrocycling.com/plans-and-pricing/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <JsonLd data={serviceSchema} />
      {children}
    </Layout>
  );
}
