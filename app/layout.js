import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NavBar from "@/components/navbar";

export const metadata = {
  title: {
    default: "Vera Zhang",
    template: "%s — Vera Zhang",
  },
  description: "Contemporary Chinese Artist Producing Fine Art.",
};

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
  {
    href: "/art",
    engName: "Art",
    zhName: "艺术",
  },
  {
    href: "/blog",
    engName: "Blog",
    zhName: "博客",
  },
  {
    href: "/legal",
    engName: "Privacy Policy",
    zhName: "隐私政策",
  },
];

const hideNavBarPaths = [
  "/qr",
  "/thestory",
  "/lines",
  "/tools",
  "/tools/palette",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <NavBar links={links} hideNavBarPaths={hideNavBarPaths}></NavBar>
          <main className="pt-16 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
