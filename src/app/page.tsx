"use client";
// components
import { Footer } from "@/components";
import { JsonLd } from "@/components/json-ld";

// sections
import Home from "./home";
import Faq, { FAQS } from "./faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.title,
    acceptedAnswer: { "@type": "Answer", text: f.desc },
  })),
};

export default function Campaign() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Home />
      <Faq />
      <Footer />
    </>
  );
}
