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
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center">
      <div className="p-2 z-10">
        <div className="relative w-fit">
          <select
            style={{ color: "white" }}
            className={
              "appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            }
            value={language}
            onChange={(e) => {
              switchLanguage(e.target.value);
            }}
          >
            <option value="中文">中文</option>
            <option value="English">English</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              style={{ color: "white" }}
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-3xl ">
        {language === "English" ? "The Story" : "一个故事"}
      </div>
      <Slides slides={slides} width="80vw" height="70vh" />
    </div>
  );
}
