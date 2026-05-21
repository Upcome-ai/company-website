import { ArrowUpRight } from "./Icons";

type Service = {
  num: string;
  title: string;
  body: string;
  tags: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    num: "/ 01",
    title: "Web Development",
    body: "Fast, scalable web platforms, dashboards, marketplaces, SaaS products, landing pages, portals, and internal tools.",
    tags: "SaaS · Portals · Marketplaces",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8 H21" />
        <circle cx="6.5" cy="6" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="6" r=".5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "/ 02",
    title: "Mobile Apps",
    body: "Polished iOS and Android applications for consumers, internal teams, founders, and digital products.",
    tags: "iOS · Android · Cross-platform",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10 19 H14" />
      </svg>
    ),
  },
  {
    num: "/ 03",
    title: "AI Agents & Automation",
    body: "Custom AI agents, internal copilots, workflow automation, retrieval systems, and intelligent product features.",
    tags: "Copilots · RAG · Workflows",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21" />
      </svg>
    ),
  },
  {
    num: "/ 04",
    title: "Blockchain & Smart Contracts",
    body: "Smart contracts, dApps, wallet integrations, token systems, Web3 dashboards, and blockchain infrastructure.",
    tags: "EVM · Solidity · dApps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" />
        <path d="M12 22 V12 M4 7 L12 12 L20 7" />
      </svg>
    ),
  },
  {
    num: "/ 05",
    title: "Backend & APIs",
    body: "Secure backend systems, databases, authentication, payment flows, integrations, APIs, and business logic.",
    tags: "REST · GraphQL · Auth · Pay",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6 V12 a8 3 0 0 0 16 0 V6 M4 12 V18 a8 3 0 0 0 16 0 V12" />
      </svg>
    ),
  },
  {
    num: "/ 06",
    title: "DevOps & Cloud",
    body: "Cloud infrastructure, CI/CD, deployments, monitoring, scaling, performance, and production reliability.",
    tags: "AWS · GCP · CI/CD · IaC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 a5 5 0 1 1 1.5 -9.8 A6 6 0 0 1 19 11 a4 4 0 0 1 -1 7.9 Z" />
        <path d="M12 11 V17 M9 14 L12 11 L15 14" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-y relative border-t border-navy-line first:border-t-0"
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="mb-9 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="inline-flex items-center">
            <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_4px_rgba(91,227,200,0.12)]" />
            &nbsp; 01 — Services
          </span>
          <span>What we do</span>
        </div>

        <div className="mb-[clamp(40px,5vw,64px)] grid items-end gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="display-h2 m-0 mt-2 max-w-[16ch] text-bone">
            One team for the product you need to build <em>next.</em>
          </h2>
          <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] text-bone-dim">
            Whether you are starting from an idea, improving an existing
            product, or preparing your business for AI agents — Upcome gives
            you the strategy, engineering, and execution to ship with
            confidence.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-rad border border-navy-line bg-navy-line gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.num}
              className="service-card relative flex min-h-[320px] flex-col gap-[18px] bg-ink p-8 pt-9 transition-colors"
            >
              <div className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {s.num}
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-[10px] bg-mint/10 text-mint shadow-[inset_0_0_0_1px_rgba(91,227,200,0.18)]">
                <span className="block h-[22px] w-[22px]">{s.icon}</span>
              </div>
              <h3 className="m-0 text-[22px] font-medium tracking-[-0.02em] text-bone">
                {s.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-bone-dim">
                {s.body}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-dashed border-bone/10 pt-3.5">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-2">
                  {s.tags}
                </span>
                <a
                  href="#"
                  aria-label={s.title}
                  className="arrow-link grid h-[30px] w-[30px] place-items-center rounded-full border border-bone/20 text-bone transition-all"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-end font-mono text-xs uppercase tracking-[0.14em]">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b border-bone/30 pb-1 text-bone transition-colors hover:border-mint hover:text-mint"
          >
            View all services →
          </a>
        </div>
      </div>
    </section>
  );
}
