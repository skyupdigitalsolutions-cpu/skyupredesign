import React from "react";

// Section 03 — Services Grid (What We Offer)
// 4×2 grid of 8 service cards: icon, H3, 2-line description, learn-more link.

const BRAND = "#0037CA";
const HEADING_NAVY = "#1B2440";

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* Compact line icons keyed to each service */
const I = (paths) => function Icon({ className = "h-6 w-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">{paths}</svg>
  );
};

const SERVICES = [
  {
    title: "Technical SEO Audit",
    body: "A full crawl of your site to fix what's silently holding your rankings back.",
    href: "#",
    Icon: I(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6M11 8v6" /></>),
  },
  {
    title: "Keyword Research",
    body: "Find the exact terms your buyers search — and the ones worth winning.",
    href: "#",
    Icon: I(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
  },
  {
    title: "On-Page Optimisation",
    body: "Titles, structure, and content tuned so every page earns its rank.",
    href: "#",
    Icon: I(<><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h8M8 16h5" /></>),
  },
  {
    title: "Content Strategy",
    body: "A topic plan that builds authority and pulls in organic traffic over time.",
    href: "#",
    Icon: I(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>),
  },
  {
    title: "Link Building",
    body: "Earn high-authority backlinks that tell Google you're the real deal.",
    href: "#",
    Icon: I(<><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" /></>),
  },
  {
    title: "Local SEO",
    body: "Dominate the map pack and get found by customers near you.",
    href: "#",
    Icon: I(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>),
  },
  {
    title: "E-Commerce SEO",
    body: "Product and category pages built to rank and convert at scale.",
    href: "#",
    Icon: I(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></>),
  },
  {
    title: "Monthly Reporting",
    body: "Plain-English reports that show exactly what changed and why.",
    href: "#",
    Icon: I(<><path d="M3 3v18h18" /><path d="M7 15l3-4 3 2 4-6" /></>),
  },
];

export default function ServicesGrid({
  eyebrow = "WHAT WE OFFER",
  title = "Everything you need to rank — under one roof",
  services = SERVICES,
}) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: BRAND }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px]"
            style={{ color: HEADING_NAVY }}
          >
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title: t, body, href, Icon }) => (
            <a
              key={t}
              href={href}
              className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 no-underline shadow-[0_10px_30px_-24px_rgba(11,26,59,0.45)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_46px_-26px_rgba(0,55,202,0.45)]"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                style={{ background: "#E6ECFF", color: BRAND }}
              >
                <Icon />
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-slate-900">{t}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-600">{body}</p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold transition-transform group-hover:gap-2.5"
                style={{ color: BRAND }}
              >
                Learn more <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}