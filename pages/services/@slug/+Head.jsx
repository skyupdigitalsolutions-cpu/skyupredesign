import { usePageContext } from "vike-react/usePageContext";

// NOTE: <title> and <meta name="description"> are handled by vike-react's
// `title`/`description` settings (+title.js / +description.js).
// JSON-LD schemas are rendered in the BODY by ServiceDetail.jsx via the
// <JsonLd> component (same pattern as BlogDetail / CaseStudyDetail) —
// body JSON-LD is valid for Google and updates correctly on client-side
// navigation. Do NOT add schemas here: head HTML is a static SSR string
// that React never updates, and a second copy causes duplicate entities.
export default function Head() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const url = `https://www.skyupdigitalsolutions.com/services/${slug}`;

  return (
    <>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
}