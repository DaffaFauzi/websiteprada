"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function TestimoniPageClient() {
  const { dict } = useLanguage();
  const { testimoniPage: p } = dict;

  return (
    <div>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <TestimonialsCarousel />
        </Container>
      </section>
    </div>
  );
}
