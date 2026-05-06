"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Slides from "@/components/slides";

const slides = [
  {
    image: "/art/love-story-one.jpg",
    name: "First Sight",
  },
  {
    image: "/art/love-story-two.jpg",
    name: "In Love",
  },
  {
    image: "/art/love-story-three.jpg",
    name: "The Wall",
  },
];

export default function HomeContent() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center">
      <h1 className="text-3xl ">
        {language === "English" ? "The Love Story" : "爱情故事"}
      </h1>
      <Slides slides={slides} width="80vw" height="70vh" interval={15000} />
    </div>
  );
}
