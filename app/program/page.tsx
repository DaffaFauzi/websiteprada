import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";

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

const PROGRAMS = [
  {
    title: "Latihan rutin dengan pelatih profesional",
    desc: "Sesi terjadwal dengan fokus teknik, footwork, strategi, dan fisik.",
  },
  {
    title: "Turnamen internal dan eksternal",
    desc: "Uji progres atlet melalui kompetisi yang terukur dan menantang.",
  },
  {
    title: "Pembinaan atlet muda berbakat",
    desc: "Program pondasi untuk membangun mental juara dan sportivitas sejak dini.",
  },
  {
    title: "Evaluasi performa terstruktur",
    desc: "Monitoring latihan dan target perkembangan yang jelas untuk setiap atlet.",
  },
];

const GALLERY = [
  { src: "/file.svg", alt: "Dokumentasi kegiatan latihan PRADA BC" },
  { src: "/globe.svg", alt: "Kegiatan sparring dan pengembangan atlet PRADA BC" },
  { src: "/window.svg", alt: "Sesi latihan teknik dan footwork PRADA BC" },
  { src: "/next.svg", alt: "Kegiatan pembinaan atlet muda PRADA BC" },
  { src: "/vercel.svg", alt: "Suasana latihan dan kebersamaan PRADA BC" },
  { src: "/file.svg", alt: "Kegiatan turnamen internal PRADA BC" },
];

export default function ProgramPage() {
  return (
    <div>
      <PageHero
        eyebrow="Program & Kegiatan"
        title="Pembinaan terstruktur untuk hasil maksimal"
        subtitle="PRADA BC menjalankan program latihan modern yang dirancang untuk mengembangkan kemampuan atlet secara menyeluruh."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-snow">
                Program Utama
              </h2>
              <p className="text-sm leading-7 text-snow/80 sm:text-base">
                Dari latihan rutin hingga kompetisi, setiap program disusun untuk
                membangun fondasi teknik yang kuat, daya tahan, serta mental
                juara.
              </p>
              <div className="grid gap-4">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-border bg-surface/60 p-6"
                  >
                    <div className="text-base font-semibold text-snow">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-snow/80">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-gold/12 via-surface/60 to-surface-2/60 p-6">
                <h2 className="text-xl font-semibold tracking-tight text-snow">
                  Galeri Kegiatan
                </h2>
                <p className="mt-2 text-sm leading-7 text-snow/80">
                  Cuplikan aktivitas latihan, sparring, dan momen kebersamaan di
                  PRADA BC.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {GALLERY.map((img, idx) => (
                  <figure
                    key={`${img.src}-${idx}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex aspect-[16/10] items-center justify-center p-8">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={120}
                        height={120}
                        className="opacity-90"
                      />
                    </div>
                    <figcaption className="border-t border-border px-4 py-3 text-xs text-snow/75">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

