import type { Metadata } from "next";
import { Footer } from "@/components";
import InscydRemotePerformanceTestPage from "@/components/inscyd-remote-performance-test-page";

export const metadata: Metadata = {
  title: "INSCYD Remote Performance Test for Cyclists | [BRAND]",
  description:
    "Get a remote INSCYD performance test for cyclists and triathletes. Go beyond FTP with lab-level metabolic insights, custom training zones, and actionable recommendations.",
  alternates: {
    canonical: "https://www.ventrocycling.com/inscyd-remote-performance-test",
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
