interface Stat {
  label: string;
  value: string;
  note?: string;
}

const STATS: Stat[] = [
  { label: "Median Sale Price",         value: "~$525,000", note: "3 months ending May 2026; up ~4% YoY" },
  { label: "Avg. Days on Market",       value: "14 days",   note: "Among the fastest in Kootenai County" },
  { label: "Months of Supply",          value: "1.85 mo.",  note: "Single-family homes, early 2026" },
  { label: "Median Price / Sq. Ft.",    value: "~$283",     note: "" },
];

export default function MarketSnapshot() {
  return (
    <div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid rgba(196,185,172,0.35)",
      }}
    >
      <div className="flex items-baseline gap-3 mb-6">
        <h3
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
        >
          Post Falls Market Snapshot
        </h3>
        <span
          className="text-xs"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
        >
          as of mid-2026
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p
              className="text-2xl font-bold mb-1"
              style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
            >
              {stat.value}
            </p>
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-1"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
            >
              {stat.label}
            </p>
            {stat.note && (
              <p className="text-xs leading-snug" style={{ color: "var(--color-muted)" }}>
                {stat.note}
              </p>
            )}
          </div>
        ))}
      </div>

      <p
        className="mt-6 text-xs italic leading-relaxed"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
      >
        Figures reflect the most recent available data and are updated periodically.
        For a current, address-specific read,{" "}
        <a
          href="/contact"
          className="underline hover:opacity-80 transition-opacity"
          style={{ color: "var(--color-primary)" }}
        >
          get in touch
        </a>
        .
      </p>
    </div>
  );
}
