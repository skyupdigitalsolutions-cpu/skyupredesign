// src/components/service/ResultsAndProcess.jsx
import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Workflow } from "lucide-react";

/* ─────────────────────────────  STATS  ───────────────────────────── */

const STATS = [
  { value: 80, suffix: "+", label: "Served clients throughout India" },
  {
    value: 4.2,
    decimals: 1,
    suffix: "x",
    label: "Average ROAS for paid campaigns",
  },
  { value: 3, suffix: "x", label: "Average growth of organic traffic" },
  { value: 60, suffix: "%", label: "Time saved with Ops AI automation" },
  { value: 98, suffix: "%", label: "Client retention ratio" },
];

function useCountUp(target, decimals, run) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return decimals ? n.toFixed(decimals) : Math.round(n);
}

function Stat({ value, decimals, suffix, label, run }) {
  const display = useCountUp(value, decimals, run);
  return (
    <div className="px-4 text-center lg:px-6">
      <div className="text-black text-4xl font-extrabold tracking-tight sm:text-5xl">
        {display}
        {suffix}
      </div>
      <p className="mx-auto mt-3 max-w-[14rem] text-sm font-medium leading-relaxed text-slate-500">
        {label}
      </p>
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white px-6 py-12 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0037CA]/15 bg-[#0037CA]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0037CA]">
            <TrendingUp size={13} />
            Results that speak
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Numbers we're{" "}
            <span className="bg-gradient-to-r from-[#0037CA] to-[#FA9F43] bg-clip-text text-transparent">
              proud to share
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Across 80+ clients in Bangalore and beyond — these are averages, not
            cherry-picked wins.
          </p>
        </div>

        {/* soft single panel, numbers split by thin dividers */}
        <div
          ref={ref}
          className="mt-14 rounded-[2rem] border border-slate-100 bg-gradient-to-br from-[#ebebf7] to-[#ffff] p-8 shadow-[0_20px_60px_-30px_rgba(0,55,202,0.25)] sm:p-12"
        >
          <div className="grid gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-slate-200/80">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} run={run} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  PROCESS  ──────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    desc: "We understand your goals, the gaps that exist, and what success looks like.",
  },
  {
    n: "02",
    title: "Audit & strategy",
    desc: "We audit your current setup and create a targeted, ROI-first plan.",
  },
  {
    n: "03",
    title: "Execution sprint",
    desc: "Your team ships fast. No committees. No bottlenecks.",
  },
  {
    n: "04",
    title: "Reporting & review",
    desc: "Weekly calls and live dashboards. Know the numbers, always.",
  },
  {
    n: "05",
    title: "Scale & optimise",
    desc: "Double down on what works. Cut what won't. Every month.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-slate-50/70 px-6 py-12 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0037CA]/15 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0037CA]">
            <Workflow size={13} />
            How we work
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Our 5-step{" "}
            <span className="bg-gradient-to-r from-[#0037CA] to-[#FA9F43] bg-clip-text text-transparent">
              engagement process
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            No surprises. No guesswork. You know exactly what's happening and
            why at every stage.
          </p>
        </div>

        {/* horizontal stepper */}
        <div className="relative mt-16">
          {/* connecting line (desktop only) */}
          <span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-slate-200 lg:block"
          />

          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="group relative flex flex-col items-center text-center"
              >
                {/* light number badge */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <span className="bg-gradient-to-r from-[#0037CA] to-[#FA9F43] bg-clip-text text-xl font-extrabold text-transparent">
                    {s.n}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────── */

export default function ResultsAndProcess() {
  return (
    <>
      <StatsSection />
      <ProcessSection />
    </>
  );
}
