"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

// ── Tokens ────────────────────────────────────────────────────────────────
const T = {
  ink: "#0B0D10",
  bone: "#F4F4F2",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

export const NAV_MENU = [
  { name: "Plans & Pricing", href: "/plans-and-pricing" },
  { name: "INSCYD Test", href: "/inscyd-remote-performance-test" },
  { name: "Free 4-Week Plan", href: "/free-4-week-ftp-builder-plan" },
  { name: "FTP Calculator", href: "/ftp-calculator" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

interface NavItemProps {
  name: string;
  href: string;
  active: boolean;
  onClick?: () => void;
}

function NavItem({ name, href, active, onClick }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="font-mono uppercase text-[11px] tracking-[0.14em] transition-colors"
        style={{ color: active ? T.lime : T.dim }}
      >
        {name}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const close = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: T.ink,
        borderColor: T.hair,
      }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/white-logo-narrow.png`}
            alt="Ventro Cycling Coaching"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem
              key={href}
              name={name}
              href={href}
              active={pathname === href}
            />
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/plans-and-pricing" className="hidden lg:block">
          <button
            className="group inline-flex items-center gap-2 px-5 py-3 font-semibold text-[13px]"
            style={{ background: T.lime, color: T.ink }}
          >
            See Plans
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center lg:hidden"
          style={{ color: T.bone }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t px-6 pb-6 pt-4 lg:hidden"
          style={{ background: T.ink, borderColor: T.hair }}
        >
          <ul className="flex flex-col gap-5">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem
                key={href}
                name={name}
                href={href}
                active={pathname === href}
                onClick={() => setOpen(false)}
              />
            ))}
          </ul>
          <Link href="/plans-and-pricing" onClick={() => setOpen(false)} className="mt-6 block">
            <button
              className="group inline-flex w-full items-center justify-center gap-2 px-5 py-4 font-semibold text-[13px]"
              style={{ background: T.lime, color: T.ink }}
            >
              See Plans
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
