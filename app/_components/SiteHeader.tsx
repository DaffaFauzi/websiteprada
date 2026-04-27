"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import LogoMark from "@/app/_components/LogoMark";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/program", label: "Program & Kegiatan" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/organisasi", label: "Organisasi" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(() => NAV_ITEMS, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/75 backdrop-blur supports-[backdrop-filter]:bg-ink/55">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            aria-label="Beranda PRADA BC"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 items-center justify-center transition-transform group-hover:scale-110">
              <LogoMark className="h-full w-auto" />
            </div>
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-black uppercase tracking-tighter text-snow group-hover:text-gold transition-colors italic">
                PRADA BC
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/60">
                Surabaya
              </div>
            </div>
            <span className="sr-only">PRADA BC</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                    active
                      ? "bg-gold/12 text-gold"
                      : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface/70 px-3 text-sm font-semibold text-snow hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "lg:hidden",
          isOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="border-t border-border bg-ink">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <nav className="grid gap-1" aria-label="Navigasi mobile">
              {items.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                      active
                        ? "bg-gold/12 text-gold"
                        : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                    ].join(" ")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
