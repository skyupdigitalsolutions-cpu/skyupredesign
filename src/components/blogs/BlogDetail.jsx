import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { BLOGS } from "@/data/blogs";
import { ArrowLeftIcon } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[""''"'`]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HEADING_SIZE = {
  h2: "text-[20px] sm:text-[24px]",
  h3: "text-[16px] sm:text-[18px]",
  h4: "text-[15px] sm:text-[16px]",
  h5: "text-[13px] sm:text-[14px]",
  h6: "text-[12px] sm:text-[13px]",
};

const TOC_TYPES = new Set(["h2", "h3", "h4", "h5", "h6"]);

export default function BlogDetail() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const blog = BLOGS.find((b) => b.slug === slug);

  const sections = blog?.sections?.length ? blog.sections : [];

  // Build the table of contents from headings.
  const toc = useMemo(() => {
    const used = new Map();
    const items = [];
    sections.forEach((s) => {
      if (!TOC_TYPES.has(s.type)) return;
      const raw = s.text || s.linkText;
      if (!raw) return;
      const base = slugify(raw);
      const count = (used.get(base) || 0) + 1;
      used.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      items.push({ id, text: raw.trim(), level: s.type });
    });
    return items;
  }, [sections]);

  const [activeId, setActiveId] = useState("");
  // When the user clicks a TOC link we briefly ignore scroll-spy so the
  // clicked item stays highlighted during the smooth scroll animation.
  const clickLockUntil = useRef(0);
  // Ref to the TOC's own scroll container so we can keep the active item in view.
  const tocListRef = useRef(null);

  // Scroll-spy: highlight whichever heading is currently nearest the top.
  useEffect(() => {
    if (!toc.length) return;
    const ids = toc.map((t) => t.id);
    const OFFSET = 130; // matches heading scroll-mt / sticky offset

    const updateActive = () => {
      if (Date.now() < clickLockUntil.current) return;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - OFFSET <= 0) {
          current = id; // last heading whose top has passed the line
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive(); // set initial highlight
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [toc]);

  // Keep the active TOC item visible inside the TOC's own scrollable list.
  // This only adjusts the list's scroll position — it never scrolls the page.
  useEffect(() => {
    const container = tocListRef.current;
    if (!container || !activeId) return;
    const btn = container.querySelector(`[data-toc-id="${activeId}"]`);
    if (!btn) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    if (bRect.top < cRect.top) {
      container.scrollTop -= cRect.top - bRect.top + 8;
    } else if (bRect.bottom > cRect.bottom) {
      container.scrollTop += bRect.bottom - cRect.bottom + 8;
    }
  }, [activeId]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    clickLockUntil.current = Date.now() + 700; // hold highlight during scroll
  };

  const fw = (s, fallback = "font-normal") => s.fontWeight || fallback;

  if (!blog) {
    return (
      <section className="w-full font-['Poppins']">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 py-16">
          <p className="">Blog not found.</p>
          <a
            href="/blogs"
            className="text-[#0037CA] font-semibold no-underline"
          >
            <ArrowLeftIcon /> Back to all blogs
          </a>
        </div>
      </section>
    );
  }

  // Track heading ids so duplicate headings get unique anchors during render.
  const usedIds = new Map();
  const headingId = (text) => {
    const base = slugify(text || "");
    const count = (usedIds.get(base) || 0) + 1;
    usedIds.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };

  const renderSection = (s, i) => {
    // Headings h2–h6
    if (HEADING_SIZE[s.type]) {
      const id = headingId(s.text);
      return React.createElement(
        s.type,
        {
          key: i,
          id,
          className: `scroll-mt-28 ${HEADING_SIZE[s.type]} ${fw(s, "font-bold")} text-[#111827]`,
        },
        s.text,
      );
    }

    // Paragraph with a link
    if (s.type === "p_with_link") {
      return (
        <p
          key={i}
          className={`text-[14px] sm:text-[15px] leading-relaxed  ${fw(s)}`}
        >
          {s.textBefore ? s.textBefore.trimEnd() + " " : ""}
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0037CA] font-semibold no-underline hover:opacity-90"
          >
            {s.linkText}
          </a>
          {s.textAfter ? " " + s.textAfter.trimStart() : ""}
        </p>
      );
    }

    // Paragraph with bold parts
    if (s.type === "p_with_bold") {
      return (
        <p
          key={i}
          className={`text-[14px] sm:text-[15px] leading-relaxed  ${fw(s)}`}
        >
          {(s.parts || []).map((part, idx) =>
            part.bold ? (
              <strong key={idx} className="font-semibold text-[#111827]">
                {part.text}
              </strong>
            ) : (
              <span key={idx}>{part.text}</span>
            ),
          )}
        </p>
      );
    }

    // Paragraph with bold parts + a link
    if (s.type === "p_with_link_bold") {
      return (
        <p
          key={i}
          className={`text-[14px] sm:text-[15px] leading-relaxed  ${fw(s)}`}
        >
          {(s.partsBefore || []).map((part, idx) =>
            part.bold ? (
              <strong key={idx} className="font-semibold text-[#000000]">
                {part.text}
              </strong>
            ) : (
              <span key={idx}>{part.text}</span>
            ),
          )}{" "}
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0037CA] font-semibold no-underline hover:opacity-90"
          >
            {s.linkText}
          </a>{" "}
          {(s.partsAfter || []).map((part, idx) =>
            part.bold ? (
              <strong key={idx} className="font-semibold text-[#000000]">
                {part.text}
              </strong>
            ) : (
              <span key={idx}>{part.text}</span>
            ),
          )}
        </p>
      );
    }

    // Standalone link
    if (s.type === "link") {
      return (
        <p key={i} className="text-[14px] sm:text-[15px] leading-relaxed">
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0037CA] font-semibold no-underline hover:opacity-90"
          >
            {s.linkText}
          </a>
        </p>
      );
    }

    // Bulleted list
    if (s.type === "ul") {
      return (
        <ul
          key={i}
          className="list-disc list-outside pl-5 space-y-2 text-[14px] sm:text-[15px] "
        >
          {(s.text || []).map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    // Numbered list
    if (s.type === "ol") {
      return (
        <ol
          key={i}
          className="list-decimal list-outside pl-5 space-y-2 text-[14px] sm:text-[15px] "
        >
          {(s.text || []).map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    }

    // Table
    if (s.type === "table") {
      return (
        <div
          key={i}
          className="overflow-x-auto rounded-xl border border-slate-200"
        >
          <table className="w-full text-[13px] sm:text-[14px]  border-collapse">
            <thead>
              <tr>
                {(s.headers || []).map((h, hi) => (
                  <th
                    key={hi}
                    className="text-left px-4 py-3 font-bold border border-slate-200 text-[#111827]"
                    style={{ background: s.themed ? "#DBEAFE" : "#ffffff" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(s.rows || []).map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background: s.themed
                      ? ri % 2 === 0
                        ? "#EFF6FF"
                        : "#DBEAFE"
                      : "#ffffff",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-2.5 border border-slate-200"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Quote
    if (s.type === "quote") {
      return (
        <div
          key={i}
          className="rounded-xl border border-[#E7E9F5] bg-[#F7F9FF] px-4 py-4 text-[14px]"
        >
          <div className="border-l-4 border-[#0037CA] pl-3 italic leading-relaxed">
            {s.text}
          </div>
        </div>
      );
    }

    // Image
    if (s.type === "image") {
      return (
        <figure
          key={i}
          className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50"
        >
          <img
            src={s.src}
            alt={s.caption || "Blog image"}
            className="w-full h-auto"
          />
          {s.caption ? (
            <figcaption className="px-4 py-3 text-[12px]">
              {s.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    // Default: plain paragraph
    return (
      <p
        key={i}
        className={`text-[14px] sm:text-[15px] leading-relaxed ${fw(s)}`}
      >
        {s.text}
      </p>
    );
  };

  return (
    <section className="w-full bg-white font-['Poppins']">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10 flex">
        {/* Article */}
        <div className="flex-1 max-w-4xl">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0037CA] no-underline transition bg-[#0037CA]/20 px-4 py-2 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
          </a>

          <div className="mt-4">
            <span className="inline-flex rounded-full bg-[#EEF1FF] text-[#0037CA] px-3 py-1 text-[11px] font-semibold">
              {(blog.category || "").trim()}
            </span>
          </div>

          <h1 className="mt-3 text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#111827] leading-tight">
            {blog.headline || blog.title}
          </h1>

          <div className="mt-2 text-[12px]  flex items-center gap-3">
            <span>{blog.author}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{blog.date}</span>
          </div>

          <div className="mt-5 rounded-2xl overflow-hidden border border-slate-100 bg-slate-100">
            <img
              src={blog.heroImage || blog.coverImage || blog.image}
              alt={blog.imageAlt || blog.title}
              className="w-full h-[210px] sm:h-[380px] object-cover"
            />
          </div>

          <div className="mt-6 space-y-5">{sections.map(renderSection)}</div>
        </div>

        {/* Table of contents */}
        {toc.length > 0 && (
          <aside className="hidden lg:block w-[280px] ml-8">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-slate-100 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)] p-4">
                <div className="text-[14px] font-bold text-slate-900 tracking-wide">
                  TABLE OF CONTENTS
                </div>
                <div
                  ref={tocListRef}
                  className="mt-2 space-y-1 max-h-[60vh] overflow-auto pr-1"
                >
                  {toc.map((t) => {
                    const indent =
                      t.level === "h3"
                        ? "pl-4"
                        : t.level === "h4"
                          ? "pl-7"
                          : t.level === "h5"
                            ? "pl-10"
                            : t.level === "h6"
                              ? "pl-12"
                              : "";
                    return (
                      <button
                        key={t.id}
                        data-toc-id={t.id}
                        onClick={() => scrollToId(t.id)}
                        className={[
                          "w-full text-left rounded-lg px-2 py-1.5 text-[13px] leading-snug transition",
                          indent,
                          t.id === activeId
                            ? "bg-[#EEF1FF] text-[#0037CA] font-semibold"
                            : "hover:bg-slate-50 hover:text-slate-900",
                        ].join(" ")}
                      >
                        {t.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
      <Footer />
    </section>
  );
}
