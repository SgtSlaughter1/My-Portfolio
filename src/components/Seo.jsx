import { Helmet } from "react-helmet-async";
import { SITE_URL, profile } from "../data/profile";

export default function Seo({ title, description, path = "/", image, noindex = false, jsonLd = [] }) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const img = `${SITE_URL}${image ?? profile.photo}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="application-name" content={profile.name} />
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content={path === "/" ? "website" : "article"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={profile.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
