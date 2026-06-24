// pages/service/+Head.jsx
export default function Head() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Skyup Digital solutions LLP",
    "url": "https://www.skyupdigitalsolutions.com/digital-marketing-services-in-bangalore",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Search Engine Optimisation",
          "url": "https://www.skyupdigitalsolutions.com/services/search-engine-optimisation",
          "description": "SkyUp helps businesses improve Google rankings with technical SEO, keyword research, content, backlinks, local SEO and transparent reporting.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Search Engine Optimisation"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "url": "https://www.skyupdigitalsolutions.com/services/social-media-marketing",
          "description": "SkyUp helps brands grow on Instagram, Facebook, LinkedIn, YouTube and more with content, engagement and lead-focused reporting.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Social Media Marketing"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Performance Marketing",
          "url": "https://www.skyupdigitalsolutions.com/services/performance-marketing",
          "description": "Generate consistent leads and maximize ROI with our performance-driven Google Ads and PPC campaigns.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Performance Marketing"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Email Marketing",
          "url": "https://www.skyupdigitalsolutions.com/services/email-marketing",
          "description": "Drive real revenue with proven email marketing services in Bangalore. Strategy, automation, design & analytics — all under one roof. Get your free audit today.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Email Marketing"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "AI Automation",
          "url": "https://www.skyupdigitalsolutions.com/services/ai-automation",
          "description": "SkyUp automates business workflows with AI chatbots, CRM automation, WhatsApp automation, voice AI, document processing, support and reporting.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "AI Automation"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Machine Learning",
          // FIXED: was pointing at the UI/UX URL
          "url": "https://www.skyupdigitalsolutions.com/services/machine-learning",
          "description": "SkyUp delivers machine learning consulting, custom ML models, predictive analytics, NLP, computer vision, MLOps, maintenance and business-ready AI integration.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Machine Learning"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Service",
          "name": "UI/UX Design",
          "url": "https://www.skyupdigitalsolutions.com/services/ui-ux-design",
          "description": "SkyUp helps brands improve websites and apps with UX audits, user journeys, information architecture, wireframes, prototypes, UI design and testing.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "UI/UX Design"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Service",
          "name": "Graphic Design",
          "url": "https://www.skyupdigitalsolutions.com/services/graphic-design",
          "description": "SkyUp creates logo design, branding, social media creatives, ad designs, brochures, company profiles, infographics and pitch decks for businesses.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "Graphic Design"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Service",
          "name": "Web Development",
          "url": "https://www.skyupdigitalsolutions.com/services/web-development",
          "description": "SkyUp builds fast, responsive websites, e-commerce stores, web apps, ERP, LMS, dashboards, PWAs and CMS platforms that convert visitors.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          // FIXED: was "Graphic Design"
          "serviceType": "Web Development"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Service",
          "name": "CRM",
          "url": "https://www.skyupdigitalsolutions.com/services/crm",
          "description": "SkyUp provides CRM solutions to manage leads, automate follow-ups, track sales activity, improve customer communication and increase business conversions.",
          "provider": { "@type": "Organization", "name": "SkyUp Digital Solutions LLP", "url": "https://www.skyupdigitalsolutions.com/" },
          "areaServed": { "@type": "City", "name": "Bangalore" },
          "serviceType": "CRM"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can Skyup's digital marketing services help my business grow?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing services focus on increasing organic traffic, improving search engine rankings, and generating high-converting leads. By combining SEO, performance marketing, and paid advertising strategies, Skyup ensures measurable growth and sustainable online success." }
      },
      {
        "@type": "Question",
        "name": "How can I get started?",
        "acceptedAnswer": { "@type": "Answer", "text": "Simply contact us, share your requirements, and our team will guide you through the next steps." }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups as well as established businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We work with both startups and established businesses, tailoring our digital marketing strategies to fit your unique goals and growth stage." }
      },
      {
        "@type": "Question",
        "name": "What makes your digital marketing approach different?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing approach is data-driven, customized, and results-focused. We combine creativity with analytics to craft strategies that engage your audience, boost conversions, and maximize ROI." }
      },
      {
        "@type": "Question",
        "name": "Do you offer branding and creative design services?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer comprehensive branding and creative design services as part of our digital marketing solutions, helping your business stand out and connect with your audience effectively." }
      },
      {
        "@type": "Question",
        "name": "How does AI automation help my business?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI automation streamlines your marketing efforts by analyzing data, optimizing campaigns, and personalizing customer interactions, helping your business save time, increase efficiency, and drive better results." }
      }
    ]
  };

  return (
    <>
      <link rel="canonical" href="https://www.skyupdigitalsolutions.com/digital-marketing-services-in-bangalore" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}