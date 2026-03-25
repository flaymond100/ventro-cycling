import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleGauge,
  Flame,
  HeartPulse,
  Mountain,
  Timer,
} from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/7sY6oGfGL5JN4Il0S76sw06";
const SUPPORT_EMAIL_PLACEHOLDER = "contact@nrc-team.com";

const markers = [
  { label: "VO2max", icon: HeartPulse },
  { label: "VLamax", icon: Flame },
  { label: "Anaerobic Threshold / MLSS", icon: Mountain },
  { label: "FatMax", icon: Activity },
  { label: "Fat and carbohydrate utilization", icon: CircleGauge },
  { label: "Individual training zones", icon: Timer },
];

const whoItsFor = [
  "Ambitious cyclists and triathletes",
  "Athletes preparing for races or key training blocks",
  "Riders who want accurate training zones",
  "Athletes who feel stuck despite consistent training",
  "Anyone who wants more than just FTP",
];

const whatYouNeed = [
  "Bike with reliable power meter or smart trainer",
  "Heart rate monitor",
  "Device that records the session and allows export of workout files",
  "Ability to perform a short structured protocol indoors or outdoors",
];

const included = [
  "Full INSCYD remote test protocol",
  "Step-by-step instructions before testing",
  "Review of submitted files",
  "Full metabolic analysis",
  "Personalized PDF report",
  "Individual training zones",
  "Practical recommendations on what to improve next",
];

const howItWorks = [
  {
    title: "Buy the test",
    text: "Complete payment through Stripe.",
  },
  {
    title: "Receive your instructions",
    text: "After payment, you receive an email with the test protocol, execution guidelines, file submission instructions, and a short intake form.",
  },
  {
    title: "Perform the test",
    text: "Complete the protocol using your own equipment, ideally when rested and in good conditions.",
  },
  {
    title: "Send your files",
    text: "Submit exported .fit workout file(s), date of birth, height, weight, and estimated body fat percentage (if known).",
  },
  {
    title: "Get your analysis",
    text: "We review your data and send your results PDF, training zones, key findings summary, and next-step recommendations.",
  },
];

const faq = [
  {
    question: "Is this accurate without going to a lab?",
    answer:
      "Yes. INSCYD is designed for remote and field-based testing when the protocol is followed correctly and the data quality is good.",
  },
  {
    question: "Do I need lactate testing equipment?",
    answer: "No, not for this service as presented here.",
  },
  {
    question: "How long does it take to get the results?",
    answer:
      "Results are delivered within 3-5 business days after all required files and athlete data have been received.",
  },
  {
    question: "Can I do the test indoors?",
    answer:
      "Yes. The protocol can be completed indoors on a smart trainer or outdoors with a power meter.",
  },
  {
    question: "Is this useful if I already know my FTP?",
    answer:
      "Yes. FTP is only one part of the picture. This test helps explain the physiology behind your performance and gives more precise guidance for training.",
  },
];

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="md:py-4">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1f2937] md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-base text-[#4b5563] md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
};

