// src/components/works/CaseStudyDetail.jsx
// Case-study DETAIL view for Vike + React. Rendered at /work/<slug>.
//
// - No react-router-dom. Slug comes from Vike's pageContext.routeParams.slug
//   (or a `slug` prop). Internal links are plain <a> (Vike SPA nav).
// - Renders the unified CASE_STUDIES schema: each block appears only when its
//   data is present, so the same template serves PPC / web / design / CRM
//   studies AND the section-based Novara entry.

import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { CASE_STUDIES, COVERS } from "@/data/caseStudies";
import Header from "../Header";
import Footer from "../Footer";

// string | string[]  ->  string[]
const toParagraphs = (v) => (Array.isArray(v) ? v : v ? [v] : []);

export default function CaseStudyDetail({ slug: slugProp }) {
  const pageContext = usePageContext();
  const slug = slugProp ?? pageContext?.routeParams?.slug;
  const [heroFailed, setHeroFailed] = useState(false);

  const index = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const study = index >= 0 ? CASE_STUDIES[index] : null;

  if (!study) {
    return (
      <main className="mx-auto max-w-xl px-6 py-32 text-center font-['Poppins']">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0037CA]">
          404
        </p>
        <h1 className="mt-2 mb-4 text-3xl font-bold text-[#0a1f44]">
          We couldn't find that case study
        </h1>
        <p className="mb-8 text-slate-600">
          The project you're looking for may have moved or been renamed.
        </p>
        <a
          href="/works"
          className="inline-block rounded-full bg-[#0037CA] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#002896] motion-reduce:transition-none"
        >
          Back to all work
        </a>
      </main>
    );
  }

  // ── Normalise fields that differ between the flat schema and Novara ──
  const meta = study.meta || {};
  const industry = study.industry || meta.industry;
  const services = study.services || meta.services || [];
  const location = meta.location;
  const project = meta.project;
  const cover = COVERS[index % COVERS.length];
  const heroImg = study.image || study.heroImage;
  const cta = study.cta || {}; // ← was missing; fixes "cta is not defined"

  const overview = toParagraphs(study.overview);
  const challenge = toParagraphs(study.challenge);
  const solution = toParagraphs(study.solution);
  const approachIsSteps = Array.isArray(study.approach);
  const resultsIsList = Array.isArray(study.results);

  const sidebar = [
    { label: "Client", value: study.client },
    { label: "Industry", value: industry },
    { label: "Location", value: location },
    { label: "Project", value: project },
    { label: "Timeline", value: study.timeline },
    { label: "Year", value: study.year },
    { label: "Role", value: study.role },
  ].filter((row) => row.value);

  return (
    <main className="bg-white font-['Poppins'] text-[#0a1f44] antialiased">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <a
          href="/works"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[#0037CA] hover:underline"
        >
          ← All work
        </a>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0037CA]">
          {study.category}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">{study.summary}</p>

        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0037CA] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#002896] motion-reduce:transition-none"
          >
            Visit project ↗
          </a>
        )}

        {/* Hero media: image, or brand gradient fallback */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          {heroImg && !heroFailed ? (
            <img
              src={heroImg}
              alt={`${study.client} — ${study.category}`}
              className="block aspect-[16/7] w-full object-cover"
              loading="eager"
              onError={() => setHeroFailed(true)}
            />
          ) : (
            <div
              className={`aspect-[16/7] w-full bg-gradient-to-br ${cover}`}
              aria-hidden="true"
            />
          )}
        </div>
      </header>

      {/* ── METRICS ──────────────────────────────────────────── */}
      {study.metrics?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {study.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-3xl font-bold text-[#0037CA]">
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-700">
                  {m.label}
                </div>
                {m.sub && (
                  <div className="mt-0.5 text-xs text-slate-500">{m.sub}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── MAIN GRID: narrative + sidebar ───────────────────── */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-8 lg:grid-cols-[1fr_280px]">
        {/* NARRATIVE */}
        <article className="min-w-0 space-y-12">
          {overview.length > 0 && (
            <Block title="Overview">
              {overview.map((p, i) => (
                <p key={i} className="mb-4 text-slate-600 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
          )}

          {challenge.length > 0 && (
            <Block title="The challenge">
              {challenge.map((p, i) => (
                <p key={i} className="mb-4 text-slate-600 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
          )}

          {study.approach && (
            <Block title="Our approach">
              {approachIsSteps ? (
                <ol className="space-y-4">
                  {study.approach.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0037CA] text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-slate-600">{step}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-slate-600">{study.approach}</p>
              )}
            </Block>
          )}

          {solution.length > 0 && (
            <Block title="The solution">
              {solution.map((p, i) => (
                <p key={i} className="mb-4 text-slate-600 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
          )}

          {/* Key features (cards) */}
          {study.keyFeatures?.length > 0 && (
            <Block title="Key features">
              <div className="grid gap-4 sm:grid-cols-2">
                {study.keyFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <h3 className="font-semibold text-[#0a1f44]">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Block>
          )}

          {/* Deliverables (chips) */}
          {study.deliverables?.length > 0 && (
            <Block title="Deliverables">
              <ul className="flex flex-wrap gap-2.5">
                {study.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm text-slate-700"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {/* Gallery */}
          {study.gallery?.length > 0 && (
            <Block title="Project snapshots">
              <div className="grid gap-4 sm:grid-cols-2">
                {study.gallery.map((g, i) => (
                  <figure key={i}>
                    <img
                      src={g.src}
                      alt={g.alt || g.caption || `${study.title} ${i + 1}`}
                      loading="lazy"
                      className="block w-full rounded-xl border border-slate-200"
                    />
                    {g.caption && (
                      <figcaption className="mt-2 text-sm text-slate-500">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {/* Results */}
          {study.results && (
            <Block title="Results">
              {resultsIsList ? (
                <ul className="space-y-3">
                  {study.results.map((r, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <span
                        className="mt-1 shrink-0 text-[#0037CA]"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600">{study.results}</p>
              )}
            </Block>
          )}

          {/* Section-based content (Novara) */}
          {study.sections?.length > 0 &&
            study.sections.map((section) => (
              <Block key={section.id} id={section.id} title={section.heading}>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-4 text-slate-600 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.list?.length > 0 && (
                  <ul className="mt-3 grid gap-x-7 gap-y-2.5 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[#0037CA] before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.listAfter && (
                  <p className="mt-4 text-slate-600">{section.listAfter}</p>
                )}
                {section.gallery?.length > 0 && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {section.gallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${section.heading} ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-xl border border-slate-200"
                      />
                    ))}
                  </div>
                )}
              </Block>
            ))}

          {/* FAQs */}
          {study.faqs?.length > 0 && (
            <Block title="FAQs">
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {study.faqs.map((f, i) => (
                  <details key={i} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-[#0a1f44]">
                      {f.q}
                      <span className="ml-4 text-[#0037CA] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </Block>
          )}

          {/* Testimonial */}
          {study.testimonial && (
            <figure className="rounded-2xl bg-[#0037CA] p-8 text-white">
              <blockquote className="text-xl font-medium leading-relaxed">
                “{study.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-blue-100">
                <span className="font-semibold text-white">
                  {study.testimonial.author}
                </span>
                {study.testimonial.role && <> — {study.testimonial.role}</>}
              </figcaption>
            </figure>
          )}
        </article>

        {/* SIDEBAR */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-200 p-6">
            <dl className="space-y-4">
              {sidebar.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-[#0a1f44]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            {services.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Services
                </p>
                <ul className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#0037CA]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {study.stack?.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tools / tech
                </p>
                <ul className="flex flex-wrap gap-2">
                  {study.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ── CLOSING CTA (Footer) ─────────────────────────────── */}
      <Footer
        ctaProps={{
          title: cta.title || "Ready to grow?",
          subtitle: cta.subtitle || "Stop guessing. Start growing with data.",
          description:
            cta.description ||
            "Schedule a free 30-min strategy call. No pitch deck. No lock-in. Just a real conversation about what will move the needle for your business.",
          primaryLabel: cta.primaryLabel || "Request a Free Strategy Call",
        }}
      />
    </main>
  );
}

// Small section wrapper to keep headings consistent.
function Block({ title, id, children }) {
  return (
    <section id={id}>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a1f44]">
        {title}
      </h2>
      {children}
    </section>
  );
}