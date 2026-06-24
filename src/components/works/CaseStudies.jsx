// src/components/works/CaseStudies.jsx
// Filterable case-study GRID for the /works page.
//
// - Derives filter chips from the `category` field of each study.
// - Each card links to /works/<slug> (Vike intercepts plain <a> for SPA nav).
// - Cover falls back to a brand gradient (COVERS) when a study has no image
//   or when the image fails to load.

import { useMemo, useState } from "react";
import { CASE_STUDIES, COVERS } from "@/data/caseStudies";

export default function CaseStudies() {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(CASE_STUDIES.map((s) => s.category).filter(Boolean));
    return ["All", ...set];
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((s) => s.category === active),
    [active]
  );

  return (
    <section className="w-full bg-white font-['Poppins']">
      
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
            Our work
          </h1>
          <p className="mt-3 text-slate-600">
            Selected projects across paid media, web, design, and CRM — built to
            win trust and generate real enquiries.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-[#0037CA] text-white"
                    : "border border-slate-200 text-slate-600 hover:border-[#0037CA] hover:text-[#0037CA]",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((study) => {
            const realIndex = CASE_STUDIES.findIndex((s) => s.id === study.id);
            return (
              <Card
                key={study.id}
                study={study}
                cover={COVERS[realIndex % COVERS.length]}
              />
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-slate-500">
            No projects in this category yet.
          </p>
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
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {showImage ? (
          <img
            src={img}
            alt={`${study.client} — ${study.title}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition group-hover:scale-105 motion-reduce:transition-none"
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
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0037CA] backdrop-blur">
          {study.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {study.client}
        </p>
        <h2 className="mt-1 text-lg font-bold leading-snug text-[#0a1f44] group-hover:text-[#0037CA]">
          {study.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">
          {study.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0037CA]">
          View case study
          <span className="transition group-hover:translate-x-0.5 motion-reduce:transition-none">
            →
          </span>
        </span>
      </div>
    </a>
  );
}