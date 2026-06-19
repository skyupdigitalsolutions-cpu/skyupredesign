import DemoProcess from "@/components/demo/DemoProcess";
import FeaturesSplit from "@/components/demo/FeaturesSplit";
import WebDevBanner from "@/components/demo/WebDevBanner";
import WebDevInfoGrid from "@/components/demo/WebDevInfoGrid";
import DemoHero from "@/components/DemoHero";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Demo() {
  const FAQ_questions = [
    {
      q: "What is Skyup Digital Solutions?",
      a: "Skyup Digital Solutions is a modern AI-powered digital marketing agency and marketing and web development company that helps businesses improve online visibility, generate qualified leads, increase conversions, and achieve long-term business growth through strategic digital marketing services.",
    },
    {
      q: "What services does Skyup Digital Solutions offer?",
      a: "Skyup Digital Solutions offers complete digital marketing services including SEO services, Google Ads management, PPC advertising, social media marketing, web development, UI/UX design, graphic design, email marketing, AI-powered automation, machine learning solutions, branding, and conversion-focused growth strategies.",
    },
    {
      q: "Why should I choose Skyup Digital Solutions as my digital marketing agency?",
      a: "Skyup Digital Solutions combines data-driven marketing, AI-powered automation, creative strategy, and performance-focused execution to help businesses achieve measurable growth. Unlike traditional agencies, we focus on transparency, ROI, lead quality, and long-term digital success.",
    },
    {
      q: "How does an AI-powered growth agency help businesses grow?",
      a: "An AI-powered growth agency uses automation, analytics, customer behavior insights, and intelligent optimization strategies to improve marketing performance, audience targeting, lead generation, and business scalability while reducing wasted marketing spend.",
    },
    {
      q: "Do you provide SEO services for businesses?",
      a: "Yes. Our SEO services help businesses improve search engine rankings, organic traffic, local visibility, website authority, and lead generation through technical SEO, keyword optimization, content strategy, and performance tracking.",
    },
    {
      q: "Do you provide Google Ads and PPC advertising services?",
      a: "Yes. We create and manage Google Ads and PPC advertising campaigns designed to generate high-quality leads, increase website traffic, improve conversions, and maximize advertising ROI through strategic audience targeting and campaign optimization.",
    },
    {
      q: "Do you offer social media marketing services?",
      a: "Yes. Our social media marketing services help businesses build brand awareness, improve engagement, reach targeted audiences, and generate leads across platforms like Facebook, Instagram, LinkedIn, and other social channels.",
    },
    {
      q: "Do you provide website design and web development services?",
      a: "Yes. As a marketing and web development company, we design and develop responsive, SEO-friendly, fast-loading, and conversion-focused websites tailored to business goals and customer experience.",
    },
    {
      q: "Do you provide AI automation and machine learning solutions?",
      a: "Yes. We provide AI-powered automation and machine learning solutions that help businesses streamline marketing workflows, automate lead nurturing, improve customer communication, optimize campaign performance, and increase operational efficiency.",
    },
    {
      q: "How can I get started with Skyup Digital Solutions?",
      a: "You can get started by contacting Skyup Digital Solutions through our website inquiry form or consultation channels to discuss your business goals, digital marketing requirements, and growth opportunities with our team.",
    },
  ];
  return (
    <div>
      <Header />
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
        stats={[
          { value: "3.4x", label: "Avg. Traffic Increase" },
          {
            value: "1,600+",
            label: "Keywords Ranked",
            sub: "Page 1 of Google",
          },
          { value: "40%", label: "Lower Cost Per Lead" },
          { value: "14 days", label: "To First Results" },
        ]}
      />
      <DemoProcess />
      <WebDevBanner/>
      <WebDevInfoGrid/>
      <FeaturesSplit/>
      <FaqSection faqs={FAQ_questions}/>
      <Footer />
    </div>
  );
}
