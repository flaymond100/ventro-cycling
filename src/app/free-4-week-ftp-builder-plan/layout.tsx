import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Free 4-Week FTP Builder Plan",
  description:
    "Download a free 4-week FTP builder training plan. Structured, power-based cycling workouts to raise your Functional Threshold Power and build endurance.",
  openGraph: {
    title: "Free 4-Week FTP Builder Plan | Ventro Cycling",
    description:
      "Download a free 4-week FTP builder training plan. Structured, power-based cycling workouts to raise your Functional Threshold Power and build endurance.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/free-4-week-ftp-builder-plan/`,
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Free 4-Week FTP Builder Plan",
  description:
    "A free 4-week structured, power-based cycling training plan to raise your Functional Threshold Power (FTP) and build endurance.",
  url: "https://www.ventrocycling.com/free-4-week-ftp-builder-plan/",
  brand: { "@id": "https://www.ventrocycling.com/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.ventrocycling.com/free-4-week-ftp-builder-plan/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <JsonLd data={productSchema} />
      {children}
    </Layout>
  );
}
