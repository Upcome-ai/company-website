const pillars = [
  {
    num: "i.",
    title: "Product judgment, not just dev capacity",
    body: "We help decide what to build, what to cut, and what to prioritize before code is written.",
  },
  {
    num: "ii.",
    title: "Real launch experience",
    body: "Dozens of projects shipped, plus support for high-pressure environments handling real volume.",
  },
  {
    num: "iii.",
    title: "Modern technical execution",
    body: "Clean architecture, reliable infrastructure, and systems that can evolve without rewrites.",
  },
  {
    num: "iv.",
    title: "AI-ready thinking",
    body: "We move past the demos and build practical agents that improve real workflows.",
  },
];

export default function Why() {
  return (
    <section
      id="about"
      className="section-y relative border-t border-navy-line bg-gradient-to-b from-transparent to-navy/35"
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-9 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="inline-flex items-center">
            <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_4px_rgba(91,227,200,0.12)]" />
            &nbsp; 02 — Why Upcome
          </span>
          <span>
            Founder instincts{" "}
            <span className="hidden md:inline-block">× Engineering</span>{" "}
          </span>
        </div>

        <div className="mb-[clamp(40px,5vw,64px)] grid items-end gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="display-h2 m-0 mt-2 max-w-[16ch] text-bone">
            A development team with <em>founder instincts.</em>
          </h2>
          <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] text-bone-dim">
            Most software agencies only execute tickets. We combine engineering
            experience with entrepreneurial judgment. Helping clients make
            better product decisions while shipping quickly.
          </p>
        </div>
      </div>

      <div className="">
        <div className="grid border border-navy-line bg-navy-line gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="flex min-h-[280px] flex-col gap-3.5 bg-ink px-7 pb-9 pt-8"
            >
              <div className="font-serif italic text-[44px] leading-none text-mint">
                {p.num}
              </div>
              <h4 className="m-0 text-[20px] font-medium leading-[1.18] tracking-[-0.02em] text-bone">
                {p.title}
              </h4>
              <p className="m-0 text-[15px] leading-[1.55] text-bone-dim">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
