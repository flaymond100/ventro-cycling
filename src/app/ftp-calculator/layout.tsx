import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "FTP Calculator — Power & W/kg",
  description:
    "Free FTP calculator for cyclists. Enter your best 20-minute power and weight to get your Functional Threshold Power, watts per kilogram and training zones.",
  openGraph: {
    title: "FTP Calculator — Power & W/kg | Ventro Cycling",
    description:
      "Free FTP calculator for cyclists. Enter your best 20-minute power and weight to get your Functional Threshold Power, watts per kilogram and training zones.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/ftp-calculator/`,
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cycling FTP Calculator",
  url: "https://www.ventrocycling.com/ftp-calculator/",
  applicationCategory: "SportsApplication",
  operatingSystem: "Any",
  description:
    "Free FTP calculator for cyclists: estimate your Functional Threshold Power, watts per kilogram (W/kg) and training zones from a 20-minute power test.",
  provider: { "@id": "https://www.ventrocycling.com/#organization" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <JsonLd data={appSchema} />
      {children}
    </Layout>
  );
}
