import type { Metadata } from "next";
import TestimoniPageClient from "./TestimoniPageClient";

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
  return <TestimoniPageClient />;
}
