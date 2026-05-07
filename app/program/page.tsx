import type { Metadata } from "next";
import ProgramPageClient from "./ProgramPageClient";

export const metadata: Metadata = {
  title: "Program & Kegiatan",
  description:
    "Program latihan PRADA BC: latihan rutin dengan pelatih profesional, turnamen internal dan eksternal, pembinaan atlet muda, serta galeri kegiatan.",
  keywords: [
    "program latihan badminton",
    "kegiatan PRADA BC",
    "pelatih badminton Surabaya",
    "turnamen badminton",
    "pembinaan atlet muda",
  ],
  openGraph: {
    title: "Program & Kegiatan PRADA BC",
    description:
      "Latihan rutin dengan pelatih profesional, turnamen, pembinaan atlet muda, dan galeri kegiatan PRADA BC.",
    url: "/program",
  },
};

export default function ProgramPage() {
  return <ProgramPageClient />;
}

