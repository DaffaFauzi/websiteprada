import type { Metadata } from "next";
import OrganisasiPageClient from "./OrganisasiPageClient";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
  description:
    "Struktur organisasi PRADA BC, hubungan dengan Ardana Perkasa Group, serta profil tim pelatih dan manajemen yang mendukung pembinaan atlet.",
  keywords: [
    "struktur organisasi PRADA BC",
    "manajemen klub badminton",
    "pelatih badminton",
    "Ardana Perkasa Group",
  ],
  openGraph: {
    title: "Struktur Organisasi PRADA BC",
    description:
      "PRADA BC didukung oleh tim manajemen and pelatih berpengalaman yang berkomitmen membangun generasi atlet masa depan.",
    url: "/organisasi",
  },
};

export default function OrganisasiPage() {
  return <OrganisasiPageClient />;
}

