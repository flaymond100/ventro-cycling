"use client";

import React, { useEffect } from "react";

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

          <div className="flex flex-col items-center justify-center">
            {/* <p className="leter-spacing-1 text-xl max-w-3xl">
              There are 3 distinct plans to choose from, each designed to meet
              your specific needs. Every option is fully personalized to help you
              unlock your potential and achieve your best performance.
            </p>
            <br /> */}
            {/* <p className="leter-spacing-1 text-xl max-w-3xl">
              Sign up for a free 7-day trial, and we'll connect with you within
              24 hours for a personal chat to set up everything you need to
              start training.
            </p> */}
          </div>
        </div>
        <div>
          <StripePricingTable />
        </div>
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

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID,
    "publishable-key": process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
};

export default Prices;
