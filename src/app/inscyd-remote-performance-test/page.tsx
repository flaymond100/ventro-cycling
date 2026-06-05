import type { Metadata } from "next";
import { Footer } from "@/components";
import InscydRemotePerformanceTestPage from "@/components/inscyd-remote-performance-test-page";

export const metadata: Metadata = {
  title: "INSCYD Remote Performance Test for Cyclists",
  description:
    "Remote INSCYD performance test for cyclists and triathletes. Go beyond FTP with lab-level metabolic data, custom training zones and clear recommendations.",
  openGraph: {
    title: "INSCYD Remote Performance Test for Cyclists | Ventro Cycling",
    description:
      "Remote INSCYD performance test for cyclists and triathletes. Go beyond FTP with lab-level metabolic data, custom training zones and clear recommendations.",
  },
  alternates: {
    canonical: "https://www.ventrocycling.com/inscyd-remote-performance-test/",
  },
};

export default function InscydRemotePerformanceTestRoute() {
  return (
    <>
      <InscydRemotePerformanceTestPage />
      <Footer />
    </>
  );
}
