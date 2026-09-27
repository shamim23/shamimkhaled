import { useEffect, useState } from "react";

const LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#cold", label: "Cold & Nature" },
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(10,13,11,0.82)] backdrop-blur-md border-b border-[var(--line-dark)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
          <a href="#top" className="font-display text-xl tracking-[0.18em] text-[var(--cream)]">
            ARETÉ
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="u-link text-[0.625rem] font-medium uppercase tracking-[0.3em] text-[var(--cream-dim)] transition-colors hover:text-[var(--cream)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden border border-[rgba(239,234,224,0.4)] px-5 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-500 hover:border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--obsidian)] md:block"
          >
            Work With Me
          </a>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-[var(--cream)] transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-[var(--cream)] transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[var(--obsidian)] px-8 transition-all duration-700 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light text-[var(--cream)] transition-all duration-700"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="kicker mt-14 text-[var(--stone)]">Human potential, forged in nature</p>
      </div>
    </>
  );
}
