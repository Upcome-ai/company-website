import { ArrowRightSm } from "./Icons";

const audiences = [
  {
    tag: "Founders",
    title: (
      <>
        <em>Startup</em> founders
      </>
    ),
    body: "Launch an MVP, validate an idea, onboard users, and build a foundation for revenue.",
    cta: "Build my MVP",
  },
  {
    tag: "Operators",
    title: (
      <>
        <em>Growing</em> companies
      </>
    ),
    body: "Add engineering capacity, modernize products, automate operations, and scale infrastructure.",
    cta: "Scale my product",
  },
  {
    tag: "On-chain",
    title: (
      <>
        <em>Web3</em> teams
      </>
    ),
    body: "Build secure, usable blockchain products with smart contracts, wallets, dApps, and dashboards.",
    cta: "Launch my Web3 product",
  },
  {
    tag: "Intelligence",
    title: (
      <>
        <em>AI-ready</em> businesses
      </>
    ),
    body: "Turn AI agents into practical systems that support teams, automate workflows, and enhance products.",
    cta: "Prepare for AI",
  },
];

export default function Audiences() {
  return (
    <section
      id="solutions"
      className="section-y relative border-t border-navy-line"
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-9 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="inline-flex items-center">
            <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_4px_rgba(91,227,200,0.12)]" />
            &nbsp; 03 — Who we help
          </span>
          <span>Built for ambition</span>
        </div>

        <div className="mb-[clamp(40px,5vw,64px)] grid items-end gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="display-h2 m-0 mt-2 max-w-[16ch] text-bone">
            Built for teams with ambition <em>and urgency.</em>
          </h2>
          <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] text-bone-dim">
            Pick your stage. Each path starts the same way, with a strategy call to
            understand goals, constraints, and the most direct route forward.
          </p>
        </div>

        <div className="grid gap-[18px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <article
              key={i}
              className="aud-card flex min-h-[320px] flex-col gap-3.5 rounded-rad border border-bone/10 bg-bone/[0.025] px-6 pb-6 pt-7 transition-all"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mint">
                {a.tag}
              </span>
              <h4 className="m-0 font-serif text-[28px] leading-[1.05] text-bone">
                {a.title}
              </h4>
              <p className="m-0 flex-1 text-[14.5px] leading-[1.55] text-bone-dim">
                {a.body}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-t border-bone/10 pt-3.5 text-sm text-bone"
              >
                {a.cta}
                <ArrowRightSm className="cta-arrow h-3.5 w-3.5 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
