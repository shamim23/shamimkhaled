const SERVICES = [
  {
    id: "individuals",
    img: "/images/forest.jpg",
    alt: "Light breaking through a deep, foggy ancient forest",
    num: "I",
    title: "Personal Transformation",
    audience: "For individuals",
    desc: "One-on-one coaching and immersive experiences for people who want to deepen self-awareness, work skillfully with stress, and reconnect with themselves — in nature, not just in conversation.",
    themes: [
      "Stress management & emotional regulation",
      "Self-awareness and personal growth",
      "Mind–body connection",
      "Breaking habitual patterns",
      "Nature-based transformation experiences",
    ],
    cta: "Work With Me",
  },
  {
    id: "organizations",
    img: "/images/org.jpg",
    alt: "A small group walking together across a misty mountain plateau",
    num: "II",
    title: "Organizational Transformation",
    audience: "For teams & organizations",
    desc: "For founders, executives, and HR leaders who want something beyond traditional corporate training — experiences that build real connection, resilience, and sustainable performance in teams.",
    themes: [
      "Transformational team workshops",
      "Stress & resilience programs",
      "Leadership and self-awareness",
      "Nature-based corporate retreats",
      "High-performance, human culture",
    ],
    cta: "Bring This to Your Team",
  },
  {
    id: "athletes",
    img: "/images/athlete.jpg",
    alt: "An athlete seated in quiet breathwork on a dark rocky coastline at dawn",
    num: "III",
    title: "High-Performance Athletes",
    audience: "For athletes",
    desc: "For athletes exploring the relationship between mental resilience, physical challenge, recovery, and performance. Experiential coaching — clearly distinct from medical or physiological advice.",
    themes: [
      "Mental resilience under pressure",
      "Mind–body awareness",
      "Performance preparation",
      "Cold exposure experiences",
      "Recovery & sustainable performance",
    ],
    cta: "Train the Mind",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--obsidian)]">
      <div className="mx-auto max-w-[1500px] px-6 pb-8 pt-28 md:px-10 md:pt-40">
        <p className="reveal kicker mb-6 text-[var(--glacial)]">Services</p>
        <h2 className="reveal font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-light leading-[1.05]">
          Three paths,{" "}
          <span className="italic text-[var(--stone)]">one direction.</span>
        </h2>
        <p className="reveal mt-6 max-w-xl text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
          Whether you arrive as an individual, a team, or an athlete, the work
          is the same at its core: meeting yourself honestly, in conditions that
          demand presence.
        </p>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 pb-28 md:px-10 md:pb-40">
        {SERVICES.map((s, i) => (
          <article
            key={s.id}
            className="service-row reveal group mt-16 grid grid-cols-1 gap-0 border border-[var(--line-dark)] md:mt-24 md:grid-cols-2"
          >
            {/* image */}
            <div className={`relative min-h-[320px] overflow-hidden md:min-h-[560px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="service-img absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,13,11,0.55)] to-transparent" />
              <span className="absolute left-6 top-6 font-display text-outline text-5xl font-light md:text-6xl">
                {s.num}
              </span>
            </div>

            {/* content */}
            <div className={`flex flex-col justify-between gap-10 p-8 md:p-14 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div>
                <p className="kicker mb-4 text-[var(--stone)]">{s.audience}</p>
                <h3 className="font-display text-3xl font-light leading-tight md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]">
                  {s.desc}
                </p>
                <ul className="mt-8 space-y-0">
                  {s.themes.map((t) => (
                    <li
                      key={t}
                      className="flex items-baseline gap-4 border-b border-[var(--line-dark)] py-3 text-sm text-[var(--cream-dim)]"
                    >
                      <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[var(--glacial)] opacity-60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a href="#contact" className="btn-ghost">{s.cta}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
