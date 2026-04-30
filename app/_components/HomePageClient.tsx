"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "@/app/_components/Container";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";

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

  const trustBadges = useMemo(
    () => [
      "Pelatih Bersertifikat",
      "Program Berjenjang",
      "Pendampingan Kompetisi",
    ],
    [],
  );

  const programs = useMemo(
    () => [
      {
        title: "Program Latihan",
        desc: "Kurikulum teknik, fisik, dan taktik yang tersusun per level atlet.",
      },
      {
        title: "Private Coaching",
        desc: "Sesi personal untuk target spesifik: teknik, footwork, dan strategi.",
      },
      {
        title: "Pembinaan Atlet",
        desc: "Pendampingan jangka panjang untuk jalur prestasi regional hingga nasional.",
      },
      {
        title: "Konsultasi Program",
        desc: "Rekomendasi jalur latihan berdasarkan level, usia, dan tujuan atlet.",
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
                className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-[0.18em] text-snow/80 backdrop-blur-sm"
              >
                PRADA BADMINTON CLUB SURABAYA
              </motion.div>
              <motion.div variants={fadeLeft} className="space-y-4 lg:space-y-5">
                <h1 className="[font-family:var(--font-display)] max-w-2xl text-3xl sm:text-4xl leading-tight tracking-tight text-[#F6F2E9] lg:text-5xl lg:leading-[1.14] lg:tracking-[-0.01em]">
                  Elite Badminton Club dengan Standar Pembinaan Profesional.
                </h1>
                <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:max-w-xl lg:leading-8">
                  PRADA BC adalah institusi pembinaan badminton yang memadukan coaching
                  profesional, sistem latihan terstruktur, dan budaya atlet berintegritas untuk
                  membangun prestasi berkelanjutan.
                </p>
              </motion.div>
              <motion.div variants={fadeLeft} className="flex flex-col w-full sm:w-auto sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-3">
                <Link
                  href="/tentang"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#C9A227] px-8 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-[#B8921F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70 active:scale-[0.98]"
                >
                  Tentang Klub
                </Link>
                <Link
                  href="/program"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-white/16 bg-white/5 px-8 text-sm font-semibold text-snow/88 transition-colors duration-200 hover:bg-white/9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-[0.98]"
                >
                  Lihat Program
                </Link>
              </motion.div>
              <motion.div variants={fadeLeft} className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 lg:pt-0">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/4 px-3 py-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide text-snow/70"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 pt-4 lg:pt-2">
                {[
                  { value: "10+", label: "Tahun Pengalaman" },
                  { value: "100+", label: "Atlet Aktif" },
                  { value: "120+", label: "Medali Turnamen" },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 lg:items-start lg:justify-start"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-2xl font-semibold tracking-tight text-[#D7B661]">
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
              <motion.article 
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
                className="group relative w-full lg:absolute lg:right-0 lg:top-0 lg:w-[76%] lg:h-[60%] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/5 lg:shadow-2xl z-10 mb-4 sm:mb-5 lg:mb-0"
              >
                <motion.div 
                  animate={{ y: [0, -6, 0] }} 
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="relative w-full h-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-0"
                >
                  <Image
                    src={heroVisuals[0].src}
                    alt={heroVisuals[0].alt}
                    fill
                    className="object-cover object-[50%_32%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 700px"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-60 lg:opacity-80" />
                </motion.div>
              </motion.article>

              {/* BOTTOM CONTAINER (For Mobile/Tablet Flow) */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:block lg:gap-0">
                {/* Image 2: Portrait Single (Bottom Left on Desktop) */}
                <motion.article 
                  initial={{ opacity: 0, x: -40, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
                  className="group relative w-full sm:w-[45%] lg:w-[42%] lg:absolute lg:left-0 lg:bottom-0 lg:h-[68%] overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 bg-white/5 lg:shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
                >
                  <motion.div 
                    animate={{ y: [0, 8, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="relative w-full h-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0"
                  >
                    <Image
                      src={heroVisuals[1].src}
                      alt={heroVisuals[1].alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 400px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  </motion.div>
                </motion.article>

                {/* Image 3: Team Landscape (Bottom Right on Desktop) */}
                <motion.article 
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 }}
                  className="group relative w-full sm:w-[55%] lg:w-[48%] lg:absolute lg:right-[2%] lg:bottom-[4%] lg:h-[44%] overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 bg-white/5 lg:shadow-[-10px_20px_40px_rgba(0,0,0,0.5)] z-30 sm:mt-8 lg:mt-0"
                >
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
                    className="relative w-full h-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0"
                  >
                    <Image
                      src={heroVisuals[2].src}
                      alt={heroVisuals[2].alt}
                      fill
                      className="object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 400px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  </motion.div>
                </motion.article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="tentang" className="scroll-mt-24 border-b border-border/70 bg-[#121213]">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }} className="space-y-8 sm:space-y-10">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D0B26A]">
                Tentang Kami
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-[#F6F2E9]">
                Profil Klub dengan Fondasi Kepercayaan, Kredibilitas, dan Prestasi.
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                PRADA BC membangun atlet melalui struktur pelatihan yang disiplin, tim pelatih
                berpengalaman, dan budaya organisasi yang profesional untuk keberlanjutan
                prestasi.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
              <motion.article variants={fadeUp} className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">Profil Klub</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                  Berdiri sebagai klub badminton pembinaan, PRADA BC melayani atlet junior hingga
                  dewasa dengan orientasi teknik, mental bertanding, dan etika kompetisi.
                </p>
                <div className="mt-4 sm:mt-5 flex gap-3">
                  <Link href="/tentang" className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#D0B26A] hover:text-[#E0C887] active:scale-[0.98] transition-transform">
                    Profil Lengkap
                  </Link>
                </div>
              </motion.article>
              <motion.article variants={fadeUp} className="grid gap-5 sm:gap-4 rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7 sm:grid-cols-2">
                <div>
                  <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#D0B26A]">Visi</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                    Menjadi institusi badminton premium yang dikenal atas kualitas pembinaan dan
                    integritas atlet.
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#D0B26A]">Misi</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/70 sm:leading-7">
                    Menyediakan coaching profesional, evaluasi progres berkala, dan jalur kompetisi
                    yang terstruktur.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Prestasi",
                  desc: "Pencapaian atlet pada turnamen lokal, regional, dan nasional sebagai bukti sistem pembinaan yang konsisten.",
                  href: "/prestasi",
                },
                {
                  title: "Pelatih & Organisasi",
                  desc: "Tim pelatih, manajemen, dan struktur operasional klub yang memastikan pembinaan berjalan profesional.",
                  href: "/organisasi",
                },
                {
                  title: "Testimoni",
                  desc: "Cerita atlet dan orang tua yang merasakan perkembangan teknik, disiplin, dan kepercayaan diri.",
                  href: "/testimoni",
                },
              ].map((item) => (
                <motion.article key={item.title} variants={fadeUp} className="flex flex-col rounded-2xl sm:rounded-3xl border border-white/12 bg-[#171718] p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">{item.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68 flex-1">{item.desc}</p>
                  <Link href={item.href} className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-[#D0B26A] hover:text-[#E0C887] active:scale-[0.98] transition-transform">
                    Jelajahi
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeUp} className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7">
              <div className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D0B26A]">
                Testimoni Komunitas
              </div>
              <TestimonialsCarousel autoPlayMs={5600} />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section id="layanan" className="scroll-mt-24 border-b border-border/70 bg-ink">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D0B26A]">Layanan</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-[#F6F2E9]">
                Sistem Layanan yang Terstruktur untuk Performa Atlet.
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                Setiap layanan dirancang untuk menjaga kesinambungan perkembangan atlet, dari
                fondasi teknik hingga kesiapan kompetisi.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <motion.article
                  key={program.title}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">{program.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68 flex-1">{program.desc}</p>
                  <Link href="/program" className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-[#D0B26A] hover:text-[#E0C887] active:scale-[0.98] transition-transform">
                    Detail Program
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="gallery" className="scroll-mt-24 border-b border-border/70 bg-[#111112]">
        <Container className="py-12 sm:py-16 lg:py-20">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D0B26A]">Gallery</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-[#F6F2E9]">
                Dokumentasi Latihan, Event, Turnamen, dan Aktivitas Atlet.
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:max-w-2xl lg:leading-8">
                Kurasi visual PRADA BC yang merekam kualitas latihan, momen pertandingan, dan
                perjalanan pembinaan atlet.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                    "group relative overflow-hidden rounded-2xl border border-white/12 bg-[#111112] text-left flex flex-col h-full",
                    "transition-colors duration-200 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-[0.98] transform-gpu",
                    // Reset grid col/row span on mobile, use aspect ratio only
                    item.gridClassName ? item.gridClassName.replace(/sm:/g, "sm:") : "",
                  ].join(" ")}
                  aria-label={`Buka foto: ${item.alt}`}
                >
                  <div className={["relative w-full h-full flex-1 min-h-[250px]", item.aspectClassName].join(" ")}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
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
              className="fixed inset-0 z-[60] grid place-items-center bg-black/80 px-4 py-10"
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
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-[#111112]"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-black/40 text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                  aria-label="Tutup"
                >
                  ✕
                </button>
                <div className="grid lg:grid-cols-[1fr_280px]">
                  <div className="relative bg-black flex flex-col justify-center">
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
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        className="rounded-full border border-white/15 bg-black/45 px-5 py-2 sm:px-4 min-h-[44px] text-sm font-medium text-snow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                      >
                        Prev
                      </button>
                      <div className="text-[11px] sm:text-xs font-medium tracking-widest text-snow/70">
                        {activeIndex + 1} / {gallery.length}
                      </div>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        className="rounded-full border border-[#C9A227]/55 bg-[#C9A227]/18 px-5 py-2 sm:px-4 min-h-[44px] text-sm font-medium text-[#E2C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 backdrop-blur-sm active:scale-95 transition-transform"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-white/12 bg-[#141415] p-5 sm:p-6 lg:border-l lg:border-t-0 flex flex-col justify-center">
                    <div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#D0B26A]">
                      Detail
                    </div>
                    <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-[#F6F2E9]">{gallery[activeIndex].alt}</h3>
                    <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                      Dokumentasi resmi PRADA BC dalam sesi latihan, event komunitas, dan
                      persiapan turnamen.
                    </p>
                    <Link
                      href="/#kontak"
                      className="mt-4 sm:mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-snow/90 hover:bg-white/10 active:scale-95 transition-transform"
                      onClick={closeModal}
                    >
                      Konsultasi
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
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }} className="space-y-8 sm:space-y-9">
            <motion.div variants={fadeUp} className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D0B26A]">Kontak</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-[#F6F2E9]">
                Konsultasi Program, Lokasi Klub, dan Komunikasi Resmi.
              </h2>
              <p className="max-w-prose text-sm sm:text-base leading-relaxed text-snow/72 lg:leading-8">
                Hubungi tim PRADA BC untuk diskusi kebutuhan latihan, jadwal kunjungan, dan
                pemetaan program yang paling sesuai untuk atlet.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <article className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">Konsultasi</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                    Sesi konsultasi untuk menentukan level awal, fokus latihan, dan rencana
                    pembinaan atlet.
                  </p>
                </article>
                <article className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">Lokasi</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/68">
                    Surabaya, Jawa Timur. Detail alamat lengkap akan diinformasikan saat
                    penjadwalan kunjungan.
                  </p>
                </article>
                <article className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">WhatsApp</h3>
                  <Link
                    href="https://wa.me/6281234567890"
                    className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#C9A227]/45 bg-[#C9A227]/14 px-6 text-sm font-medium text-[#E2C77E] hover:bg-[#C9A227]/20 active:scale-[0.98] transition-transform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat via WhatsApp
                  </Link>
                </article>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <form className="rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F6F2E9]">Contact Form</h3>
                  <div className="mt-4 grid gap-4">
                    <input
                      type="text"
                      placeholder="Nama"
                      className="min-h-[44px] w-full rounded-xl border border-white/14 bg-black/20 px-4 text-sm text-snow placeholder:text-snow/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="No. WhatsApp"
                      className="min-h-[44px] w-full rounded-xl border border-white/14 bg-black/20 px-4 text-sm text-snow placeholder:text-snow/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <textarea
                      placeholder="Tujuan latihan / pertanyaan"
                      rows={4}
                      className="min-h-[120px] w-full rounded-xl border border-white/14 bg-black/20 px-4 py-3 text-sm text-snow placeholder:text-snow/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 transition-colors"
                    />
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#C9A227] px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#B8921F] active:scale-[0.98] transform-gpu"
                    >
                      Kirim Permintaan
                    </button>
                  </div>
                </form>

                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-white/5">
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
