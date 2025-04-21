"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const arts = [
  { id: 0, name: "corner-one" },
  { id: 1, name: "corner-two" },
  { id: 2, name: "corner-three" },
  { id: 3, name: "abstraction-one" },
  { id: 4, name: "abstraction-two" },
  { id: 5, name: "abstraction-three" },
  { id: 6, name: "abstraction-four" },
  { id: 7, name: "abstraction-five" },
  { id: 8, name: "pillow" },
  { id: 9, name: "trumpet" },
  { id: 10, name: "flower-heels" },
  { id: 11, name: "veggie-meat" },
  { id: 12, name: "flower-blue" },
  { id: 13, name: "flower-pink" },
  { id: 14, name: "run" },
  { id: 15, name: "mirror" },
  { id: 16, name: "flower-green" },
  { id: 17, name: "vocal" },
  { id: 18, name: "flower-white" },
  { id: 19, name: "flower-red" },
  { id: 20, name: "flower-yellow" },
  { id: 21, name: "hand-one" },
  { id: 22, name: "hand-two" },
  { id: 23, name: "hand-three" },
  { id: 24, name: "hand-four" },
  { id: 25, name: "hand-five" },
  { id: 26, name: "hand-six" },
  { id: 27, name: "hand-seven" },
  { id: 28, name: "hand-eight" },
  { id: 29, name: "childhood-one" },
  { id: 30, name: "childhood-two" },
  { id: 31, name: "childhood-three" },
  { id: 32, name: "childhood-four" },
  { id: 33, name: "philosophy-one" },
  { id: 34, name: "philosophy-two" },
  { id: 35, name: "philosophy-three" },
  { id: 36, name: "hue-one" },
  { id: 37, name: "hue-two" },
  { id: 38, name: "hue-three" },
  { id: 39, name: "hue-four" },
  { id: 40, name: "hue-five" },
  { id: 41, name: "hue-six" },
  { id: 42, name: "hue-seven" },
  { id: 43, name: "sidewalk" },
  { id: 44, name: "chain" },
  { id: 45, name: "horse" },
  { id: 46, name: "flower-purple" },
  { id: 47, name: "eye" },
  { id: 48, name: "face" },
  { id: 49, name: "friends" },
  { id: 50, name: "back" },
  { id: 51, name: "kiss" },
  { id: 52, name: "self-portrait" },
  { id: 53, name: "moon" },
  { id: 54, name: "autumn" },
  { id: 55, name: "ballet" },
  { id: 56, name: "abstraction-six" },
  { id: 57, name: "face-two" },
  { id: 58, name: "guitar" },
  { id: 59, name: "abstraction-seven" },
  { id: 60, name: "blind-piano" },
  { id: 61, name: "hat" },
  { id: 62, name: "coffee" },
  { id: 63, name: "spaces" },
  { id: 64, name: "headshot-one" },
  { id: 65, name: "headshot-two" },
  { id: 66, name: "headshot-three" },
  { id: 67, name: "strawberry" },
  { id: 68, name: "after-life" },
  { id: 69, name: "blue" },
  { id: 70, name: "chicken" },
  { id: 71, name: "you" },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 w-full h-full flex flex-col items-center justify-center shadow-md"
            >
              <Image
                width={300}
                height={250}
                alt="art"
                src={`/art/${item.name}.jpg`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
