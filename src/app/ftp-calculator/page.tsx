"use client";
// components
import { Navbar, Footer } from "@/components";

// sections
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function FTPCalculatorPage() {
  return (
    <>
      <Navbar />
      <FTPCalculator />
      <Footer />
    </>
  );
}

interface FitnessLevel {
  name: string;
  description: string;
  weeklyRides?: string;
  weeklyDistance?: string;
  oneDayDistance?: string;
  averageSpeed?: string;
  zwiftCategory?: string;
}

const FITNESS_LEVELS: {
  male: { [key: string]: FitnessLevel };
  female: { [key: string]: FitnessLevel };
} = {
  male: {
    worldClass: {
      name: "World Class",
      description:
        "Cyclists at this level are the best of the best, with the potential to win the most prestigious races, including Grand Tours like the Tour de France and Classics. These athletes exhibit extraordinary physical and mental endurance, excelling in various terrains and race conditions.",
    },
    exceptional: {
      name: "Exceptional",
      description:
        "These cyclists are professional athletes often seen as domestiques in major races, supporting their team leaders in Grand Tours and Classics. They are also capable of winning Pro-continental races. The best Under 23 category cyclists also belong to this category.",
    },
    excellent: {
      name: "Excellent - A Grade / Cat 1",
      description:
        "A very competitive athlete who races Cat 1/2 on the road and can win your age group in a regional triathlon or large gran fondo. You're at the front of the pack during your weekly group rides and you thrive off of big days with tons of climbing.",
      weeklyRides: "5+",
      weeklyDistance: "260km+",
      oneDayDistance: "170km+",
      averageSpeed: "28–36 km/h",
    },
    veryGood: {
      name: "Very Good - B Grade / Cat 2",
      description:
        "These athletes are competitive amateurs who race in Cat 2/3 events and regularly podium in local triathlons or gran fondos. They ride with fast-paced groups and are adept at handling technical descents and climbs.",
      weeklyRides: "4",
      weeklyDistance: "200km",
      oneDayDistance: "150km",
      averageSpeed: "25–29 km/h",
      zwiftCategory: "A",
    },
    good: {
      name: "Good - C Grade / Cat 3",
      description:
        "Cyclists in this category are competitive at the amateur level, participating in Cat 2/3 races and performing well in local events. They often ride 3-4 times per week, focusing on building endurance and technical skills.",
      weeklyRides: "3-4",
      weeklyDistance: "180km",
      averageSpeed: "24–28 km/h",
      zwiftCategory: "B and A",
    },
    moderate: {
      name: "Moderate - D Grade / Cat 4",
      description:
        "Casual amateur athletes who participate in occasional bike races or triathlons. They enjoy long rides and exploring new destinations by bike. Typically riding 3 times per week, they balance their cycling with other activities.",
      weeklyRides: "3",
      weeklyDistance: "160km",
      oneDayDistance: "160km",
      averageSpeed: "23–27 km/h",
      zwiftCategory: "C",
    },
    fair: {
      name: "Fair",
      description:
        "These cyclists ride primarily for fitness and enjoyment, participating in social rides or local events without a competitive focus. They may ride 1-2 times per week and enjoy the social aspects of cycling as well as the health benefits it provides.",
      weeklyRides: "1",
      weeklyDistance: "35km",
      oneDayDistance: "70km",
      averageSpeed: "16–25 km/h",
      zwiftCategory: "D",
    },
    novice2: {
      name: "Novice 2",
      description:
        "Leisurely riders who enjoy sightseeing and are most comfortable on bike paths. They cycle mainly for pleasure and may use their bikes for commuting or short recreational rides.",
    },
    novice1: {
      name: "Novice 1",
      description:
        "Beginners who are new to cycling or ride occasionally. They might use a bike for short commutes or recreational purposes. These cyclists do not engage in structured training and are in the early stages of developing their cycling skills and fitness.",
    },
  },
  female: {
    worldClass: {
      name: "World Class",
      description:
        "Cyclists at this level are the best of the best, with the potential to win the most prestigious races, including Grand Tours and Classics. These athletes exhibit extraordinary physical and mental endurance, excelling in various terrains and race conditions.",
    },
    exceptional: {
      name: "Exceptional",
      description:
        "These cyclists are professional athletes often seen as domestiques in major races, supporting their team leaders in Grand Tours and Classics. They are also capable of winning Pro-continental races. The best Under 23 category cyclists also belong to this category.",
    },
    excellent: {
      name: "Excellent - A Grade / Cat 1",
      description:
        "A very competitive athlete who races Cat 1/2 on the road and can win your age group in a regional triathlon or large gran fondo. You're at the front of the pack during your weekly group rides and you thrive off of big days with tons of climbing.",
      weeklyRides: "5+",
      weeklyDistance: "260km+",
      oneDayDistance: "170km+",
      averageSpeed: "28–36 km/h",
    },
    veryGood: {
      name: "Very Good - B Grade / Cat 2",
      description:
        "These athletes are competitive amateurs who race in Cat 2/3 events and regularly podium in local triathlons or gran fondos. They ride with fast-paced groups and are adept at handling technical descents and climbs.",
      weeklyRides: "4",
      weeklyDistance: "200km",
      oneDayDistance: "150km",
      averageSpeed: "25–29 km/h",
      zwiftCategory: "A",
    },
    good: {
      name: "Good - C Grade / Cat 3",
      description:
        "Cyclists in this category are competitive at the amateur level, participating in Cat 2/3 races and performing well in local events. They often ride 3-4 times per week, focusing on building endurance and technical skills.",
      weeklyRides: "3-4",
      weeklyDistance: "180km",
      averageSpeed: "24–28 km/h",
      zwiftCategory: "B and A",
    },
    moderate: {
      name: "Moderate - D Grade / Cat 4",
      description:
        "Casual amateur athletes who participate in occasional bike races or triathlons. They enjoy long rides and exploring new destinations by bike. Typically riding 3 times per week, they balance their cycling with other activities.",
      weeklyRides: "3",
      weeklyDistance: "160km",
      oneDayDistance: "160km",
      averageSpeed: "23–27 km/h",
      zwiftCategory: "C",
    },
    fair: {
      name: "Fair",
      description:
        "These cyclists ride primarily for fitness and enjoyment, participating in social rides or local events without a competitive focus. They may ride 1-2 times per week and enjoy the social aspects of cycling as well as the health benefits it provides.",
      weeklyRides: "1",
      weeklyDistance: "35km",
      oneDayDistance: "70km",
      averageSpeed: "16–25 km/h",
      zwiftCategory: "D",
    },
    novice2: {
      name: "Novice 2",
      description:
        "Leisurely riders who enjoy sightseeing and are most comfortable on bike paths. They cycle mainly for pleasure and may use their bikes for commuting or short recreational rides.",
    },
    novice1: {
      name: "Novice 1",
      description:
        "Beginners who are new to cycling or ride occasionally. They might use a bike for short commutes or recreational purposes. These cyclists do not engage in structured training and are in the early stages of developing their cycling skills and fitness.",
    },
  },
};

