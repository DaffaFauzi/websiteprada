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
  { src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop", alt: "Dokumentasi kegiatan latihan PRADA BC" },
  { src: "https://images.unsplash.com/photo-1626721105368-a69248e93b32?q=80&w=800&auto=format&fit=crop", alt: "Kegiatan sparring dan pengembangan atlet PRADA BC" },
  { src: "https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=800&auto=format&fit=crop", alt: "Sesi latihan teknik dan footwork PRADA BC" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", alt: "Kegiatan pembinaan atlet muda PRADA BC" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop", alt: "Suasana latihan dan kebersamaan PRADA BC" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", alt: "Kegiatan turnamen internal PRADA BC" },
];

export default function ProgramPage() {
  return (
    <div>
      <PageHero
        eyebrow="Program & Kegiatan"
        title="Pembinaan terstruktur untuk hasil maksimal"
        subtitle="PRADA BC menjalankan program latihan modern yang dirancang untuk mengembangkan kemampuan atlet secara menyeluruh."
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-snow">
                Program Utama
              </h2>
              <p className="max-w-prose text-sm leading-relaxed text-snow/80 sm:text-base lg:leading-8">
                Dari latihan rutin hingga kompetisi, setiap program disusun untuk
                membangun fondasi teknik yang kuat, daya tahan, serta mental
                juara.
              </p>
              <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/60 p-6 sm:p-8"
                  >
                    <div className="text-base sm:text-lg font-semibold text-snow">
                      {p.title}
                    </div>
                    <div className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/12 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-snow">
                  Galeri Kegiatan
                </h2>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-snow/80 sm:leading-7">
                  Cuplikan aktivitas latihan, sparring, dan momen kebersamaan di
                  PRADA BC.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                {GALLERY.map((img, idx) => (
                  <figure
                    key={`${img.src}-${idx}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/60"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      {/* Subtle dark overlay for premium feel */}
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
                      {/* Hover gold glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                    </div>
                    <figcaption className="relative border-t border-border px-5 py-4 text-xs sm:text-sm font-medium text-snow/85 leading-relaxed bg-[#111112] z-10">
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

