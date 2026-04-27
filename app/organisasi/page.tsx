import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";

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
      "PRADA BC didukung oleh tim manajemen dan pelatih berpengalaman yang berkomitmen membangun generasi atlet masa depan.",
    url: "/organisasi",
  },
};

const TEAMS = [
  {
    name: "Manajemen Utama",
    members: [
      {
        name: "Ketua Klub",
        role: "Leadership",
        desc: "Mengawal arah klub, budaya, dan standar pembinaan.",
      },
      {
        name: "Manajer Operasional",
        role: "Operations",
        desc: "Mengelola jadwal, fasilitas, dan kolaborasi kegiatan.",
      },
      {
        name: "Koordinator Atlet",
        role: "Athlete Support",
        desc: "Pendampingan perkembangan atlet dan komunikasi orang tua.",
      },
    ],
  },
  {
    name: "Tim Pelatih",
    members: [
      {
        name: "Pelatih Kepala",
        role: "Head Coach",
        desc: "Program latihan terstruktur untuk performa kompetitif.",
      },
      {
        name: "Pelatih Teknik",
        role: "Technical Coach",
        desc: "Fokus teknik pukulan, footwork, dan perbaikan detail.",
      },
      {
        name: "Pelatih Fisik",
        role: "Conditioning",
        desc: "Daya tahan, kekuatan, dan pencegahan cedera.",
      },
    ],
  },
];

export default function OrganisasiPage() {
  return (
    <div>
      <PageHero
        eyebrow="Struktur Organisasi"
        title="Didukung manajemen solid dan pelatih berpengalaman"
        subtitle='PRADA BC didukung oleh tim manajemen dan pelatih berpengalaman yang berkomitmen membangun generasi atlet masa depan.'
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-gold/14 via-surface/60 to-surface-2/60 p-6">
                <h2 className="text-base font-semibold text-snow">
                  Ardana Perkasa Group
                </h2>
                <p className="mt-3 text-sm leading-7 text-snow/80">
                  PRADA BC berada di bawah Ardana Perkasa Group sebagai wujud
                  komitmen membangun ekosistem olahraga yang sehat, modern, dan
                  berkelanjutan.
                </p>
                <div className="mt-5 rounded-2xl border border-border bg-ink/35 p-4">
                  <div className="text-xs uppercase tracking-wider text-snow/70">
                    Fokus Dukungan
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-snow/80">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      Fasilitas dan operasional klub
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      Program pembinaan dan kompetisi
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      Kolaborasi dan kemitraan
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {TEAMS.map((team) => (
                <section key={team.name} className="space-y-4">
                  <h2 className="text-xl font-semibold tracking-tight text-snow">
                    {team.name}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {team.members.map((m) => (
                      <article
                        key={m.name}
                        className="rounded-2xl border border-border bg-surface/60 p-6"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink/35">
                            <Image
                              src="/window.svg"
                              alt={`Foto ${m.name} - ${team.name} PRADA BC`}
                              width={22}
                              height={22}
                            />
                          </div>
                          <div>
                            <div className="text-base font-semibold text-snow">
                              {m.name}
                            </div>
                            <div className="text-xs text-snow/70">{m.role}</div>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-snow/80">
                          {m.desc}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

