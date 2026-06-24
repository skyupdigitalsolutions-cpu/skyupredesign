import JsonLd from "@/components/JsonLd";
import { aboutUsSchemas } from "@/data/aboutUsSchema";
import React from "react";
import { GlobalStyles } from "../components/about/animations";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import WhyWeStarted from "../components/about/WhyWeStarted";
import OurApproach from "../components/about/OurApproach";
import TeamSection from "../components/about/TeamSection";
import ClientsAndTestimonials from "../components/about/ClientsAndTestimonials";
import CultureWorkflow from "../components/about/CultureWorkflow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FaqSection from "@/components/FaqSection";
import GoogleReviews from "@/components/GoogleReviews";

const FAQ_questions=[
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

export default function About() {
  return (
    <div>
      <JsonLd schemas={aboutUsSchemas} />
      <Header />
      <GlobalStyles />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <WhyWeStarted />
      <OurApproach />
      <TeamSection />
      <GoogleReviews />
      <CultureWorkflow />
      <FaqSection
        faqs={FAQ_questions}
        title="Questions Businesses Often Ask Us"
        subtitle=""
      />
      <Footer ctaProps={{
        title:'Partner With Skyup Digital Solutions',
        substitle:"Your Growth-Focused Digital Marketing Partner",
        description:"Skyup Digital Solutions can help you if you want to increase your visibility online, get qualified leads, build a converting website, or use AI to help your business grow. We are a modern digital marketing agency and marketing and web development company that combines strategy, creativity, technology, and performance marketing to grow businesses smarter, faster, and more efficiently."
      }}/>
    </div>
  );
}
