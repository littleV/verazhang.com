"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Bafflement() {
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
            <div className="text-3xl mb-5">Feeling baffled</div>
            <div className="mb-2">
              Nick is a programmer who loves logic and reasoning, accustomed to
              solving problems with clear, structured thinking.
            </div>
            <div className="mb-2">
              One day, he received a mysterious challenge from a friend — an
              image that looked like a jumble of nonsense. The friend said a
              puzzle was hidden within, and only by solving it could the true
              meaning be revealed.
            </div>
            <div className="mb-2">
              Confidently, Nick sat down at his desk and opened the image. It
              was filled with strange symbols and indecipherable text.
              Instinctively, he believed it must be some kind of encrypted
              message. He began using various tools to try and crack the code,
              searching for patterns and logic. However, the more he analyzed
              it, the more confused he became. Just when he thought he was close
              to an answer, the image seemed to grow more complex, like a maze
              with no exit.
            </div>
            <div className="mb-2">
              He zoomed in on every detail, trying to spot any clues, but all
              his efforts seemed in vain. No clear path emerged — only growing
              doubt and mental chaos. Nick’s mood grew heavier, and the puzzle
              before him felt like an insurmountable wall.
            </div>
            <div className="mb-2">
              Just as he was about to give up, his phone rang. A message from
              his friend appeared: “The answer lies in the part you can’t
              understand.” The words made Nick pause and reflect. He finally
              realized that perhaps this challenge wasn’t about solving a puzzle
              at all — it was meant to make him experience the feeling of being
              lost and unable to grasp control. And it was this very state of
              confusion that was the puzzle’s true meaning.
            </div>
          </div>
        ) : (
          <div>
            <div className="text-3xl mb-5">感到困惑</div>
            <div className="mb-2">
              小爱是个喜欢逻辑和推理的程序员，习惯了用清晰的思维去解决问题。
            </div>
            <div className="mb-2">
              一天，他收到了一份来自朋友的神秘挑战——一张看起来像乱码的图片，朋友说里面隐藏着一个谜题，需要解开才能知道真正的含义。
            </div>
            <div className="mb-2">
              小爱坐在桌前，满怀信心地打开了图片。图片上满是奇怪的符号和无法辨认的文字，他本能地认为这一定是某种加密的文本。于是，他开始使用各种工具，试图破解其中的规律。然而，越是分析，他越感到困惑——每当他认为自己接近答案时，图片就变得更加复杂，仿佛它本身就是一场迷宫。
            </div>
            <div className="mb-2">
              他放大了每个细节，试图找到任何线索，但所有的努力似乎都是徒劳的。脑海中没有清晰的路径，只有无尽的疑惑和混乱。小爱的心情逐渐沉重，眼前的谜题像是一堵无法逾越的墙。
            </div>
            <div className="mb-2">
              就在他准备放弃时，手机铃声响了，朋友发来了一条消息：“答案就在你看不懂的地方。”这句话让小爱陷入了深深的思考。他终于意识到，或许这次挑战并不是要他解开谜题，而是让他体验那种无法掌控的困惑——正是这种无法理解的状态，才是这份谜题的真正含义。
            </div>
          </div>
        )}
        <div className="w-full flex justify-center">
          <Image
            src="/emotions/bafflement.jpg"
            width={400}
            height={400}
            alt="Bafflement"
          />
        </div>
      </main>
    </div>
  );
}
