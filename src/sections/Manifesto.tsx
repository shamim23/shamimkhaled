export default function Manifesto() {
  return (
    <section className="bg-[var(--cream)] text-[var(--obsidian)]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-44">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="reveal font-display text-[clamp(1.75rem,4vw,3.5rem)] font-light italic leading-[1.2]">
              Transformation is not another technique. It is an experience that
              changes how you relate to your body, your mind, other people — and
              the world around you.
            </p>
          </div>
          <div className="flex flex-col justify-end md:col-span-3 md:col-start-10">
            <div className="reveal border-t border-[var(--line-light)] pt-6" style={{ ["--reveal-delay" as string]: "0.2s" }}>
              <p className="text-sm leading-relaxed text-[rgba(10,13,11,0.72)]">
                People come to the wild to step outside the noise of modern life —
                to reconnect with themselves, deepen their relationships, and
                discover dimensions of their potential they hadn't yet explored.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[rgba(10,13,11,0.72)]">
                My work creates the spaces and experiences where that can happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
