const fs = require('fs');

// 1. Update dictionaries.ts
let dictContent = fs.readFileSync('app/i18n/dictionaries.ts', 'utf8');

const enTentang = `
    tentangPage: {
      hero: {
        eyebrow: "About Us",
        title: "A premium badminton club from Surabaya",
        subtitle: "PRADA BC (Perkasa Ardana Badminton Club) operates under the Ardana Perkasa Group with a focus on athlete development, achievement, and sportsmanship."
      },
      sejarahTitle: "A Brief History",
      sejarahDesc: "PRADA BC was built on a spirit of consistent development and a disciplined training culture. Starting as a community of young athletes in Surabaya, PRADA BC has grown into a widely recognized club known for its structured training programs, solid management support, and a commitment to achieving excellence at various competition levels.",
      nilaiUtama: "Core Values",
      nilai: ["Sportsmanship", "Achievement", "Togetherness"],
      visi: "Vision",
      visiDesc: "To become a leading badminton club in Indonesia.",
      misi: "Mission",
      misiDesc: "Promoting achievement and sportsmanship through athlete development.",
      statistik: "Quick Statistics",
      statItems: [
        { label: "Experience", value: "10+", unit: "years" },
        { label: "Athletes", value: "50+", unit: "people" },
        { label: "Spirit", value: "24/7", unit: "" }
      ]
    },`;

const idTentang = `
    tentangPage: {
      hero: {
        eyebrow: "Tentang Kami",
        title: "Klub badminton premium dari Surabaya",
        subtitle: "PRADA BC (Perkasa Ardana Badminton Club) berada di bawah Ardana Perkasa Group dengan fokus pembinaan atlet, prestasi, dan sportivitas."
      },
      sejarahTitle: "Sejarah Singkat",
      sejarahDesc: "PRADA BC dibangun dari semangat pembinaan yang konsisten dan budaya latihan yang disiplin. Berawal sebagai komunitas atlet muda di Surabaya, PRADA BC berkembang menjadi klub yang dikenal luas karena program latihan terstruktur, dukungan manajemen yang solid, serta komitmen menghadirkan prestasi di berbagai level kompetisi.",
      nilaiUtama: "Nilai Utama",
      nilai: ["Sportivitas", "Prestasi", "Kebersamaan"],
      visi: "Visi",
      visiDesc: "Menjadi klub badminton unggulan di Indonesia.",
      misi: "Misi",
      misiDesc: "Mendorong prestasi dan sportivitas melalui pembinaan atlet.",
      statistik: "Statistik Singkat",
      statItems: [
        { label: "Pengalaman", value: "10+", unit: "tahun" },
        { label: "Atlet", value: "50+", unit: "orang" },
        { label: "Semangat", value: "24/7", unit: "" }
      ]
    },`;

dictContent = dictContent.replace('footer: {', enTentang + '\n    footer: {');
dictContent = dictContent.replace('      clubDesc: "Klub badminton premium', idTentang + '\n    footer: {\n      clubDesc: "Klub badminton premium');

fs.writeFileSync('app/i18n/dictionaries.ts', dictContent, 'utf8');

// 2. Create TentangClient.tsx
const clientContent = `"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function TentangClient() {
  const { dict } = useLanguage();
  const t = dict.tentangPage;

  return (
    <div>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
            <article className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                {t.sejarahTitle}
              </h2>
              <p className="max-w-prose text-sm leading-relaxed text-snow/80 sm:text-base lg:leading-8">
                {t.sejarahDesc}
              </p>
              <div className="mt-6 rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                  {t.nilaiUtama}
                </div>
                <div className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-3">
                  {t.nilai.map((n, i) => (
                    <div key={i} className="flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-ink/40 px-4 py-3 text-sm font-semibold text-snow text-center">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{t.visi}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                    {t.visiDesc}
                  </p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{t.misi}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                    {t.misiDesc}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/15 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-snow">
                  {t.statistik}
                </h3>
                <dl className="mt-5 grid gap-4 sm:gap-5 sm:grid-cols-3">
                  {t.statItems.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center sm:items-start sm:justify-start rounded-xl border border-border bg-ink/35 p-5 sm:p-6">
                      <dt className="text-[10px] sm:text-[11px] uppercase tracking-wider text-snow/70">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 sm:mt-2 text-2xl sm:text-xl font-bold text-snow">
                        {stat.value} {stat.unit && <span className="text-sm font-medium text-snow/70">{stat.unit}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
`;
fs.writeFileSync('app/tentang/TentangClient.tsx', clientContent, 'utf8');

// 3. Update page.tsx
let pageContent = fs.readFileSync('app/tentang/page.tsx', 'utf8');
pageContent = pageContent.replace('import Container from "@/app/_components/Container";\nimport PageHero from "@/app/_components/PageHero";', 'import TentangClient from "./TentangClient";');
pageContent = pageContent.replace(/export default function TentangPage\(\) \{[\s\S]*\}\n/, `export default function TentangPage() {\n  return <TentangClient />;\n}\n`);
fs.writeFileSync('app/tentang/page.tsx', pageContent, 'utf8');
console.log('Processed tentang/page.tsx');
