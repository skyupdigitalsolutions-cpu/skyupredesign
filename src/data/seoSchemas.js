const PUBLISHER = {
  "@type": "Organization",
  name: "SkyUp Digital Solutions LLP",
  logo: {
    "@type": "ImageObject",
    url: "https://www.skyupdigitalsolutions.com/images/rbd-logo.webp",
  },
};

const faqPage = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export function serviceSchemas(svc) {
  if (!svc) return [];
  if (svc.seo?.schema) return svc.seo.schema; // hand-written (e.g. CRM)
  const url = `https://www.skyupdigitalsolutions.com/services/${svc.slug}`;
  const description = svc.seo?.metaDescription || svc.heroSubline || svc.tagline || "";
  const list = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: svc.name,
      serviceType: svc.name,
      description,
      provider: { "@type": "Organization", name: "SkyUp Digital Solutions LLP", url: "https://www.skyupdigitalsolutions.com/" },
      areaServed: { "@type": "City", name: "Bangalore" },
      url,
    },
  ];
  if (svc.faqs?.length) list.push(faqPage(svc.faqs));
  return list;
}

export function workSchemas(cs) {
  if (!cs) return [];
  if (cs.seo?.schema) return cs.seo.schema;
  const url = `https://www.skyupdigitalsolutions.com/our-work/${cs.slug}`;
  const description = cs.seo?.metaDescription || cs.summary || "";
  const list = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: cs.seo?.metaTitle || cs.title,
      description,
      image: cs.heroImage || cs.image,
      author: { "@type": "Organization", name: "SkyUp Digital Solutions LLP", url: "https://www.skyupdigitalsolutions.com/" },
      publisher: PUBLISHER,
      url,
    },
  ];
  if (cs.faqs?.length) list.push(faqPage(cs.faqs));
  return list;
}

export function blogSchemas(blog) {
  if (!blog) return [];
  if (blog.seo?.schema) return blog.seo.schema;
  const url = `https://www.skyupdigitalsolutions.com/blog/${blog.slug}`;
  const d = blog.date ? new Date(blog.date) : null;
  const datePublished = d && !isNaN(d) ? d.toISOString() : undefined;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: blog.headline || blog.title,
      description: blog.description || "",
      image: blog.heroImage || blog.image || blog.coverImage,
      author: { "@type": "Organization", name: blog.author || "SkyUp Digital Solutions" },
      publisher: PUBLISHER,
      ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
      url,
    },
  ];
}