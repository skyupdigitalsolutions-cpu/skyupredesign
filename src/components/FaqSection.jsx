"use client";

import React, { useState } from "react";
import { Plus, Sparkles, ChevronDown } from "lucide-react";

const BRAND = "#0037CA";

/* Default content — used when the matching prop isn't passed. */
export const DEFAULT_FAQS = [
  {
    q: "Why is my website getting traffic but not generating leads?",
    a: "This usually happens when the website lacks conversion-focused design, clear messaging, strong CTAs, or a proper user experience strategy.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO performance depends on your industry, competition, and website condition, but most businesses begin seeing measurable improvements within 3 to 6 months.",
  },
  {
    q: "Why are my Google Ads not generating quality leads?",
    a: "Poor audience targeting, weak landing pages, incorrect keywords, and unoptimized campaigns often lead to low-quality leads and wasted ad spend.",
  },
  {
    q: "Why should businesses invest in PPC advertising?",
    a: "PPC helps businesses generate fast, targeted traffic, quality leads, and measurable ROI through paid ads.",
  },
  {
    q: "Why is my business not ranking on Google locally?",
    a: "Your business may lack local SEO optimization, Google Business Profile optimization, location-based content, or consistent online signals.",
  },
  {
    q: "How can marketing automation save time for my business?",
    a: "Automation streamlines repetitive tasks like lead follow-ups, email campaigns, CRM updates, and customer communication.",
  },
  {
    q: "Can AI automation improve customer response time?",
    a: "Yes. AI-powered systems can automate responses, qualify leads instantly, and improve customer communication efficiency.",
  },
  {
    q: "What does UI/UX design do for a business website?",
    a: "UI/UX design improves user experience, increases engagement, and helps convert more visitors into customers.",
  },
  {
    q: "How can machine learning benefit a business?",
    a: "Machine learning helps businesses automate processes, analyze customer behavior, and make smarter data-driven decisions.",
  },
  {
    q: "How do I know if my digital marketing campaigns are actually working?",
    a: "Tracking metrics like leads, conversions, ROI, traffic quality, and customer acquisition costs helps measure campaign performance effectively.",
  },
];

export default function FaqSection({
  title = "Questions Businesses Often Ask Us",
  faqs = DEFAULT_FAQS,
  visibleCount = 5, // questions shown before "View more"
  defaultOpenIndex = 0,
}) {
  const [open, setOpen] = useState(defaultOpenIndex);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, visibleCount);
  const hidden = faqs.length - visibleCount;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-blue-50/60 to-white px-6 py-16 lg:py-12 lg:px-[120px]">
      {/* faint glow behind the heading */}
      <div className="flex gap-20 items-start">
        {/* header */}
        <div className="mb-12 w-full max-w-xs lg:max-w-xl flex-shrink-0">
          <h2 className="mt-5 lg:text-5xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[2.6rem]">
            {title}
          </h2>
        </div>

        {/* accordion */}
        <div className="space-y-3.5">
          {visibleFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-transparent shadow-[0_20px_45px_-22px_rgba(0,55,202,0.4)]"
                    : "border-neutral-200 hover:border-[#c7d2fe]"
                }`}
              >
                {/* gradient accent bar on the open item */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 origin-top transition-transform duration-300 ${
                    isOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                  style={{ background: `linear-gradient(${BRAND}, #2c5cff)` }}
                />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  {/* number badge */}
                  <span
                    className={`grid h-9 w-9 flex-none place-items-center rounded-xl text-sm font-bold transition-all duration-300 ${
                      isOpen ? "text-white" : "text-[#0037CA]"
                    }`}
                    style={
                      isOpen
                        ? {
                            background: `linear-gradient(135deg, ${BRAND}, #2c5cff)`,
                          }
                        : { background: "#EEF2FF" }
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-[15px] font-semibold sm:text-base ${
                      isOpen ? "text-[#0037CA]" : "text-neutral-900"
                    }`}
                  >
                    {f.q}
                  </span>

                  <span
                    className={`grid h-7 w-7 flex-none place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#0037CA] text-white"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <Plus size={16} strokeWidth={2.4} />
                  </span>
                </button>

                {/* animated answer */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-[68px] pr-6 text-sm leading-relaxed  sm:pb-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* view more / less */}
          {hidden > 0 && (
            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setShowAll((v) => !v);
                  if (showAll) setOpen((o) => (o >= visibleCount ? 0 : o));
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-white px-6 py-3 text-sm font-semibold text-[#0037CA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF2FF]"
              >
                {showAll ? "Show less" : `View ${hidden} more questions`}
                <ChevronDown
                  size={17}
                  strokeWidth={2.4}
                  className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
