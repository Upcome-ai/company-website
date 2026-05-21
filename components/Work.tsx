export default function Work() {
  return (
    <section
      id="work"
      className="section-y relative border-t border-navy-line"
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-9 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="inline-flex items-center">
            <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_4px_rgba(91,227,200,0.12)]" />
            &nbsp; 05 — Selected work
          </span>
          <span>Real-world execution</span>
        </div>

        <div className="mb-[clamp(40px,5vw,64px)] grid items-end gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="display-h2 m-0 mt-2 max-w-[16ch] text-bone">
            Products, platforms, and systems built for{" "}
            <em>real-world use.</em>
          </h2>
          <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] text-bone-dim">
            Our team has supported projects across Web3, SaaS, fintech,
            marketplaces, automation, mobile, and internal platforms. Some work
            is public, some confidential — all of it required speed,
            reliability, and strong execution.
          </p>
        </div>

        <div className="grid gap-[18px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-2">
          {/* Web3 - tall */}
          <article className="relative flex min-h-[380px] flex-col overflow-hidden rounded-rad border border-navy-line bg-[#0e2040] md:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[580px]">
            <div className="flex gap-2 px-[22px] pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="text-mint">●</span>
              <span>Web3 · Trading</span>
              <span className="ml-auto">Case 01</span>
            </div>
            <div className="vis-web3 relative my-4 mx-[22px] flex-1 min-h-[160px] overflow-hidden rounded-[10px]"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(91,227,200,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(230,177,106,0.18), transparent 60%), linear-gradient(135deg, #0e2040 0%, #173256 100%)",
              }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute aspect-square w-[70%] rounded-full border border-dashed border-mint/40" />
                <div className="absolute aspect-square w-[50%] rounded-full border border-dashed border-amber/40" />
                <div className="absolute aspect-square w-[30%] rounded-full border border-bone/30" />
                <div
                  className="relative h-[84px] w-[84px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #5BE3C8 0%, #1FB89A 60%, #0a6f5d 100%)",
                    boxShadow: "0 0 60px rgba(91,227,200,0.45)",
                  }}
                />
              </div>
              <span
                className="absolute h-2 w-2 rounded-full bg-bone"
                style={{ top: "20%", left: "18%", boxShadow: "0 0 12px rgba(255,255,255,0.8)" }}
              />
              <span
                className="absolute h-2 w-2 rounded-full bg-amber"
                style={{ top: "28%", right: "18%", boxShadow: "0 0 12px rgba(230,177,106,0.8)" }}
              />
              <span
                className="absolute h-2 w-2 rounded-full bg-mint"
                style={{ bottom: "22%", left: "24%" }}
              />
              <span
                className="absolute h-2 w-2 rounded-full bg-bone"
                style={{ bottom: "16%", right: "22%", boxShadow: "0 0 12px rgba(255,255,255,0.8)" }}
              />
            </div>
            <h4 className="m-0 px-[22px] pb-2 font-serif text-[26px] leading-[1.1] text-bone">
              A Web3 trading platform for <em>high-stakes</em> user activity.
            </h4>
            <p className="m-0 px-[22px] pb-[22px] text-[14.5px] leading-[1.55] text-bone-dim">
              Blockchain-connected product for users interacting with digital
              assets and real-time transaction flows. Frontend, backend
              integration, on-chain connectivity, and launch.
            </p>
          </article>

          {/* AI */}
          <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-rad border border-navy-line bg-[#0e2040]">
            <div className="flex gap-2 px-[22px] pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="text-mint">●</span>
              <span>AI · Internal Ops</span>
            </div>
            <div
              className="relative my-4 mx-[22px] flex flex-1 min-h-[160px] flex-col gap-1.5 overflow-hidden rounded-[10px] bg-[#0d1f3a] p-3.5 font-mono text-[11px] text-bone-dim"
              aria-hidden="true"
            >
              <div className="flex gap-2 rounded-md bg-bone/[0.04] px-2.5 py-1.5">
                <span className="min-w-[56px] text-amber">user</span>
                <span>Find Q3 churn outliers</span>
              </div>
              <div className="flex gap-2 rounded-md bg-bone/[0.04] px-2.5 py-1.5">
                <span className="min-w-[56px] text-mint">agent</span>
                <span>Querying warehouse…</span>
              </div>
              <div className="flex gap-2 rounded-md bg-bone/[0.04] px-2.5 py-1.5">
                <span className="min-w-[56px] text-muted">tool</span>
                <span>snowflake.run()</span>
              </div>
              <div className="flex gap-2 rounded-md bg-bone/[0.04] px-2.5 py-1.5">
                <span className="min-w-[56px] text-mint">agent</span>
                <span>
                  3 cohorts flagged. Draft
                  <span className="blink-cursor" />
                </span>
              </div>
            </div>
            <h4 className="m-0 px-[22px] pb-2 font-serif text-[26px] leading-[1.1] text-bone">
              <em>AI workflow</em> assistant for internal operations.
            </h4>
            <p className="m-0 px-[22px] pb-[22px] text-[14.5px] leading-[1.55] text-bone-dim">
              Knowledge retrieval, document analysis, and multi-step automation
              with human-in-the-loop approval.
            </p>
          </article>

          {/* MVP */}
          <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-rad border border-navy-line bg-[#0e2040]">
            <div className="flex gap-2 px-[22px] pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="text-mint">●</span>
              <span>MVP · Founder</span>
            </div>
            <div
              className="relative my-4 mx-[22px] flex-1 min-h-[160px] overflow-hidden rounded-[10px]"
              style={{
                background:
                  "linear-gradient(135deg, #173256 0%, #0e2040 100%)",
              }}
              aria-hidden="true"
            >
              <div className="absolute right-6 top-6 font-mono text-[11px] tracking-[0.12em] text-mint">
                ↗ MRR
              </div>
              <div className="absolute inset-6 flex items-end gap-2">
                {[
                  { h: "18%", op: 0.25, color: "bg-mint" },
                  { h: "28%", op: 0.35, color: "bg-mint" },
                  { h: "22%", op: 0.35, color: "bg-mint" },
                  { h: "40%", op: 0.5, color: "bg-mint" },
                  { h: "55%", op: 0.65, color: "bg-mint" },
                  { h: "50%", op: 0.65, color: "bg-amber" },
                  { h: "75%", op: 0.85, color: "bg-mint" },
                  { h: "92%", op: 1, color: "bg-mint" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${b.color} rounded-t-[3px]`}
                    style={{ height: b.h, opacity: b.op }}
                  />
                ))}
              </div>
            </div>
            <h4 className="m-0 px-[22px] pb-2 font-serif text-[26px] leading-[1.1] text-bone">
              Startup idea to <em>revenue-producing</em> product.
            </h4>
            <p className="m-0 px-[22px] pb-[22px] text-[14.5px] leading-[1.55] text-bone-dim">
              From concept to live product with onboarding, payments,
              analytics, and a scalable backend.
            </p>
          </article>
        </div>

        <div className="mt-9 flex justify-end font-mono text-xs uppercase tracking-[0.14em]">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b border-bone/30 pb-1 text-bone transition-colors hover:border-mint hover:text-mint"
          >
            See selected work →
          </a>
        </div>
      </div>
    </section>
  );
}
