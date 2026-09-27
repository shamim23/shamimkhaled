// Blog posts — add a new entry at the top of the list to publish.
// slug: becomes the URL, e.g. /blog/your-slug
export interface BlogPost {
  slug: string;
  title: string;
  date: string; // e.g. "2026-09-27"
  excerpt: string;
  paragraphs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-cold",
    title: "Why I keep coming back to the cold",
    date: "2026-09-20",
    excerpt:
      "Cold water is not a hack. It's a conversation with the part of you that wants to run — and the part that learns to stay.",
    paragraphs: [
      "This is a placeholder post. Replace these paragraphs with your own writing in src/data/blog.ts.",
      "Write as many paragraphs as you like — each string in the list becomes its own paragraph on the page.",
    ],
  },
  {
    slug: "attention-is-the-practice",
    title: "Attention is the practice",
    date: "2026-09-06",
    excerpt:
      "Every meaningful change I've seen — in athletes, founders, teams — started with someone learning where their attention actually goes.",
    paragraphs: [
      "This is a placeholder post. Replace these paragraphs with your own writing in src/data/blog.ts.",
      "Write as many paragraphs as you like — each string in the list becomes its own paragraph on the page.",
    ],
  },
  {
    slug: "notes-on-resilience",
    title: "Notes on resilience",
    date: "2026-08-18",
    excerpt:
      "Resilience isn't toughness. It's range — the ability to meet more of life without closing.",
    paragraphs: [
      "This is a placeholder post. Replace these paragraphs with your own writing in src/data/blog.ts.",
      "Write as many paragraphs as you like — each string in the list becomes its own paragraph on the page.",
    ],
  },
];
