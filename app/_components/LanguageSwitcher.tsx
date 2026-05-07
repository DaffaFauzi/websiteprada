"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
  ] as const;

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-4 text-sm font-medium text-snow shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-surface-2 hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <svg className="h-[14px] w-[14px] text-snow/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="hidden sm:inline-block">{currentLang.label}</span>
        <span className="sm:hidden">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`h-[14px] w-[14px] text-snow/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-2xl border border-border bg-surface p-1.5 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => {
              setLang(l.code);
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
              lang === l.code
                ? "bg-gold/10 text-gold"
                : "text-snow/70 hover:bg-surface-2 hover:text-snow"
            }`}
          >
            {l.label}
            {lang === l.code && (
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
