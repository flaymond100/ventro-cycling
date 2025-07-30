"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Prices() {
  return (
    <section
      className="pt-40 px-8 pb-20 md:pb-0  list-item bg-cover bg-center bg-no-repeat relative min-h-screen"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      <div className="relative z-20">
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
              className="font-normal text-xl max-w-3xl hidden md:block"
            >
              We are offering different types of training plans for cyclists of
              all levels. You can start with a completely free 4-Week FTP
              Builder Plan and make an upgrade to a paid plan when you're ready.
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
              distinct offers to choose from, each designed to meet your
              specific needs. Every option is fully personalized to help you
              unlock your potential and achieve your best performance.
            </motion.p>
            <br />
            <br />
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
    </section>
  );
}

export const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    // Add red background style
    const style = document.createElement("style");
    style.textContent = `
      .PricingTable {
        background-color: red !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID,
    "publishable-key": process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
};

const Stepper = () => {
  return (
    <ol
      style={{
        color: "#353744",
      }}
      className="md:flex items-center w-full space-y-8 md:space-y-0 md:space-x-8"
    >
      <motion.li
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 min-w-[280px] min-h-[120px] after:content-['']  after:w-0.5 after:h-full lg:after:h-0.5 lg:after:w-full lg:after:top-1/2 lg:after:left-full lg:after:-translate-y-1/2"
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">1</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col ">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Pick Your Plan & Sign Up
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                Choose the coaching package that fits your goals. Once you
                subscribe, you'll receive a{" "}
                <strong>personal questionnaire</strong> to help us understand
                your goals, experience, and preferences.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative flex-1 min-w-[280px] min-h-[120px] after:content-['']  after:w-0.5 after:h-full after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2 lg:after:h-0.5 lg:after:w-full lg:after:top-1/2 lg:after:left-full lg:after:-translate-y-1/2"
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">2</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Personal Kickoff Call
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                We’ll invite you to book a{" "}
                <strong>personal consultation</strong> with your coach. In this
                video call, we’ll review your training history, current level,
                goals, and lifestyle. This step ensures that your training plan
                is 100% aligned with your real life.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative flex-1 min-w-[280px] "
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm ">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">3</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col ">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Start Training
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                You'll receive your <strong>customized plan</strong> directly in
                your TrainingPeaks account. We update it regularly based on your
                package and performance data.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
    </ol>
  );
};

export default Prices;
