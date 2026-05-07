import type { Metadata } from "next";
import TentangPageClient from "./TentangPageClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal PRADA BC (Perkasa Ardana Badminton Club): sejarah, visi, misi, nilai, dan statistik pembinaan atlet di Indonesia.",
  keywords: [
    "tentang PRADA BC",
    "klub badminton Indonesia",
    "visi misi klub bulutangkis",
    "pembinaan atlet",
    "Ardana Perkasa Group",
  ],
  openGraph: {
    title: "Tentang PRADA BC",
    description:
      "Sejarah singkat, visi misi, nilai, dan statistik PRADA BC sebagai klub badminton premium di Indonesia.",
    url: "/tentang",
  },
};

export default function TentangPage() {
  return <TentangPageClient />;
}
