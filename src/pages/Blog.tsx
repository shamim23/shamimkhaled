import { Link } from "react-router";
import { BLOG_POSTS } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  return (
    <section className="relative overflow-hidden bg-[var(--obsidian)]">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--glacial), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
        <p className="reveal kicker mb-6 text-[var(--glacial)]">Writing</p>
        <h1 className="reveal font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.02]">
          Notes from the <span className="italic text-[var(--glacial)]">practice.</span>
        </h1>
        <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-[var(--stone)] md:text-[0.95rem]" style={{ ["--reveal-delay" as string]: "0.15s" }}>
          Occasional writing on attention, state, cold, and the inner work behind
          outer change.
        </p>

        <div className="mt-16 border-t border-[var(--line-dark)] md:mt-20">
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="reveal group grid grid-cols-1 gap-3 border-b border-[var(--line-dark)] py-10 transition-colors md:grid-cols-12 md:gap-8"
              style={{ ["--reveal-delay" as string]: `${0.1 + i * 0.08}s` }}
            >
              <p className="kicker text-[var(--stone)] md:col-span-3">{formatDate(post.date)}</p>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl font-light leading-snug text-[var(--cream)] transition-colors duration-500 group-hover:text-[var(--glacial)] md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--stone)]">
                  {post.excerpt}
                </p>
                <p className="u-link mt-5 inline-block text-[0.625rem] font-medium uppercase tracking-[0.3em] text-[var(--cream-dim)]">
                  Read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
