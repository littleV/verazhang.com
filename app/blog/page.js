import BlogList from "./list";
import { og, SITE_URL } from "@/lib/jsonld";

export const metadata = {
  title: "Blog",
  description: "Bilingual writing on art, emotion, and creativity by Vera Zhang.",
  openGraph: og({
    title: "Blog — Vera Zhang",
    description:
      "Bilingual writing on art, emotion, and creativity by Vera Zhang.",
    url: `${SITE_URL}/blog`,
  }),
};

export default function Blog() {
  return <BlogList />;
}
