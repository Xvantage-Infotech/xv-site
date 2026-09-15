import { Helmet } from "react-helmet-async";

const SITE_URL = "https://xvantageinfotech.com";
const DEFAULT_TITLE = "Xvantage Infotech";
const DEFAULT_DESCRIPTION =
  "Xvantage Infotech — full-stack development, product design, and engineering for web and mobile.";

/**
 * @param {string} title - page-specific title (site name appended automatically)
 * @param {string} description - page-specific meta description
 * @param {string} path - route path starting with "/", e.g. "/privacy-policy"
 * @param {boolean} noindex - set true only for pages that should not appear in search
 */
function SEO({ title, description, path = "", noindex = false }) {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;