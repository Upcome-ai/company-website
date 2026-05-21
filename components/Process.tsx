import { ArrowRight } from "./Icons";

const steps = [
  { n: "01", title: "Discover", body: "We learn about your users, business model, product vision, and constraints." },
  { n: "02", title: "Plan", body: "Define scope, architecture, roadmap, milestones, and the smartest path forward." },
  { n: "03", title: "Build", body: "Design, develop, test, and ship in focused execution cycles." },
  { n: "04", title: "Launch", body: "Deployment, analytics, monitoring, documentation, and go-live readiness." },
  { n: "05", title: "Improve", body: "Refine based on real users, data, business goals, and market feedback." },
];

export default function Process() {
  return (
    <section className="section-y relative border-t border-navy-line bg-ink">
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-9 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="inline-flex items-center">
            <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_4px_rgba(91,227,200,0.12)]" />
            &nbsp; 04 — Process
          </span>
          <span>From first call to launch</span>
        </div>

        <div className="mb-[clamp(40px,5vw,64px)] grid items-end gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="display-h2 m-0 mt-2 max-w-[16ch] text-bone">
            Clear execution from <em>first call to launch.</em>
          </h2>
          <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] text-bone-dim">
            Five focused phases. No mystery. No bloated discovery cycles. Each
            step has a deliverable and a decision point.
          </p>
        </div>

        <div className="relative mt-6">
          <div className="process-line" aria-hidden="true" />
          <div className="relative grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-3.5">
                <div className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-mint bg-ink font-mono text-[13px] font-medium text-mint">
                  {s.n}
                </div>
                <h4 className="mt-1 font-serif text-[26px] text-bone">
                  <em>{s.title}</em>
                </h4>
                <p className="m-0 text-[14.5px] leading-[1.55] text-bone-dim">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4.5 rounded-rad border border-navy-line bg-navy/40 px-7 py-6 sm:flex-row sm:items-center">
          <div className="font-serif text-[26px] text-bone">
            Ready to start at{" "}
            <em className="italic text-mint">phase one</em>?
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-mint px-7 py-4 text-[15px] font-medium text-ink transition-all hover:bg-[#79EBD3]"
          >
            Start with a strategy call
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
