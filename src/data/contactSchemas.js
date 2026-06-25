
const contactBreadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": "1", "name": "Skyup Digital Solutions", "item": "https://www.skyupdigitalsolutions.com/" },
    { "@type": "ListItem", "position": "2", "name": "Contact Us", "item": "https://www.skyupdigitalsolutions.com/contact-us" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.skyupdigitalsolutions.com/contact-us/#contactpage",
  "name": "SkyUp Digital Solutions LLP",
  "url": "https://www.skyupdigitalsolutions.com/contact-us/",
  "logo": "https://www.skyupdigitalsolutions.com/images/rbd-logo.webp",
  "description": "SkyUp Digital Solutions LLP is a digital marketing and technology company offering SEO, performance marketing, social media marketing, web development, graphic design, UI/UX design, machine learning, AI automation and CRM solutions.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8867867775",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Kannada", "Hindi"],
  },
  "sameAs": [
    "https://www.facebook.com/people/SKYUP-Digital-Solutions/61584820941998/",
    "https://www.instagram.com/skyupdigitalsolutions/",
    "https://www.youtube.com/@SKYUPDigitalSolutionsBengaluru",
  ],
};

const contactWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.skyupdigitalsolutions.com/contact-us/#webpage",
  "url": "https://www.skyupdigitalsolutions.com/contact-us/",
  "name": "Contact Us | SkyUp Digital Solutions LLP",
  "description": "Get in touch with Skyup Digital Solutions, Bengaluru's leading digital marketing agency. Call us, email us, or visit our office in Sahakar Nagar to discuss your digital growth goals.",
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

export const contactSchemas = [contactBreadcrumbSchema, contactPageSchema, contactWebPageSchema];