"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ArtistStatement() {
  const { language } = useLanguage();

  return (
    <div className="p-2">
      {language === "English" ? (
        <>
          <h1 className="text-3xl mb-5">Artist Statement</h1>
          <div className="mb-2">
            My name is Wei Zhang, and I also go by my Starbucks name, Vera. I&apos;m
            a Shanghai-based contemporary artist creating fine art. I explore a
            concept I created called Durable Aesthetics.
          </div>
          <div className="mb-2">
            It&apos;s something essential — art is for human beings.
          </div>
          <div className="mb-2">
            I paint what matters to humans across time: memory, identity, touch,
            light, beauty, loss. Instead of commenting on the news cycle, I
            return to constants — the hand that gestures, the flower that fades,
            the face that reflects, the corner that holds memory.
          </div>
          <div className="mb-2">
            With modern speed, trends fade quickly. But what touches people the
            most are usually the things that last. I believe Durable Aesthetics
            creates stable emotional stories, simple and elegant.
          </div>
          <div className="mb-2">
            I&apos;ve been painting for over 10 years now, moving through techniques
            from professional acrylic to oil to digital. What doesn&apos;t change is
            the beauty of the content — emotions emerge the moment a tool brings
            paint to the surface.
          </div>
          <div className="mt-6">Contact Me: verazhangsite@gmail.com</div>
        </>
      ) : (
        <div lang="zh">
          <h1 className="text-3xl mb-5">艺术家自述</h1>
          <div className="mb-2">
            我叫章薇，也用我的星巴克名
            Vera。我是一位常驻上海的当代艺术家，从事美术创作。我在探索一个自己提出的概念：&ldquo;耐用美学&rdquo;。
          </div>
          <div className="mb-2">这是一件本质的事：艺术，是为人而存在的。</div>
          <div className="mb-2">
            我画的是那些跨越时间、始终触动人心的事物：记忆、身份、触感、光、美、失去。我不追逐新闻热点，而是回到那些恒常的事物：挥动的手、凋零的花、凝望的脸、承载记忆的角落。
          </div>
          <div className="mb-2">
            在现代的快节奏中，潮流转瞬即逝。然而，最能打动人的，往往是那些经得起时间考验的东西。我相信，耐用美学能孕育出稳定的情感故事，简洁而优雅。
          </div>
          <div className="mb-2">
            我画画已经十多年了，从专业丙烯到油画，再到数字绘画，技法不断变换。但不变的，是内容本身的美：当画笔与画面相触的那一刻，情感便从中浮现。
          </div>
          <div className="mt-6">联系我: verazhangsite@gmail.com</div>
        </div>
      )}
    </div>
  );
}
