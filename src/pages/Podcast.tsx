import { Link } from "react-router";
import { PODCAST_EPISODES, UPCOMING_BOOK } from "@/data/podcasts";

export default function Podcast() {
  return (
    <div className="bg-[var(--obsidian)]">
      {/* episodes */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, var(--glacial), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
          <p className="reveal kicker mb-6 text-[var(--glacial)]">Podcast</p>
          <h1 className="reveal font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.02]">
            Conversations, <span className="italic text-[var(--glacial)]">out loud.</span>
          </h1>
          <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
            Long-form conversations on human potential, resilience, and the inner
            game — recorded, unscripted, and shared here.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2">
            {PODCAST_EPISODES.map((ep, i) => (
              <div
                key={i}
                className="reveal border border-[var(--line-dark)]"
                style={{ ["--reveal-delay" as string]: `${0.1 + i * 0.08}s` }}
              >
                {ep.youtubeId ? (
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`}
                      title={ep.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-[var(--forest)]">
                    <span className="kicker text-[var(--stone)]">Coming soon</span>
                  </div>
                )}
                <div className="p-6 md:p-8">
                  {ep.date && <p className="kicker mb-3 text-[var(--stone)]">{ep.date}</p>}
                  <h2 className="font-display text-xl font-light leading-snug text-[var(--cream)] md:text-2xl">
                    {ep.title}
                  </h2>
                  {ep.description && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--stone)]">{ep.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* upcoming book */}
      <section className="relative overflow-hidden border-t border-[var(--line-dark)] bg-[var(--forest)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "url(/images/texture.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 py-28 md:px-10 md:py-40">
          <p className="reveal kicker mb-6 text-[var(--glacial)]">{UPCOMING_BOOK.kicker}</p>
          <h2 className="reveal font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.05]">
            {UPCOMING_BOOK.title}{" "}
            <span className="italic text-[var(--stone)]">— {UPCOMING_BOOK.subtitle}</span>
          </h2>
          <p className="reveal mt-8 max-w-xl text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
            {UPCOMING_BOOK.description}
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={{ ["--reveal-delay" as string]: "0.25s" }}>
            <Link to="/#contact" className="btn-primary">
              Get Notified
            </Link>
            <span className="kicker text-[var(--stone)]">{UPCOMING_BOOK.eta}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
