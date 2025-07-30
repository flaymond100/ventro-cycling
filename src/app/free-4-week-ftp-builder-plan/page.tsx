"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Faq from "../faq";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Loader } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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

const contactValidationSchema = Yup.object().shape({
  companyName: Yup.string().nullable(),
  firstName: Yup.string().nullable(),
  lastName: Yup.string().nullable(),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  textarea: Yup.string().nullable().required("Please enter a message"),
});

const Free4WeekPlan = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [_, setFormSubmitted] = React.useState(false);
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
              {
                style: { color: "white", background: "green" },
                duration: 40000,
              }
            );
            // router.back();
            setFormSubmitted(true);
            resetForm();
          },
          (error: { text: any }) => {
            toast.error("Error happened, please try again!");
            console.log(error.text);
          }
        )
        .finally(() => {
          setDisabled(false);
        });
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <section
      className="pt-40 px-8 pb-20 md:pb-0  list-item bg-cover bg-center bg-no-repeat relative min-h-screen"
      style={{
        backgroundColor: "#f2f3f4",
      }}
    >
      <div className="relative z-20">
        <div className="grid grid-cols-1 md:ml-16 pl-6 md:pl-12 gap-2 z-20 mb-18 relative  justify-between">
          <h1
            color="blue-gray"
            className="mb-4 leter-spacing-1 text-5xl font-bold text-center"
            style={{
              color: "#353744",
            }}
          >
            Free 4-Week FTP Builder Plan
          </h1>
          <div>
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-normal text-xl hidden md:block text-center mb-10"
            >
              <p>
                We understand that you might not be ready to commit to a paid
                plan yet. That's why we're offering a completely free{" "}
                <strong>4-Week FTP Builder Plan</strong> to get you started.
              </p>
              <div className="flex justify-center">
                <Link
                  target="_blank"
                  href="https://www.trainingpeaks.com/training-plans/cycling/road-cycling/tp-533230/4-week-ftp-builder-flexible-block-zwift-compatible"
                >
                  <motion.button
                    className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Plan Description <ExternalLink size={18} />
                  </motion.button>{" "}
                </Link>
              </div>
            </motion.p>
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-normal text-xl hidden md:block text-center mb-10"
            >
              Here are the steps how to get your free plan:
            </motion.p>
            <Stepper />
            <div>
              <div className="pb-8 mt-10 flex justify-center items-center">
                <form
                  onSubmit={formik.handleSubmit}
                  className="min-w-[200px] md:min-w-[700px]"
                >
                  <div className="flex justify-between ">
                    <div className="mb-8 w-4/5 mr-10">
                      <label
                        className="block text-lg font-bold mb-2"
                        htmlFor="text"
                      >
                        First Name
                      </label>
                      <input
                        className={`shadow min-h-14 appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline`}
                        id="firstName"
                        type="text"
                        disabled={disabled}
                        name="firstName"
                        placeholder="First Name"
                        value={formik.values.firstName ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div className="mb-6 w-4/5">
                      <label
                        className="block   text-lg font-bold mb-2"
                        htmlFor="text"
                      >
                        Last Name
                      </label>
                      <input
                        className={`shadow min-h-14 appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline`}
                        id="lastName"
                        type="text"
                        disabled={disabled}
                        name="lastName"
                        placeholder="Last Name"
                        value={formik.values.lastName ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label
                      className="block text-lg font-bold mb-2"
                      htmlFor="email"
                    >
                      Email*
                    </label>
                    <input
                      className={`shadow appearance-none border ${
                        formik.errors.email && "border-red-500"
                      } rounded w-full py-2 px-3   min-h-14  leading-tight focus:outline-none focus:shadow-outline`}
                      id="username"
                      type="email"
                      disabled={disabled}
                      name="email"
                      placeholder="Your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-end mt-8">
                    <motion.button
                      className={` ${
                        disabled
                          ? "bg-gray-500"
                          : "bg-yellow-400 hover:bg-yellow-300"
                      } text-black px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 shadow-lg max-w-sm`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      type="submit"
                      value="Submit"
                      disabled={disabled}
                    >
                      {disabled ? (
                        <Loader />
                      ) : (
                        <>
                          Submit <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stepper = () => {
  return (
    <ol
      style={{
        color: "#353744",
      }}
      className="md:flex items-center w-full"
    >
      <motion.li
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 min-w-[280px] min-h-[120px] after:content-['']  after:w-0.5 after:h-full lg:after:h-0.5 lg:after:w-full lg:after:top-1/2 lg:after:left-full lg:after:-translate-y-1/2"
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">1</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col ">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Enter Your Name & Email
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                Enter your name and email to get your free 4-Week FTP Builder
                Plan.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative flex-1 min-w-[280px] min-h-[120px] after:content-['']  after:w-0.5 after:h-full after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2 lg:after:h-0.5 lg:after:w-full lg:after:top-1/2 lg:after:left-full lg:after:-translate-y-1/2"
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">2</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Recieve Access to TrainingPeaks
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                We'll send you a confirmation email with a link to our
                TrainingPeaks. In case you don't receive it, please check your
                spam folder.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative flex-1 min-w-[280px] "
      >
        <div className="flex text-left items-center justify-center gap-8 w-full max-w-sm ">
          <div className="flex min-h-[140px] items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
            <div className="rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 p-3">3</span>
            </div>
            <div className=" flex items-start rounded-md justify-center flex-col ">
              <h6 className="text-base font-semibold text-black mb-0.5">
                Start Training
              </h6>
              <p
                style={{
                  color: "#353744",
                }}
                className="text-xs font-normal"
              >
                Once you confirm your email, we will share with you a 4-Week FTP
                Builder Plan. You can start training immediately and this plan
                will stay with you forever.
              </p>
            </div>
          </div>
        </div>
      </motion.li>
    </ol>
  );
};
