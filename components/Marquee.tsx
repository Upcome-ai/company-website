const items = [
  "Product strategy",
  "Technical planning",
  "UX / UI design",
  "Frontend",
  "Backend",
  "Mobile apps",
  "AI agents",
  "LLM integrations",
  "Web3",
  "Smart contracts",
  "Wallet integrations",
  "DevOps",
  "Cloud infrastructure",
  "QA & testing",
  "Monitoring",
  "Payments",
  "Third-party integrations",
  "Data dashboards",
  "Maintenance",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      className="caps-fade relative overflow-hidden border-y border-navy-line py-7"
      aria-hidden="true"
    >
      <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-[13px] tracking-[0.04em] text-bone-dim">
        {doubled.map((it, i) => (
          <span key={i} className="caps-item inline-flex items-center">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
