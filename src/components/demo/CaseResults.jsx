import React from "react";


export default function CaseResults({ title, items = [], accentColor = "#0037CA" }) {
  if (!items.length) return null;
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h2 className="mx-auto max-w-4xl text-center text-[30px] font-bold leading-tight tracking-tight text-[#1B2440] sm:text-[40px]">
            {title}
          </h2>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_34px_-26px_rgba(11,26,59,0.5)] sm:p-8"
            >
              <h3 className="text-[20px] font-bold text-slate-900">{c.name}</h3>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                {(c.metrics || []).map((m, j) => (
                  <div key={j}>
                    <div className="text-[12px] font-semibold uppercase tracking-wide">
                      {m.label}
                    </div>
                    <div
                      className="mt-1 text-[26px] font-extrabold leading-none text-[#0037CA]"
                      
                    >
                      {m.value}
                    </div>
                    {m.sub && (
                      <div className="mt-1 text-[12px] leading-snug">
                        {m.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}