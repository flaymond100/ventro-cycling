import "../../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Team Roster — Coached Athletes | Ventro Cycling" },
  description:
    "Meet the athletes and teams coached by Ventro Cycling — competitive cyclists and triathletes training with structured, power-based coaching programs.",
  openGraph: {
    title: "Team Roster — Coached Athletes | Ventro Cycling",
    description:
      "Meet the athletes and teams coached by Ventro Cycling — competitive cyclists and triathletes training with structured, power-based coaching programs.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/team-coaching/roster/`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ventrocycling.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Team Coaching",
      item: "https://www.ventrocycling.com/team-coaching/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Roster",
      item: "https://www.ventrocycling.com/team-coaching/roster/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </Layout>
  );
}
