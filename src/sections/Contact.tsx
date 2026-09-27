import { useState } from "react";

const INQUIRY_TYPES = [
  "Personal Transformation",
  "Organization / Team",
  "High-Performance Athlete",
  "Retreats & Workshops",
  "Cold Exposure Experiences",
  "Other",
];

const EMAIL = "shamim.khaled@gmail.com";

// Get a free access key at https://web3forms.com — enter shamim.khaled@gmail.com
// there and the key is emailed to you. Paste it below.
const WEB3FORMS_ACCESS_KEY = "16dcd9f5-9bad-4e1d-819f-f7abdf71c61a";

export default function Contact() {
  const [form, setForm] = useState({ type: INQUIRY_TYPES[0], name: "", email: "", phone: "", org: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) errs.message = "A sentence or two helps me understand what you're looking for.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Inquiry — ${form.type} — ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          "Inquiry type": form.type,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "—",
          Organization: form.org || "—",
          Message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
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
            {status === "sent" ? (
              <div className="reveal is-visible flex h-full flex-col items-start justify-center border border-[var(--line-dark)] p-10 md:p-14">
                <p className="kicker mb-6 text-[var(--glacial)]">Thank you</p>
                <p className="font-display text-3xl font-light leading-snug md:text-4xl">
                  Your inquiry is on its way.
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--stone)]">
                  I've received your message and will reply personally within a
                  few days. If it's urgent, you can also write to me directly at{" "}
                  <a href={`mailto:${EMAIL}`} className="u-link text-[var(--cream)]">{EMAIL}</a>.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-ghost mt-10">
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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="field-label">Phone (optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      className="field"
                      placeholder="+1 555 000 0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
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
                  <button type="submit" className="btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send Inquiry"}
                  </button>
                  {status === "error" && (
                    <p className="mt-4 text-xs text-[var(--glacial)]">
                      Something went wrong — please try again, or write directly to {EMAIL}.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
