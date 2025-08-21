"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Befuddlement() {
  const { language } = useLanguage();
  if (language === null) return null;
  return (
    <div className="m-20">
      <div className="mb-5">
        <Link className="hover:text-pink-500 underline" href="/blog/emotions">
          {language === "English" ? "Back" : "后退"}
        </Link>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {language === "English" ? (
          <div>
            <div className="text-3xl mb-5">Feeling befuddled</div>
            <div className="mb-2">
              After the rain, in the early evening, Nick sat in the library,
              staring blankly at the philosophy assignment in front of him. The
              topic read: “Does existence precede essence? Analyze with
              reference to Heidegger’s views.”
            </div>
            <div className="mb-2">
              He frowned, having gone through the handouts three times, yet
              still had no idea how to begin.
            </div>
            <div className="mb-2">
              He had thought he understood it well enough, but the more he read,
              the worse it felt — as if every word was familiar, but strung
              together they made no sense at all. He tried jotting down a few
              sentences, only to cross them out immediately. His mind felt
              stuffed with cotton, unable to turn, stuck.
            </div>
            <div className="mb-2">
              “Why can’t I even sort out a single idea?” he muttered, gazing out
              at the damp, chilly street outside.
            </div>
            <div className="mb-2">
              It wasn’t just confusion — it was a kind of dazed frustration,
              tangled in complex language, as though staring at an incomplete
              list without knowing what was supposed to come next. He even began
              to wonder if he had chosen the wrong major.
            </div>
            <div className="mb-2">
              Just then, a sigh came from the table next to him. He turned and
              saw a classmate with his head in his hands, chuckling bitterly:
              “You don’t get it either, huh?”
            </div>
            <div className="mb-2">
              Nick paused, then smiled. “I thought I was the only one.”
            </div>
            <div className="mb-2">
              At that moment, although still confused, the feeling of being
              trapped didn’t seem so lonely anymore.
            </div>
          </div>
        ) : (
          <div>
            <div className="text-3xl mb-5">感到大脑转不过弯</div>
            <div className="mb-2">
              雨后的傍晚，小爱坐在图书馆里，盯着眼前那份哲学作业发呆。题目是：“存在先于本质是否成立？请结合海德格尔的观点分析。”他皱着眉，翻了三遍讲义，还是不知道如何下笔。
            </div>
            <div className="mb-2">
              他原以为自己早就学明白了，但是越读越难受，仿佛每一个词都是他认识的，连在一起却完全不懂。他试着写下几句话，又立刻划掉。他的脑子像被塞满了棉花，转也转不动。
            </div>
            <div className="mb-2">
              “我怎么连一个观点都理不清？”他喃喃自语，望向窗外的湿冷街道。
            </div>
            <div className="mb-2">
              这不是单纯的疑惑，而是一种被复杂语言困住、思维打结的茫然感，好像看到一份不完整的清单，不知道后面是什么的茫然。他甚至开始怀疑自己是不是选错了专业。
            </div>
            <div className="mb-2">
              这时，隔壁桌传来同学的叹气声，他转头看去，对方正抱着头苦笑：“你也看不懂吧？”
            </div>
            <div className="mb-2">
              小爱愣了一下，也笑了：“我以为就我一个人。”
            </div>
            <div className="mb-2">
              那一刻，虽然依然一头雾水，但那种被困住的感觉似乎也没那么孤独了。
            </div>
          </div>
        )}
        <div className="w-full flex justify-center">
          <Image
            src="/emotions/befuddlement.jpg"
            width={400}
            height={400}
            alt="Befuddlement"
          />
        </div>
      </main>
    </div>
  );
}
