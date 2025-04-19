"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

// Nav links
const links = [
  {
    href: "/",
    engName: "Home",
    zhName: "首页",
  },
  {
    href: "/about",
    engName: "About",
    zhName: "关于",
  },
];

export default function NavBar() {
  const { language, switchLanguage } = useLanguage();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logo, setLogo] = useState("/light.png");
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setLogo("/dark.png");
        setTextColor("black");
      } else {
        setColor("transparent");
        setLogo("/light.png");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 w-full z-10 ease-in duration-300 bg-transparent"
    >
      <div className="flex justify-between items-center">
        <div className="z-10 p-2">
          <Link href="/">
            <Image
              className="rounded-full"
              src={logo}
              width="45"
              height="45"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center">
          {/* Desktop Menus */}
          <div className="flex-row justify-between items-center hidden sm:flex">
            <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
              {links.map((link, index) => {
                return (
                  <li className="p-4" key={index}>
                    <Link href={link.href}>
                      {language === "English" ? link.engName : link.zhName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="p-2 z-10">
            <div className="relative">
              <select
                style={{ color: `${textColor}` }}
                className="appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                defaultValue={language}
                onChange={(e) => {
                  switchLanguage(e.target.value);
                }}
              >
                <option value="中文">中文</option>
                <option value="English">English</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  style={{ color: `${textColor}` }}
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Mobile Button */}

          <div onClick={handleNav} className="z-10 block sm:hidden pr-2">
            {nav ? (
              <AiOutlineClose size={20} className="text-white" />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full text-white h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              {links.map((link, index) => {
                return (
                  <li
                    onClick={handleNav}
                    className="p-4 text-4xl hover:text-gray-500"
                    key={index}
                  >
                    <Link href={link.href}>
                      {language === "English" ? link.engName : link.zhName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
