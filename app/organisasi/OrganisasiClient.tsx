"use client";

import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function OrganisasiClient() {
  const { dict } = useLanguage();
  const o = dict.organisasiPage;

  return (
    <div>
      <PageHero
        eyebrow={o.hero.eyebrow}
        title={o.hero.title}
        subtitle={o.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/14 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold text-snow">
                  {o.sidebar.title}
                </h2>
                <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-snow/80 sm:leading-7">
                  {o.sidebar.summary}
                </p>
                <div className="mt-5 sm:mt-6 rounded-2xl border border-border bg-ink/35 p-5 sm:p-6">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-snow/70">
                    {o.sidebar.focus}
                  </div>
                  <ul className="mt-3 sm:mt-4 space-y-3 text-sm text-snow/80">
                    {o.sidebar.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              {o.teams.map((team, tIdx) => (
                <section key={tIdx} className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-snow">
                    {team.name}
                  </h2>
                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    {team.members.map((m, mIdx) => (
                      <article
                        key={mIdx}
                        className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-7"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl sm:rounded-2xl bg-ink/35 shrink-0">
                            <Image
                              src="/window.svg"
                              alt={`Foto ${m.name} - ${team.name} PRADA BC`}
                              width={22}
                              height={22}
                              className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                          </div>
                          <div>
                            <div className="text-base sm:text-lg font-semibold text-snow">
                              {m.name}
                            </div>
                            <div className="mt-0.5 text-xs sm:text-sm text-snow/70">{m.role}</div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-snow/80 sm:leading-7">
                          {m.desc}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
