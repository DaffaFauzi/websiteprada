import type { Metadata } from "next";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Testimoni dari atlet, orang tua, dan mitra tentang pengalaman berlatih dan berkolaborasi bersama PRADA BC.",
  keywords: [
    "testimoni PRADA BC",
    "review klub badminton",
    "pembinaan atlet Surabaya",
    "latihan badminton",
  ],
  openGraph: {
    title: "Testimoni PRADA BC",
    description:
      "Kutipan dari atlet, orang tua, dan mitra tentang PRADA BC sebagai klub yang profesional dan suportif.",
    url: "/testimoni",
  },
};

export default function TestimoniPage() {
  return (
    <div>
      <PageHero
        eyebrow="Testimoni"
        title="Cerita nyata dari komunitas PRADA BC"
        subtitle="Kutipan dari atlet, orang tua, dan mitra yang merasakan dampak pembinaan dan budaya profesional PRADA BC."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <TestimonialsCarousel />
        </Container>
      </section>
    </div>
  );
}

