"use client";

import { Navbar, Footer, Loader } from "@/components";
import emailjs from "@emailjs/browser";
import Faq from "../faq";
import React from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AboutMe } from "@/components/about-me";

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

// ── Validation ────────────────────────────────────────────────────────────
const contactValidationSchema = Yup.object().shape({
  companyName: Yup.string().nullable(),
  firstName: Yup.string().nullable(),
  lastName: Yup.string().nullable(),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  textarea: Yup.string().nullable().required("Please enter a message"),
});

// ── Shared input styles ────────────────────────────────────────────────────
const inputClass =
  "w-full px-4 py-3 bg-transparent text-sm outline-none transition placeholder:text-[rgba(244,244,242,0.3)]";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 font-mono text-[10px] tracking-widest uppercase" style={{ color: T.lime }}>{msg}</p>;
}

// ── Form ──────────────────────────────────────────────────────────────────
const FormSection = () => {
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
      companyName: "VENTRO CYCLING",
      firstName: null,
      lastName: null,
      textarea: null,
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
          () => {
            toast.error("Error happened, please try again!");
          }
        )
        .finally(() => setDisabled(false));
    },
    validationSchema: contactValidationSchema,
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
          ◎ Get in touch
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold uppercase mb-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Contact{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            us.
          </span>
        </h1>

        <p className="mb-10 text-base leading-relaxed" style={{ color: T.mist }}>
          Leave a request and we will contact you back shortly.
        </p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} noValidate>
          {/* Name row */}
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

          {/* Email */}
          <div className="mb-4">
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

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="textarea"
              className="block font-mono uppercase mb-2"
              style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
            >
              Message *
            </label>
            <textarea
              id="textarea"
              name="textarea"
              disabled={disabled}
              placeholder="Leave your message here"
              rows={6}
              value={formik.values.textarea ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputClass + " resize-none"}
              style={fieldStyle(formik.errors.textarea)}
            />
            <FieldError msg={formik.errors.textarea ?? undefined} />
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
                Send message
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <FormSection />
      <AboutMe />
      <Faq />
      <Footer />
    </>
  );
}
