"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Slides from "@/components/slides";

const slides = [
  {
    image: "/art/12-instruments-accordion.jpg",
    name: "Accordion",
  },
  {
    image: "/art/12-instruments-cello.jpg",
    name: "Cello",
  },
  {
    image: "/art/12-instruments-drum.jpg",
    name: "Drum",
  },
  {
    image: "/art/12-instruments-erhu.jpg",
    name: "Erhu",
  },
  {
    image: "/art/12-instruments-flute.jpg",
    name: "Flute",
  },
  {
    image: "/art/12-instruments-guitar.jpg",
    name: "Guitar",
  },
  {
    image: "/art/12-instruments-guqin.jpg",
    name: "Guqin",
  },
  {
    image: "/art/12-instruments-hulusi.jpg",
    name: "Hulusi",
  },
  {
    image: "/art/12-instruments-piano.jpg",
    name: "Piano",
  },
  {
    image: "/art/12-instruments-pipa.jpg",
    name: "Pipa",
  },
  {
    image: "/art/12-instruments-trumpet.jpg",
    name: "Trumpet",
  },
  {
    image: "/art/12-instruments-violin.jpg",
    name: "Violin",
  },
];

export default function HomeContent() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center">
      <h1 className="text-3xl ">
        {language === "English" ? (
          "12 Instruments"
        ) : (
          <span lang="zh">十二乐</span>
        )}
      </h1>
      <Slides slides={slides} width="80vw" height="70vh" interval={15000} />
    </div>
  );
}
