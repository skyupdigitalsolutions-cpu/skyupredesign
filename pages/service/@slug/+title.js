// Per-service <title>, resolved from the slug. As a function it is
// re-evaluated on every navigation, overriding the static title in
// pages/service/+config.js.
import { SERVICES } from "@/data/services";

export function title(pageContext) {
  const slug = pageContext.routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return "Services | SkyUp Digital Solutions";
  return (
    svc.seo?.metaTitle ||
    `${svc.name} Services in Bangalore | SkyUp Digital Solutions`
  );
}