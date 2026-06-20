import DemoHero from "@/components/DemoHero";
import PainPoints from "@/components/demo/PainPoints";
import ServicesGrid from "@/components/demo/ServicesGrid";
import DemoProcess from "@/components/demo/DemoProcess";
import WhyChooseUs from "@/components/demo/WhyChooseUs";
import Testimonial from "@/components/demo/Testimonial";
import BottomCta from "@/components/demo/BottomCta";
import RelatedServices from "@/components/demo/RelatedServices";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// SEO-specific 6-step process (component map section 04).
// DemoProcess maps `steps` into a 2-col grid, so 6 steps render as 3 rows of 2.
const SEO_STEPS = [
  {
    n: "01",
    title: "SEO Audit",
    body: "A full technical and content audit to uncover exactly what's holding your rankings back.",
  },
  {
    n: "02",
    title: "Keyword Research",
    body: "We map the buyer-intent search terms worth winning and prioritise the quickest wins.",
  },
  {
    n: "03",
    title: "Strategy & Planning",
    body: "A clear roadmap covering on-page, content, and off-page work tied to your business goals.",
  },
  {
    n: "04",
    title: "On-Page Optimisation",
    body: "We optimise structure, content, and technical health so every page can rank.",
  },
  {
    n: "05",
    title: "Link Building",
    body: "We earn high-authority backlinks that build trust and lift your domain's strength.",
  },
  {
    n: "06",
    title: "Reporting & Improvement",
    body: "Plain-English monthly reports and continuous optimisation based on real results.",
  },
];

export default function Demo() {
  const FAQ_questions = [
    {
      q: "Why does SEO matter for my business?",
      a: "SEO puts your business in front of customers at the exact moment they're searching for what you offer. Unlike paid ads, organic rankings keep working long after the initial effort, delivering compounding traffic and leads over time.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "Most businesses see early movement within the first few months, with meaningful traffic and lead growth typically building from months four to six onward. SEO is a compounding investment — the results accelerate as authority grows.",
    },
    {
      q: "What types of SEO do you cover?",
      a: "We cover technical SEO, on-page optimisation, content strategy, off-page link building, and local SEO, plus specialised e-commerce SEO for online stores.",
    },
    {
      q: "What's included in an SEO audit?",
      a: "Our audit reviews your site's technical health, on-page content, site structure, backlink profile, keyword positioning, and competitor landscape — then prioritises the highest-impact fixes.",
    },
    {
      q: "What are backlinks and why do they matter?",
      a: "Backlinks are links from other websites to yours. They act as votes of confidence that tell search engines your site is trustworthy and authoritative, which is one of the strongest drivers of higher rankings.",
    },
    {
      q: "How do you do keyword research?",
      a: "We analyse search volume, competition, and buyer intent to find the terms your ideal customers actually use, then prioritise keywords that balance achievability with business value.",
    },
    {
      q: "Why should I choose Skyup for SEO?",
      a: "We offer transparent pricing, no lock-in contracts, ROI-first reporting, and enterprise-grade tools included. You stay because the results are good — not because a contract traps you.",
    },
    {
      q: "SEO vs paid ads — which is better?",
      a: "Paid ads deliver instant visibility but stop the moment you stop paying. SEO builds lasting organic traffic that compounds over time. The strongest strategies use both, and we can help you balance them.",
    },
    {
      q: "What does SEO optimisation actually involve?",
      a: "It involves improving your site's technical foundation, optimising content and structure for target keywords, earning authoritative backlinks, and continuously refining based on performance data.",
    },
    {
      q: "Do you offer SEO for small businesses?",
      a: "Yes. We tailor our SEO services and pricing to businesses of every size, with a strong focus on local SEO to help small businesses get found by customers nearby.",
    },
  ];

  return (
    <div>
      <Header />

      {/* 01 — Hero */}
      <DemoHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: "SEO Services" },
        ]}
        title="Rank Higher, Get Found, Grow Faster with Expert SEO"
        subtitle="Data-backed SEO strategies that put your brand at the top of search results."
        primaryCta={{
          label: "Request a Free Strategy Call",
          href: "/contact-us",
        }}
        secondaryCta={{ label: "See pricing", href: "#pricing" }}
        accentColor="#22D3EE"
      
      />

      {/* 02 — Pain Point Block */}
      <PainPoints />

      {/* 03 — Services Grid */}
      <ServicesGrid />

      {/* 04 — Process Steps (SEO, 6 steps) */}
      <DemoProcess
        title="The SEO process we follow"
        promo={{
          eyebrow: "HOW WE WORK",
          heading: "A proven, repeatable path to higher rankings",
          body: "Every engagement follows the same transparent process — so you always know what we're doing, why, and what to expect next.",
          cta: { label: "Book a Free Audit", href: "/contact-us" },
          image: "",
        }}
        steps={SEO_STEPS}
      />

      {/* 05 — Why Choose Us + case study */}
      <WhyChooseUs />

      {/* 06 — Testimonial */}
      <Testimonial />

      {/* 07 — FAQ Accordion */}
      <FaqSection faqs={FAQ_questions} />

      {/* 08 — Related Services */}
      <RelatedServices />

      <Footer />
    </div>
  );
}
