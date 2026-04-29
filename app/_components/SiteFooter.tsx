import Link from "next/link";
import LogoMark from "@/app/_components/LogoMark";
import Container from "@/app/_components/Container";

const FOOTER_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/program", label: "Program & Kegiatan" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/organisasi", label: "Organisasi" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-2">
                <LogoMark className="h-full w-full" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-wide text-snow">
                  PRADA BC
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-snow/50">
                  Surabaya • Ardana Perkasa
                </div>
              </div>
            </div>
            <p className="max-w-prose text-sm leading-relaxed text-snow/80 sm:max-w-md sm:leading-6">
              Klub badminton premium di bawah Ardana Perkasa Group. Fokus pada
              pembinaan atlet, program latihan terstruktur, dan prestasi yang
              menginspirasi.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-snow">Navigasi</div>
            <nav className="grid gap-3 text-sm" aria-label="Navigasi footer">
              {FOOTER_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-snow/80 hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 py-1 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-snow">Media Sosial</div>
            <div className="grid gap-3 text-sm text-snow/80">
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 py-1 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 py-1 transition-colors"
              >
                YouTube
              </a>
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 py-1 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:pt-8 text-xs text-snow/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="order-2 sm:order-1 text-center sm:text-left">
            © {new Date().getFullYear()} PRADA BC. Seluruh hak cipta dilindungi.
          </div>
          <div className="order-1 sm:order-2 flex items-center justify-center sm:justify-end gap-2">
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Empowering Badminton Excellence
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
