"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/app/i18n/dictionaries";

interface LanguageContextType {
  lang: Language;
  dict: Dictionary;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount to persist language
    const savedLang = localStorage.getItem("PRADA_BC_LANG") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      setLangState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("PRADA_BC_LANG", newLang);
  };

  // Prevent hydration mismatch by not rendering content until mounted,
  // OR we can just render the default language and suppress hydration warnings in the tree.
  // Given the layout, it's safer to suppress hydration warnings on the html tag 
  // and render the children immediately to preserve SEO and avoid empty screen.

  return (
    <LanguageContext.Provider value={{ lang, dict: dictionaries[lang], setLang }}>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
