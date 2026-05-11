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
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
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
    return [
      { idx: prevIndex, position: "left" },
      { idx: activeIndex, position: "center" },
      { idx: nextIndex, position: "right" }
    ];
  };

  const visibleItems = getVisibleIndices();

  const variants = {
    enter: (pos: string) => ({
      opacity: 0,
      scale: 0.95,
      x: pos === "left" ? -100 : pos === "right" ? 100 : 0,
    }),
    center: {
      opacity: 1,
      scale: 1.05,
      x: 0,
      zIndex: 10,
    },
    side: (pos: string) => ({
      opacity: 0.5,
      scale: 0.92,
      x: 0,
      zIndex: 0,
    }),
    exit: (pos: string) => ({
      opacity: 0,
      scale: 0.95,
      x: pos === "left" ? -100 : pos === "right" ? 100 : 0,
    })
  };

  const mobileVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir * 50,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: -dir * 50,
      scale: 0.95,
    }),
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop/Tablet Slider (3 cards) */}
      <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-10 min-h-[420px] px-4 overflow-visible">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map(({ idx, position }) => {
            const item = items[idx];
            const isActive = position === "center";
            
            return (
              <motion.div
                key={idx}
                layout
                custom={position}
                variants={variants}
                initial="enter"
                animate={isActive ? "center" : "side"}
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
                className={`relative flex-1 max-w-md rounded-[2.5rem] p-8 lg:p-10 bg-white/80 backdrop-blur-md border border-white/40 transform-gpu ${
                  isActive 
                    ? "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-gold/30" 
                    : "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] grayscale-[0.5]"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-24 bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-b-full shadow-[0_2px_10px_rgba(197,164,109,0.3)]" 
                  />
                )}
                
                <div className="flex flex-col h-full">
                  <div className={`mb-6 ${isActive ? "text-gold" : "text-gold/30"}`}>
                    <svg width="36" height="28" viewBox="0 0 40 30" fill="currentColor">
                      <path d="M0 16.5C0 7.3873 7.3873 0 16.5 0V7.5C11.5294 7.5 7.5 11.5294 7.5 16.5V30H0V16.5ZM23.5 16.5C23.5 7.3873 30.8873 0 40 0V7.5C35.0294 7.5 31 11.5294 31 16.5V30H23.5V16.5Z" />
                    </svg>
                  </div>

                  <p className={`text-base lg:text-xl leading-relaxed flex-1 italic ${isActive ? "text-snow font-medium" : "text-snow/50 font-normal"}`}>
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className={`relative h-14 w-14 overflow-hidden rounded-2xl border-2 ${isActive ? "border-gold scale-110 shadow-lg" : "border-border/30"}`}>
                      <Image
                        src={item.photoSrc}
                        alt={item.photoAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className={`font-bold tracking-tight text-base lg:text-lg ${isActive ? "text-snow" : "text-snow/60"}`}>{item.name}</div>
                      <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-gold font-black mt-0.5">{item.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mobile Slider (1 card) */}
      <div className="sm:hidden px-4 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={mobileVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-[2.5rem] p-8 bg-white/90 backdrop-blur-sm border border-border/20 shadow-2xl relative"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-gold/40 rounded-b-full" />
             
            <div className="mb-5 text-gold/40">
              <svg width="28" height="21" viewBox="0 0 40 30" fill="currentColor">
                <path d="M0 16.5C0 7.3873 7.3873 0 16.5 0V7.5C11.5294 7.5 7.5 11.5294 7.5 16.5V30H0V16.5ZM23.5 16.5C23.5 7.3873 30.8873 0 40 0V7.5C35.0294 7.5 31 11.5294 31 16.5V30H23.5V16.5Z" />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-snow italic font-medium">
              “{items[activeIndex].quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border-2 border-gold/40 shadow-md">
                <Image
                  src={items[activeIndex].photoSrc}
                  alt={items[activeIndex].photoAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-snow text-base">{items[activeIndex].name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-black">{items[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-12 lg:mt-16 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-white/50 backdrop-blur-sm text-snow transition-all hover:bg-gold hover:text-white hover:border-gold active:scale-95 shadow-lg shadow-black/5"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Pagination Dots with dynamic widths */}
        <div className="flex gap-2.5 mx-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className={`h-2 transition-all duration-500 rounded-full ${
                i === activeIndex 
                  ? "w-10 bg-gradient-to-r from-gold to-gold-2 shadow-[0_0_10px_rgba(197,164,109,0.4)]" 
                  : "w-2 bg-snow/10 hover:bg-snow/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-white/50 backdrop-blur-sm text-snow transition-all hover:bg-gold hover:text-white hover:border-gold active:scale-95 shadow-lg shadow-black/5"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
