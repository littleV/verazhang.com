import { og, SITE_URL } from "@/lib/jsonld";
import ArtistStatement from "./artist-statement";

export const metadata = {
  title: "About",
  description:
    "Artist Statement of Vera Zhang, contemporary Chinese artist. Written in English and 中文.",
  openGraph: og({
    title: "About — Vera Zhang",
    description:
      "Artist Statement of Vera Zhang, contemporary Chinese artist. Written in English and 中文.",
    url: `${SITE_URL}/about`,
  }),
};

export default function About() {
  return <ArtistStatement />;
}
