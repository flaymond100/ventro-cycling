import "../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Team Cycling Coaching Programs",
  description:
    "Team cycling coaching for clubs and competitive squads. Custom race strategy, group training plans and data-driven feedback from Ventro Cycling Coaching.",
  openGraph: {
    title: "Team Cycling Coaching Programs | Ventro Cycling",
    description:
      "Team cycling coaching for clubs and competitive squads. Custom race strategy, group training plans and data-driven feedback from Ventro Cycling Coaching.",
  },
  alternates: {
    canonical: `https://www.ventrocycling.com/team-coaching/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
