const PLACEHOLDERS = [
  {
    quote: "[A client's words about a personal transformation experience — what shifted, in their voice.]",
    who: "[Name], Individual client",
  },
  {
    quote: "[A leader's reflection on a team or organizational experience — what changed in how they work together.]",
    who: "[Name], [Role, Organization]",
  },
  {
    quote: "[An athlete's account of mental resilience, cold work, or preparation — honest, specific, unscripted.]",
    who: "[Name], [Sport]",
  },
];

export default function Stories() {
  return (
    <section className="relative overflow-hidden bg-[var(--obsidian)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url(/images/texture.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <p className="reveal kicker mb-6 text-[var(--glacial)]">Stories</p>
        <h2 className="reveal font-display max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.05]">
          In their <span className="italic text-[var(--stone)]">own words.</span>
        </h2>
        <p className="reveal mt-6 max-w-md text-sm text-[var(--stone)]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
          Real client stories will live here — shared with permission, in their
          own voice. Placeholders shown.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--line-dark)] md:mt-20 md:grid-cols-3">
          {PLACEHOLDERS.map((t, i) => (
            <figure
              key={i}
              className="reveal flex flex-col justify-between gap-10 bg-[var(--obsidian)] p-8 md:p-12"
              style={{ ["--reveal-delay" as string]: `${i * 0.12}s` }}
            >
              <blockquote className="font-display text-xl font-light italic leading-relaxed text-[var(--cream-dim)] md:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="kicker text-[var(--stone)]">{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
