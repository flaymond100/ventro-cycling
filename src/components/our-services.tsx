"use client";

import React from "react";
import FeatureCard from "@/components/feature-card";
import {
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  UsersIcon,
  StarIcon,
  LightBulbIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: ClipboardDocumentListIcon,
    title: "Individual Training Plan",
    description:
      "Experience personalized training plans meticulously crafted to suit your unique goals and abilities. Our expert coaches design individualized programs for triathlon, running, swimming, cycling, and duathlon, tailored exclusively to your aspirations.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Goals Evaluation",
    description:
      "Unlock your potential through a thorough assessment of your goals. Our team works closely with you to understand your aspirations, ensuring that every step aligns with your desired achievements, whether it's a triathlon podium or personal fitness milestones.",
  },
  {
    icon: UsersIcon,
    title: "Constant Feedback",
    description:
      "Receive ongoing feedback throughout your training journey. Continuous evaluation and guidance help fine-tune your progress, ensuring that you stay on track and make necessary adjustments for optimal performance.",
  },
  {
    icon: StarIcon,
    title: "Nutrition Planning",
    description:
      "Elevate your performance with specialized nutrition planning. Our tailored approach ensures that your body receives the essential fuel it needs to thrive, supporting your training, recovery, and overall well-being.",
  },
  {
    icon: LightBulbIcon,
    title: "Mental Preparation",
    description:
      "Forge a resilient mindset through mental preparation techniques. Our team provides tools and strategies to enhance mental toughness, enabling you to overcome challenges and perform at your best, both in training and on race day.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Fully Online Process",
    description:
      "Engage in our services through a seamless, fully online process. Access your training plans, evaluations, nutrition guidance, and feedback conveniently from anywhere, allowing you to stay connected and committed to your fitness goals.",
  },
];

export function OurServices() {
  return (
    <section
      style={{
        background: "rgba(237 242 246)",
      }}
      className="px-8"
    >
      <div className="container mx-auto mb-16 text-center">
        <h2 color="blue-gray" className="mb-4 pt-16 text-4xl">
          How we will support you
        </h2>
        <h3 className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12">
          At Ventro Coaching, we help endurance athletes become faster,
          stronger, and more consistent in their training. Ventro Cycling
          Coaching is here to make sure you don’t just train — you improve.
        </h3>

        {/* VENTRO METHODOLOGY */}
        <div className="mx-auto mt-6 w-full px-4 text-left text-base text-gray-800 leading-relaxed lg:w-7/12">
          <p className="mb-4 text-lg">
            Our methodology is simple:{" "}
            <strong className="text-gray-900">
              scientific, efficient, and for every level
            </strong>{" "}
            — from complete beginners to ambitious age-groupers and pros.
          </p>
          <ul className="list-disc space-y-3 pl-6 text-gray-700">
            <li>
              <strong className="text-gray-900">Science-first training:</strong>{" "}
              We build your plan using power and heart rate data, structured
              periodisation, and proven endurance principles instead of
              guesswork and random workouts.
            </li>
            <li>
              <strong className="text-gray-900">No wasted hours:</strong> Every
              session has a clear purpose. We focus on the right mix of
              endurance, threshold, VO2, and recovery so you get maximum
              progress from the time you actually have.
            </li>
            <li>
              <strong className="text-gray-900">
                Individual, not generic:
              </strong>{" "}
              Your plan is tailored to your goals, history, and schedule —
              whether you are preparing for your first event or fighting for a
              podium.
            </li>
            <li>
              <strong className="text-gray-900">
                Progress for all levels:
              </strong>{" "}
              We scale structure and intensity to your current fitness, making
              the work challenging but realistic, and adjusting as you grow
              stronger.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
