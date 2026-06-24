// src/components/works/CaseStudies.jsx
// Filterable case-study GRID for the /works page.
//
// - Filter bar matches the BlogList page (same pill styling).
// - Filters by `category` (the service type) — e.g. PPC, Website Redesign,
//   Social Media Marketing, CRM, Real Estate, Graphic Design.
// - Each card links to /work/<slug> (Vike intercepts plain <a> for SPA nav).
// - Cover falls back to a brand gradient (COVERS) when a study has no image
//   or when the image fails to load.

import { useMemo, useState } from "react";
import { CASE_STUDIES, COVERS } from "@/data/caseStudies";

const ALL = "All";

// Pick the service/category facet for a study (trim handles stray spaces).
const serviceOf = (s) => (s.category || "Work").trim();

export default function CaseStudies() {
  const studies = Array.isArray(CASE_STUDIES) ? CASE_STUDIES : [];

  // Unique service list derived from the data, in insertion order.
  const categories = useMemo(() => {
    const seen = new Set();
    studies.forEach((s) => seen.add(serviceOf(s)));
    return [ALL, ...seen];
  }, [studies]);

  const [active, setActive] = useState(ALL);

  const visible = useMemo(
    () =>
      active === ALL
        ? studies
        : studies.filter((s) => serviceOf(s) === active),
    [studies, active]
  );

  return (
    <section className="w-full bg-white font-['Poppins']">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
            Our work
          </h1>
          <p className="mt-3 text-slate-600">
            Selected projects across paid media, web, design, social, and CRM —
            built to win trust and generate real enquiries.
          </p>
        </div>

        {/* Filter bar — same style as the BlogList page */}
        {categories.length > 1 && (
          <div className="mt-8 mb-8 flex flex-wrap gap-3 rounded-[32px] border border-[#E0E4F5] bg-[#EEF0FB] py-2 px-3">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={[
                    "rounded-full cursor-pointer px-4 py-2 text-[13px] font-semibold transition",
                    isActive
                      ? "bg-[#0037CA] text-white"
                      : "bg-white text-[#1B2545] hover:text-[#0037CA]",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Cards */}
        {visible.length === 0 ? (
          <p className="text-slate-500">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((study) => {
              const realIndex = CASE_STUDIES.findIndex((s) => s.id === study.id);
              return (
                <Card
                  key={study.id ?? study.slug}
                  study={study}
                  cover={COVERS[realIndex % COVERS.length]}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function Card({ study, cover }) {
  const [imgFailed, setImgFailed] = useState(false);
  const img = study.image || study.heroImage;
  const showImage = img && !imgFailed;

  return (
    <a
      href={`/work/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white no-underline shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {showImage ? (
          <img
            src={img}
            alt={`${study.client} — ${study.title}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${cover}`}
          >
            <span className="px-6 text-center text-lg font-semibold text-white/95">
              {study.client}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#0037CA] shadow-sm backdrop-blur">
          {serviceOf(study)}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-medium uppercase tracking-wide text-slate-400">
          {study.client}
        </p>
        <h3 className="mt-1 text-[16px] font-bold leading-snug text-[#111827] line-clamp-2 group-hover:text-[#0037CA]">
          {study.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-600 line-clamp-3">
          {study.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0037CA]">
          View case study
          <span className="transition group-hover:translate-x-0.5 motion-reduce:transition-none">
            →
          </span>
        </span>
      </div>
    </a>
  );
}