"use client";
// components
import { Footer, Navbar } from "@/components";

// sections
import Faq from "../faq";
import { CalendlyWidget } from "@/components/widget";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <CalendlyWidget />
      <Faq />
      <Footer />
    </>
  );
}
