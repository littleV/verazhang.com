"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Emotions() {
  const { language } = useLanguage();
  if (language === null) return null;
  return (
    <div className="m-20">
      {language === "English" ? (
        <div className="mb-5">
          <div className="mb-2">This is an experimental project.</div>
          <div className="mb-2">
            Emotions are something we all experience every moment of our lives —
            they are a fundamental part of our existence. They are the most
            natural psychological and physiological responses to our
            environment. Only when emotions flow freely, without being
            suppressed, can our rational minds function properly.
          </div>
          <div className="mb-2">
            So, I found a book — The Book of Human Emotions — which catalogs 154
            different emotions. In this series, I’ve transformed them into a
            collection of short stories, each accompanied by my illustrations. I
            hope readers will find the experience both engaging and
            thought-provoking.
          </div>
        </div>
      ) : (
        <div className="mb-5">
          <div className="mb-2">这是一个实验项目。</div>
          <div className="mb-2">
            情绪是我们每个人每时每刻都要经验的是一种存在，它是对环境最自然的心理和生理反应，只有当情绪自然流淌不被堵住的时候，我们的理性才能正常工作。
          </div>
          <div className="mb-2">
            所以我找了一本《情绪之书》，里面记录了154种情绪，我在这个系列里改成一个一个的小故事，并配上我的画，希望这里的读者们能有一些有趣的体验。
          </div>
        </div>
      )}
      <ul>
        <li className="list-disc">
          <Link
            className="hover:text-pink-500"
            href="/blog/emotions/bafflement"
          >
            {language === "English" ? "Bafflement" : "困惑"}
          </Link>
        </li>
        <li className="list-disc">
          <Link className="hover:text-pink-500" href="/blog/emotions/basorexia">
            {language === "English" ? "Basorexia" : "突然强烈的想亲吻某人"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