export default function InscydRemotePerformanceTestPage() {
  return (
    <main className="bg-[#f3f5f7] text-[#111827]">
      <section className="relative overflow-hidden border-b border-[#d9dee5]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80rem 30rem at 20% 0%, rgba(99,102,241,0.14), transparent 60%), radial-gradient(60rem 28rem at 100% 0%, rgba(56,189,248,0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6  pt-20 md:pb-24 md:pt-28">
         
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#0f172a] md:text-6xl">
            Train with precision, not guesswork.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#334155] md:text-xl">
            The INSCYD Remote Performance Test gives you a lab-level metabolic
            profile using your own bike, power meter, and training environment.
            Go beyond FTP and understand how your body produces energy across
            intensities so your training can match your physiology.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-8 py-4 text-base font-bold text-white shadow-lg shadow-slate-400/40 transition hover:-translate-y-0.5 hover:bg-[#1e293b] md:text-lg"
            >
              Buy the INSCYD Remote Performance Test <ArrowRight size={18} />
            </Link>
            {/* <Link
              href="#how-it-works"
              className="inline-flex items-center rounded-xl border border-[#b9c3d1] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-[#94a3b8]"
            >
              How it works
            </Link> */}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#d7dde6] bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-[#6b7280]">Price</p>
              <p className="mt-2 text-2xl font-semibold">€189</p>
            </div>
            <div className="rounded-2xl border border-[#d7dde6] bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-[#6b7280]">
                Delivery window
              </p>
              <p className="mt-2 text-2xl font-semibold">3-5 business days</p>
            </div>
            <div className="rounded-2xl border border-[#d7dde6] bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-[#6b7280]">Designed for</p>
              <p className="mt-2 text-2xl font-semibold">Cyclists + Triathletes</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="What this test shows"
        description="With one structured test protocol, you get key performance markers including:"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {markers.map((marker) => {
            const Icon = marker.icon;
            return (
              <div
                key={marker.label}
                className="rounded-2xl border border-[#d6dde7] bg-white p-5"
              >
                <Icon className="text-[#0f172a]" size={20} />
                <p className="mt-3 text-sm font-semibold text-[#111827]">{marker.label}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        title="Why this is different from an FTP test"
        description="An FTP test gives you one number."
      >
        <div className="rounded-2xl border border-[#d6dde7] bg-white p-6 md:p-8">
          <p className="max-w-4xl text-base leading-relaxed text-[#334155] md:text-lg">
            INSCYD helps explain why that number exists and what is limiting
            your performance. It shows whether your biggest opportunity is
            aerobic development, anaerobic power control, substrate efficiency,
            or better zone targeting. That makes it far more useful for
            athletes who want precise training decisions and better long-term
            progression.
          </p>
        </div>
      </Section>

      <Section title="Who it is for">
        <ul className="grid gap-3 md:grid-cols-2">
          {whoItsFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-[#d6dde7] bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span className="text-sm text-[#1f2937] md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What you need">
        <ul className="grid gap-3 md:grid-cols-2">
          {whatYouNeed.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-[#d6dde7] bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span className="text-sm text-[#1f2937] md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What is included">
        <ul className="grid gap-3 md:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-[#d6dde7] bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span className="text-sm text-[#1f2937] md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how-it-works" title="How it works">
        <ol className="relative border-l border-[#c2ccda] pl-6">
          {howItWorks.map((step, index) => (
            <li key={step.title} className="mb-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[#0f172a]" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#0f172a]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#334155] md:text-base">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="What you receive"
        description="Your report helps you understand:"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "where your current strengths lie",
            "what is limiting performance most",
            "how to adjust your training focus",
            "how to pace efforts more effectively",
            "how to structure future training zones with more confidence",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-[#d6dde7] bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span className="text-sm text-[#1f2937] md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Price">
        <div className="rounded-2xl border border-[#bfcada] bg-white p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">INSCYD Remote Performance Test</p>
          <p className="mt-2 text-5xl font-bold tracking-tight text-[#0f172a]">€189</p>
          <p className="mt-4 max-w-2xl text-base text-[#334155] md:text-lg">
            Lab-level metabolic insight without visiting a lab.
          </p>
          <Link
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
          >
            Pay with Stripe <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Section title="After payment and delivery workflow">
        <div className="rounded-2xl border border-[#d6dde7] bg-white p-6 md:p-8">
          <ul className="space-y-3 text-sm text-[#1f2937] md:text-base">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span>Immediate payment confirmation</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span>Automatic onboarding email</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span>Athlete submits files and body data</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span>Analysis is completed manually</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f172a]" size={18} />
              <span>
                Results are delivered by email within 3-5 business days after
                all required data is received
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-[#475569]">
            For questions or support, contact: {SUPPORT_EMAIL_PLACEHOLDER}
          </p>
        </div>
      </Section>

      <Section title="FAQ">
        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-[#d6dde7] bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-[#0f172a]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#334155] md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <section className="pb-16 pt-4 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-[#c3cddd] bg-[#0f172a] p-8 text-white">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Ready for physiology-based training decisions?
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#cbd5e1] md:text-lg">
              Stop relying on one number. Build your training around your real
              metabolic profile.
            </p>
            <Link
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-[#e2e8f0]"
            >
              Buy the INSCYD Remote Performance Test <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
