const fs = require('fs');

// 1. Update dictionaries.ts
let dictContent = fs.readFileSync('app/i18n/dictionaries.ts', 'utf8');

const enProgram = `
    programPage: {
      hero: {
        eyebrow: "Programs & Activities",
        title: "Structured development for maximum results",
        subtitle: "PRADA BC runs modern training programs designed to comprehensively develop athlete capabilities."
      },
      mainProgram: {
        title: "Main Programs",
        desc: "From routine training to competitions, every program is designed to build a strong technical foundation, endurance, and a winning mentality."
      },
      programs: [
        {
          title: "Routine training with professional coaches",
          desc: "Scheduled sessions focusing on technique, footwork, strategy, and physical conditioning."
        },
        {
          title: "Internal and external tournaments",
          desc: "Testing athlete progress through measurable and challenging competitions."
        },
        {
          title: "Development of talented young athletes",
          desc: "Foundation programs to build a winning mentality and sportsmanship from an early age."
        },
        {
          title: "Structured performance evaluation",
          desc: "Training monitoring and clear development targets for each athlete."
        }
      ],
      gallery: {
        title: "Activity Gallery",
        desc: "Snippets of training activities, sparring, and moments of togetherness at PRADA BC.",
        images: [
          "PRADA BC training activities documentation",
          "PRADA BC sparring and athlete development activities",
          "PRADA BC technique and footwork training session",
          "PRADA BC youth athlete development activities",
          "PRADA BC training atmosphere and togetherness",
          "PRADA BC internal tournament activities"
        ]
      }
    },`;

const idProgram = `
    programPage: {
      hero: {
        eyebrow: "Program & Kegiatan",
        title: "Pembinaan terstruktur untuk hasil maksimal",
        subtitle: "PRADA BC menjalankan program latihan modern yang dirancang untuk mengembangkan kemampuan atlet secara menyeluruh."
      },
      mainProgram: {
        title: "Program Utama",
        desc: "Dari latihan rutin hingga kompetisi, setiap program disusun untuk membangun fondasi teknik yang kuat, daya tahan, serta mental juara."
      },
      programs: [
        {
          title: "Latihan rutin dengan pelatih profesional",
          desc: "Sesi terjadwal dengan fokus teknik, footwork, strategi, dan fisik."
        },
        {
          title: "Turnamen internal dan eksternal",
          desc: "Uji progres atlet melalui kompetisi yang terukur dan menantang."
        },
        {
          title: "Pembinaan atlet muda berbakat",
          desc: "Program pondasi untuk membangun mental juara dan sportivitas sejak dini."
        },
        {
          title: "Evaluasi performa terstruktur",
          desc: "Monitoring latihan dan target perkembangan yang jelas untuk setiap atlet."
        }
      ],
      gallery: {
        title: "Galeri Kegiatan",
        desc: "Cuplikan aktivitas latihan, sparring, dan momen kebersamaan di PRADA BC.",
        images: [
          "Dokumentasi kegiatan latihan PRADA BC",
          "Kegiatan sparring dan pengembangan atlet PRADA BC",
          "Sesi latihan teknik dan footwork PRADA BC",
          "Kegiatan pembinaan atlet muda PRADA BC",
          "Suasana latihan dan kebersamaan PRADA BC",
          "Kegiatan turnamen internal PRADA BC"
        ]
      }
    },`;

dictContent = dictContent.replace('footer: {', enProgram + '\n    footer: {');
// Wait, I need to make sure I inject the ID version to the right place.
// ID is after `id: {`
dictContent = dictContent.replace('      clubDesc: "Klub badminton premium', idProgram + '\n    footer: {\n      clubDesc: "Klub badminton premium');
fs.writeFileSync('app/i18n/dictionaries.ts', dictContent, 'utf8');

// 2. Create ProgramClient.tsx
const clientContent = `"use client";

import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626721105368-a69248e93b32?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
];

export default function ProgramClient() {
  const { dict } = useLanguage();
  const p = dict.programPage;

  return (
    <div>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                {p.mainProgram.title}
              </h2>
              <p className="max-w-prose text-sm leading-relaxed text-snow/80 sm:text-base lg:leading-8">
                {p.mainProgram.desc}
              </p>
              <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5">
                {p.programs.map((prog, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8"
                  >
                    <div className="text-base sm:text-lg font-semibold text-snow">
                      {prog.title}
                    </div>
                    <div className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                      {prog.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/12 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-snow">
                  {p.gallery.title}
                </h2>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                  {p.gallery.desc}
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                {GALLERY_IMAGES.map((src, idx) => (
                  <figure
                    key={idx}
                    className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/60"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={src}
                        alt={p.gallery.images[idx]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-snow/5 mix-blend-multiply pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                    </div>
                    <figcaption className="relative border-t border-border px-5 py-4 text-xs sm:text-sm font-medium text-snow/85 leading-relaxed bg-surface-2 z-10">
                      {p.gallery.images[idx]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
`;
fs.writeFileSync('app/program/ProgramClient.tsx', clientContent, 'utf8');

// 3. Update page.tsx
let pageContent = fs.readFileSync('app/program/page.tsx', 'utf8');
pageContent = pageContent.replace('import Container from "@/app/_components/Container";\nimport PageHero from "@/app/_components/PageHero";', 'import ProgramClient from "./ProgramClient";');
pageContent = pageContent.replace(/const PROGRAMS = \[[\s\S]*\}\n/m, `export default function ProgramPage() {\n  return <ProgramClient />;\n}\n`);
fs.writeFileSync('app/program/page.tsx', pageContent, 'utf8');
console.log('Processed program/page.tsx');
