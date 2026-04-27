import type { Metadata } from "next";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import ContactForm from "@/app/kontak/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PRADA BC (Perkasa Ardana Badminton Club) di Surabaya untuk bergabung atau berkolaborasi. Tersedia telepon, email, jam operasional, dan formulir kontak.",
  keywords: [
    "kontak PRADA BC",
    "alamat PRADA BC Surabaya",
    "daftar klub badminton Surabaya",
    "kerja sama badminton",
  ],
  openGraph: {
    title: "Kontak PRADA BC",
    description:
      "Hubungi kami untuk bergabung atau berkolaborasi. PRADA BC — Surabaya.",
    url: "/kontak",
  },
};

export default function KontakPage() {
  return (
    <div>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi kami untuk bergabung atau berkolaborasi"
        subtitle="Kami terbuka untuk atlet baru, orang tua, serta mitra yang ingin mendukung pembinaan dan prestasi PRADA BC."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-gold/12 via-surface/60 to-surface-2/60 p-6">
                <h2 className="text-xl font-semibold tracking-tight text-snow">
                  Informasi Kontak
                </h2>
                <p className="mt-2 text-sm leading-7 text-snow/80">
                  Kontak di bawah dapat disesuaikan dengan informasi resmi PRADA
                  BC.
                </p>
                <dl className="mt-5 grid gap-4 text-sm">
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Alamat
                    </dt>
                    <dd className="mt-1 font-semibold text-snow">Surabaya</dd>
                  </div>
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Telepon
                    </dt>
                    <dd className="mt-1 font-semibold text-snow">
                      +62 000-0000-0000
                    </dd>
                  </div>
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Email
                    </dt>
                    <dd className="mt-1 font-semibold text-snow">
                      info@pradabc.id
                    </dd>
                  </div>
                  <div className="rounded-xl border border-border bg-ink/35 px-4 py-4">
                    <dt className="text-xs uppercase tracking-wider text-snow/70">
                      Jam Operasional
                    </dt>
                    <dd className="mt-1 font-semibold text-snow">
                      Senin–Minggu • 08.00–21.00
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-surface/60">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-snow">
                    Peta Lokasi (Surabaya)
                  </div>
                  <div className="mt-1 text-xs text-snow/70">
                    Ganti pin lokasi sesuai alamat resmi klub.
                  </div>
                </div>
                <div className="relative aspect-[16/11]">
                  <iframe
                    title="Peta lokasi PRADA BC di Surabaya"
                    src="https://www.google.com/maps?q=Surabaya&output=embed"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <h2 className="text-xl font-semibold tracking-tight text-snow">
                  Formulir Kontak
                </h2>
                <p className="mt-2 text-sm leading-7 text-snow/80">
                  Kirim pesan singkat. Anda juga dapat menuliskan tujuan: bergabung
                  latihan atau kolaborasi.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

