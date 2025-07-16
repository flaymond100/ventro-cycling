import { Typography, Button, Input } from "@material-tailwind/react";
import { BsStrava, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { NAV_MENU } from "./navbar";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10  p-20">
      <div className="container max-w-full mx-auto">
        <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography as="a" href="/" variant="h4" className="mb-6">
              Ventro Coaching
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {NAV_MENU.map((data, idx) => (
                <li key={data.href}>
                  <Typography
                    as="a"
                    href={data.href}
                    className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {data.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center w-full sm:w-[24rem] sm:min-w-[24rem] md:text-left">
            <Typography variant="h6" color="blue-gray" className="mb-3 text-lg">
              Follow Us
            </Typography>
            <div className="flex flex-row justify-center md:justify-start gap-3">
              <Link
                aria-label="Go to instagram"
                target="_blank"
                href="https://www.instagram.com/ventro.cycling.coaching/"
              >
                <Button
                  placeholder={""}
                  aria-label="Go to instagram"
                  size="sm"
                  name="Instagram"
                >
                  <BsInstagram />
                </Button>
              </Link>

              <Link
                aria-label="Go to facebook"
                target="_blank"
                href="https://www.facebook.com/ventro.cycling.coaching"
              >
                <Button
                  placeholder={""}
                  aria-label="Go to facebook"
                  size="sm"
                  name="Facebook"
                >
                  <BsFacebook />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <p className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Ventro Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
