import JsonLd from "@/components/JsonLd";
import { serviceSchemas } from "@/data/seoSchemas";
import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { SERVICES } from "@/data/services";
import {
  ArrowLeft,
  EyeOff,
  FileX2,
  LineChart,
  Lock,
  Search,
  Target,
  FileText,
  PenTool,
  Link2,
  MapPin,
  ShoppingCart,
  BarChart3,
  Layers,
  Settings,
  Check,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import DemoHero from "@/components/DemoHero";
import PainPoints from "@/components/demo/PainPoints";
import ServicesGrid from "@/components/demo/ServicesGrid";
import DemoProcess from "@/components/demo/DemoProcess";
import WhyChooseUs from "@/components/demo/WhyChooseUs";
import CampaignResults from "@/components/demo/CampaignResults";
import CaseResults from "@/components/demo/CaseResults";
import Testimonial from "@/components/demo/Testimonial";
import RelatedServices from "@/components/demo/RelatedServices";
import GoogleReviews from "../GoogleReviews";

// Icon pools — data points carry no icons, so we cycle a sensible set by index.
const PAIN_ICONS = [EyeOff, FileX2, LineChart, Lock];
const OFFER_ICONS = [
  Search,
  Target,
  FileText,
  PenTool,
  Link2,
  MapPin,
  ShoppingCart,
  BarChart3,
  Layers,
  Settings,
];

const CONTACT = "/contact";
const HEADING_NAVY = "#1B2440";

// Shared section heading (centered) used by the extra data-driven sections.
function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {title && (
        <h2 className="text-[30px] font-bold tracking-tight sm:text-[40px]" style={{ color: HEADING_NAVY }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

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
    accent,
    tagline,
    heroHeadline,
    heroSubline,
    statsTitle,
    stats,
    painPoints,
    overview,
    overviewTitle,
    offerings,
    items = [],
    process = [],
    processIntro,
    processTitle,
    whyChooseUs,
    caseStudy,
    caseStudies,
    campaignResults,
    caseResults,
    platformBlock,
    resultsBlock,
    tools,
    toolsTitle,
    toolsNote,
    audience,
    integrations,
    integrationsTitle,
    integrationsIntro,
    benefits,
    benefitsTitle,
    security,
    securityTitle,
    securityIntro,
    pricing,
    pricingTitle,
    socialPlatforms,
    testimonial,
    testimonials,
    faqs = [],
    faqTitle,
    cta,
    related,
  } = service;

  const accentColor = accent || "#0037CA";

  // ── Map service data → demo-component props ───────────────────────────────
  // Pain points: when a point also carries a `solution` (CRM), surface it so no
  // content is lost in services whose pain section is a pain → solution table.
  const pains = painPoints?.points?.map((p, i) => ({
    icon: PAIN_ICONS[i % PAIN_ICONS.length],
    title: p.title,
    body: p.solution ? `${p.desc}  ✓ SkyUp CRM: ${p.solution}` : p.desc,
  }));

  // Detailed feature cards (with bullet lists + "pain solved" notes) when the
  // offerings define `bullets`; otherwise the lighter ServicesGrid is used.
  const offeringsHaveBullets = offerings?.points?.some((p) => p.bullets?.length);

  const offeringServices =
    offerings?.points?.map((o, i) => ({
      title: o.title,
      body: o.desc,
      href: CONTACT,
      Icon: OFFER_ICONS[i % OFFER_ICONS.length],
    })) ||
    (items.length
      ? items.map((it, i) => ({
          title: it,
          body: "",
          href: CONTACT,
          Icon: OFFER_ICONS[i % OFFER_ICONS.length],
        }))
      : null);

  const steps = process.map((step, i) => ({
    n: String(i + 1).padStart(2, "0"),
    title: step.title,
    body: step.desc,
  }));

  const values = whyChooseUs?.points?.map((w) => ({
    title: w.title,
    body: w.desc,
  }));

  const caseStudyProp = caseStudy
    ? { ...caseStudy, timeframe: caseStudy.timeframe || "Client result" }
    : caseStudies?.[0]
    ? {
        industry: caseStudies[0].industry,
        result: caseStudies[0].title
          ? `${caseStudies[0].title} — ${caseStudies[0].result}`
          : caseStudies[0].result,
        timeframe: caseStudies[0].timeframe || "Case study",
      }
    : null;

  const tItem = testimonial || testimonials?.[0] || null;

  // Benefits can be a list of strings (UI/UX, Web Dev) or {title, desc} objects (CRM).
  const benefitItems = Array.isArray(benefits) ? benefits : [];
  const benefitsAreObjects =
    benefitItems.length > 0 && typeof benefitItems[0] === "object";

  const relatedFromData = (related || [])
    .map((r) => {
      const s = SERVICES.find((x) => x.slug === r.slug);
      return s
        ? { name: s.name, benefit: r.desc || s.tagline, href: s.href }
        : null;
    })
    .filter(Boolean);
  const relatedFallback = SERVICES.filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({ name: s.name, benefit: s.tagline, href: s.href }));
  const relatedList = relatedFromData.length ? relatedFromData : relatedFallback;

  return (
    <div>
      <JsonLd schemas={serviceSchemas(service)} />
      <Header />

      {/* 01 — Hero */}
      <DemoHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: name },
        ]}
        title={heroHeadline || name}
        subtitle={heroSubline || tagline}
        primaryCta={{ label: "Request a Free Strategy Call", href: CONTACT }}
        accentColor={accent || "#22D3EE"}
      />

      {/* Stats band — renders when the service defines `stats`. */}
      {stats?.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {statsTitle && (
              <h2 className="text-center text-[26px] font-bold tracking-tight sm:text-[34px]" style={{ color: HEADING_NAVY }}>
                {statsTitle}
              </h2>
            )}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="w-[150px] rounded-2xl border border-slate-200/70 bg-slate-50 p-6 text-center sm:w-[190px]"
                >
                  <div className="text-[30px] font-extrabold leading-none sm:text-[38px]" style={{ color: accentColor }}>
                    {s.value}
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 02 — Pain points */}
      {pains?.length > 0 && (
        <PainPoints
          title={painPoints.title}
          subtitle={painPoints.intro}
          pains={pains}
        />
      )}

      {/* Overview — renders when the service defines `overview` (array of paragraphs). */}
      {overview?.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {overviewTitle && (
              <h2 className="text-center text-[30px] font-bold tracking-tight sm:text-[40px]" style={{ color: HEADING_NAVY }}>
                {overviewTitle}
              </h2>
            )}
            <div className="mt-6 space-y-4">
              {overview.map((para, i) => (
                <p key={i} className="text-[16px] leading-relaxed text-slate-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 03 — Offerings. Detailed feature cards when bullets exist, else grid. */}
      {offeringsHaveBullets ? (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              title={offerings?.title || "What's included"}
              subtitle={offerings?.subtitle}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {offerings.points.map((o, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_34px_-26px_rgba(11,26,59,0.5)] sm:p-7"
                >
                  <h3 className="text-[18px] font-bold text-slate-900">{o.title}</h3>
                  {o.desc && (
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{o.desc}</p>
                  )}
                  {o.bullets?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {o.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-600">
                          <Check size={16} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {o.solved && (
                    <div
                      className="mt-5 rounded-xl border p-4 text-[13px] leading-relaxed text-slate-700"
                      style={{ background: "#F4F8F6", borderColor: "#D7E6DF" }}
                    >
                      <span className="font-bold" style={{ color: accentColor }}>
                        Pain point solved:{" "}
                      </span>
                      {o.solved}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        offeringServices?.length > 0 && (
          <ServicesGrid
            eyebrow="WHAT WE PROVIDE"
            title={offerings?.title || "What's included"}
            subtitle={offerings?.subtitle || ""}
            services={offeringServices}
          />
        )
      )}

      {/* Audience — renders when the service defines `audience`. */}
      {audience?.points?.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading title={audience.title} subtitle={audience.subtitle} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {audience.points.map((a, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_-24px_rgba(11,26,59,0.45)]"
                >
                  <h3 className="text-[16px] font-bold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integrations — renders when the service defines `integrations`. */}
      {integrations?.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              title={integrationsTitle || "Integrations"}
              subtitle={integrationsIntro}
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((it, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50 p-6"
                >
                  <h3 className="text-[15px] font-bold text-slate-900">{it.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 — Process */}
      {steps.length > 0 && (
        <DemoProcess
          subtitle={processTitle || `Our ${name} process — step by step`}
          promo={{
            eyebrow: "HOW WE WORK",
            heading: "A proven, repeatable path to results",
            body:
              processIntro ||
              "A scientific, data-driven process so every client gets consistent, measurable results.",
            cta: { label: "Book a Free Audit", href: CONTACT },
            image: "",
          }}
          steps={steps}
        />
      )}

      {/* 05 — Why choose us (+ optional case study) */}
      {(values?.length > 0 || caseStudyProp) && (
        <WhyChooseUs
          eyebrow="WHY CHOOSE US"
          title={whyChooseUs?.title || "Why choose us"}
          values={values || []}
          caseStudy={caseStudyProp}
        />
      )}

      {/* Benefits — strings render as a checklist; {title,desc} objects as cards. */}
      {benefitItems.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading title={benefitsTitle || "Key benefits"} />
            {benefitsAreObjects ? (
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {benefitItems.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_-24px_rgba(11,26,59,0.45)]"
                  >
                    <h3 className="text-[16px] font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
                {benefitItems.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                    <Check size={18} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="text-[14.5px] text-slate-700">{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Security — renders when the service defines `security`. */}
      {security?.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              title={securityTitle || "Security & Compliance"}
              subtitle={securityIntro}
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {security.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50 p-6"
                >
                  <h3 className="text-[15px] font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing — renders when the service defines `pricing`. */}
      {pricing?.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading title={pricingTitle || "Pricing"} />
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className="flex w-full flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-[0_12px_34px_-26px_rgba(11,26,59,0.5)] sm:w-[300px]"
                >
                  <h3 className="text-[18px] font-bold text-slate-900">{p.name}</h3>
                  <div className="mt-2 text-[30px] font-extrabold leading-none" style={{ color: accentColor }}>
                    {p.price}
                  </div>
                  {p.desc && <p className="mt-2 text-[13.5px] text-slate-500">{p.desc}</p>}
                  {p.features?.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {p.features.map((f, fi) => (
                        <li key={fi} className="flex gap-2 text-[13.5px] text-slate-600">
                          <Check size={16} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={CONTACT}
                    className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[14px] font-semibold text-white no-underline"
                    style={{ background: accentColor }}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Campaign results — PPC only. */}
      {campaignResults?.tables?.length > 0 && (
        <CampaignResults
          eyebrow={campaignResults.eyebrow}
          title={campaignResults.title}
          subtitle={campaignResults.subtitle}
          tables={campaignResults.tables}
        />
      )}

      {/* Case results — Email only. */}
      {caseResults?.items?.length > 0 && (
        <CaseResults
          title={caseResults.title}
          items={caseResults.items}
          accentColor={accentColor}
        />
      )}

      {/* Platform block — Email only. */}
      {platformBlock && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            {platformBlock.title && (
              <h2 className="text-[30px] font-bold tracking-tight text-[#1B2440] sm:text-[40px]">
                {platformBlock.title}
              </h2>
            )}
            {platformBlock.intro && (
              <p className="mt-4 text-[16px] leading-relaxed ">{platformBlock.intro}</p>
            )}
            {platformBlock.tools?.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {platformBlock.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-[14px] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {platformBlock.note && (
              <p className="mt-8 text-[15px] leading-relaxed">{platformBlock.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Results block — AI Automation only. */}
      {resultsBlock?.results?.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {resultsBlock.title && (
                <h2 className="text-[30px] font-bold tracking-tight text-[#1B2440] sm:text-[40px]">
                  {resultsBlock.title}
                </h2>
              )}
              {resultsBlock.intro && (
                <p className="mt-4 text-[16px] leading-relaxed ">{resultsBlock.intro}</p>
              )}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {resultsBlock.results.map((r, i) => (
                <div
                  key={i}
                  className="w-full rounded-2xl border border-slate-200/70 bg-white p-6 text-center sm:w-[230px]"
                >
                  <div className="text-[34px] font-extrabold leading-none text-[#0037CA]">
                    {r.value}
                  </div>
                  <div className="mt-3 text-[14px] leading-snug ">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools — Graphic Design / UI/UX. */}
      {tools?.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            {toolsTitle && (
              <h2 className="text-[30px] font-bold tracking-tight text-[#1B2440] sm:text-[40px]">
                {toolsTitle}
              </h2>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-[14px] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
            {toolsNote && (
              <p className="mt-8 text-[15px] leading-relaxed text-slate-600">{toolsNote}</p>
            )}
          </div>
        </section>
      )}

      {/* Social media platforms — only renders when the service defines it */}
      {socialPlatforms?.items?.length > 0 && (
        <section className="pt-12">
          <h2 className="text-[40px] font-bold text-center">
            {socialPlatforms.title || "Platforms We Manage"}
          </h2>
          <div className="mx-auto my-6 flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full bg-blue-100/80 p-4">
            {socialPlatforms.items.map((p) => (
              <div key={p.name} className="flex gap-2 rounded-full bg-white px-4 py-2">
                {p.icon && <img src={p.icon} alt={p.name} className="h-6 w-6" />}
                <p className="font-medium">{p.name}</p>
              </div>
            ))}
          </div>
          {socialPlatforms.note && (
            <p className="mx-auto max-w-3xl text-center text-lg">{socialPlatforms.note}</p>
          )}
        </section>
      )}

      {/* 06 — Reviews (Testimonial available as an alternative) */}
      {/* {tItem && (
        <Testimonial quote={tItem.quote} name={tItem.author} role={tItem.role} company="" />
      )} */}
      <GoogleReviews />

      {/* 07 — FAQ */}
      {faqs.length > 0 && (
        <FaqSection faqs={faqs} title={faqTitle || `${name} — FAQs`} subtitle="" />
      )}

      {/* 08 — Related services */}
      <RelatedServices title="Explore related services" services={relatedList} />

      <Footer
        ctaProps={{
          title: cta?.title || "Ready to grow?",
          substitle: "Stop guessing. Start growing with data.",
          description:
            cta?.subtitle ||
            "Schedule a free 30-min strategy call. No pitch deck. No lock-in. Just a real conversation about what will move the needle for your business.",
          primaryLabel: cta?.primaryLabel || "Request a Free Strategy Call",
        }}
      />
    </div>
  );
}