import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";

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

const ACHIEVEMENTS = [
  {
    title: "Juara 1 Kejuaraan Kota Surabaya",
    meta: "Kategori Ganda Putra • 2024",
  },
  {
    title: "Finalis Kejuaraan Provinsi Jawa Timur",
    meta: "Kategori Tunggal Putri • 2023",
  },
  {
    title: "Medali Perunggu Kejuaraan Nasional",
    meta: "Kategori Beregu • 2022",
  },
  {
    title: "Top 8 Turnamen Internasional Junior",
    meta: "Kategori Ganda Campuran • 2021",
  },
];

const ATHLETES = [
  { name: "Atlet A", focus: "Tunggal Putra", highlight: "Kecepatan & konsistensi" },
  { name: "Atlet B", focus: "Ganda Putri", highlight: "Net play & koordinasi" },
  { name: "Atlet C", focus: "Ganda Campuran", highlight: "Strategi & variasi" },
];

const AWARDS = [
  { title: "Sertifikat Pembinaan Atlet", desc: "Standar program dan evaluasi." },
  { title: "Penghargaan Klub Berprestasi", desc: "Kontribusi di kompetisi." },
  { title: "Apresiasi Mitra & Sponsor", desc: "Kolaborasi berkelanjutan." },
];

export default function PrestasiPage() {
  return (
    <div>
      <PageHero
        eyebrow="Prestasi"
        title="Konsistensi yang menghasilkan kemenangan"
        subtitle='PRADA BC telah menorehkan berbagai prestasi di tingkat lokal, nasional, hingga internasional.'
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                Daftar Kejuaraan
              </h2>
              <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5">
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base sm:text-lg font-semibold text-snow">
                          {a.title}
                        </div>
                        <div className="mt-1 sm:mt-2 text-sm text-snow/75">{a.meta}</div>
                      </div>
                      <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-gold/15 text-gold shadow-[inset_0_0_0_1px_rgba(255,215,0,0.35)] shrink-0">
                        <span className="text-sm sm:text-base font-semibold">#</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/14 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold text-snow">
                  Atlet Berprestasi
                </h2>
                <div className="mt-4 sm:mt-5 grid gap-4 sm:gap-5">
                  {ATHLETES.map((a) => (
                    <div
                      key={a.name}
                      className="rounded-2xl sm:rounded-3xl border border-border bg-ink/35 p-4 sm:p-5"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-surface/60 shrink-0">
                          <Image
                            src="/globe.svg"
                            alt={`Foto ${a.name} - atlet PRADA BC`}
                            width={22}
                            height={22}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-semibold text-snow">
                            {a.name}
                          </div>
                          <div className="mt-0.5 text-xs sm:text-sm text-snow/70">{a.focus}</div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-snow/75">
                        {a.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold text-snow">
                  Sertifikat & Penghargaan
                </h2>
                <div className="mt-4 sm:mt-5 grid gap-3 sm:gap-4">
                  {AWARDS.map((a) => (
                    <div
                      key={a.title}
                      className="rounded-xl sm:rounded-2xl border border-border bg-ink/30 px-4 py-3 sm:px-5 sm:py-4"
                    >
                      <div className="text-sm sm:text-base font-semibold text-snow">
                        {a.title}
                      </div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-snow/75">{a.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

