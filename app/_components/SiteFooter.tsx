import Link from "next/link";
import LogoMark from "@/app/_components/LogoMark";

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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <LogoMark className="h-full w-full" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-wide text-snow">
                  PRADA BC
                </div>
                <div className="text-xs uppercase tracking-wider text-snow/50">
                  Surabaya • Ardana Perkasa
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-6 text-snow/80">
              Klub badminton premium di bawah Ardana Perkasa Group. Fokus pada
              pembinaan atlet, program latihan terstruktur, dan prestasi yang
              menginspirasi.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-snow">Navigasi</div>
            <nav className="grid gap-2 text-sm" aria-label="Navigasi footer">
              {FOOTER_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-snow/80 hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-snow">Media Sosial</div>
            <div className="grid gap-2 text-sm text-snow/80">
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                YouTube
              </a>
              <a
                href="#"
                className="hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-snow/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} PRADA BC. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Empowering Badminton Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
