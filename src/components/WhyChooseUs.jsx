import React, { useEffect, useRef, useState } from "react";
import {
  Compass,
  Cpu,
  TrendingUp,
  Layers,
  ShieldCheck,
  Sprout,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const BRAND = "#0037CA";
const BRAND_LIGHT = "#EEF2FF";
const ACCENT = "#FF6B2B";

const steps = [
  {
    icon: Compass,
    title: "Strategy Comes First",
    hint: "Research before tactics",
    desc: "Before we launch a campaign, we work to get to know your business, your customers, and your competitors inside out. Our recommendations are based on research and customized to your goals—not pulled from a one-size-fits-all playbook.",
  },
  {
    icon: Cpu,
    title: "AI-Powered, Start to Finish",
    hint: "Automation that works for you",
    desc: "We don’t use AI and automation as a buzzword but as a practical tool to get better results. Our systems help you target audiences smarter, automate your reporting, and manage leads using AI so your marketing is more efficient and your results more predictable.",
  },
  {
    icon: TrendingUp,
    title: "Results Over Vanity Metrics",
    hint: "Outcomes, not impressions",
    desc: "Impressions and reach are good. Better leads and revenue. We’re a digital marketing company built around measurable outcomes. We set real performance targets from the outset and hold ourselves accountable to them.",
  },
  {
    icon: Layers,
    title: "Multi-Channel, One Roof",
    hint: "Every channel, one team",
    desc: "SEO, paid advertising, social media, email, AI automation, web development, and design. All managed by specialists. All managed by one team. No more juggling with multiple agencies or losing work in-between.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by Default",
    hint: "Open reporting, always",
    desc: "You will know exactly how your campaigns are performing, where your budget is going, and what we are doing about it. We are open and honest in our reporting. We are consistent in our messaging. We don’t hide behind jargon.",
  },
  {
    icon: Sprout,
    title: "Built for Long-Term Growth",
    hint: "Growth that compounds",
    desc: "We don’t care about fast wins that disappear. All the strategies we build are designed to compound over time-delivering sustainable digital growth that serves your business for years, not quarters.",
  },
];

export default function WhyChooseUs() {
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState(() => new Set());
  const [progress, setProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  // Reveal each step as it enters the viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            setVisible((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.35 },
    );
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Fill the connecting line based on scroll position
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = timelineRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (vh * 0.5 - rect.top) / rect.height;
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Measure where the last node sits so the line ends there (no trailing tail)
  useEffect(() => {
    const measure = () => {
      const container = timelineRef.current;
      const last = itemRefs.current[itemRefs.current.length - 1];
      if (!container || !last) return;
      const cTop = container.getBoundingClientRect().top;
      const lTop = last.getBoundingClientRect().top;
      // end at the center of the last node (h-12 = 48px → +24)
      setLineHeight(lTop - cTop + 24);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (timelineRef.current) ro.observe(timelineRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-10 lg:px-[120px] lg:py-12">
      {/* soft background glows */}

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ background: BRAND_LIGHT, color: BRAND }}
          >
            <Sparkles size={13} />
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.7rem]">
            Why businesses choose{" "}
            <span style={{ color: BRAND }}>Skyup Digital Solutions</span>
          </h2>
          <p className="mt-5 text-md leading-relaxed">
            There are plenty of digital marketing agencies out there making big
            promises. What’s harder to find is a team that backs those promises
            with genuine expertise, transparent reporting, and a real commitment
            to your growth. This is what makes Skyup Digital Solutions
            different.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* base line */}
          <div
            className="absolute left-6 top-2 w-px -translate-x-1/2 bg-[#c7d2fe]/60"
            style={{ height: lineHeight ? `${lineHeight - 8}px` : undefined }}
          />
          {/* progress fill line */}
          <div
            className="absolute left-6 top-2 w-[2px] -translate-x-1/2 rounded-full"
            style={{
              height: `${progress * Math.max(0, lineHeight - 8)}px`,
              background: `linear-gradient(${BRAND}, #2c5cff)`,
            }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isVis = visible.has(i);
            return (
              <div
                key={s.title}
                data-index={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`relative flex gap-5 pb-10 last:pb-0 sm:gap-7 ${
                  isVis
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transition: "opacity .7s ease, transform .7s ease" }}
              >
                {/* node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all duration-500"
                    style={
                      isVis
                        ? {
                            background: `linear-gradient(135deg, ${BRAND}, #2c5cff)`,
                            color: "#fff",
                            boxShadow: "0 10px 24px -8px rgba(0,55,202,0.7)",
                          }
                        : {
                            background: "#fff",
                            color: BRAND,
                            border: "2px solid #c7d2fe",
                          }
                    }
                  >
                    0{i + 1}
                  </div>
                </div>

                {/* card */}
                <div className="group flex-1 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] shadow-md sm:p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ background: BRAND_LIGHT, color: BRAND }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <div>
                      {/* <p
                        className="text-[11px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: ACCENT }}
                      >
                        {s.hint}
                      </p> */}
                      <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-md leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}