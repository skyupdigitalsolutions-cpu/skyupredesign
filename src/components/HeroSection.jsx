import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { HexagonBackground } from "./animate-ui/components/backgrounds/hexagon";
import Galaxy from "./react-bits/Galaxy";

// ── Shared variants ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container for hero content
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ────────────────────────────────────────────────────────────────

const BARS = [
  { h: 38 },
  { h: 52 },
  { h: 45 },
  { h: 63 },
  { h: 79 },
  { h: 95, lit: true },
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, skip all animations
  const motionProps = (variants, custom) =>
    shouldReduceMotion
      ? {}
      : {
          variants,
          initial: "hidden",
          animate: "show",
          custom,
        };

  const scrollMotionProps = (variants) =>
    shouldReduceMotion
      ? {}
      : {
          variants,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.25 },
        };

  return (
    <section className="relative isolate overflow-hidden text-neutral-900 font-sans">
      <div className="relative w-full">

        {/* ── HERO TOP ── */}
        <div className="relative isolate overflow-hidden bg-black min-h-[560px] lg:h-[655px] items-center text-center lg:py-12">

          {/* Staggered hero content */}
          <motion.div
            className="relative z-10 lg:px-[120px] flex flex-col items-center text-center mt-20"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[56px]"
            >
              Accelerate Business Growth with{" "}
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#0037CA] via-[#0037CA] to-[#ffb950] bg-clip-text text-transparent">
                AI-Powered Digital Marketing
              </span>
            </motion.h1>

            {/* Lead */}
            <motion.p
              variants={heroItem}
              className="mt-3 lg:mt-10 text-base sm:text-lg text-center leading-relaxed text-neutral-100 max-w-2xl mx-auto"
            >
              Skyup Digital Solutions LLP is where smart strategy meets real
              growth driving visibility, qualified leads, and consistent revenue
              for businesses that are ready to scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3 mt-4 lg:mt-10 justify-center"
            >
              <motion.a
                href="/"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0037CA] text-white font-semibold text-sm shadow-lg shadow-gray-400 group"
              >
                Get My Free Strategy Session
                <ArrowRight
                  size={17}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-300 hover:border-orange-100 hover:bg-[#FF8B14] text-neutral-800 hover:text-white font-semibold text-sm transition-colors duration-200 bg-white group"
              >
                <span className="inline-grid place-items-center w-5 h-5 rounded-full border border-neutral-200 group-hover:border-orange-200 group-hover:rotate-45 transition-all duration-200">
                  <ArrowUpRight size={12} strokeWidth={2.4} />
                </span>
                See Our Work
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-10 font-mono text-sm font-semibold tracking-wide justify-center"
            >
              {["No long-term contracts", "Free website audit included"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-xl"
                  >
                    <span className="inline-grid place-items-center w-4 h-4 rounded-full bg-[#0037CA] text-white">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {t}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* ── ABOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start m-6 lg:my-12 lg:px-[120px] lg:pt-12">

          {/* Left — slides in from left on scroll */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-neutral-900 m-0">
              What is <em className="not-italic text-[#0037CA]">Skyup</em>{" "}
              Digital Solutions?
            </h2>
          </motion.div>

          {/* Right — slides in from right on scroll */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-md leading-snug text-justify text-neutral-800 pl-4 border-l-2 border-orange-500 mb-5">
              Skyup Digital Solutions LLP is a Bangalore-based, data-driven
              digital marketing agency. We help businesses to gain visibility,
              generate qualified leads, and drive revenue. We build smart
              systems that deliver real, measurable results for real
              businesses—from SEO and paid ads to AI automation and
              high-converting web experiences.
            </p>
            <p className="text-md sm:text-base text-justify leading-relaxed mb-4">
              We are a trusted digital marketing company in Bangalore and help
              in building an online presence for your business that keeps on
              attracting, engaging, and converting customers month after month.
              Our team has the expertise to help you rank on Google, generate
              leads with paid ads, automate your follow-ups, or launch a website
              that actually converts visitors.
            </p>
            <p className="text-md text-justify sm:text-base leading-relaxed">
              Looking for the best digital marketing company in Bangalore that
              offers{" "}
              <strong className="text-neutral-800 font-semibold">
                strategy, technology, and real transparency ?
              </strong>
              &nbsp; You've landed on it.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}