import HomeContent from "./home-content";
import { og, SITE_URL } from "@/lib/jsonld";

export const metadata = {
  description:
    "Personal site of contemporary Chinese artist Vera Zhang — a gallery of paintings, bilingual writing on art and creativity, and a rotating featured series.",
  openGraph: og({
    title: "Vera Zhang — Contemporary Chinese Artist",
    description:
      "Personal site of contemporary Chinese artist Vera Zhang — a gallery of paintings, bilingual writing on art and creativity, and a rotating featured series.",
    url: `${SITE_URL}/`,
  }),
};

export default function Home() {
  return <HomeContent />;
}
