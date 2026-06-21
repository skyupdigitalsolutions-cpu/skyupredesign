import React, { useMemo, useRef, useState } from "react";
import { BLOGS } from "@/data/blogs";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

// The data uses a few different field names across entries, so pick the
// best available value for each card defensively.
const cover = (b) => b.coverImage || b.heroImage || b.image || "";
const cardTitle = (b) => (b.title || b.headline || "Untitled").trim();
const cardCategory = (b) => (b.category || "Blog").trim();

const ALL = "All";
const PAGE_SIZE = 6; // cards per page

// Build the list of page buttons to show. Shows every page up to 7; beyond
// that it windows around the current page with "…" gaps.
function getPageItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const range = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) range.push("…");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("…");
  range.push(total);
  return range;
}

export default function BlogList() {
  const blogs = Array.isArray(BLOGS) ? BLOGS : [];
  const topRef = useRef(null);

  // Unique category list derived from the data (trim handles stray spaces like
  // "Digital Marketing "). Insertion order follows the blog order.
  const categories = useMemo(() => {
    const seen = new Set();
    blogs.forEach((b) => seen.add(cardCategory(b)));
    return [ALL, ...seen];
  }, [blogs]);

  const [active, setActive] = useState(ALL);
  const [page, setPage] = useState(1);

  const visible = useMemo(
    () =>
      active === ALL ? blogs : blogs.filter((b) => cardCategory(b) === active),
    [blogs, active],
  );

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  // Guard against a stale page if the filtered set shrank.
  const safePage = Math.min(page, totalPages);
  const paged = visible.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const pageItems = getPageItems(safePage, totalPages);

  const selectCategory = (cat) => {
    setActive(cat);
    setPage(1);
  };

  const goToPage = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track cover images that fail to load (e.g. missing /images/* files) so we
  // can show a branded placeholder instead of a broken-image icon.
  const [failed, setFailed] = useState(() => new Set());
  const markFailed = (key) =>
    setFailed((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });

  return (
    <section ref={topRef} className="w-full scroll-mt-24 bg-white font-['Poppins']">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-[13px]">
          <ol className="flex items-center gap-2 text-slate-500">
            <li>
              <a href="/" className="no-underline transition hover:text-[#0037CA]">
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li aria-current="page" className="font-semibold text-[#0037CA]">
              Blogs
            </li>
          </ol>
        </nav>

        {/* Filter bar */}
        {categories.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-3 rounded-[32px] border border-[#E0E4F5] bg-[#EEF0FB] py-2 px-3">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => selectCategory(cat)}
                  aria-pressed={isActive}
                  className={[
                    "rounded-full cursor-pointer px-4 py-2 text-[13px] font-semibold transition",
                    isActive
                      ? "bg-[#0037CA] text-white "
                      : "bg-white text-[#1B2545]  hover:text-[#0037CA]",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {visible.length === 0 ? (
          <p >No blogs in this category yet.</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((blog) => {
                const key = blog.id ?? blog.slug;
                const src = cover(blog);
                const showImg = src && !failed.has(key);

                return (
                  <a
                    key={key}
                    href={`/blog/${blog.slug}`}
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white no-underline shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                  >
                    {/* Cover image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      {showImg ? (
                        <img
                          src={src}
                          alt={blog.imageAlt || cardTitle(blog)}
                          loading="lazy"
                          onError={() => markFailed(key)}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EEF1FF] to-[#DBE4FF] text-[#0037CA]">
                          <span className="text-sm font-bold tracking-wide">
                            SkyUp Digital
                          </span>
                        </div>
                      )}
                      <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#0037CA] shadow-sm backdrop-blur">
                        {cardCategory(blog)}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-[16px] font-bold leading-snug text-[#111827] line-clamp-2 group-hover:text-[#0037CA]">
                        {cardTitle(blog)}
                      </h3>

                      {blog.description ? (
                        <p className="mt-2 text-[13px] leading-relaxed  line-clamp-3">
                          {blog.description.trim()}
                        </p>
                      ) : null}

                      {/* Meta + read more pinned to bottom */}
                      <div className="mt-auto pt-4">
                        <div className="flex items-center gap-2 text-[12px] ">
                          {blog.author ? <span>{blog.author}</span> : null}
                          {blog.author && blog.date ? (
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                          ) : null}
                          {blog.date ? <span>{blog.date}</span> : null}
                        </div>

                        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0037CA] bg-[#0037CA]/20 px-4 py-2 rounded-full">
                          Read more
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRightIcon className="w-4 h-4"/>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-12 flex flex-wrap items-center justify-center gap-2"
              >
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                  className="rounded-full bg-[#EEF1FF] px-3.5 py-2 text-[13px] font-semibold text-[#0037CA] transition hover:bg-[#E0E7FF] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#EEF1FF]"
                >
                  <ArrowLeftIcon className="w-5 h-5"/>
                </button>

                {pageItems.map((it, idx) =>
                  it === "…" ? (
                    <span key={`gap-${idx}`} className="select-none px-1 text-slate-400">
                      …
                    </span>
                  ) : (
                    <button
                      key={it}
                      type="button"
                      onClick={() => goToPage(it)}
                      aria-current={it === safePage ? "page" : undefined}
                      className={[
                        "min-w-[40px] rounded-full px-3.5 py-2 text-[13px] font-semibold transition cursor-pointer",
                        it === safePage
                          ? "bg-[#0037CA] text-white"
                          : "bg-[#EEF1FF] text-[#0037CA] hover:bg-[#E0E7FF]",
                      ].join(" ")}
                    >
                      {it}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                  className="rounded-full bg-[#EEF1FF] px-3.5 py-2 text-[13px] font-semibold text-[#0037CA] transition hover:bg-[#E0E7FF] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#EEF1FF]"
                >
                  <ArrowRightIcon className="w-5 h-5"/>
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}