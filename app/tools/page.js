"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language } = useLanguage();
  if (language === null) return null;
  return (
    <div className="flex flex-col m-20 items-center justify-center">
      <div>
        {language === "English" ? "Tools for Art Creation" : "艺术创作工具"}
      </div>
      <div>
        <br />
      </div>
      <Link
        className="hover:text-pink-500 text-pink-500 sm:text-white"
        href="/tools/palette"
      >
        {language === "English" ? "Palette" : "调色盘"}
      </Link>
    </div>
  );
}
