import OpeningPost from "./post";
import { JsonLd, SITE_URL, VERA_ID, og } from "@/lib/jsonld";

export const metadata = {
  title: "To Start",
  description: "Why I do what I do, art. Bilingual (English / 中文).",
  openGraph: og({
    type: "article",
    title: "To Start — Vera Zhang",
    description: "Why I do what I do, art. Bilingual (English / 中文).",
    url: `${SITE_URL}/blog/openning`,
    publishedTime: "2018-01-01",
    authors: [`${SITE_URL}/about`],
  }),
};

const url = `${SITE_URL}/blog/openning`;

const blogPosting = {
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  url,
  mainEntityOfPage: url,
  headline: "To Start",
  description: "Why I do what I do, art. Bilingual (English / 中文).",
  author: { "@id": VERA_ID },
  datePublished: "2018-01-01",
  inLanguage: ["en", "zh"],
};

export default function Opening() {
  return (
    <>
      <JsonLd data={blogPosting} />
      <OpeningPost />
    </>
  );
}
