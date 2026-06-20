import React from "react";

// Section 02 — Pain Point Block (Empathy)
// Coral/amber tension tones; resolved later in WhyChooseUs (section 05).

const TENSION = "#C2410C"; // coral/amber accent for the "problem" mood
const HEADING_NAVY = "#1B2440";

/* ── Icons ─────────────────────────────────────────────────────────── */
function EyeOffIcon({ className = "h-6 w-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}
function MazeIcon({ className = "h-6 w-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 3h18v18H3z" />
      <path d="M7 3v10h6" />
      <path d="M11 7v6h6" />
      <path d="M7 17h4" />
    </svg>
  );
}
function ChartUnclearIcon({ className = "h-6 w-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="M7 16l3-3 3 2 4-5" strokeDasharray="3 3" />
      <circle cx="18" cy="6" r="2.5" />
    </svg>
  );
}
function LockIcon({ className = "h-6 w-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const PAINS = [
  {
    icon: EyeOffIcon,
    title: "You're invisible on Google",
    body: "Your customers are searching right now — but they're finding your competitors, not you.",
  },
  {
    icon: MazeIcon,
    title: "Content that goes nowhere",
    body: "Blogs and pages get published, then sink without ranking, traffic, or a single lead to show for it.",
  },
  {
    icon: ChartUnclearIcon,
    title: "No clarity in reporting",
    body: "Vanity metrics and jargon-filled dashboards that never answer the only question that matters: is this working?",
  },
  {
    icon: LockIcon,
    title: "Locked into long contracts",
    body: "Tied to an agency for 12 months with no flexibility, even when the results never arrive.",
  },
];

export default function PainPoints({
  title = "Sound familiar?",
  subtitle = "Most businesses don't have an SEO problem — they have an SEO frustration.",
  pains = PAINS,
}) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-[30px] font-bold leading-tight tracking-tight sm:text-[40px]"
            style={{ color: HEADING_NAVY }}
          >
            {title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(({ icon: Icon, title: t, body }) => (
            <div
              key={t}
              className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6 transition-shadow hover:shadow-[0_18px_40px_-26px_rgba(194,65,12,0.55)]"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "#FBEAE0", color: TENSION }}
              >
                <Icon />
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}