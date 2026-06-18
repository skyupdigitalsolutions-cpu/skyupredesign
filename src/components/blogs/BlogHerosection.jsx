// src/components/service/ServiceHero.jsx
import React from "react";

export default function BlogHerosection({
  image = "/images/service-hero.jpg",
  eyebrow = "Our Services",
}) {
  return (
    <section className="relative h-[550px] w-full overflow-hidden bg-[#001a63]">
      {/* Background image — opacity controls how faded it is over the brand color */}
      <img
        src={image}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      {/* Optional extra wash for contrast (remove if you want the image brighter) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#0037CA]/40" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[56px]">
          Digital Growth Insights for&nbsp;
          <span className="bg-gradient-to-r from-[#87b6f4] to-[#ffb950] bg-clip-text text-transparent">
            Brands
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          Practical tips, data-backed strategies and expert perspectives from SkyUp Digital's team  helping businesses grow smarter online.
        </p>
      </div>
    </section>
  );
}
