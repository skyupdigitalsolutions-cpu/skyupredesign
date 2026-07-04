// pages/+Layout.jsx
import "../src/index.css";
import { usePageContext } from "vike-react/usePageContext";
import { useEffect } from "react";
import ErrorBoundary from "../src/components/ErrorBoundary";

// ── Dynamic SEO for slug pages ──────────────────────────────────
import { BLOGS } from "@/data/blogs";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICES } from "@/data/services";

// Must match the `description` in pages/service/+config.js.
// (vike-react's `description` setting is server-only in v0.6.x, so the
// client can't read it from config — we keep a copy here for SPA nav.)
const SERVICE_INDEX_DESCRIPTION =
  "Explore SkyUp's services — SEO, SMM, performance marketing, email marketing, AI automation, machine learning, UI/UX design, web development and CRM.";

export default function Layout({ children }) {
  const pageContext = usePageContext();
  const { config, urlPathname } = pageContext;

  useEffect(() => {
    // vike-react natively manages <title> on both SSR and client-side
    // navigation. But its `description` setting is SERVER-ONLY in
    // vike-react 0.6.x (env: { server: true }) — the meta tag is NOT
    // updated on client-side navigation. So this effect must update the
    // description tag for service pages on navigation, mirroring the
    // blog/work handling below. Titles are only set here for legacy
    // static pages (and never when config.title is a function).
    let title;
    let description;
    const keywords = config?.keywords;

    const path = urlPathname.replace(/\/+$/, "") || "/";

    // ── Blog slug pages ───────────────────────────────────────
    const blogMatch = path.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const b = BLOGS.find((x) => x.slug === blogMatch[1]);
      if (b) {
        title = b.seo?.metaTitle || b.title;
        description = b.seo?.metaDescription || b.description;
      }
    }

    // ── Work / case-study slug pages ──────────────────────────
    const workMatch = path.match(/^\/our-work\/(.+)$/);
    if (workMatch) {
      const c = CASE_STUDIES.find((x) => x.slug === workMatch[1]);
      if (c) {
        title = c.seo?.metaTitle || c.title;
        description = c.seo?.metaDescription || c.summary;
      }
    }

    // ── Service pages: description only (title is handled by
    //    vike-react via pages/service/@slug/+title.js) ──────────
    const serviceMatch = path.match(/^\/services\/(.+)$/);
    if (serviceMatch) {
      const s = SERVICES.find((x) => x.slug === serviceMatch[1]);
      if (s) {
        description =
          s.seo?.metaDescription || s.heroSubline || s.tagline || "";
      }
    } else if (path === "/services") {
      description = SERVICE_INDEX_DESCRIPTION;
    }

    // ── Static pages on the legacy `metaDescription` setting ──
    if (!blogMatch && !workMatch && !serviceMatch && path !== "/services") {
      // config.title can be a FUNCTION on pages that use +title.js —
      // vike-react already applies it; assigning it here would put the
      // function's source code into document.title. Only strings pass.
      if (typeof config?.title === "string") title = config.title;
      description = config?.metaDescription;
    }

    // ── Apply title (only when we have a real string) ─────────
    if (typeof title === "string" && title) document.title = title;

    // ── Apply description (only when defined — never blank out
    //    the tag vike-react rendered on SSR) ────────────────────
    if (description !== undefined && description !== null) {
      let descTag = document.querySelector('meta[name="description"]');
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        document.head.appendChild(descTag);
      }
      descTag.setAttribute("content", description);

      // Keep og:description in sync when present (SSR renders one).
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
    }

    // ── Apply keywords (only when defined) ────────────────────
    if (keywords) {
      let kwTag = document.querySelector('meta[name="keywords"]');
      if (!kwTag) {
        kwTag = document.createElement("meta");
        kwTag.setAttribute("name", "keywords");
        document.head.appendChild(kwTag);
      }
      kwTag.setAttribute("content", keywords);
    }

    // ── Canonical ─────────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://www.skyupdigitalsolutions.com${path === "/" ? "" : path}`,
    );
  }, [urlPathname, config]);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}