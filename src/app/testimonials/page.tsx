"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Faq from "../faq";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

const Testimonials = () => {
  return (
    <section
      className="pt-40 mb-10 md:pl-16 md:pr-16  bg-cover bg-center bg-no-repeat  items-center relative"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      {" "}
      <div className="container mx-auto px-4">
        <div className="px-8 container mx-auto text-center">
          <h1
            color="blue-gray"
            className="mb-4 leter-spacing-1 text-5xl font-bold"
          >
            Testimonials
          </h1>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <motion.figure
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 lg:border-r dark:border-gray-700 relative overflow-hidden"
            style={{
              backgroundImage:
                'url("https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2Fjohn.jpg?alt=media&token=c19d91ec-3ce2-4a59-8f01-d01e8225ec6e")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-65 z-10"></div>
            <div className="relative z-20">
              <blockquote className="mx-auto mb-8 max-w-2xl text-white">
                <p className="my-4 text-white">
                  I started training with Kosta about a year ago, and it’s been
                  a game changer. I didn’t have much cycling experience as I
                  hard just started training on Zwift, and wanted to get better
                  at Zwift racing. With Kosta training, my Zwift racing score
                  when from 145 to almost 300 in 6 months and was getting on the
                  podium in C division.
                </p>
                <p className="my-4 text-white">
                  From the moment I signed up, Kosta’s support has been next
                  level. Whether it’s training advice, nutrition tips, or bike
                  queries. My schedule is constantly changing with my regular
                  life commitments, which causes lots of scheduling changing,
                  Kosta always tailors my training no matter how many times I
                  need to move scheduled training around!
                </p>
                <p className="my-4 text-white">
                  My cycling journey has transformed, with my FTP increasing
                  from 160 to 255 watts. Kosta’s dedication to my progress,
                  weekly check-ins, and personalized plans have made a world of
                  difference. It’s been one of my best decisions, and I couldn’t
                  be happier with this incredible coaching experience. I would
                  highly recommend to anyone who is looking for a coach. He’s
                  the man!
                </p>
              </blockquote>
              <div className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 text-4xl font-medium text-white text-left">
                  <div>John</div>
                </div>
              </div>
            </div>
          </motion.figure>
          <motion.figure
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 dark:border-gray-700 relative overflow-hidden"
            style={{
              backgroundImage:
                'url("https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fventro-coaching%2Folly.jpeg?alt=media&token=b49589fd-d0d4-4f9d-b196-1258da30d361")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <blockquote className="mx-auto mb-8 max-w-2xl text-white">
                <p className="my-4 text-white">
                  Working with Kosta has been a game-changer for my cycling.
                  He’s incredibly knowledgeable, approachable, and always brings
                  positive energy to every session. His structured training
                  plans gave me the focus and consistency I needed—not only did
                  I increase my FTP, but I also achieved one of my biggest
                  goals: winning a Zwift Racing League race.
                </p>
                <p className="my-4 text-white">
                  Kosta guided me to become the best version of myself on the
                  bike. He delivered everything he promised and often went above
                  and beyond, always communicating clearly and supporting me
                  through every phase of training. I can’t recommend him highly
                  enough—if you’re serious about improving, Kosta is the coach
                  you want in your corner.
                </p>
              </blockquote>
              <div className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 text-4xl font-medium text-white text-left">
                  <div>Olly</div>
                </div>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
      <div
        style={{
          color: "#444759",
        }}
        className="flex flex-col items-center justify-center text-center"
      >
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-normal text-xl max-w-3xl hidden md:block mb-10"
        >
          We are offering different types of training plans for cyclists of all
          levels. You can start with a completely free 4-Week FTP Builder Plan
          and make an upgrade to a paid plan when you're ready.
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
          <div className="flex justify-center">
            <Link href="/free-4-week-ftp-builder-plan">
              <motion.button
                className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                See Plans <ArrowRight size={18} />
              </motion.button>{" "}
            </Link>
          </div>
        </motion.p>
      </div>
    </section>
  );
};
