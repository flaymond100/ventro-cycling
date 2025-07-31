"use client";
// components
import { Footer } from "@/components";

// sections
import Home from "./home";
import Faq from "./faq";
import OurServices from "@/components/our-services";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Stepper, StripePricingTable } from "./prices";

export default function Campaign() {
  return (
    <>
      <Home />
      <OurServices />
      <Plans />
      <Faq />
      <Footer />
    </>
  );
}

const Plans = () => {
  return (
    <div className="relative z-20 mt-10">
      <div className="container mx-auto mb-0 sm:mb-10 text-center">
        <h1
          color="blue-gray"
          className="mb-4 leter-spacing-1 text-5xl font-bold"
          style={{
            color: "#353744",
          }}
        >
          Our Plans and Pricing
        </h1>
        <div
          style={{
            color: "#444759",
          }}
          className="flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-normal text-xl max-w-3xl hidden md:block mb-10"
          >
            We are offering different types of training plans for cyclists of
            all levels. You can start with a completely free 4-Week FTP Builder
            Plan and make an upgrade to a paid plan when you're ready.
            <div className="flex justify-center">
              <Link href="/free-4-week-ftp-builder-plan">
                <motion.button
                  className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Get Free 4-Week Plan <ExternalLink size={18} />
                </motion.button>{" "}
              </Link>
            </div>
            <br />
            If you are ready to jump directly into 1:1 coaching, we have 3
            distinct offers to choose from, each designed to meet your specific
            needs. Every option is fully personalized to help you unlock your
            potential and achieve your best performance.
          </motion.p>
          <Stepper />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <StripePricingTable />
      </motion.div>
    </div>
  );
};
