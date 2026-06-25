// pages/+Layout.jsx
import "../src/index.css";
import { usePageContext } from "vike-react/usePageContext";
import { useEffect } from "react";
import ErrorBoundary from "../src/components/ErrorBoundary";

// ── Dynamic SEO for slug pages ──────────────────────────────────
import { BLOGS } from "@/data/blogs";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function Layout({ children }) {
  const pageContext = usePageContext();
  const { config, urlPathname } = pageContext;

  useEffect(() => {
    let title = config?.title;
    // Use metaDescription for static pages (avoids Vike native duplicate)
    let description = config?.metaDescription;
    let keywords = config?.keywords;

    // ── Blog slug pages ───────────────────────────────────────
    const blogMatch = urlPathname.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const b = BLOGS.find((x) => x.slug === blogMatch[1]);
      if (b) {
        title = b.seo?.metaTitle || b.title;
        description = b.seo?.metaDescription || b.description;
      }
    }

    // ── Work / case-study slug pages ──────────────────────────
    const workMatch = urlPathname.match(/^\/work\/(.+)$/);
    if (workMatch) {
      const c = CASE_STUDIES.find((x) => x.slug === workMatch[1]);
      if (c) {
        title = c.seo?.metaTitle || c.title;
        description = c.seo?.metaDescription || c.summary;
      }
    }

    // ── Service slug pages are handled by vike-react's native title/
    //    description config (see pages/service/@slug/+title.js and
    //    +description.js), so no manual handling is needed here. ──────

    // ── Apply title ───────────────────────────────────────────
    if (title) document.title = title;

    // ── Apply description ─────────────────────────────────────
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description ?? "");

    // ── Apply keywords ────────────────────────────────────────
    let kwTag = document.querySelector('meta[name="keywords"]');
    if (!kwTag) {
      kwTag = document.createElement("meta");
      kwTag.setAttribute("name", "keywords");
      document.head.appendChild(kwTag);
    }
    kwTag.setAttribute("content", keywords ?? "");

    // ── Canonical ─────────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://www.skyupdigitalsolutions.com${urlPathname === "/" ? "" : urlPathname}`,
    );
  }, [urlPathname, config]);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}