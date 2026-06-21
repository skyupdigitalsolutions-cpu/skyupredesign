// src/components/about/SectionHeader.jsx
import React from "react";
import { Reveal } from "./animations";

/* Eyebrow pill + display heading + optional lead, with built-in reveal.
 *
 * sticky : when true, the header pins to the top while its parent section
 *          scrolls past. IMPORTANT: sticky only works if NO ancestor between
 *          this header and the page scroll root has `overflow-hidden/auto/scroll`,
 *          and the parent section must be TALLER than the header (otherwise it
 *          scrolls away immediately). The site nav is `sticky top-0 z-50`, so
 *          `top` defaults to 96px to tuck just beneath it.
 * top    : offset from the top of the viewport in px (default 96).
 */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  sticky = false,
  top = 96,
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : "text-left"} max-w-3xl ${
        sticky ? "sticky z-30  py-4" : ""
      }`}
      style={sticky ? { top } : undefined}
    >
      {eyebrow && (
        <Reveal y={16}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0037CA]/15 bg-[#0037CA]/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0037CA]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#0037CA] opacity-60" style={{ animation: "sk-pulse-ring 1.8s ease-out infinite" }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0037CA]" />
            </span>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={180}>
          <p className="mt-5 text-[15px] leading-relaxed sm:text-base">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}   