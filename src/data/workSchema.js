// src/data/workSchema.js
const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": "1", "name": "Skyup Digital Solutions", "item": "https://www.skyupdigitalsolutions.com/" },
    { "@type": "ListItem", "position": "2", "name": "Work", "item": "https://www.skyupdigitalsolutions.com/works" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.skyupdigitalsolutions.com/work/#webpage",
  "url": "https://www.skyupdigitalsolutions.com/works",
  "name": "Real Growth. Real Results. Real Businesses.",
  "description": "Explore SkyUp's work in SEO, social media, performance marketing, AI automation, Machine Learning, CRM, UI/UX, graphic design and web development projects.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.skyupdigitalsolutions.com/#website",
    "url": "https://www.skyupdigitalsolutions.com/",
    "name": "SkyUp Digital Solutions LLP",
  },
  "about": {
    "@type": "Organization",
    "@id": "https://www.skyupdigitalsolutions.com/#organization",
  },
  "inLanguage": "en-IN",
};

export const workSchemas = [breadcrumbSchema, webPageSchema];