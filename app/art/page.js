import Gallery from "./gallery";
import { arts, captionText } from "./arts";
import { JsonLd, SITE_URL, VERA_ID, og } from "@/lib/jsonld";

export const metadata = {
  title: "Art",
  description:
    "Gallery of paintings by Vera Zhang, contemporary Chinese artist.",
  openGraph: og({
    title: "Art — Vera Zhang",
    description:
      "Gallery of paintings by Vera Zhang, contemporary Chinese artist.",
    url: `${SITE_URL}/art`,
  }),
};

const galleryUrl = `${SITE_URL}/art`;

const visualArtworks = arts.map((item) => ({
  "@type": "VisualArtwork",
  "@id": `${galleryUrl}#${item.slug}`,
  name: item.title || item.titleZh,
  ...(item.title && item.titleZh ? { alternateName: item.titleZh } : {}),
  image: `${SITE_URL}/art/${item.slug}.jpg`,
  ...(captionText(item) ? { description: captionText(item) } : {}),
  creator: { "@id": VERA_ID },
  artform: "Painting",
  isPartOf: { "@id": `${galleryUrl}#gallery` },
}));

const imageGallery = {
  "@type": "ImageGallery",
  "@id": `${galleryUrl}#gallery`,
  url: galleryUrl,
  name: "Vera Zhang — Paintings",
  description:
    "Gallery of paintings by Vera Zhang, contemporary Chinese artist.",
  creator: { "@id": VERA_ID },
  hasPart: visualArtworks.map((w) => ({ "@id": w["@id"] })),
};

export default function Art() {
  return (
    <>
      <JsonLd data={[imageGallery, ...visualArtworks]} />
      <Gallery />
    </>
  );
}
