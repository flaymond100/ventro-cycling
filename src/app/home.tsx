"use client";

import { Typography } from "@material-tailwind/react";

function Home() {
  return (
    <section className="pt-24 px-8 pb-20 md:pb-0 list-item bg-[url('/ben-guernsey.jpeg')] bg-cover bg-center bg-no-repeat relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/55 to-gray-900/50 mix-blend-multiply"></div>

      {/* Dotted grid overlay */}
      <div
        className="absolute inset-0 z-10"
        style={
          {
            "--dot-bg": "rgba(66 66 66 / 10%))",
            "--dot-color": "transparent",
            "--dot-size": "1px",
            "--dot-space": "22px",
            background: `
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color)
          `,
          } as React.CSSProperties
        }
      ></div>

      <div className="mx-auto grid min-h-[55vh] w-full grid-cols-1 place-items-start relative z-20">
        <Typography
          variant="h2"
          className="mt-9 text-left sm:w-full"
          color="white"
          // style={{ width: "60%" }}
        >
          Welcome to the home of cycling coaching.
        </Typography>
      </div>
    </section>
  );
}

export default Home;
