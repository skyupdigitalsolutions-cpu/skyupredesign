import { usePageContext } from "vike-react/usePageContext";
import { SERVICES } from "@/data/services";
import { serviceSchemas } from "@/data/seoSchemas";

// NOTE: <title> and <meta name="description"> are handled by +config.js
// (vike-react `title` / `description` settings) so they update correctly on
// client-side navigation. This Head only adds robots, canonical and JSON-LD.
export default function Head() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const svc = SERVICES.find((s) => s.slug === slug);

  const url = `https://www.skyupdigitalsolutions.com/service/${slug}`;
  const schemas = serviceSchemas(svc);

  return (
    <>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {schemas.filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}