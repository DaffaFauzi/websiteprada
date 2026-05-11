"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.45, 0, 0.55, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const modalOverlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const modalPanel = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: EASE_OUT },
  },
  exit: { opacity: 0, scale: 0.97, y: 14, transition: { duration: 0.14 } },
};

const slideImage = {
  enter: (direction: number) => ({
    x: direction > 0 ? 46 : -46,
    opacity: 0,
    scale: 0.985,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.26, ease: EASE_OUT },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -46 : 46,
    opacity: 0,
    scale: 0.985,
    transition: { duration: 0.2, ease: EASE_IN_OUT },
  }),
};

export default function GalleryPageClient() {
  const { dict } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isLightboxZoomed, setIsLightboxZoomed] = useState(false);

  const galleryItems = useMemo<GalleryItem[]>(
    () => [
      { src: "/FOTO1.webp", alt: "Sesi latihan teknik PRADA BC", category: "training" },
      { src: "/FOTO2.webp", alt: "Atlet berlatih smash", category: "training" },
      { src: "/FOTO3.webp", alt: "Shuttlecock dan raket badminton", category: "coaching" },
      { src: "/FOTO4.webp", alt: "Fasilitas lapangan badminton", category: "community" },
      { src: "/FOTO5.webp", alt: "Suasana akademi badminton", category: "community" },
      { src: "/FOTO6.webp", alt: "Momen pertandingan badminton", category: "tournament" },
      { src: "/FOTO7.webp", alt: "Latihan fisik atlet badminton", category: "training" },
      { src: "/FOTO8.webp", alt: "Pelatih memberi arahan strategi", category: "coaching" },
      { src: "/FOTO9.webp", alt: "Kebersamaan tim PRADA BC", category: "community" },
      { src: "/FOTO10.webp", alt: "Kegiatan atlet PRADA BC", category: "events" },
      { src: "/FOTO11.webp", alt: "Dokumentasi PRADA BC", category: "events" },
      // Duplicate some for better grid feel
      { src: "/FOTO1.webp", alt: "Prestasi atlet junior", category: "achievement" },
      { src: "/FOTO2.webp", alt: "Penyerahan medali turnamen", category: "achievement" },
      { src: "/FOTO3.webp", alt: "Sesi coaching clinic", category: "coaching" },
      { src: "/FOTO4.webp", alt: "Event tahunan klub", category: "events" },
      { src: "/FOTO6.webp", alt: "Final turnamen regional", category: "tournament" },
    ],
    []
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  const categories = useMemo(() => [
    { id: "all", label: dict.gallery.categories.all },
    { id: "training", label: dict.gallery.categories.training },
    { id: "tournament", label: dict.gallery.categories.tournament },
    { id: "achievement", label: dict.gallery.categories.achievement },
    { id: "coaching", label: dict.gallery.categories.coaching },
    { id: "community", label: dict.gallery.categories.community },
    { id: "events", label: dict.gallery.categories.events },
  ], [dict.gallery.categories]);

  const closeModal = useCallback(() => {
    setIsLightboxZoomed(false);
    setActiveIndex(null);
  }, []);

  const go = useCallback(
    (nextDir: number) => {
      setIsLightboxZoomed(false);
      setDirection(nextDir);
      setActiveIndex((idx) => {
        if (idx === null) return idx;
        const next = (idx + nextDir + filteredItems.length) % filteredItems.length;
        return next;
      });
    },
    [filteredItems.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeModal, go]);

  return (
    <div className="bg-ink text-snow min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.12),transparent_60%)]" />
        <Container className="relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              {dict.gallery.eyebrow}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight italic text-snow leading-[1.1] mb-6"
            >
              {dict.galleryPage.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-snow/70 leading-relaxed">
              {dict.galleryPage.hero.desc}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Filter System */}
      <section className="sticky top-16 sm:top-20 z-30 bg-ink/80 backdrop-blur-md border-b border-border/70 py-4 overflow-x-auto scrollbar-hide">
        <Container>
          <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-max px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                  activeCategory === cat.id
                    ? "bg-gold text-ink shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "text-snow/60 hover:text-snow hover:bg-snow/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <motion.div
            layout
            initial="hidden"
            animate="show"
            variants={stagger}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={`${item.src}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDirection(0);
                      setIsLightboxZoomed(false);
                      setActiveIndex(idx);
                    }}
                    className="group relative w-full overflow-hidden rounded-[1.5rem] border border-border bg-surface/40 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl active:scale-[0.98]"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="text-xs font-bold tracking-widest text-gold uppercase mb-2">
                        {categories.find(c => c.id === item.category)?.label}
                      </div>
                      <div className="text-sm font-medium text-snow leading-snug">
                        {item.alt}
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 backdrop-blur-xl px-4 py-10"
            role="dialog"
            aria-modal="true"
            variants={modalOverlay}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              variants={modalPanel}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-border bg-surface shadow-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-ink/50 text-snow hover:bg-gold hover:text-ink transition-all duration-300 backdrop-blur-md active:scale-90"
              >
                ✕
              </button>
              
              <div className="grid lg:grid-cols-[1fr_320px]">
                <div className="relative bg-ink/20 flex flex-col justify-center min-h-[50vh] lg:min-h-[70vh]">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={slideImage}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative w-full h-full"
                        onDoubleClick={() => setIsLightboxZoomed((v) => !v)}
                      >
                        <motion.div
                          className="relative w-full h-full"
                          animate={{ scale: isLightboxZoomed ? 1.15 : 1 }}
                          transition={{ duration: 0.3, ease: EASE_OUT }}
                        >
                          <Image
                            src={filteredItems[activeIndex].src}
                            alt={filteredItems[activeIndex].alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 1000px"
                            priority
                          />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute inset-x-0 bottom-8 flex items-center justify-between px-8 z-10">
                    <button
                      onClick={() => go(-1)}
                      className="h-12 px-6 rounded-full bg-ink/50 border border-border text-snow hover:bg-gold hover:text-ink transition-all duration-300 backdrop-blur-md active:scale-95"
                    >
                      {dict.gallery.modal.prev}
                    </button>
                    <div className="px-4 py-2 rounded-full bg-ink/50 border border-border text-xs font-bold tracking-widest text-gold backdrop-blur-md">
                      {activeIndex + 1} / {filteredItems.length}
                    </div>
                    <button
                      onClick={() => go(1)}
                      className="h-12 px-6 rounded-full bg-gold text-ink font-bold hover:bg-gold-2 transition-all duration-300 shadow-lg shadow-gold/20 active:scale-95"
                    >
                      {dict.gallery.modal.next}
                    </button>
                  </div>
                </div>

                {/* Details Sidebar */}
                <div className="p-8 lg:p-10 bg-surface-2 border-t lg:border-t-0 lg:border-l border-border flex flex-col">
                  <div className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
                    {categories.find(c => c.id === filteredItems[activeIndex].category)?.label}
                  </div>
                  <h3 className="text-2xl font-bold text-snow mb-6 leading-tight">
                    {filteredItems[activeIndex].alt}
                  </h3>
                  <p className="text-snow/50 text-sm leading-relaxed mb-8 flex-1">
                    {dict.gallery.modal.desc}
                  </p>
                  <Link
                    href="/#kontak"
                    onClick={closeModal}
                    className="w-full h-14 flex items-center justify-center rounded-full bg-gold text-ink font-bold transition-all duration-300 hover:bg-gold-2 hover:-translate-y-1"
                  >
                    {dict.gallery.modal.consultation}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
