"use client";

import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function ProgramPageClient() {
  const { dict } = useLanguage();
  const { programPage: p } = dict;

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
                {p.programs.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8"
                  >
                    <div className="text-base sm:text-lg font-semibold text-snow">
                      {item.title}
                    </div>
                    <div className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                      {item.desc}
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
                {p.gallery.images.map((alt, idx) => {
                  const galleryImages = [
                    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1626721105368-a69248e93b32?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                  ];
                  return (
                    <figure
                      key={idx}
                      className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/60"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={galleryImages[idx]}
                          alt={alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-snow/5 mix-blend-multiply pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                      </div>
                      <figcaption className="relative border-t border-border px-5 py-4 text-xs sm:text-sm font-medium text-snow/85 leading-relaxed bg-surface-2 z-10">
                        {alt}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
