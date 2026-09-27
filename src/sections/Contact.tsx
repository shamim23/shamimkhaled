import { useState } from "react";

const INQUIRY_TYPES = [
  "Personal Transformation",
  "Organization / Team",
  "High-Performance Athlete",
  "Retreats & Workshops",
  "Cold Exposure Experiences",
  "Other",
];

const EMAIL = "hello@example.com"; // TODO: replace with your real contact email

export default function Contact() {
  const [form, setForm] = useState({ type: INQUIRY_TYPES[0], name: "", email: "", org: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) errs.message = "A sentence or two helps me understand what you're looking for.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const subject = encodeURIComponent(`Inquiry — ${form.type} — ${form.name}`);
    const body = encodeURIComponent(
      `Inquiry type: ${form.type}\nName: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org || "—"}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--forest)]">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--glacial), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* left copy */}
          <div className="md:col-span-5">
            <p className="reveal kicker mb-6 text-[var(--glacial)]">Contact</p>
            <h2 className="reveal font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.02]">
              Begin the{" "}
              <span className="italic text-[var(--glacial)]">conversation.</span>
            </h2>
            <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
              Tell me a little about yourself and what you're looking for. I
              read every inquiry personally and reply within a few days. No
              funnels, no pressure — just an honest first conversation about
              whether this work is right for you.
            </p>
            <div className="reveal mt-12 space-y-4 border-t border-[var(--line-dark)] pt-8 text-sm" style={{ ["--reveal-delay" as string]: "0.25s" }}>
              <p className="text-[var(--stone)]">
                <span className="kicker mr-4 text-[var(--glacial)]">Email</span>
                <a href={`mailto:${EMAIL}`} className="u-link text-[var(--cream-dim)]">{EMAIL}</a>
              </p>
              <p className="text-[var(--stone)]">
                <span className="kicker mr-4 text-[var(--glacial)]">Based</span>
                <span className="text-[var(--cream-dim)]">[Your location] — working worldwide</span>
              </p>
            </div>
          </div>

          {/* form */}
          <div className="md:col-span-6 md:col-start-7">
            {sent ? (
              <div className="reveal is-visible flex h-full flex-col items-start justify-center border border-[var(--line-dark)] p-10 md:p-14">
                <p className="kicker mb-6 text-[var(--glacial)]">Thank you</p>
                <p className="font-display text-3xl font-light leading-snug md:text-4xl">
                  Your email draft is open — just press send.
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--stone)]">
                  Your inquiry has been prepared in your email app. If it didn't
                  open, write to me directly at{" "}
                  <a href={`mailto:${EMAIL}`} className="u-link text-[var(--cream)]">{EMAIL}</a>.
                  I'll get back to you personally.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-10">
                  Write Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="reveal space-y-8" style={{ ["--reveal-delay" as string]: "0.2s" }}>
                <div>
                  <label htmlFor="type" className="field-label">I'm interested in</label>
                  <div className="relative">
                    <select
                      id="type"
                      className="field pr-8"
                      value={form.type}
                      onChange={(e) => set("type", e.target.value)}
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[var(--stone)]">↓</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">Name *</label>
                    <input
                      id="name"
                      className="field"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                    />
                    {errors.name && <p className="mt-2 text-xs text-[var(--glacial)]">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className="field"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email && <p className="mt-2 text-xs text-[var(--glacial)]">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="field-label">Organization (optional)</label>
                  <input
                    id="org"
                    className="field"
                    placeholder="Team, company, or club"
                    value={form.org}
                    onChange={(e) => set("org", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">What are you looking for? *</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="field resize-none"
                    placeholder="A few honest sentences are enough — where you are, and what you're hoping to explore."
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                  {errors.message && <p className="mt-2 text-xs text-[var(--glacial)]">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-primary">Send Inquiry</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
