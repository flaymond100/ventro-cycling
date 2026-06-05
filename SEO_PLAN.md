# Ventro Cycling — SEO Audit & Optimization Plan

_Senior SEO audit of `www.ventrocycling.com` (Next.js 15 static export → GitHub Pages). Generated 2026-06-05._

---

## TL;DR — Why you're not visible, and the fix

**Good news:** the site is fundamentally indexable. It's static HTML pre-rendered at build time, `robots.txt` allows crawling, a sitemap exists, GA + Search Console verification are in place. Google *can* read it.

**The problem is two-fold:**

1. **A cluster of bugs is actively suppressing ranking.** Multiple pages declare a `rel=canonical` pointing to a URL that **doesn't exist** (`/contact-us`, `/cycling-team`, a doubled `/plans-and-pricing/plans-and-pricing`). A self-referencing canonical to a 404 tells Google "the real version of this page is somewhere that isn't here" — those pages may never rank. On top of that every page emits **two** canonical tags (a hardcoded homepage one + the per-page one), the sitemap points one entry at a **different domain** (`nrc-team.com`), and one page title literally contains the text **`[BRAND]`**.

2. **There's very little to rank for.** Titles are bare words ("About", "Contact Us"), there's no blog/topical content, E‑E‑A‑T signals are thin, and the site duplicates content across `/about` + `/about-us`. Beyond the brand name and a couple of lucky long-tails, there are few pages Google can match to real searches.

**You already have real assets to build on:** the `free-4-week-ftp-builder-plan` page reportedly ranks **#1** for its branded long-tail, the **INSCYD remote test** page targets a genuinely low-competition niche, and the **FTP calculator** is a traffic magnet in waiting. The strategy below is: **fix the bugs first (days), tighten on-page + structured data (weeks), then win the long-tail with content (months).**

> Reality check on head terms: "online cycling coach", "FTP calculator", "FTP training plan" are owned by TrainerRoad / TrainingPeaks / CTS / FasCat / Roadman Cycling — high domain authority you won't beat quickly. **Win the long-tail** (INSCYD, "gran fondo training plan beginner", "how much does a cycling coach cost", "free FTP plan pdf", "cycling coach for masters over 40") and treat head terms as a 12-month brand-building bet.

---

## Phase 0 — Critical bug fixes (this week — mostly 5-minute edits, highest ROI)

These are correctness bugs that cost you rankings right now. Almost all are trivial.

