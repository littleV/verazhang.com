"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {language === "English" ? (
          <div>Hello World</div>
        ) : (
          <div>你好，世界</div>
        )}
      </main>
    </div>
  );
}
