"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { arts, altText, captionText, humanize } from "./arts";

export default function Gallery() {
  const [displayItem, setDisplayItem] = useState(null);
  const { language } = useLanguage();

  const popupTitle =
    displayItem &&
    (language === "English"
      ? displayItem.title || displayItem.titleZh || humanize(displayItem.slug)
      : displayItem.titleZh ||
        displayItem.title ||
        humanize(displayItem.slug));

  const popupDescription =
    displayItem &&
    (language === "English"
      ? displayItem.description || displayItem.descriptionZh
      : displayItem.descriptionZh || displayItem.description);

  return (
    <div className="flex flex-col row-start-2 items-center sm:items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arts.map((item) => {
          const caption = captionText(item);
          return (
            <figure
              key={item.slug}
              className="bg-white p-6 w-full h-full flex flex-col items-center justify-center shadow-md relative"
            >
              <Image
                width={300}
                height={250}
                alt={altText(item)}
                src={`/art/${item.slug}.jpg`}
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => {
                  setDisplayItem(item);
                }}
              />
              {caption && (
                <figcaption className="sr-only">{caption}</figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {displayItem !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black font-bold z-10 border-2 border-black"
              onClick={() => {
                setDisplayItem(null);
              }}
            >
              X
            </button>
            <Image
              width={1200}
              height={1000}
              alt={`${altText(displayItem)} (enlarged)`}
              src={`/art/${displayItem.slug}.jpg`}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-white text-center max-w-2xl px-4">
              <h2 className="text-xl">{popupTitle}</h2>
              {popupDescription && (
                <p className="mt-2 text-sm text-gray-300">{popupDescription}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
