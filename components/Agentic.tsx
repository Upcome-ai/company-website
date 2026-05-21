import { ArrowRight } from "./Icons";

const useCases = [
  { label: "Customer support", hot: true },
  { label: "Sales research" },
  { label: "Internal knowledge", hot: true },
  { label: "Data analysis" },
  { label: "Operations automation" },
  { label: "Document processing", hot: true },
  { label: "Product copilots" },
  { label: "Approval workflows" },
  { label: "Developer productivity" },
  { label: "CRM enrichment", hot: true },
  { label: "Smart dashboards" },
  { label: "Content generation" },
];

export default function Agentic() {
  return (
    <section
      className="agentic-bg section-y relative overflow-hidden border-y border-navy-line"
      style={{
        background:
          "radial-gradient(ellipse 800px 600px at 70% 20%, rgba(91,227,200,0.14), transparent 60%), linear-gradient(180deg, #0E2244 0%, #0B1B33 100%)",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-page page-pad">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow-line inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-mint">
              ◆ The Agentic Era
            </span>
            <h2 className="display-agentic mb-6 mt-4.5 text-bone">
              AI agents are becoming the new{" "}
              <em className="italic text-mint">operating layer</em> of business.
            </h2>
            <p className="max-w-[50ch] text-[17px] leading-[1.6] text-bone-dim">
              The next generation of companies will use software that can
              reason, retrieve information, coordinate workflows, access tools,
              and take action within defined boundaries. Upcome helps companies
              identify where AI agents can create real value, then builds
              systems that are useful, secure, and reliable.
            </p>
            <div className="mt-7">
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-full bg-mint px-7 py-4 text-[15px] font-medium text-ink transition-all hover:bg-[#79EBD3]"
              >
                Explore AI agent solutions
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <aside
            aria-label="Agent use cases"
            className="rounded-rad border border-navy-line bg-ink/60 p-6"
          >
            <div className="mb-4.5 flex items-center justify-between border-b border-dashed border-bone/10 pb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span>// agent.usecases</span>
              <span className="live-dot inline-flex items-center gap-1.5 text-mint">
                live
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {useCases.map((u, i) => (
                <span
                  key={i}
                  className={
                    "rounded-full border px-3.5 py-2 text-[13.5px] transition-all hover:cursor-default hover:border-mint hover:bg-mint hover:text-ink " +
                    (u.hot
                      ? "border-mint/40 bg-mint/[0.06] text-mint"
                      : "border-bone/15 bg-bone/[0.04] text-bone")
                  }
                >
                  {u.label}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
