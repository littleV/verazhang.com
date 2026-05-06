export const SITE_URL = "https://www.verazhang.com";
export const VERA_ID = `${SITE_URL}/#vera`;

export const DEFAULT_OG_IMAGE = {
  url: "/art/self-portrait.jpg",
  alt: "Vera Zhang — Self Portrait",
};

export function og(overrides = {}) {
  return {
    siteName: "Vera Zhang",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
    ...overrides,
  };
}

export const veraPerson = {
  "@type": "Person",
  "@id": VERA_ID,
  name: "Vera Zhang",
  alternateName: "Wei Zhang",
  givenName: "Wei",
  familyName: "Zhang",
  jobTitle: "Painter",
  url: `${SITE_URL}/`,
  email: "mailto:verazhangsite@gmail.com",
  description: "Contemporary Chinese artist producing fine art.",
};

export const veraWebsite = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Vera Zhang",
  inLanguage: ["en", "zh"],
  publisher: { "@id": VERA_ID },
};

export function JsonLd({ data }) {
  const json = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
