"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-[2px] row-start-2 items-center sm:items-start">
      <Link className="hover:text-pink-500" href="/blog/opening">
        开篇寄语
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
    </div>
  );
}
