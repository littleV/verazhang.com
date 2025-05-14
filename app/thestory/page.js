"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Slides from "@/components/slides";

const slides = [
  {
    image: "/thestory/1.jpg",
    name: "1",
  },
  {
    image: "/thestory/2.jpg",
    name: "2",
  },
  {
    image: "/thestory/3.jpg",
    name: "3",
  },
  {
    image: "/thestory/4.jpg",
    name: "4",
  },
  {
    image: "/thestory/5.jpg",
    name: "5",
  },
  {
    image: "/thestory/6.jpg",
    name: "6",
  },
  {
    image: "/thestory/7.jpg",
    name: "7",
  },
  {
    image: "/thestory/9.jpg",
    name: "9",
  },
  {
    image: "/thestory/10.jpg",
    name: "10",
  },
  {
    image: "/thestory/11.jpg",
    name: "11",
  },
  {
    image: "/thestory/12.jpg",
    name: "12",
  },
  {
    image: "/thestory/13.jpg",
    name: "13",
  },
  {
    image: "/thestory/14.jpg",
    name: "14",
  },
  {
    image: "/thestory/15.jpg",
    name: "15",
  },
  {
    image: "/thestory/16.jpg",
    name: "16",
  },
  {
    image: "/thestory/17.jpg",
    name: "17",
  },
  {
    image: "/thestory/18.jpg",
    name: "18",
  },
  {
    image: "/thestory/19.jpg",
    name: "19",
  },
  {
    image: "/thestory/20.jpg",
    name: "20",
  },
  {
    image: "/thestory/21.jpg",
    name: "21",
  },
  {
    image: "/thestory/22.jpg",
    name: "22",
  },
];

export default function TheStory() {
  const { language } = useLanguage();
  if (language === null) return null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-3xl ">
          {language === "English" ? "The Story" : "一个故事"}
        </div>
        <Slides slides={slides} width="80vw" height="70vh" />
      </main>
    </div>
  );
}
