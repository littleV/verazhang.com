"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Slides from "@/components/slides";

const slides = [
  {
    image: "/lines/1.jpg",
    name: "1",
  },
  {
    image: "/lines/2.jpg",
    name: "2",
  },
  {
    image: "/lines/3.jpg",
    name: "3",
  },
  {
    image: "/lines/4.jpg",
    name: "4",
  },
  {
    image: "/lines/5.jpg",
    name: "5",
  },
  {
    image: "/lines/6.jpg",
    name: "6",
  },
  {
    image: "/lines/7.jpg",
    name: "7",
  },
  {
    image: "/lines/9.jpg",
    name: "9",
  },
  {
    image: "/lines/10.jpg",
    name: "10",
  },
  {
    image: "/lines/11.jpg",
    name: "11",
  },
  {
    image: "/lines/14.jpg",
    name: "14",
  },
  {
    image: "/lines/15.jpg",
    name: "15",
  },
  {
    image: "/lines/16.jpg",
    name: "16",
  },
  {
    image: "/lines/17.jpg",
    name: "17",
  },
  {
    image: "/lines/18.jpg",
    name: "18",
  },
  {
    image: "/lines/19.jpg",
    name: "19",
  },
  {
    image: "/lines/20.jpg",
    name: "20",
  },
  {
    image: "/lines/21.jpg",
    name: "21",
  },
  {
    image: "/lines/23.jpg",
    name: "23",
  },
  {
    image: "/lines/24.jpg",
    name: "24",
  },
  {
    image: "/lines/25.jpg",
    name: "25",
  },
  {
    image: "/lines/26.jpg",
    name: "26",
  },
  {
    image: "/lines/27.jpg",
    name: "27",
  },
];

export default function TheStory() {
  const { language } = useLanguage();
  if (language === null) return null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-3xl ">
          {language === "English" ? "Lines" : "线条"}
        </div>
        <Slides slides={slides} width="80vw" height="70vh" />
      </main>
    </div>
  );
}
