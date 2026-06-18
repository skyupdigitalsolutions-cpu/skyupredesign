// src/components/service/ServiceDetail.jsx
// FIXED TEMPLATE for every service. Each service in @/data/services fills only
// the blocks it needs; anything absent is skipped. The ORDER below is fixed by
// the template, not by the order of keys in your data object.
import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { SERVICES } from "@/data/services";
import { ArrowLeft, ArrowRight, Check, Quote, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

export default function ServiceDetail() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div>
        <Header />
        <section className="mx-auto max-w-3xl px-6 py-20">
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
    statsTitle, // string[]  OR  [{ value, label, sub? }]
    painPoints, // { title, intro?, points:[{ title, desc, solution? }] }
    offerings,
    items = [], // offerings:{ title?, points:[{title,desc}] }  | items:string[]
    audience, // { title?, points:[{ title, desc }] }
    process = [],
    processIntro, // [{ title, desc }]
    benefits = [],
    benefitsTitle, // string[]  OR  [{ title, desc }]
    whyChooseUs, // { title?, points:[{ title, desc }] }
    tools = [],
    toolsTitle,
    toolsNote, // string[]
    platforms = [],
    platformsTitle,
    platformsNote, // string[]
    integrations = [],
    integrationsTitle, // [{ name, desc }]
    pricing = [],
    pricingTitle, // [{ name, price, desc?, features?:string[] }]
    caseStudy,
    caseStudies, // single OR array of { title?, industry?, problem?, whatWeDid?, result? }
    testimonial,
    testimonials, // single OR array of { quote, author, role? }
    faqs = [],
    faqTitle,
    cta,
    related,
  } = service;

  const tint = { backgroundColor: `${accent}1A`, color: accent };
  const overviewParas = overview
    ? Array.isArray(overview)
      ? overview
      : [overview]
    : [];
  const statsAreCards = stats.length > 0 && typeof stats[0] === "object";
  const richBenefits = benefits.length > 0 && typeof benefits[0] !== "string";
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

  const SectionTitle = ({ children }) => (
    <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-neutral-900">
      {children}
    </h2>
  );

  return (
    <div>
      <Header />
      {/* Hero */}

      <section className="h-[550px] flex items-center justify-center text-center bg-blue-50 px-6">
        <div className="flex flex-col items-center">
          <nav aria-label="Breadcrumb" className="text-[13px]">
            <ol className="flex items-center justify-center gap-2 text-slate-600">
              <li>
                <a href="/" className="no-underline hover:opacity-70">
                  Home
                </a>
              </li>
              <li aria-hidden className="opacity-50">
                /
              </li>
              <li>
                <a href="/service" className="no-underline hover:opacity-70">
                  Services
                </a>
              </li>
              <li aria-hidden className="opacity-50">
                /
              </li>
              <li
                aria-current="page"
                className="font-semibold text-neutral-900"
              >
                {name}
              </li>
            </ol>
          </nav>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[48px]">
            {heroHeadline || name}
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            {heroSubline || tagline}
          </p>

          <a
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white no-underline shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: accent }}
          >
            Request a Free Strategy Call{" "}
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-14 lg:px-[120px]">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Overview */}
          {overviewParas.length > 0 && (
            <div className="space-y-4">
              <SectionTitle>Overview</SectionTitle>
              {overviewParas.map((p, i) => (
                <p
                  key={i}
                  className="max-w-3xl text-[15px] leading-relaxed text-slate-600 sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Stats — value/label cards OR sentence panel */}
          {stats.length > 0 && (
            <div>
              <SectionTitle>{statsTitle || "By the numbers"}</SectionTitle>
              {statsAreCards ? (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
                    >
                      <div
                        className="text-[26px] font-extrabold leading-none sm:text-[30px]"
                        style={{ color: accent }}
                      >
                        {s.value}
                      </div>
                      <div className="mt-2 text-[13px] font-medium text-neutral-700">
                        {s.label}
                      </div>
                      {s.sub ? (
                        <div className="mt-1 text-[12px] text-slate-400">
                          {s.sub}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <ul
                  className="mt-6 grid grid-cols-1 gap-3 rounded-3xl border border-slate-100 p-6 sm:grid-cols-2"
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
                        <TrendingUp size={13} strokeWidth={2.4} />
                      </span>
                      <span className="text-[14px] leading-relaxed text-neutral-800">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Pain points (optional point.solution renders a "→" answer) */}
          {painPoints?.points?.length > 0 && (
            <div>
              <SectionTitle>{painPoints.title}</SectionTitle>
              {painPoints.intro ? (
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
                  {painPoints.intro}
                </p>
              ) : null}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {painPoints.points.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="text-[15px] font-semibold text-neutral-900">
                      {p.title}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {p.desc}
                    </p>
                    {p.solution ? (
                      <p className="mt-3 flex gap-2 text-[14px] leading-relaxed text-neutral-800">
                        <ArrowRight
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: accent }}
                        />
                        <span>{p.solution}</span>
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What we provide (rich offerings) OR simple items */}
          {offerings?.points?.length > 0 ? (
            <div>
              <SectionTitle>
                {offerings.title || "What we provide"}
              </SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {offerings.points.map((o) => (
                  <div
                    key={o.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={tint}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-semibold text-neutral-900">
                        {o.title}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                      {o.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : items.length > 0 ? (
            <div>
              <SectionTitle>What's included</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((it) => (
                  <div
                    key={it}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
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
          ) : null}

          {/* Who it's for */}
          {audience?.points?.length > 0 && (
            <div>
              <SectionTitle>{audience.title || "Who it's for"}</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {audience.points.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="text-[15px] font-semibold text-neutral-900">
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

          {/* Process */}
          {process.length > 0 && (
            <div>
              <SectionTitle>Our proven process — step by step</SectionTitle>
              {processIntro ? (
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
                  {processIntro}
                </p>
              ) : null}
              <ol className="mt-6 space-y-5">
                {process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold text-neutral-900">
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

          {/* Benefits — string[] or [{title,desc}] */}
          {benefits.length > 0 && (
            <div>
              <SectionTitle>{benefitsTitle || "Benefits"}</SectionTitle>
              {richBenefits ? (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                    >
                      <div className="text-[15px] font-semibold text-neutral-900">
                        {b.title}
                      </div>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={tint}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[15px] leading-relaxed text-slate-600">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Why choose us */}
          {whyChooseUs?.points?.length > 0 && (
            <div>
              <SectionTitle>
                {whyChooseUs.title || "Why choose us"}
              </SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyChooseUs.points.map((w) => (
                  <div
                    key={w.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="text-[15px] font-semibold text-neutral-900">
                      {w.title}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {tools.length > 0 && (
            <div>
              <SectionTitle>{toolsTitle || "Tools & expertise"}</SectionTitle>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-neutral-700"
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
            <div>
              <SectionTitle>
                {platformsTitle || "Platforms we manage"}
              </SectionTitle>
              <div className="mt-5 flex flex-wrap gap-2.5">
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

          {/* Integrations */}
          {integrations.length > 0 && (
            <div>
              <SectionTitle>{integrationsTitle || "Integrations"}</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {integrations.map((it) => (
                  <div
                    key={it.name}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="text-[15px] font-semibold text-neutral-900">
                      {it.name}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing */}
          {pricing.length > 0 && (
            <div>
              <SectionTitle>{pricingTitle || "Pricing"}</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {pricing.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
                      {plan.name}
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-neutral-900">
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case study / studies */}
          {caseList.length > 0 && (
            <div className="space-y-4">
              {caseList.map((c, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-100 p-6 sm:p-8"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
                  }}
                >
                  <span
                    className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                    style={{ color: accent }}
                  >
                    Case study
                  </span>
                  {c.title ? (
                    <div className="mt-3 text-[16px] font-bold text-neutral-900">
                      {c.title}
                    </div>
                  ) : null}
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {c.industry && (
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                          Industry
                        </div>
                        <p className="mt-1 text-[14px] text-neutral-800">
                          {c.industry}
                        </p>
                      </div>
                    )}
                    {c.problem && (
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                          Problem
                        </div>
                        <p className="mt-1 text-[14px] text-neutral-800">
                          {c.problem}
                        </p>
                      </div>
                    )}
                    {c.whatWeDid && (
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                          What we did
                        </div>
                        <p className="mt-1 text-[14px] text-neutral-800">
                          {c.whatWeDid}
                        </p>
                      </div>
                    )}
                    {c.result && (
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                          Result
                        </div>
                        <p className="mt-1 text-[14px] font-semibold text-neutral-900">
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
            <div
              className={
                tList.length > 1 ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : ""
              }
            >
              {tList.map((t, i) => (
                <figure
                  key={i}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <Quote size={26} style={{ color: accent }} />
                  <blockquote className="mt-3 text-[16px] leading-relaxed text-neutral-800">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-[14px] text-slate-600">
                    <span className="font-semibold text-neutral-900">
                      {t.author}
                    </span>
                    {t.role ? `, ${t.role}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* Related / other services */}
          {relatedCards.length > 0 ? (
            <div>
              <SectionTitle>Services that pair well with this one</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      <span className="mt-3 text-sm font-semibold text-neutral-900">
                        {o.name}
                      </span>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                        {o.desc}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold"
                        style={{ color: o.accent }}
                      >
                        Learn more{" "}
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <SectionTitle>Explore other services</SectionTitle>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      <span className="text-sm font-semibold text-neutral-900">
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
        <FaqSection
          faqs={faqs}
          title={faqTitle || `${name} — FAQs`}
          subtitle=""
        />
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
