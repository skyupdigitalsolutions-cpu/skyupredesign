// pages/service/@slug/+description.js
// Per-service meta description, resolved from the slug.
// Must be a DEFAULT export — same rule as +title.js.
// This overrides the static `description` set in pages/service/+config.js.
import { SERVICES } from "@/data/services";

export default (pageContext) => {
  const slug = pageContext.routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return "Digital growth services by SkyUp Digital Solutions.";
  return svc.seo?.metaDescription || svc.heroSubline || svc.tagline || "";
};