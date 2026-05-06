"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-start">
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
      <h1 className="p-4 text-2xl">
        {language === "English" ? "Tools for Art Creation" : "艺术创作工具"}
      </h1>
      <Link
        className="hover:text-pink-500 text-pink-500 sm:text-white"
        href="/tools/palette"
      >
        {language === "English" ? "Palette" : "调色盘"}
      </Link>
    </div>
  );
}
