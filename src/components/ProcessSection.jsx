import React from "react";
import {
  Workflow,
  Search,
  Compass,
  Rocket,
  Gauge,
  TrendingUp,
} from "lucide-react";

/**
 * ProcessSection — Tailwind-only version (no internal <style> / scoped CSS).
 *
 * Font loading: the design uses Bricolage Grotesque / Hanken Grotesk / JetBrains
 * Mono. A utility class can set font-family but can't load the files, so add this
 * once to your root layout (app/layout.jsx) or global CSS — it is NOT part of this
 * component:
 *
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link
 *     href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500&family=JetBrains+Mono:wght@500;600&display=swap"
 *     rel="stylesheet"
 *   />
 *
 * Without it, the arbitrary font-[...] classes fall back to the system stack.
 */

const STEPS = [
  {
    n: "01",
    title: "Discovery & Research",
    icon: Search,
    bar: "bg-gradient-to-r from-[#0037CA] to-[#4d7bf8]",
    hoverBorder: "hover:border-[#4d7bf8]",
    hoverIcon: "group-hover:text-[#4d7bf8]",
    body: "First we understand your business. This means auditing your current digital marketing performance, understanding your audience, looking at your competitors, and figuring out the biggest opportunities. We ask the right questions before we make any recommendations—because strategy based on assumptions rarely delivers.",
  },
  {
    n: "02",
    title: "Strategic Planning",
    icon: Compass,
    bar: "bg-gradient-to-r from-[#FA9F43] to-[#FF8000]",
    hoverBorder: "hover:border-[#FA9F43]",
    hoverIcon: "group-hover:text-[#FA9F43]",
    body: "Knowing where you are and where you want to go, we build a customised growth roadmap. This includes SEO priorities, paid advertising structure, automation workflows, content strategy, and clear milestones — all in sync with your business goals and budget. You get to see the entire plan before anything goes live.",
  },
  {
    n: "03",
    title: "Implementation",
    icon: Rocket,
    bar: "bg-gradient-to-r from-[#0037CA] to-[#4d7bf8]",
    hoverBorder: "hover:border-[#4d7bf8]",
    hoverIcon: "group-hover:text-[#4d7bf8]",
    body: "That’s where the work is done. Our specialist team will kick off your campaigns, develop your assets, deploy your automation systems, and get everything live. We work quickly, communicate well at every stage, and keep you in the loop without swamping you with unnecessary detail.",
  },
  {
    n: "04",
    title: "Optimisation",
    icon: Gauge,
    bar: "bg-gradient-to-r from-[#FA9F43] to-[#FF8000]",
    hoverBorder: "hover:border-[#FA9F43]",
    hoverIcon: "group-hover:text-[#FA9F43]",
    body: "Once your campaigns are live, we continuously monitor performance, analyse the data, and make improvements. We try new things, we get better at targeting our audience, we improve conversion rates, and we cut the stuff that doesn’t work. Digital marketing is never a set-and-forget exercise – it’s constant optimisation that separates average results from exceptional ones.",
  },
  {
    n: "05",
    title: "Scaling",
    icon: TrendingUp,
    bar: "bg-gradient-to-r from-[#0037CA] to-[#4d7bf8]",
    hoverBorder: "hover:border-[#4d7bf8]",
    hoverIcon: "group-hover:text-[#4d7bf8]",
    body: "If a strategy is consistently working, we scale it out. We identify the best-performing channels and campaigns and invest more resources into them – so your growth accelerates rather than plateaus. This is how good digital marketing multiplies over time.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative isolate font-[poppins] overflow-hidden antialiased text-[#0f1729] bg-blue-50/50 bg-[radial-gradient(120%_80%_at_85%_-10%,rgba(239,116,44,0.05),transparent_55%)] [padding:clamp(34px,5vw,30px)_clamp(18px,4.5vw,72px)] font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-[1600px]">
        {/* header */}
        <div className="flex items-center px-20 gap-[clamp(14px,2vw,22px)]">
          <div className="grid flex-none place-items-center w-[46px] h-[46px] rounded-full text-[#20140b]  bg-white shadow-md">
            <Workflow size={22} strokeWidth={2.1} />
          </div>
          <h2 className="m-0 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] font-[poppins] font-bold uppercase tracking-[-0.01em] whitespace-nowrap text-[clamp(26px,4.4vw,46px)] max-[540px]:whitespace-normal">
            Our Process
          </h2>
          <span className="relative flex-1 h-[2px] min-w-[24px] rounded-[2px] bg-gradient-to-r from-[rgba(15,23,41,0.7)] to-[rgba(15,23,41,0.12)] before:content-[''] before:absolute before:-left-[2px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-[1.5px] before:bg-[#0f1729]" />
        </div>

        {/* subhead */}
        <p className="mt-4 mb-[clamp(30px,4vw,52px)] text-[clamp(16px,1.3vw,16.5px)] leading-[1.6] lg:max-w-[850px] px-20">
          We have a clear and repeatable process that removes the guesswork from
          digital marketing. Every client starts with step one-because unless you
          understand your business properly, you can&rsquo;t build a strategy that
          actually works.
        </p>

        {/* grid */}
        <div className="grid grid-cols-5 gap-[clamp(14px,1.4vw,20px)] max-[1180px]:grid-cols-3 max-[820px]:grid-cols-2 max-[540px]:grid-cols-1">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.n}
                className={`group relative flex min-h-[350px] flex-col rounded-2xl border border-[rgba(15,23,41,0.12)] bg-white pt-4 pb-5 shadow-[0_1px_2px_rgba(15,23,41,0.05),0_14px_34px_-26px_rgba(15,23,41,0.35)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_28px_52px_-26px_rgba(15,23,41,0.3)] max-[820px]:min-h-[340px] max-[540px]:min-h-0 ${step.hoverBorder}`}
              >
                {/* off-center colored tab */}
                <header
                  className={`relative left-[15px] z-10 ml-[18px] flex min-h-[58px] flex-col justify-center gap-[2px] overflow-hidden px-4 py-[11px] shadow-[0_10px_24px_-14px_rgba(15,23,41,0.4)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[4px] after:content-[''] after:[background-image:linear-gradient(180deg,rgba(255,255,255,0.18),transparent_55%)] ${step.bar}`}
                >
                  <span className="font-['JetBrains_Mono',ui-monospace,monospace] text-[12px] font-semibold uppercase tracking-[0.18em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.28)]">
                    Step {step.n}
                  </span>
                  <h3 className="relative m-0 text-[clamp(18px,1.15vw,16.5px)] font-bold leading-[1.12] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                    {step.title}
                  </h3>
                </header>

                {/* body */}
                <p className="mx-[18px] mt-4 text-justify text-[14px] leading-[1.62] ">
                  {step.body}
                </p>

                {/* footer: icon + connector rail */}
                <div className="mx-[18px] mt-auto flex items-center gap-3 pt-[10px]">
                  <span
                    className={`flex-none transition-[color,transform] duration-300 group-hover:-translate-y-[2px] ${step.hoverIcon}`}
                  >
                    <Icon size={34} strokeWidth={1.6} />
                  </span>
                  <span className="relative h-px flex-1 -mr-[18px] bg-[rgba(15,23,41,0.07)]" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}