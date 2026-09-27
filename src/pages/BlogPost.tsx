import { Link, useParams } from "react-router";
import { BLOG_POSTS } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="bg-[var(--obsidian)]">
        <div className="mx-auto max-w-[760px] px-6 pb-28 pt-36 md:px-10 md:pt-48">
          <p className="kicker mb-6 text-[var(--glacial)]">Not found</p>
          <h1 className="font-display text-4xl font-light">This post doesn't exist.</h1>
          <Link to="/blog" className="btn-ghost mt-10 inline-block">
            Back to Writing
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-[var(--obsidian)]">
      <div className="mx-auto max-w-[760px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
        <Link
          to="/blog"
          className="reveal u-link text-[0.625rem] font-medium uppercase tracking-[0.3em] text-[var(--stone)]"
        >
          ← All writing
        </Link>
        <p className="reveal kicker mb-6 mt-14 text-[var(--glacial)]">{formatDate(post.date)}</p>
        <h1 className="reveal font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05]">
          {post.title}
        </h1>
        <div className="mt-12 space-y-7 border-t border-[var(--line-dark)] pt-12 md:mt-16 md:pt-14">
          {post.paragraphs.map((p, i) => (
            <p key={i} className="reveal text-base leading-[1.9] text-[var(--cream-dim)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
