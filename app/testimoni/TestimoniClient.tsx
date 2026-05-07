"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function TestimoniClient() {
  const { dict } = useLanguage();
  const t = dict.testimoniPage;

  return (
    <div>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <TestimonialsCarousel />
        </Container>
      </section>
    </div>
  );
}
