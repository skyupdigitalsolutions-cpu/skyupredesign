import React from "react";

// PPC-only proof section: one or more result tables, each with a coloured
// header band, a scrollable data table, and a stats footer strip.
// Rendered by ServiceDetail ONLY when a service defines `campaignResults`,
// so it appears on Performance Marketing and nowhere else.

const THEME = {
  blue: { band: "#0B1B3A", eyebrow: "#7CA0FF", footerBg: "#EFF4FF", footerText: "#1D4ED8" },
  green: { band: "#0B1F14", eyebrow: "#5FD08B", footerBg: "#ECFDF3", footerText: "#16A34A" },
};

// Per-cell colours so each column can match the screenshots.
const CELL_COLORS = { blue: "#1D4ED8", green: "#16A34A", amber: "#D97706" };

function ResultTable({ table }) {
  const t = THEME[table.theme] || THEME.blue;
  const cols = table.columns || [];
  const rows = table.rows || [];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_34px_-26px_rgba(11,26,59,0.5)]">
      {/* Title band */}
      <div className="px-6 py-5 lg:px-8" style={{ background: t.band }}>
        {table.eyebrow && (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: t.eyebrow }}>
            {table.eyebrow}
          </p>
        )}
        <h3 className="mt-1 text-[22px] font-bold leading-tight text-white sm:text-[26px]">
          {table.title}
        </h3>
        {table.note && <p className="mt-1 text-[12px] italic text-white/55">{table.note}</p>}
      </div>

      {/* Scrollable data table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="bg-slate-900 text-white">
              {cols.map((c) => (
                <th key={c.key} className="whitespace-nowrap px-4 py-3 font-semibold">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 ? "bg-slate-50/70" : "bg-white"}>
                {cols.map((c, ci) => {
                  const color = c.color ? CELL_COLORS[c.color] : undefined;
                  return (
                    <td
                      key={c.key}
                      className={`whitespace-nowrap px-4 py-3 ${
                        ci === 0 ? "font-semibold text-slate-900" : "text-slate-600"
                      }`}
                      style={color ? { color, fontWeight: 600 } : undefined}
                    >
                      {row[c.key]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats footer strip */}
      {table.footer?.length > 0 && (
        <div className="grid grid-cols-2 gap-px sm:grid-cols-4" style={{ background: "#E5E7EB" }}>
          {table.footer.map((f, i) => (
            <div key={i} className="px-4 py-5 text-center" style={{ background: t.footerBg }}>
              <div className="text-[22px] font-extrabold leading-none" style={{ color: t.footerText }}>
                {f.value}
              </div>
              <div className="mt-1.5 text-[11px] font-medium text-slate-500">{f.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CampaignResults({
  eyebrow = "PROVEN RESULTS",
  title,
  subtitle,
  tables = [],
}) {
  if (!tables.length) return null;
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#0037CA]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight text-[#1B2440] sm:text-[40px]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{subtitle}</p>
          )}
        </div>

        <div className="mt-12 space-y-10">
          {tables.map((tbl, i) => (
            <ResultTable key={i} table={tbl} />
          ))}
        </div>
      </div>
    </section>
  );
}