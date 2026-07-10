import { Navbar, Footer } from "@/components";

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

/*
  Impressum — Angaben gemäß § 5 DDG.
  TODO: legal review before publish (baseline generated for review, not final).
  TODO: Kosta to supply postal address, phone number, and USt-IdNr /
        Kleinunternehmer status before this page goes live. Bracketed
        placeholders below MUST be replaced.
*/

const LIABILITY = [
  {
    title: "Haftung für Inhalte",
    body: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
  },
  {
    title: "Haftung für Links",
    body: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
  },
  {
    title: "Urheberrecht",
    body: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
  },
  {
    title: "EU-Streitschlichtung",
    body: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
  },
  {
    title: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
    body: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <Impressum />
      <Footer />
    </>
  );
}

const Impressum = () => {
  return (
    <section
      className="px-6 pb-24 pt-32 md:px-12"
      style={{ background: T.ink, color: T.bone }}
    >
      <div className="mx-auto max-w-5xl">
        <p
          className="font-mono uppercase mb-4"
          style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}
        >
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
          Im
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            pressum.
          </span>
        </h1>

        <p
          className="max-w-3xl text-base leading-relaxed mb-12"
          style={{ color: T.mist }}
        >
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).
        </p>

        {/* Provider identity block */}
        <div
          className="pt-6 mb-6"
          style={{ borderTop: `1px solid ${T.hair}` }}
        >
          <h2
            className="font-semibold text-base mb-3"
            style={{ color: T.bone }}
          >
            Diensteanbieter
          </h2>
          <div
            className="text-sm leading-relaxed"
            style={{ color: T.mist }}
          >
            Kostiantyn Garbar
            <br />
            Ventro Cycling Coaching
            <br />
            Gerichtsweg 7D
            <br />
            04103 Leipzig
            <br />
            Deutschland
          </div>
        </div>

        {/* Contact block */}
        <div
          className="pt-6 mb-6"
          style={{ borderTop: `1px solid ${T.hair}` }}
        >
          <h2
            className="font-semibold text-base mb-3"
            style={{ color: T.bone }}
          >
            Kontakt
          </h2>
          <div className="text-sm leading-relaxed" style={{ color: T.mist }}>
            E-Mail: contact@ventrocycling.com
          </div>
        </div>

        {/* Responsible for content */}
        <div
          className="pt-6 mb-6"
          style={{ borderTop: `1px solid ${T.hair}` }}
        >
          <h2
            className="font-semibold text-base mb-3"
            style={{ color: T.bone }}
          >
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <div className="text-sm leading-relaxed" style={{ color: T.mist }}>
            Kostiantyn Garbar (Anschrift wie oben)
          </div>
        </div>

        {/* Liability & legal boilerplate */}
        <div className="space-y-3" style={{ borderTop: `1px solid ${T.hair}` }}>
          {LIABILITY.map((item) => (
            <article
              key={item.title}
              className="pt-6"
              style={{ borderBottom: `1px solid ${T.hair}` }}
            >
              <h2
                className="font-semibold text-base mb-2"
                style={{ color: T.bone }}
              >
                {item.title}
              </h2>
              <p
                className="text-sm leading-relaxed pb-6"
                style={{ color: T.mist }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
