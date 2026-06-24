import JsonLd from "@/components/JsonLd";
import { serviceSchemas } from "@/data/serviceSchema";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurToolkit from "@/components/service/OurToolkit";
import ResultsAndProcess from "@/components/service/ResultsAndProcess";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceSection from "@/components/service/ServiceSection";

const FAQ_questions = [
  {
    q: "What is included in your SEO services?",
    a: "Our SEO services include technical SEO, on-page optimization, keyword research, content strategy, local SEO, link building, and performance tracking to improve rankings and organic traffic.",
  },
  {
    q: "How does social media marketing help my business grow?",
    a: "Social media marketing helps increase brand awareness, audience engagement, customer trust, and lead generation through strategic content, paid campaigns, and community management.",
  },
  {
    q: "Which platforms do you use for performance marketing campaigns?",
    a: "We manage paid advertising campaigns across Google Ads, Meta Ads, LinkedIn, and programmatic advertising platforms.",
  },
  {
    q: "What types of email marketing campaigns do you create?",
    a: "We create welcome flows, drip campaigns, promotional emails, abandoned cart sequences, re-engagement campaigns, and personalized automation workflows.",
  },
  {
    q: "How can AI automation improve business operations?",
    a: "AI automation reduces manual work by automating lead management, customer support, reporting, and repetitive business processes.",
  },
  {
    q: "What machine learning solutions do you offer?",
    a: "We provide predictive analytics, customer segmentation, recommendation engines, demand forecasting, churn prediction, and custom machine learning models based on business data.",
  },
  {
    q: "What is included in your UI/UX design service?",
    a: "Our UI/UX design services include user research, wireframing, interface design, prototyping, usability testing, and user journey optimization.",
  },
  {
    q: "Do you provide complete branding and graphic design services?",
    a: "Yes. We design logos, brand identities, social media creatives, marketing materials, packaging designs, motion graphics, and ad creatives.",
  },
  {
    q: "Which technologies do you use for web development?",
    a: "We build websites and web applications using React, Next.js, and other modern development technologies focused on speed and scalability.",
  },
  {
    q: "Do you build conversion-focused landing pages?",
    a: "Yes. We create high-converting landing pages optimized for paid ads, lead generation, sales funnels, and better conversion rates.",
  },
];

export default function Service() {
  return (
    <div>
      <JsonLd schemas={serviceSchemas} />
      <Header />
      <ServiceHero />
      <ServiceSection />
      <ResultsAndProcess />
      <OurToolkit />
      <FaqSection
        faqs={FAQ_questions}
        title="Questions Businesses Often Ask Us"
        subtitle=""
      />
      <Footer
        ctaProps={{
          title: "READY TO GROW?",
          substitle: "Stop guessing. Start growing with data.",
          description:
            "Schedule a FREE 30-min strategy call. No pitch deck. No lock-in. Just a real conversation about what’s really going to move the needle for your business.",
          primaryLabel:"Request a Free Strategy Call"
        }}
      />
    </div>
  );
}
