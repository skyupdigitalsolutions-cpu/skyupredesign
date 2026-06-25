
const blogsBreadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": "1", "name": "Skyup Digital Solutions", "item": "https://www.skyupdigitalsolutions.com/" },
    { "@type": "ListItem", "position": "2", "name": "Blogs", "item": "https://www.skyupdigitalsolutions.com/blogs" },
  ],
};

const blogsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.skyupdigitalsolutions.com/blogs/#webpage",
  "url": "https://www.skyupdigitalsolutions.com/blogs",
  "name": "Digital Growth Insights for Brands",
  "description": "Explore blogs on SEO, ads, social media, AI automation, CRM, UI/UX, graphic design and web development from SkyUp Digital Solutions.",
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

export const blogsSchemas = [blogsBreadcrumbSchema, blogsWebPageSchema];