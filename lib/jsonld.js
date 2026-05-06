export const SITE_URL = "https://www.verazhang.com";
export const VERA_ID = `${SITE_URL}/#vera`;

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
