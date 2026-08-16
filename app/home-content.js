"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Slides from "@/components/slides";

const slides = [
  {
    image: "/art/12-instruments-accordion.jpg",
    name: "Accordion",
    description: "Accordion",
    descriptionZH: "手风琴",
  },
  {
    image: "/art/12-instruments-cello.jpg",
    name: "Cello",
    description: "Cello",
    descriptionZH: "大提琴",
  },
  {
    image: "/art/12-instruments-drum.jpg",
    name: "Drum",
    description: "Drum",
    descriptionZH: "鼓",
  },
  {
    image: "/art/12-instruments-erhu.jpg",
    name: "Erhu",
    description: "Erhu",
    descriptionZH: "二胡",
  },
  {
    image: "/art/12-instruments-flute.jpg",
    name: "Flute",
    description: "Flute",
    descriptionZH: "竖笛",
  },
  {
    image: "/art/12-instruments-guitar.jpg",
    name: "Guitar",
    description: "Guitar",
    descriptionZH: "吉他",
  },
  {
    image: "/art/12-instruments-guqin.jpg",
    name: "Guqin",
    description: "Guqin",
    descriptionZH: "古琴",
  },
  {
    image: "/art/12-instruments-hulusi.jpg",
    name: "Hulusi",
    description: "Hulusi",
    descriptionZH: "葫芦丝",
  },
  {
    image: "/art/12-instruments-piano.jpg",
    name: "Piano",
    description: "Piano",
    descriptionZH: "钢琴",
  },
  {
    image: "/art/12-instruments-pipa.jpg",
    name: "Pipa",
    description: "Pipa",
    descriptionZH: "琵琶",
  },
  {
    image: "/art/12-instruments-trumpet.jpg",
    name: "Trumpet",
    description: "Trumpet",
    descriptionZH: "小号",
  },
  {
    image: "/art/12-instruments-violin.jpg",
    name: "Violin",
    description: "Violin",
    descriptionZH: "小提琴",
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
      <Slides
        slides={slides}
        language={language}
        width="80vw"
        height="70vh"
        interval={15000}
      />
    </div>
  );
}
