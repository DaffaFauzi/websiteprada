"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import Container from "@/app/_components/Container";
import GeometricBackdrop from "@/app/_components/GeometricBackdrop";
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
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
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
    transition: { duration: 0.26, ease: EASE_OUT },
  },
  exit: { opacity: 0, scale: 0.97, y: 14, transition: { duration: 0.18 } },
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
  const heroPlayers = useMemo(
    () => [
      {
        src: "https://source.unsplash.com/900x1100/?badminton,smash",
        alt: "Atlet badminton melakukan smash",
        className:
          "absolute right-0 top-0 h-[320px] w-[240px] sm:h-[360px] sm:w-[260px] rotate-[7deg]",
        float: { y: [0, -10, 0] as number[], duration: 4.8, delay: 0.1 },
      },
      {
        src: "https://source.unsplash.com/900x1100/?badminton,training",
        alt: "Latihan badminton intensif",
        className:
          "absolute left-2 top-14 h-[260px] w-[220px] sm:h-[300px] sm:w-[240px] -rotate-[8deg]",
        float: { y: [0, -12, 0] as number[], duration: 5.4, delay: 0.25 },
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,court",
        alt: "Lapangan badminton premium",
        className:
          "absolute right-20 bottom-2 h-[220px] w-[320px] sm:h-[240px] sm:w-[360px] rotate-[-4deg]",
        float: { y: [0, -8, 0] as number[], duration: 4.2, delay: 0.35 },
      },
      {
        src: "https://source.unsplash.com/1000x1000/?badminton,player",
        alt: "Atlet badminton dalam aksi",
        className:
          "absolute left-16 bottom-10 h-[210px] w-[210px] sm:h-[240px] sm:w-[240px] rotate-[5deg]",
        float: { y: [0, -9, 0] as number[], duration: 5.9, delay: 0.15 },
      },
    ],
    [],
  );

  const particles = useMemo(
    () => [
      { className: "top-[16%] left-[12%] h-2.5 w-2.5", delay: 0.1 },
      { className: "top-[26%] left-[34%] h-2 w-2", delay: 0.35 },
      { className: "top-[42%] left-[18%] h-1.5 w-1.5", delay: 0.55 },
      { className: "top-[58%] left-[10%] h-2 w-2", delay: 0.25 },
      { className: "top-[22%] left-[62%] h-2.5 w-2.5", delay: 0.2 },
      { className: "top-[44%] left-[78%] h-2 w-2", delay: 0.45 },
      { className: "top-[62%] left-[66%] h-1.5 w-1.5", delay: 0.62 },
      { className: "top-[76%] left-[86%] h-2.5 w-2.5", delay: 0.15 },
    ],
    [],
  );

  const programs = useMemo(
    () => [
      {
        title: "Latihan Teknik",
        desc: "Footwork, pukulan, dan konsistensi rally dengan metode modern.",
      },
      {
        title: "Sparring",
        desc: "Simulasi pertandingan intens untuk meningkatkan timing dan mental.",
      },
      {
        title: "Turnamen Internal",
        desc: "Uji progres lewat kompetisi rutin dengan format profesional.",
      },
      {
        title: "Coaching Intensif",
        desc: "Pendampingan fokus target, evaluasi performa, dan strategi.",
      },
    ],
    [],
  );

  const gallery = useMemo<GalleryItem[]>(
    () => [
      {
        src: "https://source.unsplash.com/1200x900/?badminton,training",
        alt: "Sesi latihan teknik PRADA BC",
        gridClassName: "sm:col-span-2",
        aspectClassName: "aspect-[16/9]",
      },
      {
        src: "https://source.unsplash.com/900x1200/?badminton,player",
        alt: "Atlet berlatih smash",
        gridClassName: "sm:row-span-2",
        aspectClassName: "aspect-[3/4]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,shuttlecock",
        alt: "Shuttlecock dan raket badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,court",
        alt: "Fasilitas lapangan badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,academy",
        alt: "Suasana akademi badminton",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "https://source.unsplash.com/900x1200/?badminton,match",
        alt: "Momen pertandingan badminton",
        gridClassName: "",
        aspectClassName: "aspect-[3/4]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,fitness",
        alt: "Latihan fisik atlet badminton",
        gridClassName: "sm:col-span-2",
        aspectClassName: "aspect-[16/9]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,coach",
        alt: "Pelatih memberi arahan strategi",
        gridClassName: "",
        aspectClassName: "aspect-[4/3]",
      },
      {
        src: "https://source.unsplash.com/1200x900/?badminton,team",
        alt: "Kebersamaan tim PRADA BC",
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

  const heroMvX = useMotionValue(0);
  const heroMvY = useMotionValue(0);
  const heroX = useSpring(heroMvX, { stiffness: 140, damping: 22, mass: 0.25 });
  const heroY = useSpring(heroMvY, { stiffness: 140, damping: 22, mass: 0.25 });
  const heroBgX = useTransform(heroX, (v) => v * 14);
  const heroBgY = useTransform(heroY, (v) => v * 10);
  const heroMidX = useTransform(heroX, (v) => v * 22);
  const heroMidY = useTransform(heroY, (v) => v * 16);
  const heroFgX = useTransform(heroX, (v) => v * 30);
  const heroFgY = useTransform(heroY, (v) => v * 22);

  const lightboxMvX = useMotionValue(0);
  const lightboxMvY = useMotionValue(0);
  const lightboxX = useSpring(lightboxMvX, { stiffness: 160, damping: 26, mass: 0.22 });
  const lightboxY = useSpring(lightboxMvY, { stiffness: 160, damping: 26, mass: 0.22 });
  const lightboxPanX = useTransform(lightboxX, (v) => v * (isLightboxZoomed ? 34 : 18));
  const lightboxPanY = useTransform(lightboxY, (v) => v * (isLightboxZoomed ? 22 : 12));

  const onHeroMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroMvX.set(Math.max(-0.5, Math.min(0.5, x)));
      heroMvY.set(Math.max(-0.5, Math.min(0.5, y)));
    },
    [heroMvX, heroMvY],
  );

  const onHeroLeave = useCallback(() => {
    heroMvX.set(0);
    heroMvY.set(0);
  }, [heroMvX, heroMvY]);

  const heroStreaks = useMemo(
    () => [
      { className: "top-[18%] left-[-18%] w-[56%] rotate-[18deg]", delay: 0.2, dur: 4.8 },
      { className: "top-[34%] left-[-22%] w-[64%] rotate-[18deg]", delay: 0.9, dur: 5.6 },
      { className: "top-[62%] left-[-26%] w-[70%] rotate-[18deg]", delay: 0.5, dur: 6.2 },
      { className: "top-[46%] left-[42%] w-[44%] rotate-[18deg]", delay: 0.7, dur: 5.2 },
    ],
    [],
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
    <div className="relative overflow-hidden">
      <section className="relative" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <motion.div
          className="absolute inset-0 origin-center"
          style={{ x: heroBgX, y: heroBgY }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: EASE_IN_OUT }}
        >
          <div className="absolute inset-0 bg-ink" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,215,0,0.28),transparent_45%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_70%_88%,rgba(255,215,0,0.16),transparent_46%)]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(120deg,rgba(255,215,0,0.18)_0%,transparent_35%,rgba(255,255,255,0.10)_55%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)]" />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0" style={{ x: heroMidX, y: heroMidY }}>
          <GeometricBackdrop className="opacity-65 mix-blend-screen" />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0" style={{ x: heroMidX, y: heroMidY }}>
          {heroStreaks.map((s) => (
            <motion.div
              key={s.className}
              className={[
                "absolute h-[2px] blur-[0.5px]",
                "bg-[linear-gradient(90deg,transparent_0%,rgba(255,215,0,0.45)_35%,rgba(255,255,255,0.22)_50%,rgba(255,215,0,0.18)_65%,transparent_100%)]",
                s.className,
              ].join(" ")}
              initial={{ opacity: 0.1, x: -40 }}
              animate={{ opacity: [0.12, 0.35, 0.12], x: [0, 80, 0] }}
              transition={{
                duration: s.dur,
                delay: s.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: EASE_IN_OUT,
              }}
            />
          ))}
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0" style={{ x: heroMidX, y: heroMidY }}>
          {particles.map((p) => (
            <motion.span
              key={p.className}
              className={[
                "absolute rounded-full bg-gold/70 blur-[0.5px] shadow-[0_0_18px_rgba(255,215,0,0.35)]",
                p.className,
              ].join(" ")}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0.25, 0.7, 0.25], y: [0, -14, 0] }}
              transition={{
                duration: 3.8,
                delay: p.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: EASE_IN_OUT,
              }}
            />
          ))}
        </motion.div>

        <Container className="relative py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div
                variants={fadeLeft}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-gold backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(255,215,0,0.4)]" />
                Prada Badminton Club • Surabaya
              </motion.div>

              <motion.div variants={fadeLeft} className="space-y-4">
                <h1 className="text-4xl font-black italic leading-[1.05] tracking-tighter text-snow sm:text-6xl">
                  Wujudkan Potensi Terbaikmu di Dunia Badminton
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-snow/75 sm:text-lg">
                  Bergabunglah dengan komunitas badminton profesional untuk meningkatkan
                  skill, strategi, dan performa terbaikmu.
                </p>
              </motion.div>

              <motion.div variants={fadeLeft} className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/kontak"
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#C9A227] px-8 text-sm font-black italic uppercase tracking-tighter text-ink shadow-[0_18px_60px_rgba(255,215,0,0.18),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:scale-105 hover:brightness-95 hover:shadow-[0_26px_90px_rgba(255,215,0,0.28),0_0_0_1px_rgba(255,215,0,0.22),inset_0_1px_0_rgba(255,255,255,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                >
                  <span className="relative z-10">Daftar Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </Link>
                <Link
                  href="/program"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-8 text-sm font-black italic uppercase tracking-tighter text-snow backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                >
                  Lihat Program
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-3"
              >
                {[
                  { value: "10+", label: "Tahun Pengalaman" },
                  { value: "50+", label: "Atlet Aktif" },
                  { value: "100+", label: "Medali Emas" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_26px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_38%,rgba(255,215,0,0.08))] opacity-65" />
                    <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#C9A227] shadow-[0_0_18px_rgba(255,215,0,0.18)]" />
                    <div className="text-3xl font-black italic text-gold">{s.value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-snow/45">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative mx-auto h-[520px] w-full max-w-[520px] lg:h-[600px] lg:max-w-none">
              <motion.div className="absolute inset-0" style={{ x: heroMidX, y: heroMidY }}>
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/12 blur-[120px]" />
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[130px]" />
                <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/6 blur-[170px]" />
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="relative h-full w-full"
                style={{ x: heroFgX, y: heroFgY }}
              >
                {heroPlayers.map((img, idx) => (
                  <motion.div
                    key={img.alt}
                    variants={{
                      hidden: { opacity: 0, y: 24, scale: 0.96 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: EASE_OUT, delay: 0.12 * idx },
                      },
                    }}
                    className={img.className}
                    animate={{ y: img.float.y }}
                    transition={{
                      duration: img.float.duration,
                      delay: img.float.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: EASE_IN_OUT,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/5 shadow-[0_34px_90px_rgba(0,0,0,0.60),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-gold/25">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_38%,rgba(255,215,0,0.10))] opacity-70" />
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 1024px) 70vw, 520px"
                        priority={idx === 0}
                      />
                    </div>
                  </motion.div>
                ))}

                <div className="absolute left-4 top-4 rounded-2xl border border-white/12 bg-ink/45 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
                  <div className="text-[10px] font-black uppercase tracking-[0.35em] text-gold">
                    Elite Training
                  </div>
                  <div className="mt-1 text-sm font-semibold text-snow/90">
                    Sporty • Premium • Energetic
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 rounded-2xl border border-gold/30 bg-gold px-4 py-3 text-ink shadow-[0_22px_60px_rgba(255,215,0,0.24),inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <div className="text-sm font-black italic uppercase tracking-tighter">
                    Join The Squad
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                    Level Up Your Game
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border bg-gradient-to-b from-ink to-surface-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface-2/80 to-transparent" />
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.50),inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.18),transparent_45%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.10),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_35%,rgba(255,215,0,0.10))] opacity-55" />
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://source.unsplash.com/1400x1050/?badminton,training,coach"
                  alt="Latihan bersama pelatih"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 520px"
                />
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Tentang PRADA BC
                </div>
                <h2 className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
                  Membangun Generasi Juara Badminton
                </h2>
                <p className="text-base leading-7 text-snow/75">
                  Kami memadukan disiplin latihan, evaluasi terukur, dan kultur tim yang
                  positif agar setiap atlet berkembang cepat, konsisten, dan siap bertanding.
                </p>
              </motion.div>

              <motion.ul variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
                {[
                  "Pelatih berpengalaman",
                  "Program latihan terstruktur",
                  "Fasilitas lengkap",
                  "Evaluasi performa berkala",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(255,215,0,0.45)]" />
                    <span className="text-sm font-medium text-snow/85">{b}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/tentang"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold text-snow transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                >
                  Profil Klub
                </Link>
                <Link
                  href="/program"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#FFD700] to-[#C9A227] px-6 text-sm font-semibold text-ink shadow-[0_14px_46px_rgba(255,215,0,0.14),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70"
                >
                  Lihat Program
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border bg-surface-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-surface-2/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface-2/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(115deg,rgba(255,215,0,0.16)_0%,transparent_36%,rgba(255,255,255,0.08)_60%,transparent_78%)]" />
        <Container className="py-16 sm:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                Program & Fitur
              </div>
              <h2 className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
                Jalur Latihan yang Terukur & Kompetitif
              </h2>
              <p className="text-base leading-7 text-snow/75">
                Dari pondasi teknik hingga strategi pertandingan, setiap sesi dirancang agar
                progres terasa nyata dan konsisten.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((p) => (
                <motion.article
                  key={p.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-gold/35 hover:shadow-[0_34px_110px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,215,0,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] will-change-transform"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20, mass: 0.25 }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_38%,rgba(255,215,0,0.08))]" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.22),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.10),transparent_55%)]" />
                  <div className="pointer-events-none absolute -inset-px rounded-[2rem] ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-gold/35" />
                  <div className="relative space-y-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_18px_rgba(255,215,0,0.12)]">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-snow">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-6 text-snow/75">{p.desc}</p>
                    <div className="pt-3">
                      <Link
                        href="/program"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold/90 transition-colors duration-200 group-hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 rounded-md"
                      >
                        Detail Program
                        <span className="text-gold/70 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative border-t border-border bg-gradient-to-b from-surface-2 to-ink">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-surface-2/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink/70 to-transparent" />
        <Container className="py-16 sm:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.28 }}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Galeri
                </div>
                <h2 className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
                  Momen Latihan & Kompetisi
                </h2>
                <p className="text-base leading-7 text-snow/75">
                  Klik foto untuk melihat lebih besar dan jelajahi momen lainnya.
                </p>
              </div>
              <Link
                href="/program"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold text-snow transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                Lihat Kegiatan
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((g, idx) => (
                <motion.button
                  key={g.alt}
                  type="button"
                  variants={fadeUp}
                  onClick={() => {
                    setDirection(0);
                    setIsLightboxZoomed(false);
                    setActiveIndex(idx);
                  }}
                  className={[
                    "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl",
                    "transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-gold/35 hover:shadow-[0_28px_95px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,215,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 will-change-transform",
                    g.gridClassName,
                  ].join(" ")}
                  aria-label={`Buka foto: ${g.alt}`}
                >
                  <div className="relative h-full w-full">
                    <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-gold/30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className={["relative", g.aspectClassName].join(" ")}>
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0">
                      <div className="h-20 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-3 px-4">
                        <div className="translate-y-2 text-sm font-semibold text-snow opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {g.alt}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </Container>

        <AnimatePresence>
          {activeIndex !== null ? (
            <motion.div
              className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 px-4 py-10 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label="Galeri foto"
              variants={modalOverlay}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={closeModal}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,215,0,0.28),transparent_46%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.10),transparent_46%),radial-gradient(circle_at_60%_80%,rgba(255,215,0,0.14),transparent_48%)]" />
              <motion.div
                variants={modalPanel}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-surface-2 shadow-[0_44px_120px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(120deg,rgba(255,215,0,0.18)_0%,transparent_38%,rgba(255,255,255,0.10)_60%,transparent_80%)]" />
                <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink/60 text-snow transition-colors duration-200 hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                    aria-label="Tutup"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid gap-0 lg:grid-cols-[1fr_300px]">
                  <div className="relative bg-ink">
                    <div className="relative aspect-[16/10] w-full">
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
                          onMouseMove={(e) => {
                            const r = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - r.left) / r.width - 0.5;
                            const y = (e.clientY - r.top) / r.height - 0.5;
                            lightboxMvX.set(Math.max(-0.5, Math.min(0.5, x)));
                            lightboxMvY.set(Math.max(-0.5, Math.min(0.5, y)));
                          }}
                          onMouseLeave={() => {
                            lightboxMvX.set(0);
                            lightboxMvY.set(0);
                          }}
                          whileTap={{ cursor: "grabbing" }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{ x: lightboxPanX, y: lightboxPanY }}
                            animate={{ scale: isLightboxZoomed ? 1.14 : 1.02 }}
                            transition={{ duration: 0.35, ease: EASE_OUT }}
                          >
                            <Image
                              src={gallery[activeIndex].src}
                              alt={gallery[activeIndex].alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1024px) 92vw, 860px"
                              priority
                            />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-ink/60 px-5 text-sm font-semibold text-snow transition-colors duration-200 hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                        aria-label="Sebelumnya"
                      >
                        Prev
                      </button>
                      <div className="text-xs font-semibold text-snow/80">
                        {activeIndex + 1} / {gallery.length}
                      </div>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-ink transition-all duration-200 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70"
                        aria-label="Berikutnya"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-surface-2 p-6 lg:border-l lg:border-t-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Detail
                    </div>
                    <div className="mt-3 text-lg font-semibold tracking-tight text-snow">
                      {gallery[activeIndex].alt}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-snow/75">
                      Dokumentasi kegiatan PRADA BC: latihan teknik, sparring, dan atmosfer
                      kompetitif untuk membangun atlet bermental juara.
                    </div>

                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-snow/60">
                          Tips Navigasi
                        </div>
                        <div className="mt-2 text-sm text-snow/80">
                          Swipe/drag untuk ganti foto. Double click untuk zoom. Panah keyboard juga bisa.
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-ink/35 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-snow/60">
                          Preview
                        </div>
                        <div className="mt-3 grid grid-cols-5 gap-2">
                          {Array.from({ length: 5 }).map((_, j) => {
                            const idx = (activeIndex - 2 + j + gallery.length) % gallery.length;
                            const active = idx === activeIndex;
                            return (
                              <button
                                key={`${gallery[idx].alt}-${j}`}
                                type="button"
                                className={[
                                  "group relative overflow-hidden rounded-xl border bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                                  active
                                    ? "border-gold/45 shadow-[0_0_0_1px_rgba(255,215,0,0.16)]"
                                    : "border-white/10 hover:border-gold/25",
                                ].join(" ")}
                                onClick={() => {
                                  setDirection(idx > activeIndex ? 1 : -1);
                                  setIsLightboxZoomed(false);
                                  setActiveIndex(idx);
                                }}
                                aria-label={`Buka preview: ${gallery[idx].alt}`}
                              >
                                <div className="relative aspect-[1/1]">
                                  <Image
                                    src={gallery[idx].src}
                                    alt={gallery[idx].alt}
                                    fill
                                    className={[
                                      "object-cover transition-all duration-200",
                                      active ? "scale-[1.02]" : "opacity-85 group-hover:opacity-100",
                                    ].join(" ")}
                                    sizes="80px"
                                  />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <Link
                        href="/kontak"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-all duration-200 hover:brightness-95 hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70"
                        onClick={closeModal}
                      >
                        <span className="relative z-10">Daftar Sekarang</span>
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section className="relative border-t border-border bg-ink">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink/70 to-transparent" />
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Training & Facilities
                </div>
                <h2 className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
                  Fasilitas & Sistem Latihan yang Siap Juara
                </h2>
                <p className="text-base leading-7 text-snow/75">
                  Fokus pada kenyamanan latihan, keamanan, dan kualitas pendampingan agar
                  performa atlet meningkat tanpa kompromi.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {[
                  "Fasilitas Standar Nasional",
                  "Pelatih Bersertifikat",
                  "Latihan Berbasis Data",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {b}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Lapangan & Peralatan",
                    desc: "Lapangan nyaman, pencahayaan optimal, dan gear pendukung latihan.",
                  },
                  {
                    title: "Sesi Teknik & Taktik",
                    desc: "Drill terarah untuk meningkatkan decision making dan variasi pukulan.",
                  },
                  {
                    title: "Strength & Conditioning",
                    desc: "Latihan fisik untuk speed, stamina, dan injury prevention.",
                  },
                  {
                    title: "Review Performa",
                    desc: "Evaluasi berkala, target individu, dan rencana progres terukur.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_26px_85px_rgba(0,0,0,0.50),0_0_0_1px_rgba(255,215,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_40%,rgba(255,215,0,0.08))] opacity-55" />
                    <div className="text-sm font-semibold text-snow">{c.title}</div>
                    <div className="mt-2 text-sm leading-6 text-snow/75">{c.desc}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_30px_85px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://source.unsplash.com/1400x1050/?badminton,court,indoor"
                  alt="Fasilitas lapangan indoor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 520px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                    Badge
                  </div>
                  <div className="mt-1 text-sm font-semibold text-snow">
                    Fasilitas Standar Nasional
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                    Badge
                  </div>
                  <div className="mt-1 text-sm font-semibold text-snow">
                    Pelatih Bersertifikat
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border bg-surface-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-surface-2/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface-2/80 to-transparent" />
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-4"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Testimoni
                </div>
                <h2 className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
                  Cerita Progres dari Komunitas PRADA BC
                </h2>
                <p className="text-base leading-7 text-snow/75">
                  Atmosfer latihan yang suportif, terukur, dan kompetitif membuat atlet dan
                  orang tua merasakan perubahan nyata.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
            >
              <TestimonialsCarousel autoPlayMs={5200} />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,215,0,0.35),transparent_55%),linear-gradient(135deg,rgba(255,215,0,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-60 animate-gradient-x bg-[linear-gradient(90deg,rgba(255,215,0,0.22)_0%,rgba(255,255,255,0.10)_35%,rgba(255,215,0,0.18)_70%,rgba(255,215,0,0.22)_100%)]" />
        <Container className="relative py-16 sm:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-black tracking-tight text-snow sm:text-4xl">
              Mulai Perjalananmu Menjadi Atlet Badminton Profesional
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base leading-7 text-snow/75">
              Ambil langkah pertama hari ini. Dapatkan program latihan yang jelas, komunitas
              suportif, dan coaching yang serius untuk progres cepat.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#C9A227] px-10 text-sm font-black italic uppercase tracking-tighter text-ink shadow-[0_18px_60px_rgba(255,215,0,0.18),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:scale-[1.03] hover:brightness-95 hover:shadow-[0_26px_90px_rgba(255,215,0,0.28),0_0_0_1px_rgba(255,215,0,0.22),inset_0_1px_0_rgba(255,255,255,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70"
              >
                <span className="absolute -inset-10 rounded-full bg-gold/25 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Daftar Sekarang</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/kontak"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/5 px-10 text-sm font-black italic uppercase tracking-tighter text-snow shadow-[0_18px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-gold/25 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,215,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                <span className="relative z-10">Hubungi Kami</span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_35%_30%,rgba(255,215,0,0.18),transparent_60%)]" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
