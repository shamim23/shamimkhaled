export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden">
      {/* image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="A lone figure standing at the edge of a misty glacial lake surrounded by mountains"
          className="hero-img h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,13,11,0.55)] via-transparent to-[rgba(10,13,11,0.92)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,13,11,0.45)] to-transparent" />
      </div>

      {/* kicker */}
      <div className="reveal absolute left-6 top-24 md:left-10 md:top-32" style={{ ["--reveal-delay" as string]: "0.4s" }}>
        <p className="kicker text-[var(--cream-dim)]">
          Transformational Coaching · Nature · Cold · Performance
        </p>
      </div>

      {/* headline block */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-16 md:px-10 md:pb-24">
        <h1 className="font-display font-light leading-[0.98] tracking-[-0.01em]">
          <span
            className="reveal block text-[clamp(3rem,9.5vw,8.5rem)]"
            style={{ ["--reveal-delay" as string]: "0.55s" }}
          >
            The edge of the wild
          </span>
          <span
            className="reveal block text-[clamp(3rem,9.5vw,8.5rem)] italic text-[var(--glacial)]"
            style={{ ["--reveal-delay" as string]: "0.8s" }}
          >
            is where you begin.
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p
            className="reveal max-w-md text-[0.95rem] leading-relaxed text-[var(--cream-dim)] md:text-base"
            style={{ ["--reveal-delay" as string]: "1.05s" }}
          >
            I guide individuals, teams, and athletes through nature-based
            experiences — cold water, breath, wild terrain — that change how you
            meet yourself, each other, and the world.
          </p>
          <div
            className="reveal flex flex-col gap-4 sm:flex-row"
            style={{ ["--reveal-delay" as string]: "1.25s" }}
          >
            <a href="#services" className="btn-primary">Explore the Experience</a>
            <a href="#approach" className="btn-ghost">Discover My Approach</a>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="scroll-hint text-[0.5625rem] uppercase tracking-[0.4em] text-[var(--stone)]">
          Scroll
        </span>
        <span className="scroll-hint block h-8 w-px bg-[var(--stone)]" />
      </div>
    </section>
  );
}
