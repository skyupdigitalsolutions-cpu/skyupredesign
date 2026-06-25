// Per-service meta description, resolved from the slug.
import { SERVICES } from "@/data/services";

export function description(pageContext) {
  const slug = pageContext.routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return "";
  return svc.seo?.metaDescription || svc.heroSubline || svc.tagline || "";
}