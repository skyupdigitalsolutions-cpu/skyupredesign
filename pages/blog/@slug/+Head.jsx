import { usePageContext } from "vike-react/usePageContext";
import { BLOGS } from "@/data/blogs";

export default function Head() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const blog = BLOGS.find((b) => b.slug === slug);

  const url = `https://www.skyupdigitalsolutions.com/blog/${slug}`;
  const title = blog?.seo?.metaTitle || blog?.title || "Blog | SkyUp Digital Solutions";
  const description = blog?.seo?.metaDescription || blog?.description || "";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
}