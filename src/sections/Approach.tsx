const PRINCIPLES = [
  {
    n: "01",
    title: "Nature as the setting, not the backdrop",
    body: "Forests, cold water, altitude, weather. Nature isn't decoration — it's an active participant. It strips away noise, regulates the nervous system, and gives honest feedback that no conference room can.",
  },
  {
    n: "02",
    title: "Experience before theory",
    body: "Insight that stays in the head rarely changes behavior. We work through direct experience — challenge, stillness, breath, cold — so understanding lands in the body, not just the mind.",
  },
  {
    n: "03",
    title: "Stress as a teacher",
    body: "Resilience isn't built by avoiding stress but by meeting the right dose of it, voluntarily, with awareness. Adaptive stress — cold, exertion, discomfort — becomes a practice ground for life.",
  },
  {
    n: "04",
    title: "Presence as the foundation",
    body: "Attention is the raw material of change. Every experience is built to bring you into direct contact with the present moment — where habitual patterns become visible, and choice becomes possible.",
  },
  {
    n: "05",
    title: "Connection as the condition",
    body: "Transformation rarely happens alone. Shared challenge and honest conversation create the trust that lets people go further than they would by themselves.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-[var(--forest)]">
      {/* faint texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url(/images/texture.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="reveal kicker mb-6 text-[var(--glacial)]">My Approach</p>
            <h2 className="reveal font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-light leading-[1.05]">
              Old wisdom,{" "}
              <span className="italic text-[var(--stone)]">honest method.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-[var(--stone)]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
            Five principles shape everything I do — from a one-on-one session to
            a multi-day expedition. They keep the work grounded, experiential,
            and human.
          </p>
        </div>

        <div className="border-t border-[var(--line-dark)]">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.n}
              className="reveal group grid grid-cols-1 gap-4 border-b border-[var(--line-dark)] py-10 transition-colors duration-700 hover:bg-[rgba(239,234,224,0.03)] md:grid-cols-12 md:gap-8 md:py-14"
              style={{ ["--reveal-delay" as string]: `${i * 0.08}s` }}
            >
              <div className="md:col-span-2">
                <span className="font-display text-outline text-6xl font-light transition-all duration-700 group-hover:text-[var(--glacial)] group-hover:[-webkit-text-stroke:0px] md:text-7xl">
                  {p.n}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-light leading-snug md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <p className="text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
