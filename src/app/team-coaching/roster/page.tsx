"use client";
import { Footer, Navbar } from "@/components";

const T = {
  ink: "#0B0D10",
  char: "#14181D",
  bone: "#F4F4F2",
  mist: "#E4E4DE",
  lime: "#D9FF00",
  dim: "rgba(244,244,242,0.55)",
  hair: "rgba(244,244,242,0.14)",
};

export default function RosterPage() {
  return (
    <>
      <Navbar />
      <Roster />
      <Footer />
    </>
  );
}

const Roster = () => {
  const riders = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Sprinter",
      // photoUrl: "/image/riders/jane-doe.jpg",
      bio: "Jane is a fierce competitor who specializes in high-power sprints.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Climber",
      // photoUrl: "/image/riders/john-smith.jpg",
      bio: "John excels in mountainous terrain and long-distance hill climbs.",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Climber",
      // photoUrl: "/image/riders/john-smith.jpg",
      bio: "John excels in mountainous terrain and long-distance hill climbs.",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Climber",
      // photoUrl: "/image/riders/john-smith.jpg",
      bio: "John excels in mountainous terrain and long-distance hill climbs.",
    },
    {
      id: 5,
      name: "John Smith",
      role: "Climber",
      // photoUrl: "/image/riders/john-smith.jpg",
      bio: "John excels in mountainous terrain and long-distance hill climbs.",
    },
    // ... more riders
  ];

  return (
    <section className="px-6 pb-24 pt-32 md:px-12" style={{ background: T.ink, color: T.bone }}>
      <div className="mx-auto max-w-6xl">
        <p className="font-mono uppercase mb-4" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: T.lime }}>
          ◎ Team coaching
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
          Team{" "}
          <span style={{ background: T.lime, color: T.ink, padding: "0 0.18em" }}>
            roster.
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-base leading-relaxed" style={{ color: T.mist }}>
          Current draft roster view for team-coaching athletes.
        </p>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3" style={{ border: `1px solid ${T.hair}` }}>
        {riders.map((rider) => (
          <article key={rider.id} className="p-6" style={{ background: T.char, border: `1px solid ${T.hair}` }}>
            <div className="mb-5 flex h-40 items-center justify-center" style={{ background: T.ink, border: `1px solid ${T.hair}` }}>
              <span className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.dim }}>
                Rider image
              </span>
            </div>
            <h2 className="mb-1 font-semibold text-lg" style={{ color: T.bone }}>
                {rider.name}
              </h2>
            <p className="mb-4 font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: T.lime }}>
                {rider.role}
              </p>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: T.mist }}>
              {rider.bio}
            </p>
            <button
              className="inline-flex items-center gap-2 px-4 py-3 font-semibold text-sm"
              style={{ background: T.lime, color: T.ink }}
            >
                View Profile
              </button>
            </article>
        ))}
        </div>
      </div>
    </section>
  );
};
