"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Basorexia() {
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
            <div className="text-3xl mb-5">Feeling basorexia</div>
            <div className="mb-2">
              At dusk, Emma stood at the street corner outside the café, holding
              two cups of hot latte. The autumn breeze brushed past, and she
              instinctively pulled her coat tighter around her. Just then, Nick
              crossed the street, walking against the golden glow of the setting
              sun, his steps light and his face wearing that familiar smile.
            </div>
            <div className="mb-2">
              In that moment, Emma felt as if something had struck her heart.
              Nick didn’t say a word as he approached, but Emma was overwhelmed
              by a sudden, powerful urge—to kiss him. Not because of the
              romantic setting, not because of any movie-like dialogue, but
              because of a wave of emotion that crashed over her, impossible to
              resist.
            </div>
            <div className="mb-2">
              She froze, forgetting to even hand him the coffee. Her heart was
              racing, her mind completely blank. Nick noticed her daze and asked
              softly, “What’s wrong?”
            </div>
            <div className="mb-2">
              Snapping back to reality, Emma forced a smile. “Nothing… I just
              suddenly really wanted to kiss you.”
            </div>
            <div className="mb-2">
              The moment the words left her mouth, her face flushed bright red.
              Nick paused for a second, took the coffee, and smiled. “Then what
              are you waiting for?”
            </div>
          </div>
        ) : (
          <div>
            <div className="text-3xl mb-5">突然强烈的想亲吻某人</div>
            <div className="mb-2">
              黄昏时分，小爱站在咖啡店外的街角，手里握着两杯热拿铁。秋风轻轻吹过，她不自觉地裹紧了外套。就在这时，林蒙从对街走来，逆着落日的余晖，步伐轻快，脸上挂着熟悉的微笑。
            </div>
            <div className="mb-2">
              一瞬间，小爱的心仿佛被什么击中。林蒙只是走近，什么也没说，小爱却感到一种强烈而突如其来的冲动——想亲吻他。不是因为浪漫的场景，不是因为电影般的对白，而是一种难以抗拒的情绪，像海浪一样扑来。
            </div>
            <div className="mb-2">
              她怔住了，连手中的咖啡杯都忘了递出。心跳快得出奇，大脑却空白一片。林蒙见她发呆，轻声问：“怎么啦？”
            </div>
            <div className="mb-2">
              小爱回过神来，勉强一笑：“没事，只是突然……很想亲你。”
            </div>
            <div className="mb-2">
              说出口的瞬间，她脸红到了耳根。林蒙愣了一秒，接过咖啡，笑了：“那还等什么？”
            </div>
          </div>
        )}
        <div className="w-full flex justify-center">
          <Image
            src="/emotions/basorexia.jpg"
            width={400}
            height={400}
            alt="Basorexia"
          />
        </div>
      </main>
    </div>
  );
}
