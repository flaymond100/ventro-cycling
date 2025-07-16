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
  const [power15s, setPower15s] = useState("");
  const [power4min, setPower4min] = useState("");
  const [power20min, setPower20min] = useState("");
  const [weight, setWeight] = useState("");

  const [ftp, setFtp] = useState(null);
  const [wkg, setWkg] = useState(null);
  const [category, setCategory] = useState("");

  const classifyRider = (ftpWkg: number, vo2Wkg: number, sprintWkg: number) => {
    if (ftpWkg >= 5.5 && vo2Wkg >= 7.5 && sprintWkg >= 17)
      return "UCI Pro Tour";
    if (ftpWkg >= 4.8 && vo2Wkg >= 6.5 && sprintWkg >= 14)
      return "Elite (Cat 1)";
    if (ftpWkg >= 4.0 && vo2Wkg >= 5.8 && sprintWkg >= 12)
      return "Amateur Racer (Cat 2)";
    if (ftpWkg >= 3.2 && vo2Wkg >= 5.0 && sprintWkg >= 10)
      return "Competitive Amateur (Cat 3)";
    if (ftpWkg >= 2.5 && vo2Wkg >= 4.2 && sprintWkg >= 8)
      return "Beginner Racer (Cat 4)";
    return "Novice (Cat 5)";
  };

  const handleCalculate = () => {
    const p15 = parseFloat(power15s);
    const p4 = parseFloat(power4min);
    const p20 = parseFloat(power20min);
    const w = parseFloat(weight);

    if (p15 > 0 && p4 > 0 && p20 > 0 && w > 0) {
      const ftpCalc = p20 * 0.95;
      const ftpWkg = ftpCalc / w;
      const vo2Wkg = p4 / w;
      const sprintWkg = p15 / w;

      const cat = classifyRider(ftpWkg, vo2Wkg, sprintWkg);

      setFtp(ftpCalc.toFixed(1) as unknown as null);
      setWkg(ftpWkg.toFixed(2) as unknown as null);
      setCategory(cat);
    } else {
      setFtp(null);
      setWkg(null);
      setCategory("");
    }
  };
  return (
    <section
      className="pt-40 mb-10 md:pl-16 md:pr-16  bg-cover bg-center bg-no-repeat  items-center relative"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      <div className="px-8 container mx-auto text-center">
        <h1
          color="blue-gray"
          className="mb-4 leter-spacing-1 text-5xl font-bold"
        >
          Cycling Power Profile & FTP Calculator
        </h1>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20 mb-18 relative items-start justify-start"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <div className="px-8 container mx-auto text-center">
          <div className="border-t pt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              🚴‍♂️ How to Perform the FTP Test
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              This protocol is designed to simulate race intensity and provide
              an accurate FTP estimate.
            </p>

            <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2 text-left">
              <li>
                <strong>🔥 Warm-Up (15–20 min):</strong> Easy riding with a few
                1-minute high-cadence efforts.
              </li>
              <li>
                <strong>⚡️ 15-second sprint:</strong> Go all-out for 15
                seconds. Spin easy for 3–5 minutes afterward.
              </li>
              <li>
                <strong>💥 4-minute effort:</strong> All-out but evenly paced.
                This prepares your legs and simulates fatigue.
              </li>
              <li>
                <strong>🧘 Recovery (15–20 min):</strong> Ride very easy to
                bring heart rate down.
              </li>
              <li>
                <strong>🧪 20-minute test:</strong> Ride at your absolute best
                sustainable effort. Don't start too hard. Aim for even pacing.
              </li>
            </ol>

            <p className="mt-4 text-sm text-gray-600 italic">
              ✅ Enter your values to our calculator to estimate FTP, W/kg, and
              get your rider classification.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            FTP Calculator
          </h2>
          <p className="text-sm text-gray-500">
            Enter your test values below to estimate FTP, W/kg, and get your
            rider classification.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                15s Power (W)
              </label>
              <input
                type="number"
                value={power15s}
                onChange={(e) => setPower15s(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2"
                placeholder="e.g. 1050"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                4min Power (W)
              </label>
              <input
                type="number"
                value={power4min}
                onChange={(e) => setPower4min(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2"
                placeholder="e.g. 450"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                20min Power (W)
              </label>
              <input
                type="number"
                value={power20min}
                onChange={(e) => setPower20min(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2"
                placeholder="e.g. 320"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 w-full rounded-lg border px-4 py-2"
                placeholder="e.g. 72"
              />
            </div>
          </div>
          <motion.button
            className="mt-10 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={handleCalculate}
          >
            Calculate
          </motion.button>{" "}
          {ftp && wkg && (
            <div className="mt-6 space-y-2 text-green-700 font-medium text-lg">
              <div>
                Estimated FTP: <span className="font-bold">{ftp} W</span>
              </div>
              <div>
                FTP per kg: <span className="font-bold">{wkg} W/kg</span>
              </div>
              <div>
                Ability Category:{" "}
                <span className="text-blue-800">{category}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
