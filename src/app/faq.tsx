"use client";
import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const FAQS = [
  {
    title: "Are your training plans suitable for beginner cyclists?",
    desc: "Absolutely. Whether you're new to cycling or getting back into it, we create training plans that match your fitness level and goals. The focus is on gradual progression and sustainable performance gains.",
  },
  {
    title:
      "I want to race at a high level, can your coaching help me get there?",
    desc: "Definitely. We work with competitive cyclists targeting podiums, race wins, and category upgrades. You'll get structured periodisation, detailed data analysis, and racing-specific training blocks tailored to your peak events.",
  },
  {
    title: "How do you track performance progress for serious athletes?",
    desc: "We monitor key metrics like power curves, training load (CTL/ATL), fatigue management, and FTP. We use this data to fine-tune your workouts and ensure you're peaking at the right time without overtraining.",
  },
  {
    title: "How often are the training plans updated?",
    desc: "We update your plan on a weekly basis based on your progress, feedback, and data. This ensures the training remains effective, aligned with your goals, and adapts to changes in your performance or schedule.",
  },
  {
    title: "How long does it take to see improvements in cycling performance?",
    desc: "Many cyclists notice improvements in endurance, power, or speed within the first 3–4 Weeks. More significant results typically come after consistent training over 2–3 months.",
  },
  {
    title: "What makes your cycling coaching different?",
    desc: "We focus on data-driven and personalized coaching. Your plan is built around your power or heart rate zones, goals, available time, and event schedule. It's not a one-size-fits-all program.",
  },
  {
    title: "How do I know if I'm ready for a more advanced plan?",
    desc: "If you've been riding regularly and want to target specific performance metrics or race goals, you’re likely ready. Our coach can assess your data and tailor the plan to challenge you appropriately.",
  },
  {
    title: "Can I switch goals during the training period?",
    desc: "Yes. If your objectives change—like shifting focus from a gran fondo to criterium racing—we’ll adjust your plan accordingly. Flexibility is part of our coaching philosophy.",
  },
  {
    title: "What equipment do I need for your cycling plans?",
    desc: "At minimum, you'll need a road bike and a cycling computer. A power meter or heart rate monitor is highly recommended for more precise training and analysis. We can help you choose the right setup for your goals and budget.",
  },
  {
    title: "What if I miss a ride or need to change my schedule?",
    desc: "No problem. Life happens. Your coach will adjust your plan based on changes in availability or missed sessions, so you stay on track without unnecessary stress.",
  },
  {
    title: "Do I need a specific fitness level to start?",
    desc: "Not at all. We coach cyclists of all backgrounds—from complete beginners to seasoned racers. Your current level just helps us set a realistic starting point for building fitness effectively.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 color="blue-gray" className="mb-4 text-5xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              placeholder={""}
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader
                placeholder={""}
                className="text-left  hover:text-white focus:text-white"
                style={{
                  color: "#353744",
                }}
              >
                {title}
              </AccordionHeader>
              <AccordionBody>
                <p
                  className="font-normal text-xl"
                  style={{
                    color: "#444759",
                  }}
                >
                  {desc}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