const classifyRider = (
  wkg: number,
  gender: "male" | "female"
): { level: string; data: FitnessLevel } => {
  const thresholds = {
    male: {
      worldClass: 5.8,
      exceptional: 5.3,
      excellent: 4.7,
      veryGood: 4.1,
      good: 3.5,
      moderate: 2.9,
      fair: 2.3,
      novice2: 1.7,
      novice1: 1.3,
    },
    female: {
      worldClass: 5.1,
      exceptional: 4.6,
      excellent: 4.1,
      veryGood: 3.5,
      good: 3.0,
      moderate: 2.8,
      fair: 2.5,
      novice2: 1.9,
      novice1: 1.3,
    },
  };

  const t = thresholds[gender];
  const levels = FITNESS_LEVELS[gender];

  if (wkg >= t.worldClass) {
    return { level: "worldClass", data: levels.worldClass };
  }
  if (wkg >= t.exceptional) {
    return { level: "exceptional", data: levels.exceptional };
  }
  if (wkg >= t.excellent) {
    return { level: "excellent", data: levels.excellent };
  }
  if (wkg >= t.veryGood) {
    return { level: "veryGood", data: levels.veryGood };
  }
  if (wkg >= t.good) {
    return { level: "good", data: levels.good };
  }
  if (wkg >= t.moderate) {
    return { level: "moderate", data: levels.moderate };
  }
  if (wkg >= t.fair) {
    return { level: "fair", data: levels.fair };
  }
  if (wkg >= t.novice2) {
    return { level: "novice2", data: levels.novice2 };
  }
  return { level: "novice1", data: levels.novice1 };
};

