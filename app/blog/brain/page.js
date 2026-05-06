import BrainPost from "./post";
import { JsonLd, SITE_URL, VERA_ID } from "@/lib/jsonld";

export const metadata = {
  title: "Art is brain food",
  description:
    "Essay on how art and music feed the brain. Bilingual (English / 中文).",
};

const url = `${SITE_URL}/blog/brain`;

const blogPosting = {
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  url,
  mainEntityOfPage: url,
  headline: "Art is brain food",
  description:
    "Essay on how art and music feed the brain. Bilingual (English / 中文).",
  author: { "@id": VERA_ID },
  datePublished: "2020-04-25",
  inLanguage: ["en", "zh"],
};

export default function Brain() {
  return (
    <>
      <JsonLd data={blogPosting} />
      <BrainPost />
    </>
  );
}
