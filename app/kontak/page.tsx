import type { Metadata } from "next";
import KontakClient from "./KontakClient";

export const metadata: Metadata = {
  title: "Kontak | PRADA BC",
  description:
    "Hubungi PRADA BC (Perkasa Ardana Badminton Club) di Indonesia untuk bergabung atau berkolaborasi. Tersedia telepon, email, jam operasional, dan formulir kontak.",
  keywords: [
    "kontak PRADA BC",
    "daftar klub badminton Indonesia",
    "kerja sama badminton",
  ],
  openGraph: {
    title: "Kontak PRADA BC",
    description:
      "Hubungi kami untuk bergabung atau berkolaborasi. PRADA BC — Indonesia.",
    url: "/kontak",
  },
};

export default function KontakPage() {
  return <KontakClient />;
}


