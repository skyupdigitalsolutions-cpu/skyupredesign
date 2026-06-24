"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

const BRAND = "#0037CA";

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
  visibleCount = 5,
  defaultOpenIndex = 0,
}) {
  const [open, setOpen] = useState(defaultOpenIndex);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, visibleCount);
  const hidden = faqs.length - visibleCount;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-blue-50/60 to-white px-4 py-12 sm:px-6 lg:py-16 lg:px-[120px]">

      {/* ── Layout: stacked on mobile, side-by-side on desktop ── */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 lg:items-start">

        {/* Header */}
        <div className="w-full lg:max-w-xs lg:flex-shrink-0 xl:max-w-xl">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        {/* Accordion */}
        <div className="w-full min-w-0 space-y-3">
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
                {/* Gradient accent bar */}
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
                  className="flex w-full items-start gap-3 px-4 py-4 text-left sm:items-center sm:gap-4 sm:px-6 sm:py-5"
                >
                  {/* Number badge */}
                  <span
                    className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-xl text-xs font-bold transition-all duration-300 sm:mt-0 sm:h-9 sm:w-9 sm:text-sm"
                    style={
                      isOpen
                        ? { background: `linear-gradient(135deg, ${BRAND}, #2c5cff)`, color: "#fff" }
                        : { background: "#EEF2FF", color: BRAND }
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-sm font-semibold leading-snug sm:text-[15px] sm:leading-normal md:text-base ${
                      isOpen ? "text-[#0037CA]" : "text-neutral-900"
                    }`}
                  >
                    {f.q}
                  </span>

                  {/* Plus / close icon */}
                  <span
                    className={`mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full transition-all duration-300 sm:mt-0 sm:h-7 sm:w-7 ${
                      isOpen
                        ? "rotate-45 bg-[#0037CA] text-white"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <Plus size={14} strokeWidth={2.4} className="sm:hidden" />
                    <Plus size={16} strokeWidth={2.4} className="hidden sm:block" />
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* On mobile: left-pad to align under question text (badge 32px + gap 12px = 44px) */}
                    <p className="pb-4 pl-[44px] pr-4 text-sm leading-relaxed text-neutral-600 sm:pb-6 sm:pl-[68px] sm:pr-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* View more / less */}
          {hidden > 0 && (
            <div className="mt-6 flex justify-center sm:mt-9">
              <button
                type="button"
                onClick={() => {
                  setShowAll((v) => !v);
                  if (showAll) setOpen((o) => (o >= visibleCount ? 0 : o));
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-white px-5 py-2.5 text-sm font-semibold text-[#0037CA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF2FF] sm:px-6 sm:py-3"
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