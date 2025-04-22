"use client";

import { setCookie, getCookie } from "cookies-next";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function QR() {
  const [times, setTimes] = useState(null);
  const { language, switchLanguage } = useLanguage();
  useEffect(() => {
    const cookie = getCookie("qr");
    if (cookie) {
      const t = parseInt(cookie);
      if (t < 29) {
        setTimes(t + 1);
        setCookie("qr", t + 1);
      } else {
        setTimes(0);
        setCookie("qr", 0);
      }
    } else {
      setTimes(0);
      setCookie("qr", 0);
    }
  }, []);

  if (language === null) return null;

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="p-2 z-10">
        <div className="relative w-fit">
          <select
            style={{ color: "white" }}
            className={
              "appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            }
            value={language}
            onChange={(e) => {
              switchLanguage(e.target.value);
            }}
          >
            <option value="中文">中文</option>
            <option value="English">English</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              style={{ color: "white" }}
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      {times !== null && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center m-5 text-center">
          {(() => {
            switch (times) {
              case 0:
                if (language === "English") {
                  return (
                    <>
                      <div>Hello World!</div>
                      <div>Welcome to my art story!</div>
                      <div>Scan the QR code again for more!</div>
                      <div>
                        Or check out{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>Hello World!</div>
                      <div>欢迎光临！</div>
                      <div>请再扫一次码！</div>
                      <div>
                        或者去看看我的{" "}
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                      </div>
                    </>
                  );
                }
              case 1:
                if (language === "English") {
                  return (
                    <>
                      <div>Welcome back!</div>
                      <div>Seems like you like to play, haha!</div>
                      <div>What if I tell you to scan one more time?</div>
                      <div>
                        You can also check out{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>欢迎回来!</div>
                      <div>看来你很喜欢玩啊，哈哈!</div>
                      <div>那如果我让你再扫一次码呢!</div>
                      <div>
                        或者去看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 2:
                if (language === "English") {
                  return (
                    <>
                      <div>Third try, nice!</div>
                      <div>This is a place holder for my new art work.</div>
                      <div>Which I haven&apos;t painted yet.</div>
                      <div>You can keep scanning to see my story now.</div>
                      <div>I created this project on April 1st.</div>
                      <div>But I promise you it&apos;s not a joke.</div>
                      <div>
                        It&apos;s just, art is a progress to perfection.
                      </div>
                      <div>
                        And I&apos;m working on a good start and a perfect
                        ending.
                      </div>
                      <div>
                        Maybe you can check out{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>你居然扫了三次，太棒了!</div>
                      <div>我会在这里放我的新画!</div>
                      <div>虽然我还没有什么新作品～</div>
                      <div>你可以继续扫码看看我的故事。</div>
                      <div>我是4月1号愚人节创立这个项目的。</div>
                      <div>但我并不是来搞笑的。</div>
                      <div>艺术是一个通向完美的过程。</div>
                      <div>而我会在接下来的故事中展示这些。</div>
                      <div>
                        或者去看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 3:
                if (language === "English") {
                  return (
                    <>
                      <div>This is the start of my art journey.</div>
                      <div>
                        I drew with my eyes closed, put all my emotions on the
                        paper, and it came out amazing.
                      </div>
                      <div>
                        It&apos;s the moment I realize the magic of art.
                      </div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/you.jpg"
                          width={250}
                          height={250}
                          alt="Art piece titled 'you'"
                        />
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>这是我艺术之旅的开始。</div>
                      <div>
                        我闭着眼睛，把所有的情绪释放在纸上，最后出来的效果惊人的好。
                      </div>
                      <div>我开始意识到艺术的精妙。</div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/you.jpg"
                          width={250}
                          height={250}
                          alt="Art piece titled 'you'"
                        />
                      </div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 4:
                if (language === "English") {
                  return (
                    <>
                      <div>Here&apos;re some of my early works.</div>
                      <div>Mostly drawings or simple strokes with paint.</div>
                      <div>I liked creating stories with lines and colors.</div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/after-life.jpg"
                          width={250}
                          height={250}
                          alt="after life"
                        />
                      </div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/blue.jpg"
                          width={250}
                          height={250}
                          alt="after life"
                        />
                      </div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/chicken.jpg"
                          width={250}
                          height={250}
                          alt="after life"
                        />
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>这里是我的几幅早期作品。</div>
                      <div>主要是用笔触来表达。</div>
                      <div>我喜欢用线条和颜色讲故事。</div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/after-life.jpg"
                          width={250}
                          height={250}
                          alt="after life"
                        />
                      </div>
                      <div className=" bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/blue.jpg"
                          width={250}
                          height={250}
                          alt="blue"
                        />
                      </div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/chicken.jpg"
                          width={250}
                          height={250}
                          alt="chicken"
                        />
                      </div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 5:
                if (language === "English") {
                  return (
                    <>
                      <div>My first self portrait.</div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/self-portrait.jpg"
                          width={250}
                          height={250}
                          alt="self portrait"
                        />
                      </div>
                      <div>
                        I got a lot of compliments on this self portrait.
                      </div>
                      <div>
                        It&apos;s when I seriously considered continuing to
                        paint.
                      </div>
                      <div>
                        I specially thank my firends who supported me along the
                        way.
                      </div>
                      <div>
                        If not for them, I wouldn&apos;t start this journey.
                      </div>
                      <div>I am a programmer.</div>
                      <div>When I code, I like to hear music.</div>
                      <div>
                        That means I have the ear plugs plugged in all day.
                      </div>
                      <div>Which inspired this drawing.</div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      {" "}
                      <div>我的第一幅自画像。</div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/self-portrait.jpg"
                          width={250}
                          height={250}
                          alt="self portrait"
                        />
                      </div>
                      <div>这幅画得到了很多的鼓励。</div>
                      <div>然后我才开始认真的绘画。</div>
                      <div>我要特别感谢一下一路支持我的朋友们。</div>
                      <div>没有她们，我不可能走到这里。</div>
                      <div>我是个程序媛。</div>
                      <div>当我编程的时候我喜欢一直听歌。</div>
                      <div>这意味着我一整天都带着耳机。</div>
                      <div>这是这幅画的灵感来源。</div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 6:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/spaces.jpg"
                          width={250}
                          height={250}
                          alt="spaces"
                        />
                      </div>
                      <div>This is a matrix.</div>
                      <div>
                        I overheard someone yelling, are you living in a matrix?
                      </div>
                      <div>This line just stayed on my mind.</div>
                      <div>
                        I kept wondering, how do you know the person you meet
                        today, is the same person you met yesterday?
                      </div>
                      <div>
                        How can you be sure that this person is not an alien?
                      </div>
                      <div>
                        How do you know that the space you&apos;re in today
                        won&apos;t collapse tomorrow?
                      </div>
                      <div>
                        I don&apos;t have the answers, but I believe that
                        it&apos;s true we live in a matrix.
                      </div>
                      <div>
                        You have your own past and future, and people around you
                        have theirs.
                      </div>
                      <div>
                        However, it&apos;s the interaction with these people
                        that sparks and creates memory.
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/spaces.jpg"
                          width={250}
                          height={250}
                          alt="spaces"
                        />
                      </div>
                      <div>这是个矩阵。</div>
                      <div>
                        我很偶然的听到一个路人大声问，你生活在一个矩阵里吗？
                      </div>
                      <div>这句话一直在我的脑海里回荡。</div>
                      <div>
                        我禁不住想，你怎么知道你今天遇到的这个人，和昨天是同一个人？
                      </div>
                      <div>你怎么知道你面前的这个人不是外星人扮的？</div>
                      <div>你怎么知道你所在的空间明天不会崩塌？</div>
                      <div>我并不知道答案，但我相信我们生活在一个矩阵中。</div>
                      <div>你有你自己的过去和未来，你身边的人有他们的。</div>
                      <div>是那些相会的瞬间在闪闪发光，并成为永久的记忆。</div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 7:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/skinner.jpg"
                          width={250}
                          height={250}
                          alt="skinner"
                        />
                      </div>
                      <div>Have you heard of a Skinner&apos;s box?</div>
                      <div>
                        A Skinner&apos;s box is a psychological experiment.
                      </div>
                      <div>
                        It&apos;s a box full of pigeons where the experimenter
                        randomly drop food to the inside of the box.
                      </div>
                      <div>
                        After a while, the pigeons developed a variety of
                        behaviors with the belief that these behaviors can bring
                        them food.
                      </div>
                      <div>For example, they dance.</div>
                      <div>You can search on the internet to read more.</div>
                      <div>
                        So I painted this, a pigeon break out of a skinner box,
                        and actually see the real world.
                      </div>
                      <div>
                        I think life is the same, you&apos;ll never know the
                        real world unless you break the box around you.
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/skinner.jpg"
                          width={250}
                          height={250}
                          alt="skinner"
                        />
                      </div>
                      <div>听说过斯金纳箱子吗?</div>
                      <div>斯金纳箱子是一个心理学实验。</div>
                      <div>
                        它是一个装满了鸽子的箱子，同时实验人员会随机往里投放食物。
                      </div>
                      <div>过了一阵，鸽子们会发展出各种各样的行为来求食。</div>
                      <div>比如说，跳舞。</div>
                      <div>你可以上网搜一下。</div>
                      <div>
                        我画了一只鸽子冲破了斯金纳箱子，终于看到了外面的世界。
                      </div>
                      <div>
                        我觉得生活也是一样，如果你不突破一下，你永远不知道真实的生活是什么样子的。
                      </div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 8:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/moon.jpg"
                          width={250}
                          height={250}
                          alt="moon"
                        />
                      </div>
                      <div>I decided to go to an art school.</div>
                      <div>This is a project I did during the school. </div>
                      <div>
                        I challenged myself to paint more complicated surface
                        than simple strokes.
                      </div>
                      <div>
                        I thought, what could be more complicated than a moon
                        surface, then this happened.
                      </div>
                      <div>Then I learned, it&apos;s nothing but light.</div>
                      <div>
                        If you get the light right, you get the painting right.
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/moon.jpg"
                          width={250}
                          height={250}
                          alt="moon"
                        />
                      </div>
                      <div>我决定去上艺术学校</div>
                      <div>这是我在学校的时候画的一幅画。</div>
                      <div>我挑战我自己去画复杂的表面而不是简单的线条。</div>
                      <div>
                        我想，没有比月球更复杂的表面了吧，于是就有了这幅画。
                      </div>
                      <div>然后我意识到，一切都是光的作用。</div>
                      <div>只要画对了光，你就画好了。</div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 9:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/cave.jpg"
                          width={250}
                          height={250}
                          alt="cave"
                        />
                      </div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/back.jpg"
                          width={250}
                          height={250}
                          alt="back"
                        />
                      </div>
                      <div>
                        These two are two versions of Skinner box, if you
                        remember from previous reading.
                      </div>
                      <div>
                        The first is about a human living inside a cave.
                      </div>
                      <div>
                        His entire life only knows the shadows on the wall of
                        the cave.
                      </div>
                      <div>He thought himself as a shadow too.</div>
                      <div>However, he&apos;s happy.</div>
                      <div>
                        Is it necessary to tell him that there&apos;s a bigger
                        world?
                      </div>
                      <div>
                        The second painting is about four people looking at a
                        painting, where themselves are in the paintings viewed
                        by you!
                      </div>
                      <div>Who&apos;s in the painting?</div>
                      <div>
                        Do you want to tap on their shoulders and tell them?
                      </div>
                      <div>Scan the QR code for more story.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      {" "}
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/cave.jpg"
                          width={250}
                          height={250}
                          alt="cave"
                        />
                      </div>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/back.jpg"
                          width={250}
                          height={250}
                          alt="back"
                        />
                      </div>
                      <div>
                        这两幅是斯金纳箱子的变种，如果你还记得我之前给你讲的故事。
                      </div>
                      <div>第一幅是一个住在洞穴里的人。</div>
                      <div>他全部的人生只知道墙上的影子。</div>
                      <div>他觉得自己也是一个影子。</div>
                      <div>但是，他很快乐。</div>
                      <div>有必要告诉他外面还有更大的世界嘛？</div>
                      <div>
                        第二幅画是四个人在欣赏一幅画，让我想起卞之琳的一首诗，你站在桥上看风景，看风景人在楼上看你。
                      </div>
                      <div>到底是谁在画里？</div>
                      <div>你想拍拍那四个人的肩膀告诉他们他们也是画嘛？</div>
                      <div>请扫码看更多的故事。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 10:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/kiss.jpg"
                          width={250}
                          height={250}
                          alt="kiss"
                        />
                      </div>
                      <div>This is one of my favorites.</div>
                      <div>You close your eyes when you&apos;re kissing.</div>
                      <div>
                        The gentle touch on the lips tell you more about this
                        person.
                      </div>
                      <div>
                        And this is the last painting I&apos;ll be telling a
                        story about.
                      </div>
                      <div>Scan the QR code, maybe?</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/kiss.jpg"
                          width={250}
                          height={250}
                          alt="kiss"
                        />
                      </div>
                      <div>这是我最喜欢的几幅之一。</div>
                      <div>亲吻的时候要闭上眼睛，才能去感受那唇间的温柔。</div>
                      <div>好了，这是最后一个关于画的故事了。</div>
                      <div>再扫扫码？</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 11:
                if (language === "English") {
                  return (
                    <>
                      <div>Joking.</div>
                      <div>There will be more stories.</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>开玩笑的。</div>
                      <div>会有更多的故事的。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 12:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        I&apos;m just a bot, I don&apos;t know what the master
                        is going to show.
                      </div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>我是自动答复机器人，我不知道主人还会放什么。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 13:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        I&apos;m just a bot, I don&apos;t know what the master
                        is going to show.
                      </div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>我是自动答复机器人，我不知道主人还会放什么。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 14:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        I&apos;m just a bot, I don&apos;t know what the master
                        is going to show.
                      </div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>我是自动答复机器人，我不知道主人还会放什么。</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 15:
                if (language === "English") {
                  return (
                    <>
                      <div>You&apos;re still checking?</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>你居然还在扫？</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 16:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/friends.jpg"
                          width={250}
                          height={250}
                          alt="friends"
                        />
                      </div>
                      <div>Ok, I&apos;ll reward your persistence.</div>
                      <div>This is a piece for a friend.</div>
                      <div>As you can tell from the imagery.</div>
                      <div>Scan more? I encourage you!</div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/friends.jpg"
                          width={250}
                          height={250}
                          alt="friends"
                        />
                      </div>
                      <div>精神可嘉。</div>
                      <div>这是讲友谊的一幅画。</div>
                      <div>这是应朋友要求做的画。</div>
                      <div>从图里也能看出来。</div>
                      <div>我鼓励你继续扫扫码呀！</div>
                      <div>
                        或者看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 17:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        Seriously, I don&apos;t have that many works to show.
                      </div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>说真的，我没有那么多画给你看。</div>
                      <div>
                        不如看看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 18:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        You can email me your ideas, I may or may not paint it.
                      </div>
                      <div>
                        Find the contact info on{" "}
                        <Link className="text-pink-500" href="/about">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>
                        你可以写邮件给我，讨论画的想法，但我不一定会画。
                      </div>
                      <div>
                        请移步
                        <Link className="text-pink-500" href="/about">
                          网站
                        </Link>
                        给我发邮件!
                      </div>
                    </>
                  );
                }
              case 19:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        You can follow me on instagram for latest updates on my
                        paintings. @vera_z
                      </div>
                      <div>
                        Or check out{" "}
                        <Link href="/" className="text-pink-500">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>
                        请关注我的instagram:
                        @vera_z，新画一般会及时更新在上面，不用靠扫码！
                      </div>
                      <div>
                        有空也可以看看
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 20:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        I feel so honored you&apos;re stilling scanning this.
                      </div>
                      <div>
                        I&apos;m starting to imagine that if I exhibit this QR
                        code piece, all the audience will stand there checking
                        their phones instead of looking at the painting.
                      </div>
                      <div>Haha, that means you too.</div>
                      <div>
                        So stopping scanning or keep checking your phone.
                      </div>
                      <div>
                        Look up, see your surroundings, and find a friend to
                        chat!
                      </div>
                      <div>
                        Don&apos;t check{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>我感到很荣幸你还在扫码。</div>
                      <div>
                        这让我开始想到，有一天，当我展出这个码时，所有人都拿着手机在看，而忽略了画本身。
                      </div>
                      <div>哈哈，你不也是么。</div>
                      <div>所以不要扫码了，抬头看看四周，找个朋友聊聊天？</div>
                      <div>
                        不要看我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 21:
                if (language === "English") {
                  return (
                    <>
                      <div>How&apos;s your friend doing?</div>
                      <div>
                        If you can&apos;t find a topic to chat with, start by
                        sharing{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                        ?
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>你的朋友怎么样?</div>
                      <div>
                        不知道聊什么，可以从分享我的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        开始?
                      </div>
                    </>
                  );
                }
              case 22:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        I&apos;m just a bot, I don&apos;t know what the master
                        is going to show.
                      </div>
                      <div>
                        Or check out{" "}
                        <Link className="text-pink-500" href="/">
                          our website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>我是自动答复机器人，我不知道主人还会放什么。</div>
                      <div>
                        或者看看我们的
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 23:
                if (language === "English") {
                  return (
                    <>
                      <div>Have you ever experienced Déjà vu?</div>
                      <div>I wish I knew how to paint that.</div>
                      <div>
                        <Link className="text-pink-500" href="/">
                          My website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>刚刚有没有一种既视感?</div>
                      <div>我要是能画出来就好了。</div>
                      <div>
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 24:
                if (language === "English") {
                  return (
                    <>
                      <div>This is the end.</div>
                      <div>
                        <Link className="text-pink-500" href="/">
                          My website
                        </Link>
                        !
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>结束了，结束了。</div>
                      <div>
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        !
                      </div>
                    </>
                  );
                }
              case 25:
                if (language === "English") {
                  return (
                    <>
                      <div>I told you. This is the end.</div>
                      <div>
                        But{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>{" "}
                        may have updates!
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>已经说过了，结束了。</div>
                      <div>
                        但是
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        可能有更新!
                      </div>
                    </>
                  );
                }
              case 26:
                if (language === "English") {
                  return (
                    <>
                      <div>
                        Even the bot has gone to sleep, you may take some rest
                        now.
                      </div>
                      <div>
                        Check{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>{" "}
                        for updates!
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>机器人都休息了，你也该歇歇了</div>
                      <div>
                        上
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        看更新!
                      </div>
                    </>
                  );
                }
              case 27:
                if (language === "English") {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/not-working.jpg"
                          width={250}
                          height={250}
                          alt="not working"
                        />
                      </div>
                      <div>
                        This is the first version of my QR code project.
                      </div>
                      <div>It&apos;s aesthetically better but useless.</div>
                      <div>
                        Sometimes you have to balance between pratical and
                        ideal.
                      </div>
                      <div>
                        Check{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>{" "}
                        for updates!
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="bg-white m-5 p-5 flex flex-col items-center justify-center">
                        <Image
                          src="/art/not-working.jpg"
                          width={250}
                          height={250}
                          alt="not working"
                        />
                      </div>
                      <div>这是QR code项目的第一版，但是不能扫。</div>
                      <div>它看起来更美一些但毫无用武之地。</div>
                      <div>有些时候，你需要在理想和现实之间找到一个平衡。</div>
                      <div>
                        上
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        看更新!
                      </div>
                    </>
                  );
                }
              case 28:
                if (language === "English") {
                  return (
                    <>
                      <div>Thank you!</div>
                      <div>
                        Check{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>{" "}
                        for updates!
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>谢谢！</div>
                      <div>
                        上
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        看更新!
                      </div>
                    </>
                  );
                }
              case 29:
                if (language === "English") {
                  return (
                    <>
                      <div>This is the real real real real real end.</div>
                      <div>
                        But I don&apos;t promise that I won&apos;t work on this
                        project in the future.
                      </div>
                      <div>
                        Check{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>{" "}
                        for updates!
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>真的真的真的真的真的结束了。</div>
                      <div>但我不保证以后不更新。</div>
                      <div>
                        上
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                        看更新!
                      </div>
                    </>
                  );
                }
              default:
                if (language === "English") {
                  return (
                    <>
                      <div>Hello World!</div>
                      <div>Welcome to my art story!</div>
                      <div>Scan the QR code again for more!</div>
                      <div>
                        Or check out{" "}
                        <Link className="text-pink-500" href="/">
                          my website
                        </Link>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>Hello World!</div>
                      <div>欢迎光临！</div>
                      <div>请再扫一次码！</div>
                      <div>
                        或者去看看我的{" "}
                        <Link className="text-pink-500" href="/">
                          网站
                        </Link>
                      </div>
                    </>
                  );
                }
            }
          })()}
        </div>
      )}
    </div>
  );
}
