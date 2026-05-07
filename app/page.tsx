import type { Metadata } from "next";
import HomePageClient from "@/app/_components/HomePageClient";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "PRADA BC adalah klub badminton asal Surabaya di bawah Ardana Perkasa Group, dikenal luas dengan prestasi dan pembinaan atlet unggulan.",
  keywords: [
    "PRADA BC",
    "klub badminton Surabaya",
    "Perkasa Ardana Badminton Club",
    "pembinaan atlet",
    "prestasi badminton",
  ],
  openGraph: {
    title: "PRADA BC — Empowering Badminton Excellence",
    description:
      "PRADA BC adalah klub badminton asal Surabaya di bawah Ardana Perkasa Group, dikenal luas dengan prestasi dan pembinaan atlet unggulan.",
    url: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
