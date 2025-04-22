"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
// Create the context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null);

  // Functions to modify the context
  const switchLanguage = (language) => {
    setLanguage(language);
    setCookie("language", language);
  };

  // Value to be provided to consumers
  const value = {
    language,
    switchLanguage,
  };

  useEffect(() => {
    const l = getCookie("language");
    if (!l) {
      setLanguage("English");
      setCookie("language", "English");
    } else {
      setLanguage(l);
    }
  }, []);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
