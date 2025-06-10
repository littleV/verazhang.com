"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language } = useLanguage();
  if (language === null) return null;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[2px] row-start-2 items-center sm:items-start">
        <div>
          {language === "English"
            ? "This place holds my tools for art creation"
            : "这里会存放一些我的艺术创作工具"}
        </div>
        <div>
          <br />
        </div>
        <Link className="hover:text-pink-500" href="/tools/palette">
          {language === "English" ? "Palette" : "调色盘"}
        </Link>
      </main>
    </div>
  );
}
