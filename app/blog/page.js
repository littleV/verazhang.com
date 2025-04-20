"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[2px] row-start-2 items-center sm:items-start">
        <Link className="hover:text-pink-500" href="/blog/opening">
          开篇寄语
        </Link>
        <Link className="hover:text-pink-500" href="/blog/time">
          关于时间的一点感悟
        </Link>
        <Link className="hover:text-pink-500" href="/blog/genesis">
          Genesis, a computing model
        </Link>
        <Link className="hover:text-pink-500" href="/blog/creative-freedom">
          {language === "English"
            ? "What is creative freedom?"
            : "什么是创作自由？"}
        </Link>
        <Link className="hover:text-pink-500" href="/blog/brain">
          {language === "English" ? "Art is brain food" : "艺术是大脑的食物"}
        </Link>
      </main>
    </div>
  );
}
