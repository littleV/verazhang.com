"use client";

import { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("English");

  // Functions to modify the context
  const switchLanguage = (language) => {
    setLanguage(language);
  };

  // Value to be provided to consumers
  const value = {
    language,
    switchLanguage,
  };

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
