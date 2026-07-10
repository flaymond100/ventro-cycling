// Central config for the coaching pricing tiers.
//
// Payment happens via Stripe Payment Links (no Stripe JS on the page). The link
// URLs are injected from the build environment so they are not hardcoded in JSX.
//
// TODO: Kosta — create NEW Stripe Price objects (€150 Core, €250 Performance),
// create one recurring Payment Link each with "Allow promotion codes" enabled
// (for NRC team discount codes), and set the URLs in .env:
//   NEXT_PUBLIC_STRIPE_LINK_CORE / NEXT_PUBLIC_STRIPE_LINK_PERFORMANCE
// Do NOT reuse or edit the old €120/€100/€300 price objects — existing
// subscribers stay on them until a separate, consented migration.

export const STRIPE_LINK_CORE = process.env.NEXT_PUBLIC_STRIPE_LINK_CORE ?? "";
export const STRIPE_LINK_PERFORMANCE =
  process.env.NEXT_PUBLIC_STRIPE_LINK_PERFORMANCE ?? "";

// Where the PRO tier button routes (application, NOT Stripe).
export const PRO_APPLICATION_PATH = "/pro-application/";

// Fallback used until a Payment Link is configured, so the CTA is never a dead
// link. Once the env vars are set, the Stripe checkout takes over.
export const PAYMENT_FALLBACK_PATH = "/contact/";
