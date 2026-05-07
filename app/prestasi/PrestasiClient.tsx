"use client";

import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function PrestasiClient() {
  const { dict } = useLanguage();
  const p = dict.prestasiPage;

  return (
    <div>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                {p.championships.title}
              </h2>
              <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5">
                {p.championships.items.map((a, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base sm:text-lg font-semibold text-snow">
                          {a.title}
                        </div>
                        <div className="mt-1 sm:mt-2 text-sm text-snow/75">{a.meta}</div>
                      </div>
                      <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-gold/15 text-gold shadow-[inset_0_0_0_1px_rgba(255,215,0,0.35)] shrink-0">
                        <span className="text-sm sm:text-base font-semibold">#</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/14 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold text-snow">
                  {p.athletes.title}
                </h2>
                <div className="mt-4 sm:mt-5 grid gap-4 sm:gap-5">
                  {p.athletes.items.map((a, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl sm:rounded-3xl border border-border bg-ink/35 p-4 sm:p-5"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-surface/60 shrink-0">
                          <Image
                            src="/globe.svg"
                            alt={a.name}
                            width={22}
                            height={22}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-semibold text-snow">
                            {a.name}
                          </div>
                          <div className="mt-0.5 text-xs sm:text-sm text-snow/70">{a.focus}</div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-snow/75">
                        {a.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold text-snow">
                  {p.awards.title}
                </h2>
                <div className="mt-4 sm:mt-5 grid gap-3 sm:gap-4">
                  {p.awards.items.map((a, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl sm:rounded-2xl border border-border bg-ink/30 px-4 py-3 sm:px-5 sm:py-4"
                    >
                      <div className="text-sm sm:text-base font-semibold text-snow">
                        {a.title}
                      </div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-snow/75">{a.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
