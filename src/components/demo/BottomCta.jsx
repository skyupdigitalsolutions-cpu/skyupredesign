import React from "react";

// Section 08 — Bottom CTA (Conversion)
// Full-width brand-blue banner. Repeats the no-contract / no-jargon promise.
// CTA mirrors the hero so the user journey stays consistent.

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

export default function BottomCta({
  title = "Find out exactly why you're not ranking",
  microcopy = "Get a free, no-obligation SEO audit. We'll show you what's holding you back and what we'd fix first — in plain English.",
  cta = { label: "Get my free audit", href: "/contact-us" },
  reassurance = "No contracts. No jargon. No pressure.",
  showEmailInput = true,
}) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16"
        style={{
          background:
            "radial-gradient(120% 140% at 50% -20%, #0037CA 0%, #001A66 60%, #021A5E 100%)",
        }}
      >
        {/* dot grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
            {microcopy}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {showEmailInput && (
              <input
                type="email"
                inputMode="email"
                placeholder="you@company.com"
                aria-label="Your email address"
                className="w-full rounded-full border-0 bg-white/95 px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white sm:w-72"
              />
            )}
            <a
              href={cta.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0037CA] no-underline shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              {cta.label}
              <ArrowRight />
            </a>
          </div>

          <p className="mt-5 text-[13px] font-medium text-white/65">{reassurance}</p>
        </div>
      </div>
    </section>
  );
}