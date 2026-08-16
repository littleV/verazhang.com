"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Slides data format example
// const slides = [
//   {
//     image: "/1.jpg",
//     name: "lonely",
//     description: "...",
//   }
// ];

export default function Slides({
  id,
  slides,
  language,
  width,
  height,
  interval,
}) {
  const [current, setCurrent] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current, slides]);
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (interval) {
      const next = setInterval(nextSlide, interval); // Change slide
      return () => {
        clearInterval(next);
      }; // Cleanup the interval on component unmount
    } else {
      return () => {};
    }
  }, [nextSlide, interval]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div
      id={id}
      className="relative flex justify-center"
      style={{ width, height }}
    >
      {" "}
      <FaArrowCircleLeft
        onClick={prevSlide}
        className="absolute bottom-8 sm:bottom-[50%] left-[20px] text-gray/70 cursor-pointer select-none z-[2]"
        size={50}
      />
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-800"
                : "opacity-0"
            }
          >
            {index === current && (
              <div
                className="absolute left-0 bottom-0 top-0 right-0"
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={() => setIsActive(!isActive)}
              >
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={slide.image}
                  alt={slide.name}
                  priority={true}
                />
                <div
                  className={`absolute inset-0 bg-black/70 flex items-center justify-center p-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="text-white text-center">
                    <p>
                      {language === "English" ? (
                        <>{slide.description}</>
                      ) : (
                        <>{slide.descriptionZH}</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <FaArrowCircleRight
        onClick={nextSlide}
        className="absolute bottom-8 sm:bottom-[50%] right-[20px] text-gray/70 cursor-pointer select-none z-[2]"
        size={50}
      />
    </div>
  );
}