| # | Issue | File | Fix |
|---|-------|------|-----|
| 0.1 | **Canonical → non-existent `/contact-us`** | `src/app/contact/layout.tsx:10` | `https://www.ventrocycling.com/contact/` |
| 0.2 | **Canonical → non-existent `/cycling-team`** | `src/app/team-coaching/layout.tsx:10` | `.../team-coaching/` |
| 0.3 | **Canonical → non-existent `/cycling-team/roster`** | `src/app/team-coaching/roster/layout.tsx:10` | `.../team-coaching/roster/` |
| 0.4 | **Doubled canonical `/plans-and-pricing/plans-and-pricing`** | `src/app/plans-and-pricing/layout.tsx:10` | `.../plans-and-pricing/` |
| 0.5 | **Literal `[BRAND]` placeholder in live title** | `src/app/inscyd-remote-performance-test/page.tsx:6` | `INSCYD Remote Performance Test for Cyclists \| Ventro Cycling` |
| 0.6 | **Sitemap entry points to wrong domain** `nrc-team.com` | `public/sitemap.xml:32` | `https://www.ventrocycling.com/inscyd-remote-performance-test/` |
| 0.7 | **Duplicate `<head>` canonical** (homepage hardcoded on every page) | `src/app/layout.tsx:78` | Delete the hardcoded `<link rel="canonical">`; let the Metadata API handle it per-route |
| 0.8 | **Duplicate `<title>`/`<meta description>` + deprecated `keywords`** | `src/app/layout.tsx:101-116` | Delete the manual `<meta property="title">`, `<meta name="description">`, `<meta name="keywords">` — the `metadata` export already emits them |
| 0.9 | **Broken internal links → 404** (`/personal-coaching`, `/trainings/*` don't exist) | `src/app/our-programs.tsx:121,179` | Repoint to `/plans-and-pricing` and `/contact`, or build the pages (see Phase 3) |
| 0.10 | **Duplicate content: `/about` re-exports `/about-us`** | `src/app/about/page.tsx` | Delete `/about`, repoint the homepage "Meet the coach" link (`home.tsx:160`) to `/about-us`. (Note: static export can't do server redirects, so deletion + relink is cleanest.) |
| 0.11 | **Sitemap missing real pages** (`/about-us`, `/team-coaching`, `/team-coaching/roster`) + no trailing slashes (rest of site uses them) | `public/sitemap.xml` | Add the missing URLs **with** trailing slashes; make every URL trailing-slash to match `trailingSlash: true` |
| 0.12 | **`@context: "http://schema.org"`** + invalid props (`coach`, `keywords`) | `src/app/layout.tsx:51-68` | `https://schema.org`; drop `coach`/`keywords`; rename `founder`→`founders` (and add a Person node, see Phase 2) |
| 0.13 | **NAP / social handle inconsistency** — schema says `instagram.com/ventrocoaching` + `kostiantyn.garbar@gmail.com`; footer says `instagram.com/ventro.cycling.coaching` + a Facebook page | `src/app/layout.tsx:55,67` & `src/components/footer.tsx:17-28` | Pick **one** canonical handle + one public business email; make them byte-for-byte identical everywhere |
| 0.14 | **Missing `safari-pinned-tab.svg`** (404) + empty `name`/`short_name` in manifest | `src/app/layout.tsx:98`, `public/site.webmanifest` | Add the file or remove the `<link rel="mask-icon">`; fill in manifest name |
| 0.15 | **Inconsistent contact email** (`info@nrc-team.com` vs `contact@ventrocycling.com`) | `src/app/terms-and-conditions/page.tsx:29,49,88` | Standardize on `contact@ventrocycling.com` |
| 0.16 | **No custom-domain `CNAME`** in repo (GitHub Pages can drop the domain on deploy) | `public/CNAME` | Add a `CNAME` file containing `www.ventrocycling.com` (verify www-vs-apex redirect in DNS) |

**Verification after deploy:** run each page through Google's [Rich Results Test](https://search.google.com/test/rich-results) and URL Inspection in Search Console; resubmit the sitemap.

---

## Phase 1 — On-page metadata (week 1–2)

Every subpage title is a bare word with no brand or keyword. Fix the pattern globally, then per page.

- **Add a title template** in `src/app/layout.tsx` metadata: `title: { default: "...", template: "%s | Ventro Cycling Coaching" }`. Then each page's short title auto-gets the brand suffix.
- **Rewrite titles to 50–60 chars** and **descriptions to 150–160 chars**, unique per page, leading with the target keyword + a trust hook:

| Route | Current title | Suggested title |
|-------|---------------|-----------------|
| `/` | Ventro Cycling Coaching \| Personal Online Cycling Coach & Training Plans (72) | Personal Online & Remote Cycling Coaching \| Ventro |
| `/about-us` | About (5) | About Ventro \| Meet Coach Kostiantyn Garbar |
| `/plans-and-pricing` | Plans and Pricing (18) | Cycling Coaching Plans & Pricing \| Ventro |
| `/testimonials` | Testimonials (12) | Cyclist Reviews & FTP Gains \| Ventro Testimonials |
| `/contact` | Contact Us (20) | Contact Ventro Cycling Coaching \| Start Today |
| `/ftp-calculator` | FTP Calculator (13) | FTP Calculator — Cycling Power & W/kg \| Ventro |
| `/team-coaching` | Cycling Team (12) | Team Cycling Coaching Programs \| Ventro |

- **Homepage meta description** is 266 chars (Google cuts at ~155) — trim and front-load the value prop.
- **Fix H1s**: several pages use the brand name or a mismatched H1 as the `<h1>` (e.g. about-us H1 = "Ventro Cycling Coaching", team-coaching title says "Cycling Team" but H1 says "Team consultation"). One descriptive, keyword-bearing H1 per page; align it with the title.
- **Add per-route OpenGraph/Twitter** overrides so social shares aren't all the homepage card. Add a `twitter` card block (currently none).

---

## Phase 2 — Structured data / rich results (week 2–3)

JSON-LD is cheap and unlocks rich SERP features. Build a small set of reusable schema components.

1. **Organization + Person** (sitewide, in `layout.tsx`): fix the `SportsOrganization`/`ProfessionalService` org node (stable `@id`, `address`/`areaServed`, full `sameAs`), and add a **Person** node for Kostiantyn Garbar (`jobTitle`, `image`, `hasCredential`, `sameAs`) — critical E‑E‑A‑T for a YMYL-adjacent fitness niche.
2. **FAQPage** on the FAQ block (`src/app/faq.tsx`, 11 Q&As) — eligible for FAQ rich results / "People Also Ask".
3. **Service + Offer** on `/plans-and-pricing` (one Offer per Stripe tier) — pricing/service SERP eligibility.
4. **Review + AggregateRating** on `/testimonials` (the 4 named athletes) — star ratings in SERPs. **Use only genuine ratings** — fabricated review markup gets penalized.
5. **WebApplication / SoftwareApplication** on `/ftp-calculator` (free tool, `price: 0`).
6. **BreadcrumbList** on nested routes (`/team-coaching/roster`).
7. **Product** (`price: 0`) on `/free-4-week-ftp-builder-plan`.
8. **WebSite + SearchAction** (only if/when you add site search).

---

## Phase 3 — Content & keyword strategy (the actual growth engine, month 1–3+)

This is where new traffic comes from. Target **winnable long-tail**, build topic clusters, funnel to the money pages.

### Quick wins on existing pages
- **Defend the `free-4-week-ftp-builder-plan`** (already #1 for its long-tail): add "PDF/download" language + an FAQ to capture "free FTP training plan pdf" and "4 week FTP builder"; make the email-capture CTA prominent.
- **Expand the FTP calculator** into best-in-class depth: power-zone table (all 7 Coggan zones), W/kg category chart (male/female, Cat 1–4, Zwift A–D), multiple protocols (20-min/8-min/ramp), "what is a good FTP" benchmarks, FAQ. Wins "watts per kg calculator", "FTP to Zwift category", "what is a good FTP" — all low/medium difficulty.
- **Expand the INSCYD page** (low competition, you have a head start): target "INSCYD test cost", "remote FTP test without lab", "VO2max VLamax metabolic profiling". Add a conversion CTA to `/plans-and-pricing` (it's currently a dead end).

### New pages to build (priority order by winnability)
1. `/cycling-coaching-cost` — "how much does a cycling coach cost", "is a cycling coach worth it" (**low difficulty, high intent**, pre-qualifies leads → pricing).
2. `/gran-fondo-training-plan` — stated specialty, no page yet; target "gran fondo training plan beginner".
3. `/time-trial-training-plan` — stated specialty; "how to train for a time trial".
4. `/triathlon-cycling-training-plan` — defensible niche ("triathlon bike leg training plan").
5. `/blog/how-to-increase-ftp` — top-of-funnel pillar, internally links the FTP cluster.
6. `/zwift-training-plan` — concentrated, data-literate buyers.
7. **Calculator suite** under `/tools/` (power-to-weight, power-zones, ramp/MAP, climb/VAM, event pacing) — these are natural backlink/share magnets.

### Topical clusters & internal linking
- **FTP cluster:** how-to-increase-ftp ⇄ ftp-calculator ⇄ free-4-week-ftp-builder-plan.
- **Coaching hub:** home → discipline plan pages (gran fondo / TT / triathlon / Zwift / endurance) → plans-and-pricing.
- Add 3–5 contextual in-body links per long-form page (currently links live only in nav/footer/CTAs).
- **Surface orphaned pages** — add **Team Coaching** and **About** to the navbar/footer (`src/components/navbar.tsx:18`).
- **Enrich anchor text** — replace generic "See Plans" with "View Coaching Packages" / "Cycling Coaching Plans".

### Content quality / E‑E‑A‑T
- Homepage is thin (~220 words) — add a "Why Ventro" + "How it works" section (aim 600+ words).
- **Add real credentials** to coach bios (certifications: USA/British Cycling level, INSCYD, TrainingPeaks; education; palmarès; "48 athletes / 312 podiums" as a verifiable results page). Fix the typo "over a 8 years".
- De-duplicate the boilerplate "About Me" paragraph repeated across `/about-us`, `/contact`, `/testimonials`.

---

## Phase 4 — Performance / Core Web Vitals (week 3–4, ranking factor)

- **Hero image is 4.9 MB** (`public/ben-guernsey.jpeg`, loaded as a CSS background in `home.tsx:103`) — the single biggest LCP problem. Compress to WebP (<400 KB), serve responsive sizes, use `<Image priority>` or a preloaded `<img>`.
- **Compress oversized assets**: `cycling_2.webp` (992 KB), `tri_1.webp` (836 KB), `Background.png` (596 KB), `NRC-Team-Jersey.png` (517 KB), etc. Delete the duplicate/space-named `tri_1 .webp`.
- **Reduce client JS**: nearly every page is `"use client"`, shipping framer-motion + material-tailwind + formik + firebase to the browser. Split client boundaries to interactive subtrees only; drop `@material-tailwind/react` if it's only used for a ThemeProvider; `next/dynamic` the Calendly widget and Stripe table.
- **Fix CLS**: image `width`/`height` don't match rendered CSS sizes (`trainers.tsx`, `about-me.tsx`) — set `aspect-ratio` / correct dims, add `loading="lazy"` to below-fold images.
- **Load the Calendly script** via `next/script strategy="lazyOnload"` instead of a synchronous `useEffect` inject (`src/components/widget.tsx`).
- Target a green PageSpeed Insights score on mobile; LCP < 2.5s, CLS < 0.1.

---

## Phase 5 — Off-page, local & authority (ongoing)

- **Google Business Profile** as a **Service-Area Business** with a **hidden address** (online-only must not show a storefront). Category = cycling/sports coaching; service area = coach's real region. Post weekly, respond to reviews within ~24h.
- **Cycling-specific citations**: TrainingPeaks Coach Finder, USA/British Cycling coaching directories, INSCYD coach directory (passes niche authority + referrals), Final Surge, Fast Talk Labs.
- **Reviews**: policy-compliant generation (ask all clients at a milestone, no incentives, no scripted keywords) with a Google review short-link; mirror on TrainingPeaks/Trustpilot.
- **Backlinks/PR**: guest on endurance podcasts (Fast Talk, Empirical Cycling), pitch data-driven studies ("FTP benchmarks from our athlete data", INSCYD findings) to Cyclingnews/BikeRadar/GCN, earn athlete-feature links from clubs and event organizers.
- **Social/sameAs**: cross-link Instagram, Facebook, a Ventro **Strava Club**, TrainingPeaks — all pointing to the canonical URL, all listed in schema `sameAs`.
- **YMYL trust**: add a scope-of-practice / "consult your physician" disclaimer sitewide.

---

## Measurement & cadence

- **Google Search Console**: confirm verification, submit the corrected sitemap, monitor Coverage/Indexing + the canonical/duplicate reports, watch for "Crawled – not indexed".
- **GA4** is already wired (`G-67KZ597BE4`).
- Track the long-tail money terms monthly (INSCYD test, gran fondo beginner, coaching cost, free FTP plan). Pages with **impressions but no clicks** → improve title/meta first.
- Treat head terms as a 12-month bet; treat long-tail + INSCYD + tools as the near-term KPI.

---

## Suggested sequence

```
Week 1     Phase 0 (all critical bugs) + GSC sitemap resubmit
Week 1–2   Phase 1 (titles/descriptions/H1s, title template)
Week 2–3   Phase 2 (schema: Org/Person, FAQ, Service, Review)
Week 3–4   Phase 4 (hero image + CWV) ‖ start Phase 3 quick wins
Month 1–3  Phase 3 new pages + clusters; Phase 5 GBP/citations/reviews
Ongoing    Content cadence, link building, GSC monitoring
```
