import "../../globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Cycling Trainings",
  description: "Cycling training plans.",
  alternates: {
    canonical: `https://www.ventrocycling.com/trainings/cycling-trainings`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
