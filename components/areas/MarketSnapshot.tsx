import type { ReactNode } from "react";

export interface SnapshotStat {
  label: string;
  value: string;
  note?: string;
}

interface MarketSnapshotProps {
  city: string;
  asOf?: string;
  stats: SnapshotStat[];
  footnote?: ReactNode;
}

const DEFAULT_FOOTNOTE = (
  <>
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
  </>
);

export default function MarketSnapshot({
  city,
  asOf = "mid-2026",
  stats,
  footnote,
}: MarketSnapshotProps) {
  const colsClass =
    stats.length <= 2
      ? "grid-cols-2"
      : stats.length === 3
        ? "grid-cols-2 md:grid-cols-3"
        : "grid-cols-2 md:grid-cols-4";

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
          {city} Market Snapshot
        </h3>
        <span
          className="text-xs"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
        >
          as of {asOf}
        </span>
      </div>

      <div className={`grid ${colsClass} gap-6`}>
        {stats.map((stat) => (
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
        {footnote ?? DEFAULT_FOOTNOTE}
      </p>
    </div>
  );
}
