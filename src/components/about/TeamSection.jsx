// src/components/about/TeamSection.jsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* Replace MEMBERS with your real team. `photo` optional — initials render until it exists. */
const MEMBERS = [
  {
    name: "chinii the spiderman",
    role: "Software Engineer",
    photo: "/images/jasss.webp",
  },
  { name: "chinii the spiderman", role: "Software Engineer", photo: "/images/jasss.webp" },
  { name: "Halli pooja", role: "Software Developer", photo: "/images/pooja.webp" },
  { name: "chinii the spiderman", role: "Lead Developer", photo: "/images/jasss.webp" },
  { name: "Team Member", role: "Designer", photo: "/images/shashi.webp" },
  { name: "Halli pooja", role: "Design Lead", photo: "/images/pooja.webp" },
];

function MemberCard({ name, role, photo, active }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border bg-white shadow-xl transition-all duration-500 ${
        active
          ? "border-[#FF8B14CC]/30 shadow-[#FF8B14CC]/15"
          : "border-slate-100"
      }`}
    >
      <div className="relative aspect-[4/4.4] overflow-hidden bg-gradient-to-br from-[#EDF2FF] to-[#F4F7FF]">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-5xl font-bold text-[#0037CA]/25">
              {initials}
            </span>
          </div>
        )}
        <div
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#9a9b9d] to-transparent transition-transform duration-500 ${
            active ? "translate-y-0" : "translate-y-full"
          }`}
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-base font-bold tracking-tight text-neutral-900">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#0037CA]">{role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const n = MEMBERS.length;
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const drag = useRef({ down: false, startX: 0, moved: 0 });
  const prevActive = useRef(active); // for seamless-loop wrap detection

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  // keep last-known active AFTER each render so we can compare next time
  useEffect(() => {
    prevActive.current = active;
  }, [active]);

  // ── sizing knobs ──────────────────────────────────────────────
  const CARD_W = isMobile ? 240 : 300; // base width of every card
  const ACTIVE_SCALE = 1.15; // how much BIGGER the center card is (try 1.1–1.3)
  const SIDE_SCALE = 0.9; // how small the neighbors are
  const SPACING = isMobile ? 100 : 300; // distance to side cards — raise if center overlaps them
  const STAGE_H = isMobile ? 470 : 560; // stage height — raise so the enlarged center isn't clipped
  const THRESHOLD = 90;

  // shortest circular distance from a card index to the active index
  const wrap = (raw) => {
    let o = raw;
    if (o > n / 2) o -= n;
    else if (o < -n / 2) o += n;
    return o;
  };

  const go = useCallback((dir) => setActive((a) => (a + dir + n) % n), [n]);

  const onDown = (e) => {
    drag.current = { down: true, startX: e.clientX, moved: 0 };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = dx;
    setDragX(dx);
  };
  const onUp = () => {
    if (!drag.current.down) return;
    const dx = drag.current.moved;
    drag.current.down = false;
    setDragX(0);
    if (Math.abs(dx) > THRESHOLD) go(dx < 0 ? 1 : -1);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section className="overflow-hidden bg-white px-6 py-12 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our team"
          title="The people behind the growth"
          lead="Marketers, developers, designers, strategists, and growth specialists — working as one team on your brand."
        />

        {/* 3D stage */}
        <div
          className="relative mt- flex touch-pan-y select-none items-center justify-center"
          style={{ height: STAGE_H, perspective: "1600px" }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={onUp}
        >
          {MEMBERS.map((m, i) => {
            const offset = wrap(i - active);
            const prevOffset = wrap(i - prevActive.current);
            // a card "wrapped" if it jumped across the seam (more than one slot)
            const wrapped = Math.abs(offset - prevOffset) > 1.5;

            const isActive = offset === 0;
            const dragShift = dragX / (isMobile ? 2 : 1.5);
            const clamp = Math.max(-2, Math.min(2, offset));
            const x = offset * SPACING + dragShift;
            const rotateY = -clamp * 40;
            const z = -Math.abs(offset) * 160;
            const scale = isActive ? ACTIVE_SCALE : SIDE_SCALE;
            const hidden = Math.abs(offset) > 2;

            // animate normally, but NOT while dragging or when wrapping across the seam
            const animate = !drag.current.down && !wrapped;

            return (
              <div
                key={`${m.name}-${i}`}
                onClick={() => !drag.current.moved && setActive(i)}
                className={`absolute left-1/2 top-1/2 ${
                  animate ? "transition-all duration-500 ease-out" : ""
                } ${isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                style={{
                  width: CARD_W,
                  zIndex: n - Math.abs(offset),
                  opacity: hidden ? 0 : isActive ? 1 : 0.6,
                  pointerEvents: hidden ? "none" : "auto",
                  transform: `translate(-50%, -50%) translateX(${x}px) rotateY(${rotateY}deg) translateZ(${z}px) scale(${scale})`,
                }}
              >
                <div className="relative">
                  <MemberCard {...m} active={isActive} />

                  {/* ground / contact shadow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -z-10 rounded-[50%] bg-black blur-2xl transition-all duration-500 ease-out"
                    style={{
                      bottom: isActive ? -44 : -30,
                      width: isActive ? "80%" : "62%",
                      height: isActive ? 46 : 30,
                      transform: "translateX(-50%)",
                      opacity: hidden ? 0 : isActive ? 0.32 : 0.15,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* controls */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous member"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-neutral-700 shadow-sm transition-colors hover:border-[#0037CA] hover:bg-[#0037CA] hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {MEMBERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to member ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#818388]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next member"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-neutral-700 shadow-sm transition-colors hover:border-[#0037CA] hover:bg-[#0037CA] hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
