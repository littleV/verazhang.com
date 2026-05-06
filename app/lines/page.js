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
        {language === "English" ? "Lines" : "线条"}
      </div>
      <Slides slides={slides} width="80vw" height="70vh" />
    </div>
  );
}
