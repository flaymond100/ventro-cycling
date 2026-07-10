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
  Datenschutzerklärung (GDPR/DSGVO privacy policy).
  TODO: legal review before publish (baseline generated for review, not final).

  Consent: Google Analytics is gated behind an opt-in consent banner
  (src/components/consent.tsx) — GA is not loaded until the visitor accepts,
  matching Section 9 below (Art. 6(1)(a) DSGVO + § 25 TDDDG). Consent can be
  revoked via the footer "Cookie settings" link.
  Note: Stripe (js.stripe.com) and Firebase-Storage assets are treated as
  service-necessary and still load on the pages that use them (see §7 / §11).
*/

const SECTIONS = [
  {
    title: "2. Ihre Rechte als betroffene Person",
    body: "Ihnen stehen bezüglich Ihrer bei uns verarbeiteten personenbezogenen Daten folgende Rechte zu: Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).",
  },
  {
    title: "3. Hosting (GitHub Pages) und Server-Logfiles",
    body: "Diese Website wird als statische Website über GitHub Pages bereitgestellt. Anbieter ist die GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website erhebt und speichert der Hoster automatisch Informationen in Server-Logfiles, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, die konkret abgerufene Datei, Referrer-URL sowie Browsertyp und Betriebssystem. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website). Dabei kann es zu einer Übermittlung von Daten in die USA kommen; die Übermittlung wird u. a. auf Standardvertragsklauseln gestützt.",
  },
  {
    title: "4. SSL-/TLS-Verschlüsselung",
    body: "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in Ihrer Browserzeile.",
  },
  {
    title: "5. Kontaktaufnahme und Kontaktformular (EmailJS, Firebase)",
    body: "Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse und Ihre Nachricht) zur Bearbeitung Ihrer Anfrage. Der Versand der Formularnachrichten erfolgt über den Dienst EmailJS (EmailJS, USA); zur Verwaltung von Anfragen bzw. Lead-Daten kann Google Firebase (Google Ireland Ltd. / Google LLC, USA) eingesetzt werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen). Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind.",
  },
  {
    title: "6. Terminbuchung (Calendly)",
    body: "Für die Buchung von Beratungs- und Kennenlerngesprächen nutzen wir den Dienst Calendly (Calendly, LLC, USA). Wenn Sie einen Termin buchen, verarbeitet Calendly die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Terminwunsch) in unserem Auftrag. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Es gelten zusätzlich die Datenschutzhinweise von Calendly.",
  },
  {
    title: "7. Zahlungsabwicklung (Stripe)",
    body: "Für die Buchung kostenpflichtiger Coaching-Pakete setzen wir den Zahlungsdienstleister Stripe ein (Stripe Payments Europe, Ltd., Irland; ggf. Stripe, Inc., USA). Auf der Seite „Plans & Pricing“ wird hierzu eine Stripe-Komponente eingebunden, die beim Laden Skripte von js.stripe.com nachlädt; dabei wird Ihre IP-Adresse an Stripe übermittelt und Stripe kann Cookies zur Betrugsprävention setzen. Ihre Zahlungs- und Rechnungsdaten geben Sie direkt bei Stripe ein und werden dort verarbeitet; vollständige Zahlungsdaten (z. B. Kreditkartennummern) erhalten wir nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (Betrugsprävention). Weitere Informationen finden Sie in der Datenschutzerklärung von Stripe.",
  },
  {
    title: "8. Trainingsplattform (TrainingPeaks)",
    body: "Die Coaching-Leistung wird über die Plattform TrainingPeaks (Peaksware, LLC, USA) erbracht. Für die Erstellung und laufende Anpassung Ihres Trainingsplans werden dort Trainingsdaten verarbeitet, insbesondere Leistungs-/Wattdaten, Herzfrequenz, Trainingsverlauf und Feedback sowie ggf. gesundheits- und leistungsbezogene Angaben. Für die Nutzung ist ein eigenes TrainingPeaks-Konto erforderlich; es gelten zusätzlich die Datenschutzbestimmungen von TrainingPeaks. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO; soweit Gesundheitsdaten verarbeitet werden, erfolgt dies auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO.",
  },
  {
    title: "9. Webanalyse (Google Analytics)",
    body: "Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet Cookies und ähnliche Technologien und verarbeitet Nutzungsdaten (z. B. gekürzte IP-Adresse, Geräte- und Browserinformationen, aufgerufene Seiten und Interaktionen), um die Nutzung der Website auszuwerten. Dabei können Daten auch an Server von Google in den USA übermittelt werden. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Die Einwilligung ist freiwillig und jederzeit mit Wirkung für die Zukunft widerrufbar. Sie können die Erfassung durch Google Analytics zudem mit dem Browser-Add-on zur Deaktivierung von Google Analytics unterbinden.",
  },
  {
    title: "10. Schriftarten (lokal gehostet)",
    body: "Zur einheitlichen Darstellung von Schriftarten nutzt diese Website Web Fonts, die über die Funktion „next/font“ beim Erstellen der Website lokal eingebunden und von unserem Server ausgeliefert werden. Eine Verbindung zu Servern von Google findet beim Aufruf der Website hierdurch nicht statt.",
  },
  {
    title: "11. Eingebundene Inhalte und Assets (Firebase Storage)",
    body: "Einzelne Bilder und Assets dieser Website werden über Google Firebase Storage (firebasestorage.googleapis.com; Google Ireland Ltd. / Google LLC, USA) ausgeliefert. Beim Laden dieser Inhalte wird Ihre IP-Adresse an Google übermittelt, da dies technisch für die Auslieferung erforderlich ist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer performanten Auslieferung der Inhalte).",
  },
  {
    title: "12. Cookies",
    body: "Diese Website verwendet technisch notwendige Cookies sowie – im Zusammenhang mit Webanalyse und Zahlungsabwicklung – Cookies von Drittanbietern (Google, Stripe). Nicht notwendige Cookies werden nur auf Grundlage Ihrer Einwilligung gesetzt. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben, generell ausschließen sowie das automatische Löschen von Cookies beim Schließen des Browsers aktivieren.",
  },
  {
    title: "13. Speicherdauer",
    body: "Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. handels- und steuerrechtliche Fristen) dies vorschreiben. Nach Wegfall des jeweiligen Zwecks und Ablauf etwaiger Fristen werden die Daten routinemäßig gelöscht.",
  },
  {
    title: "14. Änderungen dieser Datenschutzerklärung",
    body: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.",
  },
  {
    title: "15. Kontakt für Datenschutzanfragen",
    body: "Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten sowie zur Ausübung Ihrer Rechte wenden Sie sich bitte an: contact@ventrocycling.com. Weitere Angaben zum Verantwortlichen finden Sie in unserem Impressum.",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <Datenschutz />
      <Footer />
    </>
  );
}

const Datenschutz = () => {
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
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: T.bone,
          }}
        >
          Daten
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            schutz.
          </span>
        </h1>

        <p
          className="max-w-3xl text-base leading-relaxed mb-3"
          style={{ color: T.mist }}
        >
          Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck
          der Verarbeitung personenbezogener Daten bei der Nutzung von
          ventrocycling.com.
        </p>
        <p
          className="font-mono uppercase mb-12"
          style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}
        >
          Stand: Juli 2026
        </p>

        {/* Controller block */}
        <div className="pt-6 mb-3" style={{ borderTop: `1px solid ${T.hair}` }}>
          <h2 className="font-semibold text-base mb-2" style={{ color: T.bone }}>
            1. Verantwortliche Stelle
          </h2>
          <p className="text-sm leading-relaxed pb-2" style={{ color: T.mist }}>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist
            Kostiantyn Garbar (Ventro Cycling Coaching). Kontakt:
            contact@ventrocycling.com. Die vollständige Anschrift entnehmen Sie
            bitte dem Impressum.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-3" style={{ borderTop: `1px solid ${T.hair}` }}>
          {SECTIONS.map((item) => (
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
