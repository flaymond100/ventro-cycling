import Link from "next/link";
import { NAV_MENU } from "./navbar";

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

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ventro.cycling.coaching/",
    handle: "@ventro.cycling.coaching",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ventro.cycling.coaching",
    handle: "ventro.cycling.coaching",
  },
];

export function Footer() {
  return (
    <footer style={{ background: T.ink, borderTop: `1px solid ${T.hair}` }}>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Giant wordmark */}
        <div
          className="font-extrabold uppercase leading-none"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 8vw, 96px)",
            letterSpacing: "-0.035em",
            color: T.bone,
          }}
        >
          Ride
          <span style={{ color: T.lime }}>.</span>
          {" "}Measure
          <span style={{ color: T.lime }}>.</span>
          {" "}Repeat
          <span style={{ color: T.lime }}>.</span>
        </div>

        {/* Divider */}
        <div className="my-10" style={{ height: 1, background: T.hair }} />

        {/* 3-column grid: links, social, legal */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
            >
              Pages
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_MENU.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-mono uppercase text-[11px] tracking-[0.14em] transition-colors"
                    style={{ color: T.dim }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
            >
              Follow
            </p>
            <ul className="flex flex-col gap-2">
              {SOCIAL.map(({ label, href, handle }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to ${label}`}
                    className="font-mono uppercase text-[11px] tracking-[0.14em] transition-colors hover:text-ventro-bone"
                    style={{ color: T.dim }}
                  >
                    {label} — {handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="font-mono uppercase text-[11px] tracking-[0.14em] transition-colors"
                  style={{ color: T.dim }}
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6" style={{ borderTop: `1px solid ${T.hair}` }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
          >
            &copy; {CURRENT_YEAR} Ventro Cycling Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
