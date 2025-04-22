"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Creative() {
  const { language } = useLanguage();
  if (language === null) return null;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {language === "English" ? (
          <>
            <div className="text-3xl">What is creative freedom?</div>
            <div>
              I&apos;ve been taking a class about the value of art recently. I
              was tasked to answer a question: what is creative freedom? I think
              the principles apply to a lot of fields so I&apos;d like to share
              my answers here with a broader audience too.
            </div>
            <div className="ml-6">
              <ul>
                <li>
                  • <strong>Know the boundary of an art form.</strong> In my
                  opinion, to discuss creative freedom, one must address the
                  definition of freedom first. My country&apos;s saint,
                  Confucius once said &quot;do whatever your heart desires, but
                  do not break the rules&quot;. I think it&apos;s one of the
                  best definitions of freedom, you can but can not do whatever
                  you want. There is a boundary on everything. Once you know the
                  boundary, you can work hard to push the boundary a little bit,
                  which will be a break through of the art field, and I&apos;d
                  say the biggest creative movement.
                </li>
                <li>
                  • <strong>Build your own voice.</strong> We learn from our
                  ancestors, and gain knowledge from them. However, we must
                  build our own voice to speak our own minds.
                </li>
                <li>
                  • <strong>Master the skills of your own art field.</strong>{" "}
                  Now you know your field, you have your own voice, you have to
                  learn how to express them. Greatest artists are the ones who
                  both have minds and skills.
                </li>
                <li>
                  • <strong>Look for cross boundary inspiration.</strong>{" "}
                  Staying in one field is dangerous sometimes, cause you only
                  get old information. New information would inspire new ideas.
                </li>
                <li>
                  • <strong>Act.</strong> You can&apos;t just have everything in
                  your mind. You have to take action to put it out for the world
                  to see, thus preserving your ideas or receiving critical
                  feedbacks for further creative development.
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl">什么是创作自由？</div>
            <div>
              我最近在上一门关于艺术价值的课。其中有一个课堂问题是什么是创作自由？因为这些原则可以应用到很多领域，所以我想把我的答案给这里的小伙伴分享一下。
            </div>
            <div className="ml-6">
              <ul>
                <li>
                  • <strong>了解你所从事的艺术形式的边界。</strong>
                  在我看来，讨论创作自由，首先要讨论什么是自由。我们祖国的圣人孔夫子曾说过，“从心所欲不逾矩”。我觉得这是对自由最好的定义之一。你可以又不可以想干什么就干什么。任何事情都有一个边界。一旦知道了边界，你就可以努力工作把这个边界往外推一点，我觉得这才是最大的艺术推动。
                </li>
                <li>
                  • <strong>表达你自已的声音。</strong>
                  我们是站在前人的肩膀上成事的。但是，我们必须要有自己的声音才能够往前走。
                </li>
                <li>
                  • <strong>掌握你的艺术领域的最高技巧。</strong>
                  了解了你的领域，有了自己的思想，下一步就是学会如何表达。最伟大的艺术家都是那些既具有头脑又具有技巧的人。
                </li>
                <li>
                  • <strong>寻找跨领域的灵感。</strong>
                  保持在一个领域有时候是件很危险的事情，因为你得到的常常是过时的信息。新的信息能激发新的灵感。
                </li>
                <li>
                  • <strong>行动。</strong>
                  你不能把所有的信息都藏在脑子里。你必须行动将其展现给世界看，这样才能保存这些创作，并且获得宝贵的反馈来更进一步的创作。
                </li>
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
