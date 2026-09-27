const EXPERIENCES = [
  {
    type: "Retreat",
    title: "[Retreat name — e.g. three days in the mountains]",
    location: "[Location]",
    date: "Dates announced soon",
    desc: "[Short description: the landscape, the arc of the days, who it's for.]",
  },
  {
    type: "Group Workshop",
    title: "[Workshop name — e.g. breath, cold & presence]",
    location: "[Location]",
    date: "Dates announced soon",
    desc: "[Short description: format, duration, group size, what participants practice.]",
  },
  {
    type: "Corporate Experience",
    title: "[Experience name — e.g. a team day in nature]",
    location: "[Location or on-site]",
    date: "On request",
    desc: "[Short description: designed with your team's context and goals.]",
  },
  {
    type: "Athlete Session",
    title: "[Session name — e.g. mental resilience & cold]",
    location: "[Location]",
    date: "On request",
    desc: "[Short description: individual or small-group work for athletes.]",
  },
  {
    type: "Cold Exposure",
    title: "[Session name — e.g. guided cold immersion]",
    location: "[Location]",
    date: "Dates announced soon",
    desc: "[Short description: breath-led cold experience, all levels.]",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-[var(--forest)]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="reveal kicker mb-6 text-[var(--glacial)]">Experiences, Retreats & Workshops</p>
            <h2 className="reveal font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-light leading-[1.05]">
              What's <span className="italic text-[var(--stone)]">ahead.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-[var(--stone)]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
            Upcoming and potential experiences. Each one is intentionally small,
            held in nature, and built around direct experience. Inquire to hear
            first when dates open.
          </p>
        </div>

        <div className="border-t border-[var(--line-dark)]">
          {EXPERIENCES.map((e, i) => (
            <div
              key={i}
              className="reveal group grid grid-cols-1 gap-3 border-b border-[var(--line-dark)] py-8 transition-colors duration-700 hover:bg-[rgba(239,234,224,0.03)] md:grid-cols-12 md:items-center md:gap-6 md:py-10"
              style={{ ["--reveal-delay" as string]: `${i * 0.06}s` }}
            >
              <p className="kicker text-[var(--glacial)] md:col-span-2">{e.type}</p>
              <h3 className="font-display text-2xl font-light leading-snug md:col-span-5 md:text-3xl">
                {e.title}
              </h3>
              <div className="text-sm text-[var(--stone)] md:col-span-3">
                <p>{e.location}</p>
                <p>{e.date}</p>
                <p className="mt-2 leading-relaxed opacity-80">{e.desc}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <a
                  href="#contact"
                  className="u-link text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-[var(--cream-dim)] transition-colors group-hover:text-[var(--cream)]"
                >
                  Inquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
