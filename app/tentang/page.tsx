import type { Metadata } from "next";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal PRADA BC (Perkasa Ardana Badminton Club): sejarah, visi, misi, nilai, dan statistik pembinaan atlet di Surabaya.",
  keywords: [
    "tentang PRADA BC",
    "klub badminton Surabaya",
    "visi misi klub bulutangkis",
    "pembinaan atlet",
    "Ardana Perkasa Group",
  ],
  openGraph: {
    title: "Tentang PRADA BC",
    description:
      "Sejarah singkat, visi misi, nilai, dan statistik PRADA BC sebagai klub badminton premium di Surabaya.",
    url: "/tentang",
  },
};

export default function TentangPage() {
  return (
    <div>
      <PageHero
        eyebrow="Tentang Kami"
        title="Klub badminton premium dari Surabaya"
        subtitle="PRADA BC (Perkasa Ardana Badminton Club) berada di bawah Ardana Perkasa Group dengan fokus pembinaan atlet, prestasi, dan sportivitas."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <article className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-snow">
                Sejarah Singkat
              </h2>
              <p className="text-sm leading-7 text-snow/80 sm:text-base">
                PRADA BC dibangun dari semangat pembinaan yang konsisten dan
                budaya latihan yang disiplin. Berawal sebagai komunitas atlet
                muda di Surabaya, PRADA BC berkembang menjadi klub yang dikenal
                luas karena program latihan terstruktur, dukungan manajemen yang
                solid, serta komitmen menghadirkan prestasi di berbagai level
                kompetisi.
              </p>
              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Nilai Utama
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-ink/40 px-4 py-3 text-sm font-semibold text-snow">
                    Sportivitas
                  </div>
                  <div className="rounded-xl border border-border bg-ink/40 px-4 py-3 text-sm font-semibold text-snow">
                    Prestasi
                  </div>
                  <div className="rounded-xl border border-border bg-ink/40 px-4 py-3 text-sm font-semibold text-snow">
                    Kebersamaan
                  </div>
                </div>
              </div>
            </article>

            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base font-semibold text-snow">Visi</h3>
                  <p className="mt-2 text-sm leading-7 text-snow/80">
                    Menjadi klub badminton unggulan di Indonesia.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/60 p-6">
                  <h3 className="text-base font-semibold text-snow">Misi</h3>
                  <p className="mt-2 text-sm leading-7 text-snow/80">
                    Mendorong prestasi dan sportivitas melalui pembinaan atlet.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-gold/15 via-surface/60 to-surface-2/60 p-6">
                <h3 className="text-base font-semibold text-snow">
                  Statistik Singkat
                </h3>
                <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Pengalaman
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-snow">
                      10+ tahun
                    </dd>
                  </div>
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Atlet
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-snow">
                      50+ orang
                    </dd>
                  </div>
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Semangat
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-snow">
                      24/7
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
