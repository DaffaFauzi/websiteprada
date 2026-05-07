"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "@/app/_components/Container";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";
import { useLanguage } from "@/app/_components/LanguageProvider";

type GalleryItem = {
  src: string;
  alt: string;
  gridClassName: string;
  aspectClassName: string;
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.45, 0, 0.55, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE_OUT } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE_OUT } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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

export default function HomePageClient() {
  const { dict } = useLanguage();

  const heroVisuals = useMemo(
    () => [
      {
        src: "/FOTO3.webp",
        alt: "Tim dan pelatih PRADA BC",
      },
      {
        src: "/FOTO2.webp",
        alt: "Atlet tunggal PRADA BC bersiap servis",
      },
      {
        src: "/FOTO4.webp",
        alt: "Aksi pertandingan ganda PRADA BC",
      },
    ],
    [],
  );

  const trustBadges = useMemo(() => dict.hero.badges, [dict.hero.badges]);

  const programs = useMemo(
    () => [
      {
        title: dict.services.programs[0].title,
        desc: dict.services.programs[0].desc,
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        title: dict.services.programs[1].title,
        desc: dict.services.programs[1].desc,
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        title: dict.services.programs[2].title,
        desc: dict.services.programs[2].desc,
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
      },
      {
        title: dict.services.programs[3].title,
        desc: dict.services.programs[3].desc,
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ),
      },
    ],
    [],
  );

  const gallery = useMemo<GalleryItem[]>(
    () => [
      {
        src: "/FOTO1.webp",
        alt: "Sesi latihan teknik PRADA BC",
        gridClassName: "sm:col-span-2",
        aspectClassName: "aspect-[16/9]",
      },
      {
        src: "/FOTO2.webp",
        alt: "Atlet berlatih smash",
        gridClassName: "sm:row-span-2",
        aspectClassName: "aspect-[3/4]",
      },
      {
        src: "/FOTO3.webp",
        alt: "Shuttlecock dan raket badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO4.webp",
        alt: "Fasilitas lapangan badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO5.webp",
        alt: "Suasana akademi badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO6.webp",
        alt: "Momen pertandingan badminton",
        gridClassName: "",
        aspectClassName: "aspect-[3/4]",
      },
      {
        src: "/FOTO7.webp",
        alt: "Latihan fisik atlet badminton",
        gridClassName: "sm:col-span-2",
        aspectClassName: "aspect-[16/9]",
      },
      {
        src: "/FOTO8.webp",
        alt: "Pelatih memberi arahan strategi",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO9.webp",
        alt: "Kebersamaan tim PRADA BC",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO10.webp",
        alt: "Kegiatan atlet PRADA BC",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "/FOTO11.webp",
        alt: "Dokumentasi PRADA BC",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isLightboxZoomed, setIsLightboxZoomed] = useState(false);

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
        const next = (idx + nextDir + gallery.length) % gallery.length;
        return next;
      });
    },
    [gallery.length],
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

  useEffect(() => {
    if (activeIndex === null) return;
    if (typeof window === "undefined") return;

    const next = (activeIndex + 1) % gallery.length;
    const prev = (activeIndex - 1 + gallery.length) % gallery.length;
    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    preload(gallery[next].src);
    preload(gallery[prev].src);
  }, [activeIndex, gallery]);

  return (
    <div className="relative overflow-hidden bg-ink text-snow">
      <section id="home" className="relative lg:min-h-[calc(100svh-5rem)] border-b border-border/70 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(201,162,39,0.12),transparent_50%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.05),transparent_35%)] lg:bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,0.14),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
        <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center text-center space-y-6 lg:items-start lg:text-left lg:space-y-8">
              <motion.div
                variants={fadeLeft}
                className="inline-flex items-center rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-[0.18em] text-snow/80 backdrop-blur-sm"
              >
                {dict.hero.badge}
              </motion.div>
              <motion.div variants={fadeLeft} className="space-y-4 lg:space-y-5">
                <h1 className="[font-family:var(--font-display)] max-w-2xl text-3xl sm:text-4xl leading-tight tracking-tight text-snow lg:text-5xl lg:leading-[1.14] lg:tracking-[-0.01em]">
                  {dict.hero.title}
                </h1>
                <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:max-w-xl lg:leading-8">
                  {dict.hero.desc}
                </p>
              </motion.div>
              <motion.div variants={fadeLeft} className="flex flex-col w-full sm:w-auto sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-3">
                <Link
                  href="/tentang"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-gold-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70 active:scale-[0.98]"
                >
                  {dict.hero.aboutClub}
                </Link>
                <Link
                  href="/program"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-border bg-surface/60 px-8 text-sm font-semibold text-snow/88 transition-colors duration-200 hover:bg-white/9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-[0.98]"
                >
                  {dict.hero.viewPrograms}
                </Link>
              </motion.div>
              <motion.div variants={fadeLeft} className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 lg:pt-0">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide text-snow/70"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 pt-4 lg:pt-2">
                {[
                  { value: "10+", label: dict.hero.stats[0].label },
                  { value: "100+", label: dict.hero.stats[1].label },
                  { value: "120+", label: dict.hero.stats[2].label },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface/60 p-4 sm:p-5 lg:items-start lg:justify-start"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-2xl font-semibold tracking-tight text-gold">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-snow/55 text-center lg:text-left">
                      {item.label}
                    </div>
                  </article>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative w-full mt-10 lg:mt-0 lg:h-[620px]">
              {/* Image 1: Main Action (Top Right on Desktop) */}
              <motion.div 
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
                className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:w-[76%] lg:h-[60%] z-10 mb-4 sm:mb-5 lg:mb-0"
              >
                <motion.article 
                  animate={{ y: [0, -6, 0] }} 
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="group relative w-full h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-surface/60 lg:shadow-2xl"
                >
                  <div className="relative w-full h-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-0">
                    <Image
                      src={heroVisuals[0].src}
                      alt={heroVisuals[0].alt}
                      fill
                      className="object-cover object-[50%_32%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent opacity-60 lg:opacity-80" />
                  </div>
                </motion.article>
              </motion.div>

              {/* BOTTOM CONTAINER (For Mobile/Tablet Flow) */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:block lg:gap-0">
                {/* Image 2: Portrait Single (Bottom Left on Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: -40, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
                  className="relative w-full sm:w-[45%] lg:w-[42%] lg:absolute lg:left-0 lg:bottom-0 lg:h-[68%] z-20"
                >
                  <motion.article 
                    animate={{ y: [0, 8, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="group relative w-full h-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border bg-surface/60 lg:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  >
                    <div className="relative w-full h-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0">
                      <Image
                        src={heroVisuals[1].src}
                        alt={heroVisuals[1].alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 400px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-transparent" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80" />
                    </div>
                  </motion.article>
                </motion.div>

                {/* Image 3: Team Landscape (Bottom Right on Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 }}
                  className="relative w-full sm:w-[55%] lg:w-[48%] lg:absolute lg:right-[2%] lg:bottom-[4%] lg:h-[44%] z-30 sm:mt-8 lg:mt-0"
                >
                  <motion.article 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
                    className="group relative w-full h-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border bg-surface/60 lg:shadow-[-10px_20px_40px_rgba(0,0,0,0.5)]"
                  >
                    <div className="relative w-full h-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0">
                      <Image
                        src={heroVisuals[2].src}
                        alt={heroVisuals[2].alt}
                        fill
                        className="object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 400px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-transparent" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80" />
                    </div>
                  </motion.article>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="tentang" className="scroll-mt-24 border-b border-border/70 bg-surface-2">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="space-y-8 sm:space-y-10">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {dict.about.eyebrow}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-snow">
                {dict.about.title}
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                {dict.about.desc}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
              <motion.article variants={fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-semibold text-snow">{dict.about.profileTitle}</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                  {dict.about.profileDesc}
                </p>
                <div className="mt-4 sm:mt-5 flex gap-3">
                  <Link href="/tentang" className="inline-flex min-h-[44px] items-center text-sm font-medium text-gold hover:text-[#E0C887] active:scale-[0.98] transition-transform">
                    {dict.about.fullProfile}
                  </Link>
                </div>
              </motion.article>
              <motion.article variants={fadeUp} className="grid gap-5 sm:gap-4 rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7 sm:grid-cols-2">
                <div>
                  <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">{dict.about.vision}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                    {dict.about.visionDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">{dict.about.mission}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                    {dict.about.missionDesc}
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "achievements",
                  title: dict.about.achievements,
                  desc: dict.about.achievementsDesc,
                  href: "/prestasi",
                },
                {
                  id: "organization",
                  title: dict.about.organization,
                  desc: dict.about.organizationDesc,
                  href: "/organisasi",
                },
                {
                  id: "testimonials",
                  title: dict.about.testimonials,
                  desc: dict.about.testimonialsDesc,
                  href: "/testimoni",
                },
              ].map((item) => (
                <motion.article key={item.id} variants={fadeUp} className="flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{item.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68 flex-1">{item.desc}</p>
                  <Link href={item.href} className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-gold hover:text-[#E0C887] active:scale-[0.98] transition-transform">
                    {dict.about.explore}
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7">
              <div className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {dict.about.communityTestimonials}
              </div>
              <TestimonialsCarousel autoPlayMs={5600} />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section id="layanan" className="scroll-mt-24 border-b border-border/70 bg-ink">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.services.eyebrow}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-snow">
                {dict.services.title}
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                {dict.services.desc}
              </p>
            </motion.div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {dict.services.programs.map((program, idx) => {
                  const serviceIcons = [
                    <svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                    <svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                    <svg key="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
                    <svg key="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  ];
                  return (
                    <motion.article
                      key={idx}
                      variants={fadeUp}
                      className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-default"
                    >
                      <div className="mb-4 sm:mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {serviceIcons[idx]}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-snow transition-colors duration-300">{program.title}</h3>
                      <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68 flex-1 transition-colors duration-300 group-hover:text-snow">{program.desc}</p>
                      <Link href="/program" className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-gold hover:text-gold-2 active:scale-[0.98] transition-all duration-300 group-hover:translate-x-1">
                        {dict.services.detailProgram} <span className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">&rarr;</span>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
          </motion.div>
        </Container>
      </section>

      <section id="gallery" className="scroll-mt-24 border-b border-border/70 bg-surface-2">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.gallery.eyebrow}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-snow">
                {dict.gallery.title}
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:max-w-2xl lg:leading-8">
                {dict.gallery.desc}
              </p>
            </motion.div>
            <div className="columns-1 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {gallery.map((item, idx) => (
                <motion.button
                  key={item.alt}
                  type="button"
                  variants={fadeUp}
                  onClick={() => {
                    setDirection(0);
                    setIsLightboxZoomed(false);
                    setActiveIndex(idx);
                  }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 text-left block w-full break-inside-avoid",
                    "transition-colors duration-200 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-[0.98] transform-gpu",
                  ].join(" ")}
                  aria-label={`${dict.gallery.modal.openPhoto}${item.alt}`}
                >
                  <div className="relative w-full">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </Container>

        <AnimatePresence>
          {activeIndex !== null ? (
            <motion.div
              className="fixed inset-0 z-[60] grid place-items-center bg-ink/40 backdrop-blur-md px-4 py-10"
              role="dialog"
              aria-modal="true"
              aria-label="Galeri foto"
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
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-surface/80 text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                  aria-label={dict.gallery.modal.close}
                >
                  ✕
                </button>
                <div className="grid lg:grid-cols-[1fr_280px]">
                  <div className="relative bg-surface flex flex-col justify-center">
                    <div className="relative aspect-square sm:aspect-[16/10] w-full">
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={activeIndex}
                          custom={direction}
                          variants={slideImage}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="absolute inset-0"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.14}
                          onDragEnd={(_, info) => {
                            if (info.offset.x > 80) go(-1);
                            if (info.offset.x < -80) go(1);
                          }}
                          onDoubleClick={() => setIsLightboxZoomed((v) => !v)}
                        >
                          <motion.div
                            className="absolute inset-0"
                            animate={{ scale: isLightboxZoomed ? 1.08 : 1.01 }}
                            transition={{ duration: 0.2, ease: EASE_OUT }}
                          >
                            <Image
                              src={gallery[activeIndex].src}
                              alt={gallery[activeIndex].alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1024px) 100vw, 860px"
                              priority
                            />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:p-4 bg-gradient-to-t from-ink/60 to-transparent">
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        className="rounded-full border border-border bg-surface/80 px-5 py-2 sm:px-4 min-h-[44px] text-sm font-medium text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                      >
                        {dict.gallery.modal.prev}
                      </button>
                      <div className="text-[11px] sm:text-xs font-medium tracking-widest text-snow/70">
                        {activeIndex + 1} / {gallery.length}
                      </div>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        className="rounded-full border border-[#C9A227]/55 bg-gold/18 px-5 py-2 sm:px-4 min-h-[44px] text-sm font-medium text-[#E2C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                      >
                        {dict.gallery.modal.next}
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-border bg-surface-2 p-5 sm:p-6 lg:border-l lg:border-t-0 flex flex-col justify-center">
                    <div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-gold">
                      {dict.gallery.modal.detail}
                    </div>
                    <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-snow">{gallery[activeIndex].alt}</h3>
                    <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                      {dict.gallery.modal.desc}
                    </p>
                    <Link
                      href="/#kontak"
                      className="mt-4 sm:mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-surface/60 px-6 text-sm font-medium text-snow/90 hover:bg-white/10 active:scale-95 transition-transform"
                      onClick={closeModal}
                    >
                      {dict.gallery.modal.consultation}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section id="kontak" className="scroll-mt-24 bg-ink">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.contact.eyebrow}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-snow">
                {dict.contact.title}
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                {dict.contact.desc}
              </p>
            </motion.div>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <article className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.consultation}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                    {dict.contact.consultationDesc}
                  </p>
                </article>
                <article className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.location}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                    {dict.contact.locationDesc}
                  </p>
                </article>
                <article className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">WhatsApp</h3>
                  <Link
                    href="https://wa.me/6281234567890"
                    className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#C9A227]/45 bg-gold/14 px-6 text-sm font-medium text-[#E2C77E] hover:bg-gold/20 active:scale-[0.98] transition-transform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {dict.contact.chatWa}
                  </Link>
                </article>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <form className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.formTitle}</h3>
                  <div className="mt-4 grid gap-4">
                    <input
                      type="text"
                      placeholder={dict.contact.name}
                      className="min-h-[44px] w-full rounded-xl border border-border bg-surface-2 px-4 text-sm text-snow placeholder:text-snow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder={dict.contact.waNo}
                      className="min-h-[44px] w-full rounded-xl border border-border bg-surface-2 px-4 text-sm text-snow placeholder:text-snow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <textarea
                      placeholder={dict.contact.message}
                      rows={4}
                      className="min-h-[120px] w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-snow placeholder:text-snow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-gold-2 active:scale-[0.98] transform-gpu"
                    >
                      {dict.contact.send}
                    </button>
                  </div>
                </form>

                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/60">
                  <iframe
                    title="Map PRADA BC Surabaya"
                    src="https://www.google.com/maps?q=Surabaya&output=embed"
                    className="h-48 sm:h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