const FTPCalculator = () => {
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [power20min, setPower20min] = useState("");
  const [weight, setWeight] = useState("");

  const [ftp, setFtp] = useState<number | null>(null);
  const [wkg, setWkg] = useState<number | null>(null);
  const [category, setCategory] = useState<{
    level: string;
    data: FitnessLevel;
  } | null>(null);

  const handleCalculate = () => {
    const p20 = parseFloat(power20min);
    const w = parseFloat(weight);

    if (p20 > 0 && w > 0 && gender) {
      // FTP is typically 95% of 20-minute power
      const ftpCalc = p20 * 0.95;
      const ftpWkg = ftpCalc / w;

      const cat = classifyRider(ftpWkg, gender);

      setFtp(ftpCalc);
      setWkg(ftpWkg);
      setCategory(cat);
    } else {
      setFtp(null);
      setWkg(null);
      setCategory(null);
    }
  };

  return (
    <section
      className="pt-40 mb-10 md:pl-16 md:pr-16 bg-cover bg-center bg-no-repeat items-center relative min-h-screen"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      <div className="px-8 container mx-auto text-center">
        <h1
          color="blue-gray"
          className="mb-4 leter-spacing-1 text-5xl font-bold"
          style={{
            color: "#353744",
          }}
        >
          Cycling Fitness & FTP Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Use this simple and free calculator to find out your cycling fitness
          by using your best 20min average power with your weight. Get estimated
          threshold power, and ultimately your cycling level with explanation.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-20 mb-18 relative items-start justify-center max-w-7xl mx-auto px-8"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Calculator Card */}
        <div className="max-w-md mx-auto lg:mx-0 bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              FTP Calculator
            </h2>
            <p className="text-sm text-gray-600">
              Enter your best 20-minute average power and weight to calculate
              your FTP and cycling fitness level.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your gender:
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition ${
                    gender === "male"
                      ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition ${
                    gender === "female"
                      ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg):
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                  placeholder="e.g. 70"
                  min="0"
                  step="0.1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  kg
                </span>
              </div>
              {weight && (
                <p className="mt-1 text-xs text-gray-500">Weight: {weight}kg</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Best 20 min Average Power (watts):
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={power20min}
                  onChange={(e) => setPower20min(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                  placeholder="e.g. 250"
                  min="0"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  W
                </span>
              </div>
              {power20min && (
                <p className="mt-1 text-xs text-gray-500">
                  Power: {power20min}W
                </p>
              )}
            </div>
          </div>

          <motion.button
            className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={handleCalculate}
            disabled={!gender || !weight || !power20min}
          >
            Calculate
          </motion.button>

          {ftp !== null && wkg !== null && category && (
            <>
              <motion.div
                className="mt-6 p-6 bg-gray-50 rounded-xl space-y-4 border-2 border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700 font-medium">
                      Estimated FTP:
                    </span>
                    <span className="font-bold text-2xl text-gray-900">
                      {ftp.toFixed(1)} W
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700 font-medium">
                      FTP per kg:
                    </span>
                    <span className="font-bold text-2xl text-gray-900">
                      {wkg.toFixed(2)} W/kg
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium block mb-2">
                      Cycling Fitness Level:
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      {category.data.name}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Free Plan CTA */}
              <motion.div
                className="mt-6 p-6 bg-white rounded-2xl shadow-lg border-2 border-yellow-400"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">
                    Take Your Training to the Next Level
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our free 4-week FTP builder plan is specifically designed to
                    help cyclists at your level improve their power and
                    endurance.
                  </p>
                  <Link href="/free-4-week-ftp-builder-plan">
                    <motion.button
                      className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Claim Your Free Plan
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Results and Explanation */}
        {category && (
          <div className="space-y-6">
            <motion.div
              className="max-w-md mx-auto lg:mx-0 bg-white rounded-2xl shadow-lg p-8 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cycling Fitness Level Explanation
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {category.data.name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {category.data.description}
                  </p>
                </div>
                {(category.data.weeklyRides ||
                  category.data.weeklyDistance ||
                  category.data.oneDayDistance ||
                  category.data.averageSpeed ||
                  category.data.zwiftCategory) && (
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    {category.data.weeklyRides && (
                      <p className="text-sm text-gray-600">
                        <strong>Typical number of weekly rides:</strong>{" "}
                        {category.data.weeklyRides}
                      </p>
                    )}
                    {category.data.weeklyDistance && (
                      <p className="text-sm text-gray-600">
                        <strong>Current average weekly distance:</strong>{" "}
                        {category.data.weeklyDistance}
                      </p>
                    )}
                    {category.data.oneDayDistance && (
                      <p className="text-sm text-gray-600">
                        <strong>
                          Distance you're capable of riding in one day:
                        </strong>{" "}
                        {category.data.oneDayDistance}
                      </p>
                    )}
                    {category.data.averageSpeed && (
                      <p className="text-sm text-gray-600">
                        <strong>Average speed on a typical ride:</strong>{" "}
                        {category.data.averageSpeed}
                      </p>
                    )}
                    {category.data.zwiftCategory && (
                      <p className="text-sm text-gray-600">
                        <strong>Zwift racing category:</strong>{" "}
                        {category.data.zwiftCategory}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Additional CTA for larger screens */}
            <motion.div
              className="max-w-md mx-auto lg:mx-0 p-6 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl shadow-xl border-2 border-yellow-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Ready to Improve Your FTP?
                  </h3>
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  You're at{" "}
                  <span className="font-bold">{category.data.name}</span> level
                  with{" "}
                  <span className="font-bold">
                    {wkg !== null ? `${wkg.toFixed(2)} W/kg` : ""}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Get our <strong>FREE 4-Week FTP Builder Plan</strong> designed
                  to help you increase your Functional Threshold Power and reach
                  the next fitness level.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Structured workouts</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>TrainingPeaks compatible</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>100% free - no credit card required</span>
                  </div>
                </div>
                <Link href="/free-4-week-ftp-builder-plan">
                  <motion.button
                    className="mt-4 w-full bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-lg text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Your Free 4-Week Plan
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <p className="text-xs text-gray-600 pt-2">
                  Join thousands of cyclists improving their FTP with our proven
                  training methods
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Instructions */}
        {!category && (
          <motion.div
            className="max-w-md mx-auto lg:mx-0 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="border-t pt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                🚴‍♂️ How to Perform the FTP Test
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                This protocol is designed to provide an accurate FTP estimate
                using your best 20-minute average power.
              </p>

              <ol className="list-decimal list-inside text-base text-gray-700 space-y-3 text-left leading-relaxed">
                <li>
                  <strong>🔥 Warm-Up (15–20 min):</strong> Easy riding with a
                  few 1-minute high-cadence efforts.
                </li>
                <li>
                  <strong>🧪 20-minute test:</strong> Ride at your absolute best
                  sustainable effort. Don't start too hard. Aim for even pacing.
                  Record your average power for the full 20 minutes.
                </li>
                <li>
                  <strong>🧘 Cool-Down (10–15 min):</strong> Ride very easy to
                  bring heart rate down and aid recovery.
                </li>
              </ol>

              <p className="mt-6 text-sm text-gray-600 italic bg-blue-50 p-4 rounded-lg">
                💡 <strong>Tip:</strong> Your FTP is typically 95% of your
                20-minute average power. Enter your best 20-minute average power
                in the calculator to get your estimated FTP and cycling fitness
                level.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
