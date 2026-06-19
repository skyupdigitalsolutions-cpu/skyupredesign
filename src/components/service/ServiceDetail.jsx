// src/components/service/ServiceDetail.jsx
// FIXED TEMPLATE for every service. Each service in @/data/services fills only
// the blocks it needs; anything absent is skipped. The ORDER below is fixed by
// the template, not by the order of keys in your data object.
//
// Notes:
// - Data schema is UNCHANGED. Every field the previous template consumed is read
//   identically here, so existing (and newly pasted) per-service copy just works.
// - Visual system is brand-blue led; the per-service `accent` is a supporting tint.
// - The stat ribbon counts up from 0 when it scrolls into view (respects
//   prefers-reduced-motion). It preserves any prefix/suffix in the value string
//   ("1600+", "Rs 999/mo", "3.4x", "14 days", "Rs 1 Cr+", "40%" all work).
import React, { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { SERVICES } from "@/data/services";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Quote, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

// ── Brand system ──────────────────────────────────────────────────────────
const BRAND = {
  ink: "#0B1A3B", // near-navy for headings
  body: "#475569", // slate-600 body
  blue: "#0037CA", // primary brand blue
  blueDeep: "#021A5E", // hero gradient floor
  soft: "#EEF3FF", // light blue wash
  line: "#E2E8F5", // hairline
};

export default function ServiceDetail() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div>
        <Header />
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="text-slate-700">Service not found.</p>
          <a
            href="/service"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-[#0037CA] no-underline"
          >
            <ArrowLeft size={16} /> Back to all services
          </a>
        </section>
        <Footer />
      </div>
    );
  }

  const {
    name,
    Icon,
    tagline,
    from,
    to,
    accent,
    heroHeadline,
    heroSubline,
    overview,
    stats = [],
    statsTitle,
    painPoints,
    offerings,
    items = [],
    audience,
    process = [],
    processIntro,
    benefits = [],
    benefitsTitle,
    whyChooseUs,
    tools = [],
    toolsTitle,
    toolsNote,
    platforms = [],
    platformsTitle,
    platformsNote,
    integrations = [],
    integrationsTitle,
    pricing = [],
    pricingTitle,
    caseStudy,
    caseStudies,
    testimonial,
    testimonials,
    faqs = [],
    faqTitle,
    cta,
    related,
  } = service;

  // Derived data ────────────────────────────────────────────────────────────
  const tint = { backgroundColor: `${accent}1A`, color: accent };
  const overviewParas = overview
    ? Array.isArray(overview)
      ? overview
      : [overview]
    : [];
  const statsAreCards = stats.length > 0 && typeof stats[0] === "object";
  const sentenceStats = stats.length > 0 && !statsAreCards;
  const richBenefits = benefits.length > 0 && typeof benefits[0] !== "string";
  const richBenefitList = richBenefits ? benefits : [];
  const plainBenefitList = !richBenefits ? benefits : [];
  const caseList = caseStudies?.length
    ? caseStudies
    : caseStudy
      ? [caseStudy]
      : [];
  const tList = testimonials?.length
    ? testimonials
    : testimonial
      ? [testimonial]
      : [];

  const relatedCards = (related || [])
    .map((r) => {
      const s = SERVICES.find((x) => x.slug === r.slug);
      return s ? { ...s, desc: r.desc } : null;
    })
    .filter(Boolean);
  const others = SERVICES.filter((s) => s.slug !== slug);

  const hasOfferings = offerings?.points?.length > 0;
  const hasItems = !hasOfferings && items.length > 0;

  // ── Reusable bits ─────────────────────────────────────────────────────────
  const SectionHead = ({ eyebrow, children, sub }) => (
    <header className="mb-7 max-w-3xl">
      {eyebrow ? (
        <div
          className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em]"
          style={{ color: accent }}
        >
          <span
            className="h-[2px] w-6 rounded-full"
            style={{ background: accent }}
          />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-[#0B1A3B] sm:text-[30px]">
        {children}
      </h2>
      {sub ? (
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{sub}</p>
      ) : null}
    </header>
  );

  const SECTION = "scroll-mt-28 lg:scroll-mt-32";

  return (
    <div className="bg-white">
      <Header />

      {/* ── Hero — brand-blue, accent only as a small badge ─────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 120% at 80% -10%, ${BRAND.blue} 0%, #001A66 55%, ${BRAND.blueDeep} 100%)`,
          }}
        />
        {/* subtle dot grid for texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
        {/* faint accent glow so each service has a whisper of its own hue */}
        <div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: accent }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-16 lg:px-8 lg:pb-28">
          <nav aria-label="Breadcrumb" className="text-[13px]">
            <ol className="flex items-center gap-2 text-white/55">
              <li>
                <a href="/" className="no-underline hover:text-white">
                  Home
                </a>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/service" className="no-underline hover:text-white">
                  Services
                </a>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-semibold text-white">
                {name}
              </li>
            </ol>
          </nav>


          <h1 className="mt-5 max-w-4xl text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[44px] lg:text-[54px]">
            {heroHeadline || name}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/80 sm:text-[18px]">
            {heroSubline || tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0037CA] no-underline shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Free Strategy Call
              <ArrowRight size={17} strokeWidth={2.4} />
            </a>
            {pricing.length > 0 ? (
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white no-underline ring-1 ring-white/25 transition-colors hover:bg-white/10"
              >
                See pricing
              </a>
            ) : (
              <a
                href="/service"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white no-underline ring-1 ring-white/25 transition-colors hover:bg-white/10"
              >
                All services
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Stat ribbon (value/label cards) — counts up, overlaps the hero ── */}
      {statsAreCards && (
        <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-5 text-center shadow-[0_18px_40px_-22px_rgba(11,26,59,0.45)] sm:p-6"
              >
                <div
                  className="text-[28px] font-extrabold leading-none sm:text-[34px]"
                  style={{ color: BRAND.blue }}
                >
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-[12.5px] font-semibold text-slate-600">
                  {s.label}
                </div>
                {s.sub ? (
                  <div className="mt-1 text-[11px] text-slate-400">{s.sub}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-16">
          {/* Overview — lead paragraph then body */}
          {overviewParas.length > 0 && (
            <div id="overview" className={SECTION}>
              <SectionHead eyebrow="Overview">
                {`What ${name} actually does for you`}
              </SectionHead>
              <p className="max-w-3xl text-[18px] font-medium leading-[1.65] text-[#0B1A3B] sm:text-[20px]">
                {overviewParas[0]}
              </p>
              {overviewParas.length > 1 && (
                <div className="mt-4 space-y-4">
                  {overviewParas.slice(1).map((p, i) => (
                    <p
                      key={i}
                      className="max-w-3xl text-[15.5px] leading-[1.75] text-slate-600 sm:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sentence-style stats panel */}
          {sentenceStats && (
            <div id="stats" className={SECTION}>
              <SectionHead eyebrow="By the numbers">
                {statsTitle || "Key stats"}
              </SectionHead>
              <ul
                className="grid grid-cols-1 gap-3 rounded-3xl border border-slate-100 p-6 sm:grid-cols-2"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              >
                {stats.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white"
                      style={{ color: accent }}
                    >
                      <Sparkles size={13} strokeWidth={2.4} />
                    </span>
                    <span className="text-[14px] leading-relaxed text-[#0B1A3B]">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pain points — problem card + accent solution footer */}
          {painPoints?.points?.length > 0 && (
            <div id="challenges" className={SECTION}>
              <SectionHead eyebrow="The problem" sub={painPoints.intro}>
                {painPoints.title}
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {painPoints.points.map((p) => (
                  <div
                    key={p.title}
                    className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(11,26,59,0.04)]"
                  >
                    <div className="p-5">
                      <div className="text-[15px] font-bold text-[#0B1A3B]">
                        {p.title}
                      </div>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                        {p.desc}
                      </p>
                    </div>
                    {p.solution ? (
                      <div
                        className="flex gap-2 px-5 py-4"
                        style={{ backgroundColor: `${accent}0F` }}
                      >
                        <ArrowRight
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: accent }}
                        />
                        <span className="text-[14px] font-medium leading-relaxed text-[#0B1A3B]">
                          {p.solution}
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Offerings — accent top-bar reveal; or simple items */}
          {(hasOfferings || hasItems) && (
            <div id="capabilities" className={SECTION}>
              <SectionHead eyebrow="What you get">
                {hasOfferings
                  ? offerings.title || "What we provide"
                  : "What's included"}
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {hasOfferings
                  ? offerings.points.map((o) => (
                      <div
                        key={o.title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_2px_rgba(11,26,59,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_12px_30px_-12px_rgba(11,26,59,0.18)]"
                      >
                        <span
                          className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: accent }}
                          aria-hidden
                        />
                        <div className="flex items-start gap-3">
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                            style={tint}
                          >
                            <Check size={16} strokeWidth={3} />
                          </span>
                          <div>
                            <div className="text-[15px] font-bold text-[#0B1A3B]">
                              {o.title}
                            </div>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                              {o.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  : items.map((it) => (
                      <div
                        key={it}
                        className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_1px_2px_rgba(11,26,59,0.04)]"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={tint}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-700">{it}</span>
                      </div>
                    ))}
              </div>
            </div>
          )}

          {/* Audience — accent left-rail cards */}
          {audience?.points?.length > 0 && (
            <div id="audience" className={SECTION}>
              <SectionHead eyebrow="Who it's for">
                {audience.title || "Who it's for"}
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {audience.points.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_2px_rgba(11,26,59,0.04)]"
                    style={{ borderLeft: `4px solid ${accent}` }}
                  >
                    <div className="text-[15px] font-bold text-[#0B1A3B]">
                      {a.title}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process — numbered dashed timeline */}
          {process.length > 0 && (
            <div id="process" className={SECTION}>
              <SectionHead eyebrow="How it works" sub={processIntro}>
                Our proven process, step by step
              </SectionHead>
              <ol className="relative space-y-6 border-l-2 border-dashed border-slate-200">
                {process.map((step, i) => (
                  <li key={i} className="relative flex gap-4 pl-7">
                    <span
                      className="absolute -left-[17px] flex h-8 w-8 flex-none items-center justify-center rounded-full text-[13px] font-bold text-white ring-4 ring-white"
                      style={{ background: BRAND.blue }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1A3B]">
                        {step.title}
                      </div>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Benefits — soft tinted feature rows (rich) or compact list */}
          {benefits.length > 0 && (
            <div id="benefits" className={SECTION}>
              <SectionHead eyebrow="Why it matters">
                {benefitsTitle || "Benefits"}
              </SectionHead>
              {richBenefits ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {richBenefitList.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                          style={tint}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <div className="text-[15px] font-bold text-[#0B1A3B]">
                          {b.title}
                        </div>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {plainBenefitList.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={tint}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[15px] leading-relaxed text-slate-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Why choose us — wrapped in a soft brand-blue band */}
          {whyChooseUs?.points?.length > 0 && (
            <div id="why-us" className={SECTION}>
              <div
                className="rounded-3xl p-6 sm:p-9"
                style={{ backgroundColor: BRAND.soft }}
              >
                <SectionHead eyebrow="Why us">
                  {whyChooseUs.title || "Why choose us"}
                </SectionHead>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {whyChooseUs.points.map((w) => (
                    <div
                      key={w.title}
                      className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(11,26,59,0.04)]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{ background: BRAND.blue, color: "#fff" }}
                        >
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <div className="text-[15px] font-bold text-[#0B1A3B]">
                          {w.title}
                        </div>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools */}
          {tools.length > 0 && (
            <div id="tools" className={SECTION}>
              <SectionHead eyebrow="Stack">
                {toolsTitle || "Tools & expertise"}
              </SectionHead>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {toolsNote ? (
                <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-slate-600">
                  {toolsNote}
                </p>
              ) : null}
            </div>
          )}

          {/* Platforms */}
          {platforms.length > 0 && (
            <div id="platforms" className={SECTION}>
              <SectionHead eyebrow="Channels">
                {platformsTitle || "Platforms we manage"}
              </SectionHead>
              <div className="flex flex-wrap gap-2.5">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex rounded-full border px-4 py-2 text-sm font-semibold"
                    style={{
                      borderColor: `${accent}40`,
                      backgroundColor: `${accent}12`,
                      color: accent,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              {platformsNote ? (
                <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-slate-600">
                  {platformsNote}
                </p>
              ) : null}
            </div>
          )}

          {/* Integrations — monogram-badge directory */}
          {integrations.length > 0 && (
            <div id="integrations" className={SECTION}>
              <SectionHead eyebrow="Connects with">
                {integrationsTitle || "Integrations"}
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {integrations.map((it) => (
                  <div
                    key={it.name}
                    className="flex gap-3.5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_2px_rgba(11,26,59,0.04)]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[15px] font-extrabold"
                      style={tint}
                    >
                      {(it.name || "?").trim().charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1A3B]">
                        {it.name}
                      </div>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing */}
          {pricing.length > 0 && (
            <div id="pricing" className={SECTION}>
              <SectionHead eyebrow="Plans">
                {pricingTitle || "Pricing"}
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {pricing.map((plan, i) => {
                  const featured = pricing.length === 3 && i === 1;
                  return (
                    <div
                      key={plan.name}
                      className="relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm"
                      style={{
                        borderColor: featured ? BRAND.blue : BRAND.line,
                        boxShadow: featured
                          ? "0 18px 40px -20px rgba(0,55,202,0.45)"
                          : undefined,
                      }}
                    >
                      {featured ? (
                        <span
                          className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                          style={{ background: BRAND.blue }}
                        >
                          Most popular
                        </span>
                      ) : null}
                      <div className="text-[13px] font-bold uppercase tracking-wide text-slate-500">
                        {plan.name}
                      </div>
                      <div className="mt-2 text-[26px] font-extrabold text-[#0B1A3B]">
                        {plan.price}
                      </div>
                      {plan.desc ? (
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                          {plan.desc}
                        </p>
                      ) : null}
                      {plan.features?.length ? (
                        <ul className="mt-4 space-y-2">
                          {plan.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-[13px] text-slate-700"
                            >
                              <span
                                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                                style={tint}
                              >
                                <Check size={10} strokeWidth={3} />
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <a
                        href="/contact-us"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-bold no-underline transition-colors"
                        style={
                          featured
                            ? { background: BRAND.blue, color: "#fff" }
                            : { backgroundColor: BRAND.soft, color: BRAND.blue }
                        }
                      >
                        Get started
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Case studies */}
          {caseList.length > 0 && (
            <div id="results" className={`${SECTION} space-y-4`}>
              <SectionHead eyebrow="Results">Proof it works</SectionHead>
              {caseList.map((c, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-100 p-6 sm:p-8"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
                  }}
                >
                  <span
                    className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: accent }}
                  >
                    Case study
                  </span>
                  {c.title ? (
                    <div className="mt-3 text-[16px] font-bold text-[#0B1A3B]">
                      {c.title}
                    </div>
                  ) : null}
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {c.industry && <Field label="Industry">{c.industry}</Field>}
                    {c.problem && <Field label="Problem">{c.problem}</Field>}
                    {c.whatWeDid && (
                      <Field label="What we did">{c.whatWeDid}</Field>
                    )}
                    {c.result && (
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                          Result
                        </div>
                        <p className="mt-1 text-[14px] font-bold text-[#0B1A3B]">
                          {c.result}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Testimonials */}
          {tList.length > 0 && (
            <div id="voices" className={SECTION}>
              <SectionHead eyebrow="In their words">
                What clients say
              </SectionHead>
              <div
                className={
                  tList.length > 1
                    ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
                    : ""
                }
              >
                {tList.map((t, i) => (
                  <figure
                    key={i}
                    className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <span
                      className="absolute left-0 top-0 h-full w-1"
                      style={{ background: accent }}
                      aria-hidden
                    />
                    <Quote size={26} style={{ color: accent }} />
                    <blockquote className="mt-3 text-[16px] leading-relaxed text-[#0B1A3B]">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-4 text-[14px] text-slate-600">
                      <span className="font-bold text-[#0B1A3B]">
                        {t.author}
                      </span>
                      {t.role ? `, ${t.role}` : ""}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Related / other services */}
          {relatedCards.length > 0 ? (
            <div>
              <SectionHead eyebrow="Keep going">
                Services that pair well with this one
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCards.map((o) => {
                  const OIcon = o.Icon;
                  return (
                    <a
                      key={o.slug}
                      href={o.href}
                      className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${o.from}, ${o.to})`,
                          color: o.accent,
                        }}
                      >
                        <OIcon size={20} strokeWidth={2.2} />
                      </span>
                      <span className="mt-3 text-sm font-bold text-[#0B1A3B]">
                        {o.name}
                      </span>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                        {o.desc}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold"
                        style={{ color: o.accent }}
                      >
                        Learn more
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <SectionHead eyebrow="Keep going">
                Explore other services
              </SectionHead>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((o) => {
                  const OIcon = o.Icon;
                  return (
                    <a
                      key={o.slug}
                      href={o.href}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-xl"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${o.from}, ${o.to})`,
                          color: o.accent,
                        }}
                      >
                        <OIcon size={20} strokeWidth={2.2} />
                      </span>
                      <span className="text-sm font-bold text-[#0B1A3B]">
                        {o.name}
                      </span>
                      <ArrowRight
                        size={16}
                        className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div id="faq" className="scroll-mt-28">
          <FaqSection
            faqs={faqs}
            title={faqTitle || `${name} — FAQs`}
            subtitle=""
          />
        </div>
      )}

      <Footer
        ctaProps={{
          title: cta?.title || "READY TO GROW?",
          substitle: "Stop guessing. Start growing with data.",
          description:
            cta?.subtitle ||
            "Schedule a FREE 30-min strategy call. No pitch deck. No lock-in. Just a real conversation about what’s really going to move the needle for your business.",
          primaryLabel: "Request a Free Strategy Call",
        }}
      />
    </div>
  );
}

// ── Animated count-up for stat values ──────────────────────────────────────
// Splits "Rs 1,600+" into prefix "Rs ", number 1600, suffix "+" and animates
// the number from 0 → target when scrolled into view. Falls back to the raw
// string if there's no number, and to the final value when motion is reduced.
function CountUp({ value, duration = 1500 }) {
  const raw = String(value ?? "");
  const match = raw.match(/^(\D*)([\d.,]+)(.*)$/);

  const prefix = match ? match[1] : "";
  const numStr = match ? match[2] : "";
  const suffix = match ? match[3] : "";
  const hasGrouping = numStr.includes(",");
  const decimals = numStr.includes(".")
    ? numStr.split(".")[1].length
    : 0;
  const target = match ? parseFloat(numStr.replace(/,/g, "")) : NaN;

  const format = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    const rounded = Math.round(n);
    return hasGrouping ? rounded.toLocaleString("en-US") : String(rounded);
  };

  const ref = useRef(null);
  const [display, setDisplay] = useState(match ? format(target) : raw);

  useEffect(() => {
    if (!match || Number.isNaN(target)) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduce) {
      setDisplay(format(target));
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(format(target * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          started = true;
          setDisplay(format(0));
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// Small labelled field used inside case-study cards
function Field({ label, children }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <p className="mt-1 text-[14px] text-[#0B1A3B]">{children}</p>
    </div>
  );
}