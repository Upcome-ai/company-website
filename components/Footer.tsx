import { ArrowRight } from "./Icons";
import Logo from "./Logo";

const services = [
  "Web Development",
  "Mobile Apps",
  "AI Agents",
  "Blockchain",
  "Backend & APIs",
  "DevOps & Cloud",
  "MVP Development",
];
const solutions = [
  "For Startups",
  "For Growing Companies",
  "For Web3 Teams",
  "For AI-Ready Businesses",
];
const company = ["About", "Contact"];
const elsewhere = ["LinkedIn ↗", "X / Twitter ↗"];

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`relative z-10 border-t border-navy-line bg-[#081427] pb-2 pt-16 text-bone-dim ${className}`}
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4.5">
            <Logo size="footer" />
            <p className="mt-4 max-w-[36ch] text-sm leading-[1.55] text-muted">
              A software development partner helping startups and companies
              build web platforms, mobile apps, AI agents, blockchain systems,
              and revenue-producing digital products.
            </p>
            <a
              href="mailto:contact@upcome.ai"
              className="text-sm text-bone-dim transition-colors hover:text-mint mt-2"
            >
              contact@upcome.ai
            </a>

            <div className="mt-4 flex flex-col gap-3.5 rounded-rad border border-navy-line bg-navy/40 p-5">
              <div className="font-serif text-[22px] leading-[1.2] text-bone">
                Ready to build what comes next?
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 self-start rounded-full bg-mint px-5 py-3 text-[15px] font-medium text-ink transition-all hover:bg-[#79EBD3]"
              >
                Book a strategy call
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <FtrCol heading="Services" items={services} sectionHref="#services" />
          <FtrCol
            heading="Solutions"
            items={solutions}
            sectionHref="#solutions"
          />
          <FtrCol heading="Company" items={company} />
          <FtrCol heading="Elsewhere" items={elsewhere} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-navy-line pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center">
          <span>© 2026 Upcome. All rights reserved.</span>
          <span>Built for the agentic era.</span>
        </div>
      </div>
      <div className="footer-mark" aria-hidden="true">
        Upcome.
      </div>
    </footer>
  );
}

function FtrCol({
  heading,
  items,
  sectionHref,
}: {
  heading: string;
  items: string[];
  sectionHref?: string;
}) {
  return (
    <div>
      <h5 className="m-0 mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {heading}
      </h5>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {items.map((it) => (
          <li key={it}>
            <a
              href={sectionHref ?? "#"}
              className="text-[14.5px] text-bone-dim transition-colors hover:text-mint"
            >
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
