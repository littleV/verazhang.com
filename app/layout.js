import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NavBar from "@/components/navbar";

export const metadata = {
  title: "Vera Zhang",
  description: "Contemporary Chinese Artist Producing Fine Art.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <NavBar></NavBar>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
