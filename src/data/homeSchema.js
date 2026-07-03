// src/data/homeSchema.js
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Skyup Digital Solutions LLP",
  "image": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGXyC_UjjkII_Lodl06y8aNDF_wpeKDotvlmyjw_hDqoN8B3DOChrUMvWlJJPIAsKu9QKulhppZMEExWJdJknlFm7X-dXkyUO2ijGIcQWCb1WlIHfRbm7F5lKp9po-WZqQCQOIV-KJfAIc=w200-h200-n-k-no",
  "@id": "https://www.skyupdigitalsolutions.com/",
  "url": "https://www.skyupdigitalsolutions.com/",
  "telephone": "8867867775",
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
  "logo": "https://www.skyupdigitalsolutions.com/images/skyup-logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "8867867775",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.skyupdigitalsolutions.com/services/#service",
  "name": "Digital Marketing Services",
  "alternateName": "SkyUp Digital Solutions Services",
  "url": "https://www.skyupdigitalsolutions.com/services",
  "description": "SkyUp Digital Solutions LLP offers digital marketing services including SEO, social media marketing, performance marketing, email marketing, AI automation, machine learning, UI UX design, graphic design, web development and CRM solutions for businesses.",
  "serviceType": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.skyupdigitalsolutions.com/#organization",
    "name": "SkyUp Digital Solutions LLP",
    "url": "https://www.skyupdigitalsolutions.com/"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.skyupdigitalsolutions.com/services/#webpage",
    "url": "https://www.skyupdigitalsolutions.com/services",
    "name": "Digital Marketing Services in Bangalore | SkyUp Digital Solutions"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SkyUp Digital Solutions Service Catalog",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimisation",
            "url": "https://www.skyupdigitalsolutions.com/services/search-engine-optimisation",
            "description": "SkyUp helps businesses improve Google rankings with technical SEO, keyword research, content, backlinks, local SEO and transparent reporting.",
            "serviceType": "Search Engine Optimisation"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "url": "https://www.skyupdigitalsolutions.com/services/social-media-marketing",
            "description": "SkyUp helps brands grow on Instagram, Facebook, LinkedIn, YouTube and more with content, engagement and lead-focused reporting.",
            "serviceType": "Social Media Marketing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "3",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "url": "https://www.skyupdigitalsolutions.com/services/performance-marketing",
            "description": "Generate consistent leads and maximize ROI with performance-driven Google Ads, Meta Ads and PPC campaigns.",
            "serviceType": "Performance Marketing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "4",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Email Marketing",
            "url": "https://www.skyupdigitalsolutions.com/services/email-marketing",
            "description": "Email marketing services including strategy, automation, email design, campaign setup, analytics and revenue-focused customer communication.",
            "serviceType": "Email Marketing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "5",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "url": "https://www.skyupdigitalsolutions.com/services/ai-automation",
            "description": "SkyUp automates business workflows with AI chatbots, CRM automation, WhatsApp automation, voice AI, document processing, support and reporting.",
            "serviceType": "AI Automation"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "6",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning",
            "url": "https://www.skyupdigitalsolutions.com/services/machine-learning",
            "description": "SkyUp delivers machine learning consulting, custom ML models, predictive analytics, NLP, computer vision, MLOps and business-ready AI integration.",
            "serviceType": "Machine Learning"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "7",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "url": "https://www.skyupdigitalsolutions.com/services/ui-ux-design",
            "description": "SkyUp helps brands improve websites and apps with UX audits, user journeys, information architecture, wireframes, prototypes, UI design and testing.",
            "serviceType": "UI/UX Design"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "8",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "url": "https://www.skyupdigitalsolutions.com/services/graphic-design",
            "description": "SkyUp creates logo design, branding, social media creatives, ad designs, brochures, company profiles, infographics and pitch decks for businesses.",
            "serviceType": "Graphic Design"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "9",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "url": "https://www.skyupdigitalsolutions.com/services/web-development",
            "description": "SkyUp builds fast, responsive websites, e-commerce stores, web apps, ERP, LMS, dashboards, PWAs and CMS platforms that convert visitors.",
            "serviceType": "Web Development"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "10",
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM",
            "url": "https://www.skyupdigitalsolutions.com/services/crm",
            "description": "SkyUp provides CRM solutions to manage leads, automate follow-ups, track sales activity, improve customer communication and increase business conversions.",
            "serviceType": "CRM"
          }
        }
      }
    ]
  }
};

export const homeSchemas = [
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
  serviceSchema
];