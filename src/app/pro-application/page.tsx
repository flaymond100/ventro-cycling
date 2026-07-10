"use client";

import { Navbar, Footer, Loader } from "@/components";
import React from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

const HOURS = ["<6", "6–9", "10–14", "15+"];
const YES_NO = ["Yes", "No"];

// ── Validation ────────────────────────────────────────────────────────────
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  goals: Yup.string().required("Please tell us your main goal event(s)"),
  whyPro: Yup.string().required("Please tell us why PRO"),
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

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono uppercase mb-2"
      style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
    >
      {children}
    </label>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
const ProApplication = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      goals: "",
      hours: "",
      powerMeter: "Yes", // yes-bias default; not required, never blocks submit
      ftp: "",
      whyPro: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setDisabled(true);
      const message = [
        "PRO COACHING APPLICATION",
        `Name: ${`${values.firstName} ${values.lastName}`.trim()}`,
        `Email: ${values.email}`,
        `Main goal event(s): ${values.goals}`,
        `Weekly training hours: ${values.hours || "—"}`,
        `Power meter / smart trainer: ${values.powerMeter || "—"}`,
        `Current FTP / recent test data: ${values.ftp || "—"}`,
        `Why PRO and not Performance: ${values.whyPro}`,
      ].join("\n");

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            companyName: "VENTRO CYCLING - PRO APPLICATION",
            textarea: message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          () => setSubmitted(true),
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
      <div className="mx-auto max-w-2xl">
        {/* Eyebrow */}
        <p
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
          ◎ By application only
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Apply for{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            PRO.
          </span>
        </h1>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-8"
            style={{ background: T.char, border: `1px solid ${T.lime}` }}
          >
            <Check size={28} style={{ color: T.lime }} />
            <p className="mt-4 text-lg leading-relaxed" style={{ color: T.bone }}>
              Application received. If there&apos;s an open PRO slot and we&apos;re a fit, Kosta will reply within 48 hours with next steps and pricing.
            </p>
          </motion.div>
        ) : (
          <>
            <p className="mb-3 text-base leading-relaxed" style={{ color: T.mist }}>
              PRO is full-season, engineered coaching for athletes whose season is worth building around. Tell us about you and we&apos;ll be in touch if it&apos;s a fit.
            </p>
            <p
              className="mb-10 font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.lime }}
            >
              Currently limited to 4 PRO athletes.
            </p>

            <form onSubmit={formik.handleSubmit} noValidate>
              {/* Name row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    disabled={disabled}
                    placeholder="First"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    className={inputClass}
                    style={fieldStyle(formik.errors.firstName)}
                  />
                  <FieldError msg={formik.errors.firstName} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    disabled={disabled}
                    placeholder="Last"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    className={inputClass}
                    style={fieldStyle()}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <Label htmlFor="email">Email *</Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  disabled={disabled}
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={inputClass}
                  style={fieldStyle(formik.errors.email)}
                />
                <FieldError msg={formik.errors.email} />
              </div>

              {/* Goals */}
              <div className="mb-4">
                <Label htmlFor="goals">Main goal event(s) for the season *</Label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  disabled={disabled}
                  placeholder="e.g. Ötztaler Radmarathon, national champs, Ironman 70.3…"
                  value={formik.values.goals}
                  onChange={formik.handleChange}
                  className={inputClass + " resize-none"}
                  style={fieldStyle(formik.errors.goals)}
                />
                <FieldError msg={formik.errors.goals} />
              </div>

              {/* Hours + power meter row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                <div>
                  <Label htmlFor="hours">Weekly training hours available</Label>
                  <select
                    id="hours"
                    name="hours"
                    disabled={disabled}
                    value={formik.values.hours}
                    onChange={formik.handleChange}
                    className={inputClass}
                    style={fieldStyle()}
                  >
                    <option value="" style={{ color: T.ink }}>
                      Select…
                    </option>
                    {HOURS.map((h) => (
                      <option key={h} value={h} style={{ color: T.ink }}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="powerMeter">Power meter / smart trainer?</Label>
                  <select
                    id="powerMeter"
                    name="powerMeter"
                    disabled={disabled}
                    value={formik.values.powerMeter}
                    onChange={formik.handleChange}
                    className={inputClass}
                    style={fieldStyle()}
                  >
                    {YES_NO.map((v) => (
                      <option key={v} value={v} style={{ color: T.ink }}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FTP */}
              <div className="mb-4">
                <Label htmlFor="ftp">Current FTP or recent test data (optional)</Label>
                <input
                  id="ftp"
                  name="ftp"
                  type="text"
                  disabled={disabled}
                  placeholder="e.g. 285W FTP, last tested Jan 2026"
                  value={formik.values.ftp}
                  onChange={formik.handleChange}
                  className={inputClass}
                  style={fieldStyle()}
                />
              </div>

              {/* Why PRO */}
              <div className="mb-8">
                <Label htmlFor="whyPro">Why PRO and not Performance? *</Label>
                <textarea
                  id="whyPro"
                  name="whyPro"
                  rows={4}
                  disabled={disabled}
                  placeholder="What makes this season worth engineering?"
                  value={formik.values.whyPro}
                  onChange={formik.handleChange}
                  className={inputClass + " resize-none"}
                  style={fieldStyle(formik.errors.whyPro)}
                />
                <FieldError msg={formik.errors.whyPro} />
              </div>

              {/* Submit */}
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
                    Submit application
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default function ProApplicationPage() {
  return (
    <>
      <Navbar />
      <ProApplication />
      <Footer />
    </>
  );
}
