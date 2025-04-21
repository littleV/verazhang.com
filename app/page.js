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

export default function Home() {
  const { language } = useLanguage();
  if (language === null) return null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-3xl ">
          {language === "English" ? "The Love Story" : "爱情故事"}
        </div>
        <Slides slides={slides} width="80vw" height="70vh" />
      </main>
    </div>
  );
}
