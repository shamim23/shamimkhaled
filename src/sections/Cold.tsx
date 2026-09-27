const ELEMENTS = [
  { word: "Immersion", note: "Full presence in the element — no distractions, no exits." },
  { word: "Presence", note: "The cold removes the option of being anywhere else." },
  { word: "Challenge", note: "Voluntary discomfort, dosed with care, met with breath." },
  { word: "Connection", note: "To your body, to others in the water, to the place itself." },
  { word: "Respect", note: "For the body's limits and for the environment that hosts us." },
];

export default function Cold() {
  return (
    <section id="cold" className="relative overflow-hidden bg-[var(--obsidian)]">
      {/* glacial glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[560px] w-[560px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, var(--glacial), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* image */}
          <div className="reveal relative md:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/images/cold.jpg"
                alt="A person immersed to the shoulders in dark icy water, eyes closed in calm focus, mist rising"
                loading="lazy"
                className="parallax h-[440px] w-full scale-110 object-cover md:h-[640px]"
                data-parallax="0.08"
              />
            </div>
            <p className="kicker mt-4 text-[var(--stone)]">Certified Cold Club Instructor</p>
          </div>

          {/* text */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="reveal kicker mb-6 text-[var(--glacial)]">Cold & Nature</p>
            <h2 className="reveal font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.05]">
              The cold is{" "}
              <span className="italic text-[var(--glacial)]">an honest teacher.</span>
            </h2>
            <div className="reveal mt-8 space-y-5 text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
              <p>
                As a certified Cold Club instructor, I weave cold exposure and
                nature-based practice into my coaching — not as a cure or a
                spectacle, but as a form of adaptive stress: a deliberate,
                well-held meeting with discomfort that trains how you respond
                under pressure everywhere else.
              </p>
              <p>
                Breath first, then water. Always progressive, always optional,
                always held with attention to safety and the individual in front
                of me. Cold exposure here is an experiential practice — it makes
                no medical promises, and asks only for your presence.
              </p>
            </div>

            <ul className="mt-12">
              {ELEMENTS.map((e, i) => (
                <li
                  key={e.word}
                  className="reveal flex flex-col gap-1 border-t border-[var(--line-dark)] py-5 last:border-b md:flex-row md:items-baseline md:gap-10"
                  style={{ ["--reveal-delay" as string]: `${0.1 + i * 0.07}s` }}
                >
                  <span className="font-display w-40 shrink-0 text-xl font-light italic text-[var(--cream)]">
                    {e.word}
                  </span>
                  <span className="text-sm text-[var(--stone)]">{e.note}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-12" style={{ ["--reveal-delay" as string]: "0.2s" }}>
              <a href="#contact" className="btn-primary">Inquire About a Cold Experience</a>
              <p className="mt-4 text-xs text-[var(--stone)]">
                Sessions, workshops, and retreats — upcoming dates announced soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
