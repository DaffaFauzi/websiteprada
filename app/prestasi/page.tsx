import type { Metadata } from "next";
import PrestasiPageClient from "./PrestasiPageClient";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Prestasi PRADA BC di tingkat lokal, nasional, hingga internasional. Lihat daftar kejuaraan, atlet berprestasi, serta sertifikat dan penghargaan.",
  keywords: [
    "prestasi PRADA BC",
    "juara badminton",
    "kejuaraan badminton Surabaya",
    "atlet berprestasi",
    "sertifikat penghargaan",
  ],
  openGraph: {
    title: "Prestasi PRADA BC",
    description:
      "PRADA BC telah menorehkan berbagai prestasi di tingkat lokal, nasional, hingga internasional.",
    url: "/prestasi",
  },
};

export default function PrestasiPage() {
  return <PrestasiPageClient />;
}

