import HomeContent from "./home-content";
import { og, SITE_URL } from "@/lib/jsonld";

export const metadata = {
  title: {
    absolute: "12 Instruments — Vera Zhang",
  },
  description:
    "12 Instruments — a 12-piece painting series by contemporary Chinese artist Vera Zhang on musical instruments.",
  openGraph: og({
    title: "12 Instruments — Vera Zhang",
    description:
      "12 Instruments — a 12-piece painting series by contemporary Chinese artist Vera Zhang on musical instruments.",
    url: `${SITE_URL}/`,
  }),
};

export default function Home() {
  return <HomeContent />;
}
