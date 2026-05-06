import { SITE_URL } from "@/lib/jsonld";

export const dynamic = "force-static";

// Static pages all got the AI-readability metadata pass on this date.
const REBRAND_DATE = "2026-05-06";

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: REBRAND_DATE, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: REBRAND_DATE, priority: 0.8 },
    { url: `${SITE_URL}/art`, lastModified: REBRAND_DATE, priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: REBRAND_DATE, priority: 0.9 },
    {
      url: `${SITE_URL}/blog/brain`,
      lastModified: "2020-04-25",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/creative-freedom`,
      lastModified: "2019-05-29",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/genesis`,
      lastModified: "2018-11-06",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/opening`,
      lastModified: "2018-01-01",
      priority: 0.7,
    },
    { url: `${SITE_URL}/legal`, lastModified: "2025-04-20", priority: 0.3 },
  ];
}
