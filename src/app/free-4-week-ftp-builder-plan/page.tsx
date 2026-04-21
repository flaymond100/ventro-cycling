"use client";

import { Navbar, Footer, Loader } from "@/components";
import Faq from "../faq";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Link from "next/link";

// ── Tokens ────────────────────────────────────────────────────────────────
const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

// ── Steps ─────────────────────────────────────────────────────────────────
const STEPS = [
  {
    code: "01",
    title: "Click "Plan Description"",
    body: "Review the full 4-Week FTP Builder plan on TrainingPeaks before you claim it.",
  },
  {
    code: "02",
    title: "Submit your email below",
    body: "Fill in your name and email. We'll send you your free plan access within 24 hours.",
  },
  {
    code: "03",
    title: "Start training",
    body: "Load the plan in TrainingPeaks and begin your first structured training block.",
  },
];

// ── Validation ────────────────────────────────────────────────────────────
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  textarea: Yup.string().nullable().required("Please enter a message"),
});

// ── Shared styles ─────────────────────────────────────────────────────────
const inputClass =
  "w-full px-4 py-3 bg-transparent text-sm outline-none transition placeholder:text-[rgba(244,244,242,0.3)]";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1 font-mono text-[10px] tracking-widest uppercase" style={{ color: T.lime }}>
      {msg}
    </p>
  );
}

// ── Motion ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const rise = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};

// ── Page ──────────────────────────────────────────────────────────────────
const Free4WeekPlan = () => {
  const [disabled, setDisabled] = React.useState(false);
  const formik = useFormik<{
    email: string;
    companyName: string | null;
    firstName: string | null;
    lastName: string | null;
    textarea: string | null;
  }>({
    initialValues: {
      email: "",
      companyName: "VENTRO CYCLING-FREE 4-Week PLAN",
      firstName: null,
      lastName: null,
      textarea: "I would like to receive the free 4-week FTP builder plan.",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      setDisabled(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          values,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          () => {
            toast.success(
              "You're all set! We'll email you within 24 hours, so keep an eye on your inbox.",
              { style: { color: "white", background: "#14181D" }, duration: 40000 }
            );
            resetForm();
          },
          () => toast.error("Error happened, please try again!")
        )
        .finally(() => setDisabled(false));
    },
    validationSchema,
  });

  const fieldStyle = (err?: string) => ({
    background: "transparent",
    color: T.bone,
    border: `1px solid ${err ? T.lime : T.hair}`,
    borderRadius: 0,
  });

  return (
    <section
      className="pt-32 px-6 pb-24 md:px-12"
      style={{ background: T.ink, color: T.bone }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ No commitment required
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Free 4-Week{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            FTP Builder.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-8 max-w-xl text-lg leading-relaxed"
          style={{ color: T.mist }}
        >
          We understand you might not be ready to commit to a paid plan yet.
          That's why we're offering a completely free 4-Week FTP Builder Plan
          to get you started.
        </motion.p>

        {/* External plan CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <Link
            target="_blank"
            href="https://www.trainingpeaks.com/training-plans/cycling/road-cycling/tp-533230/4-week-ftp-builder-flexible-block-zwift-compatible"
          >
            <button
              className="group inline-flex items-center gap-2 px-5 py-4 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
              Plan Description
              <ExternalLink size={16} />
            </button>
          </Link>
        </motion.div>

        {/* 3-step grid */}
        <div className="mb-16" style={{ borderTop: `1px solid ${T.hair}` }}>
          <p
            className="font-mono uppercase mt-8 mb-8"
            style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.dim }}
          >
            ◎ How to get your free plan
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ border: `1px solid ${T.hair}` }}
          >
            {STEPS.map(({ code, title, body }) => (
              <motion.div
                key={code}
                variants={rise}
                className="p-6 md:p-8"
                style={{ background: T.char, borderRight: `1px solid ${T.hair}` }}
              >
                <span
                  className="font-mono block mb-4"
                  style={{ fontSize: 11, letterSpacing: "0.14em", color: T.lime }}
                >
                  {code}
                </span>
                <h3 className="font-semibold mb-2 text-base" style={{ color: T.bone }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: T.mist }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Form */}
        <div className="max-w-2xl">
          <p
            className="font-mono uppercase mb-6"
            style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.dim }}
          >
            ◎ Claim your free plan
          </p>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-mono uppercase mb-2"
                  style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  disabled={disabled}
                  placeholder="First"
                  value={formik.values.firstName ?? ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                  style={fieldStyle()}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block font-mono uppercase mb-2"
                  style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  disabled={disabled}
                  placeholder="Last"
                  value={formik.values.lastName ?? ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                  style={fieldStyle()}
                />
              </div>
            </div>

            <div className="mb-8">
              <label
                htmlFor="email"
                className="block font-mono uppercase mb-2"
                style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                disabled={disabled}
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={inputClass}
                style={fieldStyle(formik.errors.email)}
              />
              <FieldError msg={formik.errors.email} />
            </div>

            <motion.button
              type="submit"
              disabled={disabled}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group inline-flex items-center gap-3 px-5 py-4 font-semibold text-sm disabled:opacity-60"
              style={{ background: disabled ? T.dim : T.lime, color: T.ink }}
            >
              {disabled ? (
                <Loader />
              ) : (
                <>
                  Get Free Plan
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Free4WeekPlan />
      <Faq />
      <Footer />
    </>
  );
}
