import { usePageContext } from "vike-react/usePageContext";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function Head() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  const url = `https://www.skyupdigitalsolutions.com/work/${slug}`;
  const title = cs?.seo?.metaTitle || cs?.title || "Case Study | SkyUp Digital Solutions";
  const description = cs?.seo?.metaDescription || cs?.summary || "";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
}