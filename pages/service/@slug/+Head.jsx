import { usePageContext } from "vike-react/usePageContext";
import { SERVICES } from "@/data/services";

export default function Head() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);

  const url = `https://www.skyupdigitalsolutions.com/service/${slug}`;
  const title =
    svc?.seo?.metaTitle ||
    (svc ? `${svc.name} Services in Bangalore | SkyUp Digital Solutions` : "Services | SkyUp Digital Solutions");
  const description = svc?.seo?.metaDescription || svc?.heroSubline || svc?.tagline || "";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
}