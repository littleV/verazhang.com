import HomeContent from "./home-content";
import { og, SITE_URL } from "@/lib/jsonld";

export const metadata = {
  title: {
    absolute: "Vera Zhang — The Love Story",
  },
  description:
    "The Love Story — a three-piece painting series by contemporary Chinese artist Vera Zhang: First Sight, In Love, The Wall.",
  openGraph: og({
    title: "Vera Zhang — The Love Story",
    description:
      "The Love Story — a three-piece painting series by contemporary Chinese artist Vera Zhang: First Sight, In Love, The Wall.",
    url: `${SITE_URL}/`,
  }),
};

export default function Home() {
  return <HomeContent />;
}
