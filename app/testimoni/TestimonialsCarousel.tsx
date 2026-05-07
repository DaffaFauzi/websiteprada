"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useLanguage } from "@/app/_components/LanguageProvider";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photoSrc: string;
  photoAlt: string;
};

export default function TestimonialsCarousel({ autoPlayMs = 6000 }: { autoPlayMs?: number }) {
  const { dict } = useLanguage();
  
  const items = useMemo<Testimonial[]>(
    () => dict.testimoniPage.carousel.items.map((item, idx) => ({
      ...item,
      // Using placeholder-like but themed avatars or icons
      photoSrc: idx === 0 ? "/FOTO1.webp" : idx === 1 ? "/FOTO2.webp" : "/FOTO4.webp"
    })),
    [dict.testimoniPage.carousel.items],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlayMs || isPaused || items.length === 0) return;
    const interval = setInterval(next, autoPlayMs);
    return () => clearInterval(interval);
  }, [autoPlayMs, isPaused, next, items.length]);

  if (items.length === 0) return null;

  // Calculate visible indices for the multi-card layout
  const getVisibleIndices = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    const nextIndex = (activeIndex + 1) % items.length;
    return [prevIndex, activeIndex, nextIndex];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop/Tablet Slider (3 cards) */}
      <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-8 min-h-[380px] px-4">
        {visibleIndices.map((idx, position) => {
          const item = items[idx];
          const isActive = position === 1;
          
          return (
            <motion.div
              key={`${idx}-${position}`}
              layout
              initial={{ opacity: 0, scale: 0.94, x: position === 0 ? -50 : position === 2 ? 50 : 0 }}
              animate={{ 
                opacity: isActive ? 1 : 0.6, 
                scale: isActive ? 1.03 : 0.94,
                x: 0,
                zIndex: isActive ? 10 : 0
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex-1 max-w-md rounded-[2.5rem] p-7 lg:p-8 bg-white border border-border/40 transition-shadow duration-500 ${
                isActive 
                  ? "shadow-[0_45px_90px_-15px_rgba(0,0,0,0.12)] ring-1 ring-gold/25" 
                  : "shadow-sm"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-24 bg-gradient-to-r from-gold/30 via-gold to-gold/30 rounded-b-full" />
              )}
              
              <div className="flex flex-col h-full">
                <div className="mb-4 text-gold/35">
                  <svg width="32" height="24" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 16.5C0 7.3873 7.3873 0 16.5 0V7.5C11.5294 7.5 7.5 11.5294 7.5 16.5V30H0V16.5ZM23.5 16.5C23.5 7.3873 30.8873 0 40 0V7.5C35.0294 7.5 31 11.5294 31 16.5V30H23.5V16.5Z" />
                  </svg>
                </div>

                <p className={`text-base lg:text-lg leading-relaxed flex-1 italic ${isActive ? "text-snow font-medium" : "text-snow/60 font-normal"}`}>
                  “{item.quote}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className={`relative h-12 w-12 overflow-hidden rounded-2xl border-2 transition-colors duration-500 ${isActive ? "border-gold/40" : "border-border/50"}`}>
                    <Image
                      src={item.photoSrc}
                      alt={item.photoAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className={`font-bold tracking-tight text-sm lg:text-base ${isActive ? "text-snow" : "text-snow/70"}`}>{item.name}</div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-widest text-gold font-bold mt-0.5">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Slider (1 card) */}
      <div className="sm:hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] p-6 bg-white border border-border/40 shadow-xl"
          >
            <div className="mb-4 text-gold/35">
              <svg width="28" height="21" viewBox="0 0 40 30" fill="currentColor">
                <path d="M0 16.5C0 7.3873 7.3873 0 16.5 0V7.5C11.5294 7.5 7.5 11.5294 7.5 16.5V30H0V16.5ZM23.5 16.5C23.5 7.3873 30.8873 0 40 0V7.5C35.0294 7.5 31 11.5294 31 16.5V30H23.5V16.5Z" />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-snow italic font-medium">
              “{items[activeIndex].quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border-2 border-gold/30">
                <Image
                  src={items[activeIndex].photoSrc}
                  alt={items[activeIndex].photoAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-snow text-sm">{items[activeIndex].name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-bold">{items[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-10 lg:mt-12 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="group flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-snow/10 bg-white text-snow transition-all hover:bg-snow hover:text-white hover:border-snow active:scale-90 shadow-sm"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-2 mx-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === activeIndex ? "w-8 bg-gold" : "w-1.5 bg-snow/10 hover:bg-snow/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="group flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-snow/10 bg-white text-snow transition-all hover:bg-snow hover:text-white hover:border-snow active:scale-90 shadow-sm"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
