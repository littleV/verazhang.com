"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Creative() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {language === "English" ? (
          <>
            <div className="text-3xl">Art is brain food</div>
            <div>
              Some heard about the famous saying, art is business, which carried
              out a big movement of commercialization of art, which, caused art
              so expensive.
            </div>
            <div>
              I&apos;d say it&apos;s missing something. Something essential.
              That art is for human being.
            </div>
            <div>
              I planned to write about whether art is objective or subjective.
              But hey, I&apos;m no philosopher. I&apos;ll just pop a question
              here. Suppose there is art existing somewhere in the universe,
              that no one has seen it, no one has heard about it, no one knows
              about it. Is it still art?
            </div>
            <div>
              I don&apos;t have much insights to the answer, still exploring
              myself too. However, here I want to talk about how important art
              is to the brain.
            </div>
            <div>
              I&apos;ve been reading a book, How emotions are made, by Lisa
              Feldman Barrett. It talks about how brain is consuming every
              sensation your body provides, non stop, and then provides
              prediction about outside world and then tells your body to react.
              I also want to mention another study I learned on Ted.com that
              daily exercise can actually improve &quot;brain muscle&quot;.
            </div>
            <div>
              Your brain needs quality input to generate better output. From
              there, you step forward. Music and art is this kind of input, that
              brings out the best of your brain.
            </div>
            <div>
              I just finished reading Haruki Murakami&apos;s book, Novelist as a
              vocation. He described a feeling that he got from his readers:
              collaboratively, these readers, despite some personal opinions,
              understand me precisely, or understand my novel deeply. I expect
              that from my audiences too, that I hope as a entirety, you can get
              the message delivered in my art work. After all, art is the
              carrier of information to the brain. And to be connected by
              information, to me, is for us, as a living being, to say
              confidently that we&apos;re not alone.
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl">艺术是大脑的食物</div>
            <div>
              艺术是大脑的食物，其实我们有更常见的说法，艺术是精神食粮。
            </div>
            <div>
              很多人可能听过Art is
              business这句话，艺术就是商业，推动了轰轰烈烈艺术作品商业化浪潮。但我觉得这句话描述了艺术的生存，忽略了艺术的本质，就是对人的作用。
            </div>
            <div>
              我本来写了一篇文章，介绍艺术是客观还是主观。但中心思想其实很简单，我这里带过就算了，毕竟我也没有精通哲学到敢给你们讲讲的地步。如果任何东西对人没有用的话，也就是人不能主观感知，可以纯粹客观存在吗？说到艺术，举个例子，就是跟你说有一种美，没人知道没人见过没人听过，那它还美吗？
            </div>
            <div>
              我今天要强调的，是大脑的食物，而不是精神的。精神是想象出来的，而大脑是物理存在的（当然我也不敢和你们讨论什么是实在）。我在看一本讲大脑如何工作的书。书里说，我们的大脑一刻不停的在接受外界给的刺激，你身体的所有感官都在给他供给信息，然后它再计算预判发出指令通过身体的其它部位向外输出。说到这里，和电脑好像，哈哈。
            </div>
            <div>
              你的大脑需要优质的信息输入才会有更优质的信息输出。而音乐，文字，绘画等等就是非常独特的sensation（硬要翻译这个词“感觉，感受，刺激的综合意思”）。这里我要提个题外话，有研究表明常年保持身体运动的人，大脑也得到了运动，反应更灵敏。这里的灵敏是指对身体的方方面面的控制。而我认为，艺术的输入，也能对大脑起到相同的作用。
            </div>
            <div>
              我刚看完村上村树的《我的职业是小说家》。里面他总结的和读者沟通后感受：这些人作为一个整体，非常准确而深刻地理解了我，或者说我写的小说。这就是我对观众们的期待，希望有一天大家能深深的读懂画里传达的信息。毕竟，艺术作为brain
              food，就是信息的载体不是？而信息的连接，我觉得，是为了让我们有信心说，作为生命体，我们不孤独。
            </div>
          </>
        )}
      </main>
    </div>
  );
}
