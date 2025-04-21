"use client";

import { setCookie, getCookie } from "cookies-next";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

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
        <div>
          {(() => {
            switch (times) {
              case 0:
                return <div>First visit</div>;
              case 1:
                return <div>Second visit</div>;
              case 2:
                return <div>Third visit</div>;
              case 3:
                return <div>Fourth visit</div>;
              case 4:
                return <div>Fifth visit</div>;
              case 5:
                return <div>Sixth visit</div>;
              case 10:
                return <div>Tenth visit - halfway there!</div>;
              case 20:
                return <div>Twentieth visit - almost there!</div>;
              case 29:
                return <div>Final visit before reset</div>;
              default:
                return <div>{times}</div>;
            }
          })()}
        </div>
      )}
    </div>
  );
}
