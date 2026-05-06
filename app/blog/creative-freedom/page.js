import CreativeFreedomPost from "./post";
import { JsonLd, SITE_URL, VERA_ID, og } from "@/lib/jsonld";

export const metadata = {
  title: "What is creative freedom?",
  description:
    "Five principles for creative freedom: knowing the boundary, building your voice, mastering skills, cross-field inspiration, and acting. Bilingual (English / 中文).",
  openGraph: og({
    type: "article",
    title: "What is creative freedom? — Vera Zhang",
    description:
      "Five principles for creative freedom: knowing the boundary, building your voice, mastering skills, cross-field inspiration, and acting. Bilingual (English / 中文).",
    url: `${SITE_URL}/blog/creative-freedom`,
    publishedTime: "2019-05-29",
    authors: [`${SITE_URL}/about`],
  }),
};

const url = `${SITE_URL}/blog/creative-freedom`;

const blogPosting = {
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  url,
  mainEntityOfPage: url,
  headline: "What is creative freedom?",
  description:
    "Five principles for creative freedom: knowing the boundary, building your voice, mastering skills, cross-field inspiration, and acting. Bilingual (English / 中文).",
  author: { "@id": VERA_ID },
  datePublished: "2019-05-29",
  inLanguage: ["en", "zh"],
};

export default function CreativeFreedom() {
  return (
    <>
      <JsonLd data={blogPosting} />
      <CreativeFreedomPost />
    </>
  );
}
