export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden bg-[var(--obsidian)] pt-20">
      {/* marquee */}
      <div className="marquee-track select-none" aria-hidden="true">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="font-display text-outline whitespace-nowrap pr-16 text-[clamp(5rem,14vw,12rem)] font-light leading-none"
          >
            ARETÉ — RETURN TO THE WILD — ARETÉ — EXPAND WITHIN —&nbsp;
          </span>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-[1500px] flex-col gap-8 border-t border-[var(--line-dark)] px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="kicker text-[var(--stone)]">Human potential, forged in nature</p>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {["Approach", "Services", "Cold & Nature", "About", "Experiences", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l === "Cold & Nature" ? "cold" : l.toLowerCase()}`}
              className="u-link text-[0.625rem] uppercase tracking-[0.3em] text-[var(--stone)] transition-colors hover:text-[var(--cream)]"
            >
              {l}
            </a>
          ))}
        </nav>
        <p className="text-xs text-[var(--stone)]">© {year} [Your Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}
