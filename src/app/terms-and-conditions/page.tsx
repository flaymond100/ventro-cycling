import { Navbar, Footer } from "@/components";
import Faq from "../faq";

const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

const TERMS = [
  {
    title: "1. Service Description and Packages",
    body: "We offer online training plans for triathlon, cycling, running, and swimming. We provide three packages: Lite Package (EUR 100), Premium Package (EUR 150), and Deluxe Package (EUR 300).",
  },
  {
    title: "2. Free Trial Period",
    body: "Your first 7 days of training are provided for free to allow you to evaluate our services. After the free trial period, you must pay for the selected package via bank transfer.",
  },
  {
    title: "3. Payment",
    body: "Payment for the selected package must be made via bank transfer. Payment details will be provided upon completion of your free trial period.",
  },
  {
    title: "4. Termination of Contract",
    body: "You may terminate your contract with us at any time by providing one month notice. Termination requests should be sent to info@nrc-team.com.",
  },
  {
    title: "5. Health and Responsibility",
    body: "By using our training plans you acknowledge that you should be in good health and consult a medical professional before starting any program. Our training plans are advisory only and are not a substitute for medical diagnosis, advice, or treatment. You are solely responsible for your own health, well-being, and safety during training.",
  },
  {
    title: "6. Data Privacy",
    body: "We take your privacy seriously. Please review our privacy terms below to understand how we collect, use, and protect your personal information.",
  },
  {
    title: "7. Intellectual Property",
    body: "All content provided through our services, including training plans and coaching materials, is protected by copyright and other intellectual property laws. You may not reproduce or distribute this content without written permission.",
  },
  {
    title: "8. Changes to Terms",
    body: "We reserve the right to modify or update these terms at any time. Significant changes will be communicated by email or through our website. Continued use of our services after changes means you accept the updated terms.",
  },
  {
    title: "9. Contact Information",
    body: "If you have questions about these terms or our services, contact us at contact@ventrocycling.com.",
  },
];

const PRIVACY = [
  {
    title: "1. Information We Collect",
    body: "We may collect personal information (name, email, phone, date of birth), payment details as needed to process payments, training data, and communication history.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to deliver and personalize coaching, process payments, provide support, improve our services, comply with legal obligations, and protect the safety and rights of users and our business.",
  },
  {
    title: "3. Data Security",
    body: "We use appropriate technical and organizational measures to protect your information. No internet transmission is fully secure, so sharing data is at your own risk.",
  },
  {
    title: "4. Sharing Your Information",
    body: "We do not sell, rent, or trade your personal information. We may share data with trusted service providers only as needed to deliver our services.",
  },
  {
    title: "5. Your Choices",
    body: "You can review and update account information, unsubscribe from marketing emails, and request account deletion subject to data retention requirements.",
  },
  {
    title: "6. Cookies and Tracking",
    body: "We use cookies and related technologies to understand website usage. You can manage cookie preferences in your browser settings.",
  },
  {
    title: "7. Age Privacy",
    body: "Our services are not intended for people under 18 years old.",
  },
  {
    title: "8. Changes to Privacy Policy",
    body: "We may update this privacy policy for legal, operational, or service reasons. Material changes will be communicated via email or website notice.",
  },
  {
    title: "9. Contact Us",
    body: "Questions about privacy can be sent to contact@ventrocycling.com.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <TermsAndConditions />
      <Faq />
      <Footer />
    </>
  );
}

const TermsAndConditions = () => {
  return (
    <section className="px-6 pb-24 pt-32 md:px-12" style={{ background: T.ink, color: T.bone }}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono uppercase mb-4" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
          ◎ Legal
        </p>
        <h1
          className="font-extrabold uppercase mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Terms &{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            conditions.
          </span>
        </h1>

        <p className="max-w-3xl text-base leading-relaxed mb-12" style={{ color: T.mist }}>
          These terms govern your use of Ventro Cycling Coaching online services for triathlon, cycling, running, and swimming training plans.
        </p>

        <div className="space-y-3" style={{ borderTop: `1px solid ${T.hair}` }}>
          {TERMS.map((item) => (
            <article key={item.title} className="pt-6" style={{ borderBottom: `1px solid ${T.hair}` }}>
              <h2 className="font-semibold text-base mb-2" style={{ color: T.bone }}>
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed pb-6" style={{ color: T.mist }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <h2
          className="font-extrabold uppercase mt-16 mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            color: T.bone,
          }}
        >
          Privacy{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            policy.
          </span>
        </h2>

        <div className="space-y-3" style={{ borderTop: `1px solid ${T.hair}` }}>
          {PRIVACY.map((item) => (
            <article key={item.title} className="pt-6" style={{ borderBottom: `1px solid ${T.hair}` }}>
              <h3 className="font-semibold text-base mb-2" style={{ color: T.bone }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed pb-6" style={{ color: T.mist }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
