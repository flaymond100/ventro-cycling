"use client";
// components
import { Navbar, Footer } from "@/components";

// sections
import Faq from "../faq";
import React, { useState } from "react";
import CarouselFeatures from "../carousel-features";
import { StripePricingTable } from "../prices";
import { CalendlyWidget } from "@/components/widget";
import { motion } from "framer-motion";

export default function FTPCalculatorPage() {
  return (
    <>
      <Navbar />
      <FTPCalculator />
      <Footer />
    </>
  );
}

const FTPCalculator = () => {
  const [power, setPower] = useState("");
  const [weight, setWeight] = useState("");
  const [ftp, setFtp] = useState(null);
  const [wattsPerKg, setWattsPerKg] = useState(null);

  const handleCalculate = () => {
    const p = parseFloat(power);
    const w = parseFloat(weight);

    if (!isNaN(p) && p > 0 && !isNaN(w) && w > 0) {
      const calculatedFtp = p * 0.95;
      const calculatedWkg = calculatedFtp / w;

      setFtp(calculatedFtp.toFixed(1) as unknown as null);
      setWattsPerKg(calculatedWkg.toFixed(2) as unknown as null);
    } else {
      setFtp(null);
      setWattsPerKg(null);
    }
  };

  return (
    <section
      className="pt-40 mb-10  bg-cover bg-center bg-no-repeat  items-center relative"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      <div className="px-8 container mx-auto text-center">
        <h1
          color="blue-gray"
          className="mb-4 leter-spacing-1 text-5xl font-bold"
        >
          FTP Calculator
        </h1>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20 mb-18 relative items-start justify-start"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <div className=" px-8 container mx-auto text-center">
          <div className=" border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How to Perform the FTP Test
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              This protocol is designed to simulate race intensity and provide
              an accurate FTP estimate.
            </p>

            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                <strong>Warm-Up (15–20 min):</strong> Easy riding with a few
                1-minute high-cadence efforts.
              </li>
              <li>
                <strong>15-second sprint:</strong> Go all-out for 15 seconds.
                Spin easy for 3–5 minutes afterward.
              </li>
              <li>
                <strong>4-minute effort:</strong> All-out but evenly paced. This
                prepares your legs and simulates fatigue.
              </li>
              <li>
                <strong>Recovery (5–10 min):</strong> Ride very easy to bring
                heart rate down.
              </li>
              <li>
                <strong>20-minute test:</strong> Ride at your absolute best
                sustainable effort. Don't start too hard. Aim for even pacing.
              </li>
            </ol>

            <p className="mt-4 text-sm text-gray-600 italic">
              Take 95% of your 20-minute average power — that’s your estimated
              FTP.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            FTP & W/kg Calculator
          </h2>
          <p className="text-sm text-gray-500">
            Estimate your FTP and power-to-weight ratio based on a 20-minute
            test.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="power"
              >
                20-minute average power (W)
              </label>
              <input
                id="power"
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 300"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="weight"
              >
                Weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 70"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="mt-2 rounded-xl bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition"
            >
              Calculate
            </button>
          </div>

          {ftp && wattsPerKg && (
            <div className="mt-4 space-y-1 text-lg text-green-700 font-medium">
              <div>
                Your Estimated FTP: <span className="font-bold">{ftp} W</span>
              </div>
              <div>
                Power-to-weight:{" "}
                <span className="font-bold">{wattsPerKg} W/kg</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
