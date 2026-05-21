import { ArrowRight } from "./Icons";

export default function Hero() {
  return (
    <header className="relative pt-[clamp(56px,8vw,110px)] pb-[clamp(48px,6vw,96px)]">
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-8 flex flex-wrap gap-[18px] font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="rounded-full border border-mint/40 bg-bone/[0.02] px-3 py-1.5 text-mint">
            ◆ Software · AI Agents · Web3 · DevOps
          </span>
          <span className="rounded-full border border-bone/20 bg-bone/[0.02] px-3 py-1.5 text-bone-dim">
            Est. workshop — 7+ yrs together
          </span>
        </div>

        <div className="grid items-end gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="display-h1 hero-h1-underline text-bone m-0">
              Build the
              <span className="block">products of the</span>
              <span className="block">
                <em>agentic&nbsp;era.</em>
              </span>
            </h1>
          </div>
          <div className="pb-1.5">
            <p className="m-0 mb-[22px] max-w-[38ch] text-[17px] leading-[1.55] text-bone-dim">
              Upcome helps founders and companies build modern web platforms,
              mobile apps, AI agents, blockchain systems, and scalable digital
              products —{" "}
              <strong className="font-medium text-bone">
                engineered like the outcome matters
              </strong>
              .
            </p>
            <p className="m-0 mb-[22px] max-w-[38ch] text-[17px] leading-[1.55] text-muted">
              A team of developers and entrepreneurs who have helped launch
              dozens of projects and supported teams through high-stakes Web3
              cycles.
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-5 py-3.5 text-[15px] font-medium text-ink transition-all hover:bg-white"
              >
                Book a strategy call
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-5 py-3.5 text-[15px] font-medium text-bone transition-all hover:border-bone/60 hover:bg-bone/[0.04]"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(56px,8vw,96px)] grid items-center gap-9 border-t border-navy-line pt-7 lg:grid-cols-[auto_1fr]">
          <div className="max-w-[18ch] font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Trusted by founders, operators, and product teams building the next
            generation of software.
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <Stat num="7" emSuffix="+" label="Years building together" />
            <Stat num="40" emSuffix="+" label="Products launched" />
            <Stat num="$M" emSuffix="s" label="In Web3 activity supported" />
            <Stat num="1" label="Team end-to-end" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Stat({
  num,
  emSuffix,
  label,
}: {
  num: string;
  emSuffix?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-serif text-[clamp(34px,4.4vw,56px)] leading-none tracking-[-0.02em] text-bone">
        {num}
        {emSuffix && <em className="italic text-mint">{emSuffix}</em>}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
      </div>
    </div>
  );
}
