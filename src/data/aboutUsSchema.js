// src/data/aboutUsSchema.js
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.skyupdigitalsolutions.com/#organization",
  "name": "Skyup Digital Solutions LLP",
  "url": "https://www.skyupdigitalsolutions.com/about-us",
  "logo": "https://www.skyupdigitalsolutions.com/images/rbd-logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918867867775",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1",
  },
  "sameAs": [
    "https://www.facebook.com/people/SKYUP-Digital-Solutions/61584820941998/",
    "https://www.instagram.com/skyupdigitalsolutions/",
    "https://www.youtube.com/@SKYUPDigitalSolutionsBengaluru",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Skyup Digital Solutions?", "acceptedAnswer": { "@type": "Answer", "text": "Skyup Digital Solutions is a modern AI-powered digital marketing agency and marketing and web development company that helps businesses improve online visibility, generate qualified leads, increase conversions, and achieve long-term business growth through strategic digital marketing services." } },
    { "@type": "Question", "name": "What services does Skyup Digital Solutions offer?", "acceptedAnswer": { "@type": "Answer", "text": "Skyup Digital Solutions offers complete digital marketing services including SEO services, Google Ads management, PPC advertising, social media marketing, web development, UI/UX design, graphic design, email marketing, AI-powered automation, machine learning solutions, branding, and conversion-focused growth strategies." } },
    { "@type": "Question", "name": "Why should I choose Skyup Digital Solutions as my digital marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Skyup Digital Solutions combines data-driven marketing, AI-powered automation, creative strategy, and performance-focused execution to help businesses achieve measurable growth. Unlike traditional agencies, we focus on transparency, ROI, lead quality, and long-term digital success." } },
    { "@type": "Question", "name": "How does an AI-powered growth agency help businesses grow?", "acceptedAnswer": { "@type": "Answer", "text": "An AI-powered growth agency uses automation, analytics, customer behavior insights, and intelligent optimization strategies to improve marketing performance, audience targeting, lead generation, and business scalability while reducing wasted marketing spend." } },
    { "@type": "Question", "name": "Do you provide SEO services for businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our SEO services help businesses improve search engine rankings, organic traffic, local visibility, website authority, and lead generation through technical SEO, keyword optimization, content strategy, and performance tracking." } },
    { "@type": "Question", "name": "Do you provide Google Ads and PPC advertising services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We create and manage Google Ads and PPC advertising campaigns designed to generate high-quality leads, increase website traffic, improve conversions, and maximize advertising ROI through strategic audience targeting and campaign optimization." } },
    { "@type": "Question", "name": "Do you offer social media marketing services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our social media marketing services help businesses build brand awareness, improve engagement, reach targeted audiences, and generate leads across platforms like Facebook, Instagram, LinkedIn, and other social channels." } },
    { "@type": "Question", "name": "Do you provide website design and web development services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. As a marketing and web development company, we design and develop responsive, SEO-friendly, fast-loading, and conversion-focused websites tailored to business goals and customer experience." } },
    { "@type": "Question", "name": "Do you provide AI automation and machine learning solutions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide AI-powered automation and machine learning solutions that help businesses streamline marketing workflows, automate lead nurturing, improve customer communication, optimize campaign performance, and increase operational efficiency." } },
    { "@type": "Question", "name": "How can I get started with Skyup Digital Solutions?", "acceptedAnswer": { "@type": "Answer", "text": "You can get started by contacting Skyup Digital Solutions through our website inquiry form or consultation channels to discuss your business goals, digital marketing requirements, and growth opportunities with our team." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": "1", "name": "Skyup Digital Solutions", "item": "https://www.skyupdigitalsolutions.com/" },
    { "@type": "ListItem", "position": "2", "name": "About Us", "item": "https://www.skyupdigitalsolutions.com/about-us" },
  ],
};

export const aboutUsSchemas = [organizationSchema, faqSchema, breadcrumbSchema];