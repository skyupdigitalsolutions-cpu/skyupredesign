import React from "react";
import { Check, BarChart2, Cpu, Layout, Eye } from "lucide-react";

const BRAND = "#0037CA";
const BRAND_LIGHT = "#EEF2FF";
const BRAND_BORDER = "#c7d2fe";

const outcomes = [
  {
    title: "Improved search engine positioning",
    desc: "Leading to customers who are ready to buy.",
  },
  {
    title: "Quality leads over high-volume dead ends",
    desc: "Enquiries that are worth your team's time.",
  },
  {
    title: "Higher conversion rates",
    desc: "Turning more of your current traffic into paying customers.",
  },
  {
    title: "Higher ROI on advertising",
    desc: "Every rupee you spend works harder for your business.",
  },
  {
    title: "Quicker customer acquisition",
    desc: "Smarter targeting and automation cuts the time to close.",
  },
  {
    title: "Streamlined operational workflows",
    desc: "Returning time to your team to focus on what matters.",
  },
  {
    title: "Sustainable digital growth",
    desc: "Built on strategy, not short-cuts.",
  },
];

const pillars = [
  {
    icon: <BarChart2 size={18} strokeWidth={1.8} />,
    title: "Results-driven marketing",
    desc: "Every campaign is tied to a business outcome. KPIs from day one — traffic quality, lead volume, cost per acquisition, and revenue impact. We track what matters and report it honestly.",
  },
  {
    icon: <Cpu size={18} strokeWidth={1.8} />,
    title: "AI-powered execution",
    desc: "AI automation and machine learning make campaigns more intelligent over time. Automated lead follow-up. Predictive audience targeting. Our systems run 24/7 — without you lifting a finger.",
  },
  {
    icon: <Layout size={18} strokeWidth={1.8} />,
    title: "Conversion-focused experiences",
    desc: "We build websites, landing pages, and funnels tailor-made to convert visitors into customers — because there's no point getting traffic if they leave without taking action.",
  },
  {
    icon: <Eye size={18} strokeWidth={1.8} />,
    title: "Transparent communication",
    desc: "Crystal-clear reporting, honest updates, and open access to your campaign data. No smoke and mirrors. No confusing dashboards to mask poor performance. Just honest answers.",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative bg-white">
      {/* Palette-only background glows */}

      <style>{`
        @keyframes vpFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vp-reveal { animation: vpFadeUp .6s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* ── INTRO + OUTCOMES ── */}
      <div className="relative px-6 py-16 lg:px-[120px] bg-blue-50/50 lg:py-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Intro */}
          <div className="vp-reveal lg:sticky lg:top-28">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ background: BRAND_LIGHT, color: BRAND }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: BRAND }}
              />
              Why Skyup
            </span>

            <h2 className="mt-5 max-w-[560px] text-3xl font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.6rem]">
              Helping brands turn digital marketing into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037CA] via-[#0037CA] to-[#ffb950]">consistent revenue</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed">
              Skyup Digital Solutions focuses on what actually matters —
              qualified leads, increased conversion rates, better ROI, and
              sustainable growth.
            </p>
            <p className="mt-4 max-w-[560px] text-base leading-relaxed ">
              We're a full-service agency combining creative execution with
              AI-powered automation, advanced analytics, and conversion-focused
              strategy. The result: a marketing engine that works harder, spends
              smarter, and grows your business on a foundation that lasts.
            </p>
          </div>

          {/* Outcomes card */}
          <div
            className="vp-reveal rounded-3xl bg-white border border-gray-200 p-6 sm:p-8"
            style={{ borderColor: `${BRAND_BORDER}66`, animationDelay: ".1s" }}
          >
            <p
              className="mb-6 text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND }}
            >
              What working with us looks like
            </p>

            <ul className="flex flex-col">
              {outcomes.map((item) => (
                <li
                  key={item.title}
                  className="group flex items-start gap-3.5 rounded-2xl px-3 py-3 transition-colors duration-200 hover:bg-gray-100"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-200 group-hover:scale-110"
                    style={{ background: BRAND }}
                  >
                    <Check size={13} strokeWidth={3} color="#fff" />
                  </span>
                  <span className="text-sm leading-relaxed">
                    <span className="font-semibold text-neutral-900">
                      {item.title}
                    </span>
                    <span> — {item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── PILLARS ── */}
      <div className="relative px-6 pb-20 lg:px-[120px] lg:py-12">
        <div className="mb-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: BRAND }}
          >
            How we deliver
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Our four pillars
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="vp-reveal group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-[0_24px_50px_-24px_rgba(0,55,202,0.15)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* faded index */}
              <span
                className="pointer-events-none absolute right-4 top-2 select-none text-6xl font-bold leading-none opacity-[0.06]"
                style={{ color: BRAND }}
              >
                0{i + 1}
              </span>

              {/* top accent grows on hover */}
              <span
                className="absolute left-0 top-0 h-1 w-0 rounded-r-full transition-all duration-300 group-hover:w-full"
                style={{ background: BRAND }}
              />

              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{ background: BRAND_LIGHT, color: BRAND }}
                >
                  {p.icon}
                </span>
                <span className="text-lg font-semibold text-neutral-900">
                  {p.title}
                </span>
              </div>

              <p className="text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
