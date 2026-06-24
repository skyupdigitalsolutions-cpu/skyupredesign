// src/data/serviceSchema.js
const provider = { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" };
const areaServed = { "@type": "City", "name": "Bangalore" };
const svc = (position, name, slug, description, serviceType) => ({
  "@type": "ListItem",
  "position": position,
  "item": {
    "@type": "Service",
    "name": name,
    "url": `https://www.skyupdigitalsolutions.com/services/${slug}`,
    "description": description,
    "provider": provider,
    "areaServed": areaServed,
    "serviceType": serviceType
  }
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skyup Digital solutions LLP",
  "url": "https://www.skyupdigitalsolutions.com/service",
  "itemListElement": [
    svc(1, "Search Engine Optimisation", "search-engine-optimisation", "SkyUp helps businesses improve Google rankings with technical SEO, keyword research, content, backlinks, local SEO and transparent reporting.", "Search Engine Optimisation"),
    svc(2, "Social Media Marketing", "social-media-marketing", "SkyUp helps brands grow on Instagram, Facebook, LinkedIn, YouTube and more with content, engagement and lead-focused reporting.", "Social Media Marketing"),
    svc(3, "Performance Marketing", "performance-marketing", "Generate consistent leads and maximize ROI with our performance-driven Google Ads and PPC campaigns.", "Performance Marketing"),
    svc(4, "Email Marketing", "email-marketing", "Drive real revenue with proven email marketing services in Bangalore. Strategy, automation, design & analytics — all under one roof. Get your free audit today.", "Email Marketing"),
    svc(5, "AI Automation", "ai-automation", "SkyUp automates business workflows with AI chatbots, CRM automation, WhatsApp automation, voice AI, document processing, support and reporting.", "AI Automation"),
    svc(6, "Machine Learning", "machine-learning", "SkyUp delivers machine learning consulting, custom ML models, predictive analytics, NLP, computer vision, MLOps, maintenance and business-ready AI integration.", "Machine Learning"),
    svc(7, "UI/UX Design", "ui-ux-design", "SkyUp helps brands improve websites and apps with UX audits, user journeys, information architecture, wireframes, prototypes, UI design and testing.", "UI/UX Design"),
    svc(8, "Graphic Design", "graphic-design", "SkyUp creates logo design, branding, social media creatives, ad designs, brochures, company profiles, infographics and pitch decks for businesses.", "Graphic Design"),
    svc(9, "Web Development", "web-development", "SkyUp builds fast, responsive websites, e-commerce stores, web apps, ERP, LMS, dashboards, PWAs and CMS platforms that convert visitors.", "Web Development"),
    svc(10, "CRM", "crm", "SkyUp provides CRM solutions to manage leads, automate follow-ups, track sales activity, improve customer communication and increase business conversions.", "CRM")
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How can Skyup's digital marketing services help my business grow?", "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing services focus on increasing organic traffic, improving search engine rankings, and generating high-converting leads. By combining SEO, performance marketing, and paid advertising strategies, Skyup ensures measurable growth and sustainable online success." } },
    { "@type": "Question", "name": "How can I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Simply contact us, share your requirements, and our team will guide you through the next steps." } },
    { "@type": "Question", "name": "Do you work with startups as well as established businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We work with both startups and established businesses, tailoring our digital marketing strategies to fit your unique goals and growth stage." } },
    { "@type": "Question", "name": "What makes your digital marketing approach different?", "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing approach is data-driven, customized, and results-focused. We combine creativity with analytics to craft strategies that engage your audience, boost conversions, and maximize ROI." } },
    { "@type": "Question", "name": "Do you offer branding and creative design services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer comprehensive branding and creative design services as part of our digital marketing solutions, helping your business stand out and connect with your audience effectively." } },
    { "@type": "Question", "name": "How does AI automation help my business?", "acceptedAnswer": { "@type": "Answer", "text": "AI automation streamlines your marketing efforts by analyzing data, optimizing campaigns, and personalizing customer interactions, helping your business save time, increase efficiency, and drive better results." } }
  ]
};

export const serviceSchemas = [serviceSchema, faqSchema];