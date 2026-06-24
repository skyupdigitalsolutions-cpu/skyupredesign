// src/data/homeSchema.js
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Skyup Digital Solutions LLP",
  "image": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGXyC_UjjkII_Lodl06y8aNDF_wpeKDotvlmyjw_hDqoN8B3DOChrUMvWlJJPIAsKu9QKulhppZMEExWJdJknlFm7X-dXkyUO2ijGIcQWCb1WlIHfRbm7F5lKp9po-WZqQCQOIV-KJfAIc=w200-h200-n-k-no",
  "@id": "https://www.skyupdigitalsolutions.com/#localbusiness",
  "url": "https://www.skyupdigitalsolutions.com/",
  "telephone": "+918867867775",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dasarahalli Main Rd, E Block, Sahakar Nagar, Byatarayanapura",
    "addressLocality": "Bangalore",
    "postalCode": "560092",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 13.0551707, "longitude": 77.6024609 },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/people/SKYUP-Digital-Solutions/61584820941998/",
    "https://www.instagram.com/skyupdigitalsolutions/",
    "https://www.youtube.com/@SKYUPDigitalSolutionsBengaluru"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Skyup Digital Solutions LLP",
  "url": "https://www.skyupdigitalsolutions.com/",
  "logo": "https://www.skyupdigitalsolutions.com/images/rbd-logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918867867775",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/people/SKYUP-Digital-Solutions/61584820941998/",
    "https://www.instagram.com/skyupdigitalsolutions/",
    "https://www.youtube.com/@SKYUPDigitalSolutionsBengaluru"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.skyupdigitalsolutions.com/#website",
  "name": "SkyUp Digital Solutions",
  "alternateName": "SKYUP Digital",
  "url": "https://www.skyupdigitalsolutions.com/",
  "description": "Your trusted Digital Marketing Agency in Bangalore, delivering smart strategies, measurable results, and sustainable growth for your brand.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "SkyUp Digital Solutions LLP",
    "url": "https://www.skyupdigitalsolutions.com/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Why is my website getting traffic but not generating leads?", "acceptedAnswer": { "@type": "Answer", "text": "This usually happens when the website lacks conversion-focused design, clear messaging, strong CTAs, or a proper user experience strategy." } },
    { "@type": "Question", "name": "How long does SEO take to show results?", "acceptedAnswer": { "@type": "Answer", "text": "SEO performance depends on your industry, competition, and website condition, but most businesses begin seeing measurable improvements within 3 to 6 months." } },
    { "@type": "Question", "name": "Why are my Google Ads not generating quality leads?", "acceptedAnswer": { "@type": "Answer", "text": "Poor audience targeting, weak landing pages, incorrect keywords, and unoptimized campaigns often lead to low-quality leads and wasted ad spend." } },
    { "@type": "Question", "name": "Why should businesses invest in PPC advertising?", "acceptedAnswer": { "@type": "Answer", "text": "PPC helps businesses generate fast, targeted traffic, quality leads, and measurable ROI through paid ads." } },
    { "@type": "Question", "name": "Why is my business not ranking on Google locally?", "acceptedAnswer": { "@type": "Answer", "text": "Your business may lack local SEO optimization, Google Business Profile optimization, location-based content, or consistent online signals." } },
    { "@type": "Question", "name": "How can marketing automation save time for my business?", "acceptedAnswer": { "@type": "Answer", "text": "Automation streamlines repetitive tasks like lead follow-ups, email campaigns, CRM updates, and customer communication." } },
    { "@type": "Question", "name": "Can AI automation improve customer response time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI-powered systems can automate responses, qualify leads instantly, and improve customer communication efficiency." } },
    { "@type": "Question", "name": "What does UI/UX design do for a business website?", "acceptedAnswer": { "@type": "Answer", "text": "UI/UX design improves user experience, increases engagement, and helps convert more visitors into customers." } },
    { "@type": "Question", "name": "How can machine learning benefit a business?", "acceptedAnswer": { "@type": "Answer", "text": "Machine learning helps businesses automate processes, analyze customer behavior, and make smarter data-driven decisions." } },
    { "@type": "Question", "name": "How do I know if my digital marketing campaigns are actually working?", "acceptedAnswer": { "@type": "Answer", "text": "Tracking metrics like leads, conversions, ROI, traffic quality, and customer acquisition costs helps measure campaign performance effectively." } }
  ]
};

export const homeSchemas = [localBusinessSchema, organizationSchema, websiteSchema, faqSchema];