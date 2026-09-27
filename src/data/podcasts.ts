// Podcast episodes — paste the YouTube video ID for each episode.
// The ID is the part after watch?v= in the URL, e.g. for
// https://www.youtube.com/watch?v=abc123XYZ the id is "abc123XYZ".
// Episodes with an empty id render as a "coming soon" tile.
export interface PodcastEpisode {
  youtubeId: string;
  title: string;
  date?: string;
  description?: string;
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    youtubeId: "",
    title: "Episode 01 — Title coming soon",
    date: "2026",
    description: "Paste your YouTube video ID in src/data/podcasts.ts to publish this episode.",
  },
  {
    youtubeId: "",
    title: "Episode 02 — Title coming soon",
    date: "2026",
    description: "Paste your YouTube video ID in src/data/podcasts.ts to publish this episode.",
  },
  {
    youtubeId: "",
    title: "Episode 03 — Title coming soon",
    date: "2026",
    description: "Paste your YouTube video ID in src/data/podcasts.ts to publish this episode.",
  },
];

// Upcoming book teaser shown at the bottom of the podcast page.
export const UPCOMING_BOOK = {
  kicker: "Upcoming Book",
  title: "Xcalibur",
  subtitle: "A field guide to mastering your internal states",
  description:
    "A book about the inner mechanics of transformation — attention, state, and the practices that forge both. Currently in writing.",
  eta: "Expected 2027",
};
