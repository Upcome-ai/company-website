import { ArrowRight } from "./Icons";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative py-[clamp(80px,12vw,160px)] text-center"
    >
      <div className="mx-auto w-full max-w-page page-pad">
        <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-mint">
          ◆ Have something to build?
        </span>
        <h2 className="display-final mx-auto mb-7 mt-3 max-w-[12ch] text-bone">
          Have something <em className="italic text-mint">ambitious</em> to
          build?
        </h2>
        <p className="mx-auto mb-9 max-w-[56ch] text-[18px] leading-[1.55] text-bone-dim">
          Tell us what you are working on. We&apos;ll help you understand what
          to build first, how to build it, and how to get it into users&apos;
          hands.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 rounded-full bg-mint px-7 py-4 text-[16px] font-medium text-ink transition-all hover:bg-[#79EBD3]"
          >
            Book a strategy call
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </a>
          {/* <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-7 py-4 text-[16px] font-medium text-bone transition-all hover:border-bone/60 hover:bg-bone/[0.04]"
          >
            See selected work
          </a> */}
        </div>
        <p className="mt-8 font-mono text-[13px] text-bone-dim">
          Or email{" "}
          <a
            href="mailto:contact@upcome.ai"
            className="text-bone transition-colors hover:text-mint"
          >
            contact@upcome.ai
          </a>
        </p>
      </div>
    </section>
  );
}
