"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function TentangPageClient() {
  const { dict } = useLanguage();
  const { tentangPage: p } = dict;

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
            <article className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                {p.sejarahTitle}
              </h2>
              <p className="max-w-prose text-sm leading-relaxed text-snow/80 sm:text-base lg:leading-8">
                {p.sejarahDesc}
              </p>
              <div className="mt-6 rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                  {p.nilaiUtama}
                </div>
                <div className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-3">
                  {p.nilai.map((n) => (
                    <div key={n} className="flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-ink/40 px-4 py-3 text-sm font-semibold text-snow">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{p.visi}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                    {p.visiDesc}
                  </p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-snow">{p.misi}</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                    {p.misiDesc}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/15 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-snow">
                  {p.statistik}
                </h3>
                <dl className="mt-5 grid gap-4 sm:gap-5 sm:grid-cols-3">
                  {p.statItems.map((item) => (
                    <div key={item.label} className="flex flex-col items-center justify-center sm:items-start sm:justify-start rounded-xl border border-border bg-ink/35 p-5 sm:p-6">
                      <dt className="text-[10px] sm:text-[11px] uppercase tracking-wider text-snow/70">
                        {item.label}
                      </dt>
                      <dd className="mt-1 sm:mt-2 text-2xl sm:text-xl font-bold text-snow">
                        {item.value} <span className="text-sm font-medium text-snow/70">{item.unit}</span>
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
