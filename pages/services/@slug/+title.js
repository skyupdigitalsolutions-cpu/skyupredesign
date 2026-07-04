// pages/service/@slug/+title.js
// Per-service <title>, resolved from the slug.
// IMPORTANT: Vike +title.js requires a DEFAULT export. A named export
// (`export function title`) gets treated as a raw value and vike-react
// stringifies the function into <title> on client navigation.
import { SERVICES } from "@/data/services";

export default (pageContext) => {
  const slug = pageContext.routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return "Services | SkyUp Digital Solutions";
  return (
    svc.seo?.metaTitle ||
    `${svc.name} Services in Bangalore | SkyUp Digital Solutions`
  );
};