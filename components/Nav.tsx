import { ArrowRight, BrandMark, ChevronDown } from "./Icons";

const links = [
  { href: "#services", label: "Services", caret: true },
  { href: "#solutions", label: "Solutions", caret: true },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="nav-wrap">
      <div className="mx-auto w-full max-w-page page-pad">
        <nav
          aria-label="Primary"
          className="grid grid-cols-[auto_1fr_auto] items-center gap-8 py-4"
        >
          <a
            href="#"
            className="flex items-center gap-3 font-serif text-[26px] tracking-[-0.01em] text-bone"
          >
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-navy shadow-[inset_0_0_0_1px_rgba(242,237,226,0.06)]">
              <BrandMark className="h-[22px] w-[22px]" />
            </span>
            Upcome
          </a>

          <div className="hidden justify-self-center md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm text-bone/80 transition-all hover:bg-bone/[0.06] hover:text-bone"
              >
                {l.label}
                {l.caret && <ChevronDown className="h-3 w-3 opacity-60" />}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#services"
              className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-5 py-3 text-[15px] font-medium text-bone transition-all hover:border-bone/60 hover:bg-bone/[0.04]"
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-mint px-5 py-3 text-[15px] font-medium text-ink transition-all hover:bg-[#79EBD3]"
            >
              Book a strategy call
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
