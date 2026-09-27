export default function About() {
  return (
    <section id="about" className="bg-[var(--cream)] text-[var(--obsidian)]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* portrait */}
          <div className="reveal md:col-span-4">
            <div className="overflow-hidden">
              <img
                src="/images/Untitled%20design.png"
                alt="Portrait of Shamim Khaled"
                loading="lazy"
                className="parallax h-[420px] w-full scale-110 object-cover md:h-[560px]"
                data-parallax="0.07"
              />
            </div>
          </div>

          {/* story */}
          <div className="md:col-span-7 md:col-start-6">
            <p className="reveal kicker mb-6 text-[rgba(10,13,11,0.55)]">About</p>
            <h2 className="reveal font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.08]">
              Hi, I'm <span className="italic">Shamim Khaled</span>.
            </h2>

            <div className="reveal mt-8 space-y-5 text-[0.95rem] leading-relaxed text-[rgba(10,13,11,0.75)]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
              <p>
                I'm a transformational coach and AI engineer with a deep
                fascination for human performance and longevity — what allows
                us to think clearer, live longer, and operate closer to our
                true capacity.
              </p>
              <p>
                My curiosity has taken me to over 30 countries, where I've
                studied different modalities of healing, resilience, and
                transformation — from ancient practices to modern science. As a
                certified Cold Club instructor, I've seen firsthand how
                deliberate discomfort rewires the nervous system and builds
                unshakeable calm.
              </p>
              <p>
                What you can expect when working with me: a calm, grounded
                presence; experiences that are challenging but carefully held;
                honest conversation without jargon or inflated promises; and
                deep respect for your pace, your body, and your goals.
              </p>
            </div>

            <div className="reveal mt-10 border-t border-[var(--line-light)] pt-8" style={{ ["--reveal-delay" as string]: "0.25s" }}>
              <p className="kicker mb-5 text-[rgba(10,13,11,0.55)]">Credentials & Training</p>
              <ul className="grid grid-cols-1 gap-3 text-sm text-[rgba(10,13,11,0.75)] sm:grid-cols-2">
                <li className="flex items-baseline gap-3">
                  <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[rgba(10,13,11,0.4)]" />
                  Certified Cold Club Instructor
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[rgba(10,13,11,0.4)]" />
                  Transformational Coaching
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[rgba(10,13,11,0.4)]" />
                  AI Engineering
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[rgba(10,13,11,0.4)]" />
                  Modalities studied across 30+ countries
                </li>
              </ul>
            </div>

            <div className="reveal mt-10" style={{ ["--reveal-delay" as string]: "0.3s" }}>
              <a href="#contact" className="btn-ghost-dark">Start a Conversation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
