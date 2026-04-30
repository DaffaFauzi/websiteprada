"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photoSrc: string;
  photoAlt: string;
};

export default function TestimonialsCarousel({ autoPlayMs = 5200 }: { autoPlayMs?: number }) {
  const items = useMemo<Testimonial[]>(
    () => [
      {
        quote:
          "PRADA BC bukan hanya klub, tapi keluarga yang mendukung kami untuk terus berprestasi.",
        name: "Atlet PRADA BC",
        role: "Atlet",
        photoSrc: "/globe.svg",
        photoAlt: "Foto atlet PRADA BC",
      },
      {
        quote:
          "Program latihannya terstruktur dan komunikasinya jelas. Perkembangan anak saya terasa nyata.",
        name: "Orang Tua Atlet",
        role: "Orang Tua",
        photoSrc: "/file.svg",
        photoAlt: "Foto orang tua atlet PRADA BC",
      },
      {
        quote:
          "Manajemen profesional dan visi pembinaan yang kuat. PRADA BC mitra yang tepat untuk kolaborasi.",
        name: "Mitra Klub",
        role: "Partner",
        photoSrc: "/window.svg",
        photoAlt: "Foto mitra PRADA BC",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const current = items[index];
  const [paused, setPaused] = useState(false);

  const prev = () => setIndex((v) => (v - 1 + items.length) % items.length);
  const next = () => setIndex((v) => (v + 1) % items.length);

  useEffect(() => {
    if (!autoPlayMs || paused) return;
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % items.length);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, items.length, paused]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 shadow-[0_26px_90px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_38%,rgba(255,215,0,0.08))] opacity-55" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background-image:radial-gradient(circle_at_24%_22%,rgba(255,215,0,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_55%)] group-hover:opacity-100" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, scale: 1.01 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x > 70) prev();
                if (info.offset.x < -70) next();
              }}
              whileTap={{ cursor: "grabbing" }}
            >
              <p className="mt-4 text-lg leading-8 text-snow sm:text-xl">“{current.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink/35">
                  <Image
                    src={current.photoSrc}
                    alt={current.photoAlt}
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-snow">{current.name}</div>
                  <div className="text-xs text-snow/70">{current.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 lg:pt-7">
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[88px] items-center justify-center rounded-xl border border-border bg-ink/40 px-5 text-sm font-semibold text-snow shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink/60 hover:shadow-[0_16px_55px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-95"
            onClick={prev}
            aria-label="Testimoni sebelumnya"
          >
            Prev
          </button>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[88px] items-center justify-center rounded-xl bg-gold px-5 text-sm font-semibold text-ink shadow-[0_14px_46px_rgba(255,215,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_60px_rgba(255,215,0,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70 active:scale-95"
            onClick={next}
            aria-label="Testimoni berikutnya"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}
