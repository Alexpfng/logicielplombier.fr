import { Helmet } from "react-helmet-async";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  /** Chemin relatif de la page, ex. "/logiciel-plombier" */
  path: string;
  image?: string;
  /** Un ou plusieurs blocs JSON-LD (schema.org) */
  jsonLd?: object | object[];
  noindex?: boolean;
  type?: "website" | "article";
}

/**
 * Composant SEO unique pour toutes les pages.
 * Gère title, meta description, canonical, Open Graph, Twitter et JSON-LD.
 */
const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  jsonLd,
  noindex = false,
  type = "website",
}: SeoProps) => {
  const url = absoluteUrl(path);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
